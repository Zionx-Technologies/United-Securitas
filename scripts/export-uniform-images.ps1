param([Parameter(Mandatory=$true)][string]$Manifest)

Add-Type -AssemblyName System.Drawing
$workspace = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$items = Get-Content -LiteralPath $Manifest -Raw | ConvertFrom-Json
$encoder = [Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq 'image/jpeg'
$quality = New-Object Drawing.Imaging.EncoderParameters 1
$quality.Param[0] = New-Object Drawing.Imaging.EncoderParameter ([Drawing.Imaging.Encoder]::Quality),([long]90)
foreach ($item in $items) {
  $source = [Drawing.Image]::FromFile($item.path)
  try {
    $widths = if ($item.name.StartsWith('site/')) { @(640, 1000, 1600) } else { @($source.Width) }
    foreach ($width in $widths) {
      if ($source.Width -lt $width) { throw "Source too small: $($item.name)" }
      $height = [int][Math]::Round($source.Height * $width / $source.Width)
      $bitmap = New-Object Drawing.Bitmap $width,$height
      $graphics = [Drawing.Graphics]::FromImage($bitmap)
      try {
        $graphics.InterpolationMode = [Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.PixelOffsetMode = [Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.DrawImage($source, 0, 0, $width, $height)
        $suffix = if ($item.name.StartsWith('site/') -and $width -ne 1600) { "-$width" } else { '' }
        $destination = Join-Path $workspace "public/images/$($item.name)$suffix.jpg"
        $bitmap.Save($destination, $encoder, $quality)
      } finally { $graphics.Dispose(); $bitmap.Dispose() }
    }
    Write-Output "Exported $($item.name)"
  } finally { $source.Dispose() }
}
$quality.Dispose()
