// import "@/styles/normalize.css"

const ImageCard = ({
  src,
  title,
  desc,
}: {
  src: string
  title: string
  desc: string
}) => {
  return (
    <div
      className="relative border border-[var(--border)] rounded-lg overflow-hidden"
    >
      <img
        src={src}
        alt={title}
      />
      <div className="p-4 m-0">
        <h2 className="text-xl">{title}</h2>
        {desc && (<p className="mt-4">{desc}</p>)}
      </div>
    </div>
  )
}

export default ImageCard
