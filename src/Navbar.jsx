import './App.css';
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { VscTriangleDown } from "react-icons/vsc";
import { CiCircleQuestion } from "react-icons/ci";


function Navbar(){
    return(
        <>
            <div className=" flex w-96 h-7 ml-8 ">
                <div className="flex-1/3 font-bold text-xl mr-4 h-7">Payouts</div>
                <div className='flex flex-initial text-sm h-7 items-center'>
                    <div className=""><CiCircleQuestion/></div>
                    <div className="px-1.5 font-DarkerGrotesque text-[#4D4D4D]"> How it works</div>
                </div>
            </div>


            <div  className="flex-inital w-96">
                <input placeholder='Search features, tutorials, etc ' className='flex-none h-10 w-full rounded-md px-4 bg-[#F2F2F2]'></input>
            </div>


            <div className='flex w-96 justify-end mr-8 h-10 items-center'>
                <div className=' flex w-24 text-2xl gap-3' >
                    <button className='flex justify-center items-center  w-10 h-10 border rounded-full bg-[#F2F2F2] '><IoChatboxEllipsesSharp/></button>
                    <button className='flex justify-center items-center  w-10 h-10 border rounded-full bg-[#F2F2F2]'><VscTriangleDown /></button>
                    
                </div>
                
            </div>
        </>
    )
}

export default Navbar;
