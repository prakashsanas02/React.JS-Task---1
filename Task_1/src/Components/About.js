import React, { useState } from 'react'

export default function About(){

   const [mystyle, setMyStyle] = useState(   {
    color:'white',
    backgroundColor: 'black'

})
 
const [btntext, setBtntext] = useState("Enable Dark mode")

   const toggleStyle = () => {
    if(mystyle.color == 'white')
    {
       setMyStyle({
        color:'black',
        backgroundColor:'white',
        border: '2px solid white'
       })
       setBtntext("Enable Dark mode")
    }
    else
    {
        setMyStyle({    
            color:'white',
            backgroundColor: 'black',
            border: '2px solid black'

        })
        setBtntext("Enable Light mode")

    }
   }
    return(
        <div classNameName="container" style={mystyle}>
            <h2 classNameName="my-3">About Us</h2>
                <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" style={mystyle}  data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle}  data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>

        <div classNameName="container">
        <button onClick={toggleStyle} type="button" style={mystyle} classNameName="btn btn-dark my-3">{btntext} </button>

        </div>
</div>
        
      
    )
}