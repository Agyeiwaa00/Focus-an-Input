import { useEffect, useRef } from "react";

function Focus (){
    const focusInput = useRef(null)
    useEffect(()=>{focusInput.current.focus()
},[])

    return(
        <div className="flex flex-col justify-center items-center m-10">
             <label htmlFor="focus-input">Put your words here</label>
             <input name="focuses-input" ref={focusInput} className="border-2"/>
        </div>
    )
}
export default Focus;