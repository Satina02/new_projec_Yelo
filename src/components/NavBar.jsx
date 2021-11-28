import React from 'react';



const NavBar = () => {
    return (
        <div>
            {/* <div className="Header" style={{display:"flex", justifyContent:"flex-end", backgroundColor:"#377DFF", marginTop:"0", height:"40px", alignItems:"center"}}>
                <h4 style={{color:"white", padding:"5px 20px 5px 15px"}}>Products</h4>
                <h4 style={{color:"white", padding:"5px 20px 5px 15px"}}>Solutions</h4>
                <h4 style={{color:"white", padding:"5px 20px 5px 15px"}}>Learn</h4>
                <h4 style={{color:"white", padding:"5px 20px 5px 15px", marginRight:"100px"}}>Partner</h4>
            </div> */}
            <div className="Navbar" style={{display:"flex", justifyContent:"space-around", marginTop:"15px", position:"sticky", top:"0"}}>
               <img src="https://jungleworks.com/wp-content/uploads/2020/04/Yelo-Full-Logo.png" alt="" />
                    <h3 style={{color:"#8A94A6", fontFamily: "Inter", right:"30px"}}>Products</h3>
                    <h3 style={{color:"#8A94A6", fontFamily: "Inter", right:"30px"}}>Features</h3>
                    <h3 style={{color:"#8A94A6", fontFamily: "Inter", right:"30px"}}>Use Case</h3>
                    <h3 style={{color:"#8A94A6", fontFamily: "Inter", right:"30px"}}>Pricing</h3>
                    <h3 style={{color:"#8A94A6", fontFamily: "Inter", right:"30px"}}>Helpdesk</h3>
              <div className="buttons">
                    <button 
                    style={{border:"1px solid #E5F1FF", 
                    color:"#377DFF", backgroundColor:"#E5F1FF", 
                    fontSize:"16px", padding:"14px 20px", 
                    borderRadius:"10px", fontWeight:"600", marginRight:"5px"}}>Log In</button>
                    <button 
                    style={{fontSize:"16px", padding:"14px 20px", 
                    backgroundColor:"#377DFF", color:"#fff", border:"1px solid #377DFF", borderRadius:"10px",
                    fontWeight:"600"}}>Get Started</button>
                </div>
           </div>
        </div>
    );
};

export default NavBar; 