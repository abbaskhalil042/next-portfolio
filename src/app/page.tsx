import Hero from "./components/Hero"
import Sidebar from "./components/Sidebar"

const page = () => {
  return (

    <main className="flex">
      <div className="w-1/6 text-white h-screen "><Sidebar /></div>
      <div className="w-5/6 bg-blue-500 h-screen">
    
    <Hero />
    
    </div>
    </main>
  )
}
export default page