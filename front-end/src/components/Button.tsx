interface ButtonProps {
  data: {
    style: string
    name: string
    image?: string
  }
}

export default function Button({ data }: ButtonProps) {
  return (
    <button type="submit" className={data.style}>
      {
        data.image ? (
          <img src={data.image} alt="Google" className="w-6 h-6" />
        ) : null
      }
      {data.name}
    </button>
  )
}