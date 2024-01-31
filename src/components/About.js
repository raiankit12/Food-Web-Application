import React from "react";
import User from "./user";
import Uclass from "./Uclass";
import UserContext from "../utils/UserContex";

// const About=()=>{

   

//     return(
//         <div>
//             <h1>About Us</h1>
//             <User  name={"ankit kumar Rai(function)"} location={" Noida"} />
//             <Uclass  name={"ankit kumar Rai(class)"} location={"Greater Noida"}/>
//         </div>
//     )
// }

class About extends React.Component{
  
    constructor(props)
    {
        super(props);
        console.log("ankit");
        console.log("Parent constructor")
    }
    // componentDidMount()
    // {
    //   console.log("About(Parent) class did mount");
    //   this.timer=setInterval(()=>{
    //     console.log("interval here..")
    //    },1000)
    // }

//     componentWillUnmount()
//   {
//     console.log("hello compnent will unmount after going from ccurrent page to another page");
   
//     clearInterval(this.timer);

//   }

    render()
    {
    console.log("parent render");
   
        return(
                    <div>
                        <h1>About Us</h1>
                        <div>
                            <UserContext.Consumer>
                               {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}
                            </UserContext.Consumer>
                        </div>
                        <User  name={"ankit kumar Rai(function)"} location={" Noida"} />
                        <Uclass  name={"ankit kumar Rai(class)"} location={"Greater Noida"}/>
                    </div>
                )
    }
    
}

export default About;