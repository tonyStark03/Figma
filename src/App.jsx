
import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Frame from './Frame';


function App() {
  return (
    <>
    <div className='flex'>
      <div className="flex flex-col w-56 h-screen bg-[#1E2640] text-white px-2.5 py-4 gap-6  "><Sidebar/></div>
      <div className="flex flex-col w-screen gap-6 ">
        <div className="flex  h-16 px-8 py-4 justify-between border border-[#D9D9D9] items-center "><Navbar/></div>
        <div className="flex flex-col m-8 gap-7">
          <div className="flex justify-between">
            <div className="text-[#1A181E] font-semibold text-xl">Overview</div>
            <button className='rounded border w-36 h-9'>This Month</button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>

    </div>
    </>
  );
}

export default App;
