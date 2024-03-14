import profile from '../assets/images/profile.png'

export default function Header() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className='flex justify-between items-center my-2 py-2 border-b '> 
        <h1 className="text-3xl font-semibold">Knowledge Cafe</h1>
        <img src={profile} alt="" />
      </div>
    </div>
  )
}
