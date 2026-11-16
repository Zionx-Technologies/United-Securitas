import SiteImage from './SiteImage'

// Photo set against an offset brass block, as in the template's "About Our Company"
// section. `side="left"` puts the block on the other side (for image-left layouts).
// `patch` adds the shield logo, like a uniform patch, on the photo's bottom-right corner.
export default function Frame({ src, alt, side = 'right', badge, patch, position, className = '', ...rest }) {
  return (
    <figure className={`frame frame--${side} ${className}`}>
      <SiteImage src={src} alt={alt} loading="lazy" style={position ? { objectPosition: position } : undefined} {...rest} />
      {badge && <figcaption className="frame__badge">{badge}</figcaption>}
      {patch && (
        <img className="frame__patch" src="/logo.png" alt="" aria-hidden="true" width="201" height="265" loading="lazy" />
      )}
    </figure>
  )
}
