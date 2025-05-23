// import "@/styles/normalize.css"

const ImageCard = ({
  src,
  title,
  desc,
  href,
}: {
  src: string
  title: string
  desc: string
  href: string
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
        <h2 className="text-xl mb-4">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default ImageCard
