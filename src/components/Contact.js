import { useState } from "react"

const Contact=()=>{

    const [inc,setInc]=useState(0)
    // const [Dec,setDenc]=useState(inc)

    function IncClick()
    {
        setInc(inc+1)
    }
    function DecClick()
    {
        setInc(inc-1)
    }

    function CahnegeInput(e)
    {
       
                
            setInc(Number(e.target.value))
      
    }

    return(
        <div>
           
           <input type="text" value={inc} onChange={CahnegeInput} />
           <button className="mx-8" onClick={IncClick}>+</button>
            <button onClick={DecClick}>-</button>
        </div>
    )
}

export default Contact;