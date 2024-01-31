import React from "react";

class Uclass extends React.Component
{
  

    constructor(props)
    {
      super(props);

      console.log(props);
      console.log("child constuctor");

    //   this.state = {
    //     count:0,
    //     count2:2,
    //   }
 this.state={
    userInfo:{
   name:"Dummy",
   location:"Greater Noida",
   avatar_url:"https://buffer.com/library/free-images/",
    },
 }
    }
   
  async componentDidMount()
  {
    console.log("user(child) class did mount");
    // const json={}
  
        const data=  await fetch("https://api.github.com/users/akshaymarch7");

       const json= await data.json();
   
   
   console.log(json);
   this.setState({
    userInfo:json,
   })


   
   console.log("lets see")
  };

  
  
  
  

    render()
    {
        console.log("child render")
        const {name,location,avatar_url}=this.state.userInfo;

        // const {count}=this.state;
        // const {name,location} = this.props;
        return (

            // <div>
            // <h2>{name}</h2>
            // <h3>{location}</h3>
            // <h4>{count}</h4>
            // <button onClick={()=>{
            //     this.setState({
            //         count:this.state.count+1,
            //     })
            // }}>Count Inc</button>
            // </div>

            <div>
        <img src={avatar_url} alt="image not loaded"/>
        <h1>Name:{name}</h1>
        <h2>Location:{location}</h2>
            </div>

        )
    }
}

export default Uclass;