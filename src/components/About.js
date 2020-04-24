import React, {useState} from 'react';
const About = ({resumeData}) => {
  const [display, setDisplay] = useState(false);

  
  let section;
  if(!display){
     console.log({display})
     section = (<button onClick={() => setDisplay(true)}>Click me</button>);
  } else {
   console.log({display})
     section = (<section id="about">
     <div className="row">

        <div className="three columns">

           <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

        </div>

        <div className="nine columns main-col">

           <h2>About Me</h2>
           <p>
           {
             resumeData.aboutme
           }
           </p>

           <div className="row">

              <div className="columns contact-details">

              <h2>Contact Details</h2>
              <p className="address">
                     <span>{resumeData.name}</span>
                 <br></br>
                        <span>
                 {resumeData.address}
                </span>
                <br></br>
                <span>{resumeData.website}</span>
                     </p>
              </div>
           </div>
        </div>
     </div>
  </section>);
  }
    return (
      section
    );
  }


export default About;