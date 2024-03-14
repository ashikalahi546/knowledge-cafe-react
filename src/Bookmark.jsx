

export default function Bookmark({bookmark}) {
    const {title} = bookmark 
  return (
    <div>
      <h3 className="bg-gray-200 p-5 rounded-lg text-center my-5 text-sm">{title}</h3>
    </div>
  )
}
