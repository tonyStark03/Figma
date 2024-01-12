import './App.css';


function Button(props){
    return (
        <>
            <button className='flex gap-3 h-9 px-4 py-2 w-52 text-left rounded items-center hover:bg-[#353C53]' > 
            <div className='h-5 w-5'>{props.logo}</div>
            <div className='text-sm'>{props.content}</div>
            </button>
        
        </>

    )
}

export default Button;