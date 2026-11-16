// Two-tone headings in the SecurePress style ("About Our Company"): part of the title is
// set in brass. Pass `accent` to choose the words; otherwise the opening word is used
// (the first two words when the first is very short, so "A" or "How" never stands alone).

function defaultAccent(text) {
  const words = text.split(' ')
  if (words.length < 3) return words[0]
  return words[0].length <= 3 ? words.slice(0, 2).join(' ') : words[0]
}

export function TwoTone({ text, accent }) {
  const part = accent && text.includes(accent) ? accent : defaultAccent(text)
  const at = text.indexOf(part)
  return (
    <>
      {text.slice(0, at)}
      <span className="accent">{part}</span>
      {text.slice(at + part.length)}
    </>
  )
}

// Section heading block: two-tone title, optional intro line(s) and extra content.
export default function SectionTitle({
  title,
  accent,
  intro,
  as: Tag = 'h2',
  align = 'center',
  light = false,
  id,
  className = '',
  children,
}) {
  return (
    <div className={`stitle stitle--${align}${light ? ' stitle--light' : ''} ${className}`}>
      <Tag className="stitle__h" id={id}>
        <TwoTone text={title} accent={accent} />
      </Tag>
      {intro && <p className="stitle__intro">{intro}</p>}
      {children}
    </div>
  )
}
