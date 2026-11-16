// Generated service imagery has smaller exports for cards and mobile screens.
// Documentary photos retain their original source.
export default function SiteImage({ src, sizes = '(max-width: 700px) 100vw, 50vw', ...props }) {
  const responsive = src?.startsWith('/images/site/') && src.endsWith('.jpg')
  const base = responsive ? src.slice(0, -4) : null
  return (
    <img
      src={src}
      srcSet={responsive ? `${base}-640.jpg 640w, ${base}-1000.jpg 1000w, ${src} 1600w` : undefined}
      sizes={responsive ? sizes : undefined}
      decoding="async"
      {...props}
    />
  )
}
