interface AnchorProps {
    style: string
    link: string
    
    data: {
        text: string
        icon: React.ReactNode
    }
}

export default function Anchor( data: AnchorProps ) {
    return (
        <a href={ data.link } className={ data.style }>
            { data.data.icon }
            { data.data.text }
        </a>
    )
}