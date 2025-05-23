const FileCard = ({
  name,
  size,
  url
}: {
  name: string
  size: string
  url: string
}) => {


  return (
    <div className="simple-border p-6 flex justify-between items-center rounded-[1px] max-w-prose">
      <div className="flex">
        <div className="bg-gray-6 p-2 rounded mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--color-gray-2)" viewBox="0 0 256 256"><path d="M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Z"></path></svg>
        </div>
        <div className="m-0">
          <p>{name}</p>
          <p className="text-sm text-gray-3 m-0">{size}</p>
        </div>
      </div>
      <a
        href="/file/freesia-template.zip"
        target="_blank"
        className="p-2 simple-border rounded hover:bg-gray-7"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--color-gray-2)" viewBox="0 0 256 256"><path d="M228,144v64a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V144a12,12,0,0,1,24,0v52H204V144a12,12,0,0,1,24,0Zm-108.49,8.49a12,12,0,0,0,17,0l40-40a12,12,0,0,0-17-17L140,115V32a12,12,0,0,0-24,0v83L96.49,95.51a12,12,0,0,0-17,17Z"></path></svg>
      </a>
    </div>
  )
}

export default FileCard
