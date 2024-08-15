interface AnchorProps {
  style: string
  link: string

  data: {
    text: string
    icon: React.ReactNode
  }
}

export default function Anchor(anchor: AnchorProps) {
  return (
    <a href={anchor.link} className={anchor.style}>
      {anchor.data.icon}
      {anchor.data.text}
    </a>
  )
}