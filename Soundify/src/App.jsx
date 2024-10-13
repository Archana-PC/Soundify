import Display from "./components/Display"
import Player from "./components/Player"
import Sidebar from "./components/Sidebar"




function App() {
  return (
    <>
      <div className='bg-black h-screen text-white'>
        <div className='h-[85%] flex'>
           <Sidebar />
           <Display/>
        </div>
        <Player/>
      </div>
    </>
  )
}

export default App
