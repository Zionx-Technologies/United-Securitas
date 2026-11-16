param([Parameter(Mandatory=$true)][string]$Manifest)

# Re-encode the generated masters as responsive JPEGs; never upscale a source.
Add-Type -AssemblyName System.Drawing
$items = Get-Content -LiteralPath $Manifest -Raw | ConvertFrom-Json
$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq 'image/jpeg'
$quality = New-Object System.Drawing.Imaging.EncoderParameters 1
$quality.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality),([long]90)
$destination = Join-Path $PSScriptRoot '../public/images/site'
foreach ($item in $items) {
  $source = [System.Drawing.Image]::FromFile($item.path)
  try {
    foreach ($width in @(640, 1000, 1600)) {
      if ($source.Width -lt $width) { throw "Source too small: $($item.name)" }
      $height = [int][Math]::Round($source.Height * $width / $source.Width)
      $bitmap = New-Object System.Drawing.Bitmap $width,$height
      $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
      try {
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.DrawImage($source, 0, 0, $width, $height)
        $suffix = if ($width -eq 1600) { '' } else { "-$width" }
        $bitmap.Save((Join-Path $destination "$($item.name)$suffix.jpg"), $encoder, $quality)
      } finally { $graphics.Dispose(); $bitmap.Dispose() }
    }
    Write-Output "Exported $($item.name): 640, 1000, 1600 px"
  } finally { $source.Dispose() }
}
$quality.Dispose()
