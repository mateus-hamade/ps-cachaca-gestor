interface TittleProps {
  name: string
  icon: React.ReactNode
}

export default function Tittle(data: TittleProps) {
  return (
    <div className="flex items-center justify-center md:gap-2">
      <h1 className="text-sm md:text-xl font-medium text-primary">
        {data.name}
      </h1>
      {data.icon}
    </div>
  )
}