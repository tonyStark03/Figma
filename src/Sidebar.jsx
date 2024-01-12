import './App.css';
import amazon from './amazon.jpg';
import { FaChevronDown } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { AiTwotoneAppstore } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { PiSpeakerHighDuotone } from "react-icons/pi";
import { CiDiscount1 } from "react-icons/ci";
import { SiSimpleanalytics } from "react-icons/si";
import { GoPeople } from "react-icons/go";
import { FaAmazonPay } from "react-icons/fa";
import { PiPaintBrushBroadDuotone } from "react-icons/pi";
import { MdElectricBolt } from "react-icons/md";
import { CiWallet } from "react-icons/ci";

import Button from './Button';


function Sidebar(){
    return(
        <>
            <div className="flex w-48 h-11 gap-3 items-center">
                <img className='h-11 w-10 border rounded ' src={amazon} alt='logo'/>

                <div className='flex flex-col w-28'>
                    <div className="gap-4 text-base font-medium text-[#FFFFFF]">Fiyanshu</div>
                    <div className="underline font-DarkerGrotesque font-light">visit store</div>
                </div>

                <div className="h-5 w-5  "> <FaChevronDown /></div>
        
               
            </div>

            <div className="flex flex-col gap-1 items-start h-screen text-[#FFFFFF] ">
                <Button logo= {<MdHomeFilled />}content="Home"/>
                <Button logo= {<LuClipboardList />}content="Orders"/>
                <Button logo= {<AiTwotoneAppstore />}content="Products"/>
                <Button logo= {<FiTruck />}content="Delivery"/>
                <Button logo= {<PiSpeakerHighDuotone />}content="Marketing"/>
                <Button logo= {<SiSimpleanalytics />}content="Analytics"/>   
                <Button logo= {<FaAmazonPay />}content="Payouts"/>
                <Button logo= {<CiDiscount1 />}content="Discounts"/>
                <Button logo= {<GoPeople />}content="Audience"/>
                <Button logo= {<PiPaintBrushBroadDuotone />}content="Appearance"/>
                <Button logo= {<MdElectricBolt />}content="Plugins"/>
            </div>

            <div className="flex rounded w-48 h-14 bg-[#353C53] items-center p-1.5 px-3 gap-2.5">
                <div className="flex justify-center items-center rounded h-9 w-9 bg-[#4e556c]  ">
                    <div className='opacity-100'><CiWallet size={25}/></div>
                </div>
                <div className="flex flex-col">
                    <div className="text-sm font-normal">Available credits</div>
                    <div className="">222.10</div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;