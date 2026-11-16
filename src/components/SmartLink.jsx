import { Link } from 'react-router-dom'

// One link component for every destination type used in the content files:
// '/path' and '/#section' go through the router; '#anchor', tel: and mailto: stay plain.
export default function SmartLink({ to, children, ...rest }) {
  if (!to || to.startsWith('#') || /^(tel:|mailto:|https?:)/.test(to)) {
    return (
      <a href={to} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  )
}
