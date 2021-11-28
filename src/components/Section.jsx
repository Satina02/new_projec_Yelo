import React from 'react';

const Section = () => {
    return (
        <div className="container">
            <div style={{padding:"60px 0px", margin:"0 80px", display:"flex"}} className="first-section">
                <div className="left-content" 
                style={{display:"flex", flexDirection:"column", width:"50%", margin:"20px 0px 10px"}}>
                    <h1 style={{fontSize:"40px", lineHeight: "1.21667", fontWeight:"700", color:"#323b4b", 
                        marginTop: "20px", marginBottom: "10px", width: "90%", 
                        }}>
                        Take your Hyperlocal Store Online and Create a Unique Identity for your Brand.
                    </h1>
                    <p style={{marginBottom:"30px", fontSize:"18px", color:"#8A94A6", margin:"0 0 10px", width: "90%", 
                }}>Manage your entire store from a single dashboard and provide a seamless 
                ordering and delivery experience to your local <br /> customers.</p>
                    <button style={{justifyContent:"center", alignItems:"center", 
                    minWidth:"212px", height:"66px", padding:"0 42px", 
                    borderRadius:"10px", fontSize:"18px", backgroundColor:"#377DFF", color:"#ffffff", cursor:"pointer", border:"none", width:"50px"
                    }}>Get Started</button>
                </div>
                <div className="right-content">
                    <img style={{maxWidth:"100%", border:"0", width:"500px"}}
                    src="https://jungleworks.com/wp-content/uploads/2021/07/1-st-fold-img@2x.png" alt="" />
                </div>
            </div>




            <section className="section-features" 
                style={{backgroundColor:"#fafbfc", 
                paddingRight: "15px",
                paddingLeft: "15px",
                marginRight: "auto",
                marginLeft: "auto",
                paddingTop:"60px",
                paddingBottom:"60px"}} >
               
                <div className="center-content" 
                    style={{width:"100%", justifyContent:"center", alignItems:"center", marginTop: "20px",
                    marginBottom: "10px"}} >
                    <h2 style={{fontSize:"36px", color:"#323b4b", textAlign:"center", marginTop: "20px",
                        marginBottom: "10px",  fontWeight:"700"
                        }}>Create a one-of-a-kind online storefront <br /> for your unique business
                    </h2>
                   <p style={{fontSize:"18px", color:"#8A94A6", textAlign:"center", margin:"0 0 10px;"
                        }}>Establish your online storefront  and focus on optimizing your sales and marketing strategies.
                    </p>
                </div>
                

                <div  className="first-content" 
                      style={{marginRight: "15px", marginLeft: "15px", padding:"40px 0px", display:"flex", alignItems:"center", justifyContent:"space-around"}}>
                    <div className="left-part">
                        <div className="header-cont"
                            style={{position:"relative", color:"#323b4b", lineHeight:"1.25", 
                            fontWeight:"700", fontSize:"22px", padding:"20px 0px 20px 85px", margin:"0px 0px 10px"}} >
                            <img style={{position:"absolute", left:"0px", top:"0px", bottom:"0px", margin:"auto"}} src="https://jungleworks.com/wp-content/uploads/2021/07/flexible-front-end.png" alt="" />
                            Online Brand Presence
                        </div>
                        <span style={{fontSize: "18px", color: "#8A94A6", lineHeight:"35px"}}>
                            Build your single brand store and create a unique <br /> brand story that stands out from 
                            your competitors. <br /> With a Storefront, you can showcase all your <br /> products and services 
                            independently in one place,<br /> along with your best marketing materials.
                        </span> 
                    </div>
                    <div style={{marginLeft:"8%", width:"50%"}} className="right-part">
                        <img style={{maxWidth:"100%"}} src="https://jungleworks.com/wp-content/uploads/2021/11/Online-Branded-Store.png" alt="" />
                    </div>
                   

                </div>


                <div className="second-content"
                 style={{marginRight: "15px", marginLeft: "15px", padding:"40px 0px", display:"flex", alignItems:"center", justifyContent:"space-around"}} >
                    <div className="left-part"
                     style={{marginRight:"8%", width:"50%"}} >
                        <img style={{width:"500px"}} src="https://jungleworks.com/wp-content/uploads/2021/07/enhanced-customer-experience@2x.png" alt="" />
                    </div>
                    <div className="right-part">
                        <div className="header"
                            style={{position: "relative",
                                color: "#323b4b",
                                lineHeight: "1.25",
                                fontSize: "22px",
                                fontWeight: "700",
                                padding: "20px 0px 20px 85px",
                                margin: "0px 0px 10px"}}>
                            <img style={{maxWidth:"100%",position: "absolute", left: "0px", top: "0px", bottom: "0px", margin: "auto"}} 
                            src="https://jungleworks.com/wp-content/uploads/2021/07/own-ur-customer.png" alt="" />
                            Enhance Ordering Experience
                        </div>
                        <div className="main-text">
                            <p style={{fontSize: "18px", color: "#8A94A6", lineHeight:"35px"}}>
                            Ensure direct, personalized communication to your <br /> customers through
                             your single brand website. The <br /> flexibility of adding product filters 
                             and other brand- <br /> specific shopping experiences for your customers <br /> will 
                             help improve customer loyalty & retention.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="third-content" 
                    style={{marginRight: "15px", marginLeft: "15px", display:"flex", alignItems:"center", justifyContent:"space-around"}} >
                    <div className="left-part">
                        <div className="header"
                        style={{position: "relative",
                        color: "#323b4b",
                        lineHeight: "1.25",
                        fontSize: "22px",
                        fontWeight: "700",
                        padding: "20px 0px 20px 85px",
                        margin: "0px 0px 10px"}}> 
                            <img style={{maxWidth:"100%",position: "absolute", left: "0px", top: "0px", bottom: "0px", margin: "auto"}}  src="https://jungleworks.com/wp-content/uploads/2021/07/endless-possibilites.png" alt="" />
                            Complete Business Control
                        </div>
                        <p style={{fontSize: "18px", color: "#8A94A6", lineHeight:"35px"}}>
                        Ensure effective sales and marketing strategies with <br /> not just a fully automated and 
                        customized order-to <br /> -delivery management system in place, but also with <br /> a full view of
                         customer data that assists in the <br /> development of marketing strategies on your terms.
                        </p>
                    </div>
                    <div className="right-part"
                    style={{marginLeft:"8%", width:"50%"}}>
                        <img style={{maxWidth:"100%"}} src="https://jungleworks.com/wp-content/uploads/2021/07/complete-business-autonomy@2x.png" alt="" />
                    </div>
                </div>


                <div className="fourth-content"
                   style={{marginRight: "15px", marginLeft: "15px", padding:"40px 0px", display:"flex", alignItems:"center", justifyContent:"space-around"}} >
                    <div className="left-part"
                       style={{marginRight:"8%", width:"50%"}}>
                        <img style={{width:"500px"}} src="https://jungleworks.com/wp-content/uploads/2021/07/multi_lingual@2x.png" alt="" />
                    </div>
                    <div className="right-part">
                        <div className="header"
                            style={{position: "relative",
                            color: "#323b4b",
                            lineHeight: "1.25",
                            fontSize: "22px",
                            fontWeight: "700",
                            padding: "20px 0px 20px 85px",
                            margin: "0px 0px 10px"}}>
                            <img style={{maxWidth:"100%",position: "absolute", left: "0px", top: "0px", bottom: "0px", margin: "auto"}} 
                              src="https://jungleworks.com/wp-content/uploads/2021/07/multi-lingualImg.svg" alt="" />
                            Become the local favorite
                        </div>
                        <p style={{fontSize: "18px", color: "#8A94A6", lineHeight:"35px"}}>
                        Offer multiple languages on your website, and reach <br /> your target audience anywhere globally 
                        and serve <br /> different regions. Maintain customer relationships in <br /> more than 80 languages and 
                        ensure customer <br /> retention.
                        </p>
                    </div>
                </div>


                <div className="fifth-content"
                   style={{marginRight: "15px", marginLeft: "15px", padding:"40px 0px", display:"flex", alignItems:"center", justifyContent:"space-around"}} >
                    <div className="left-part">
                        <div className="header"
                          style={{position: "relative",
                          color: "#323b4b",
                          lineHeight: "1.25",
                          fontSize: "22px",
                          fontWeight: "700",
                          padding: "20px 0px 20px 85px",
                          margin: "0px 0px 10px"}}> 
                            <img style={{maxWidth:"100%",position: "absolute", left: "0px", top: "0px", bottom: "0px", margin: "auto"}} src="https://jungleworks.com/wp-content/uploads/2021/07/paymentImg.svg" alt="" />
                            Faster Payment Experience
                        </div>
                        <p style={{fontSize: "18px", color: "#8A94A6", lineHeight:"35px"}}>
                        Combine a number of different payment gateways <br/> with your websites so you can receive payments <br /> quickly.
                         Ensure that your customers have a smooth <br /> payment experience and improve customer <br /> satisfaction.
                        </p>
                    </div>
                    <div className="right-part"
                       style={{marginLeft:"8%", width:"50%"}}>
                        <img style={{maxWidth:"100%"}} src="https://jungleworks.com/wp-content/uploads/2021/07/Faster_Payment@2x.png" alt="" />
                    </div>
                </div>
            </section> 
            <section className="section-carusel"
             style={{backgroundImage: `url("https://jungleworks.com/wp-content/uploads/2021/07/rectangle-1-copy.png")`, 
               display:"flex", flexDirection:"column", padding:"40px 0px"}}>
                <h2 style={{fontSize: "36px", fontWeight: "700", color: "#323b4b", 
                textAlign:"center", marginTop: "20px", marginBottom: "10px"}}>Empowering Businesses all over the World!</h2>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <img style={{width:"100px"}} src="https://mma.prnewswire.com/media/1015747/KFC_Logo.jpg" alt="" />
                    <img style={{width:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBEh_9JuPjVVy6u0m3KwYRy5t-wbtcbaY9w7wYMquxrJy7vCsVVAON-nhIY1pQh26jKk&usqp=CAU" alt="" />
                    <img style={{width:"100px"}} src="https://logos-world.net/wp-content/uploads/2020/04/McDonalds-Emblem.png" alt="" />
                    <img style={{width:"100px"}} src="https://upload.wikimedia.org/wikipedia/commons/3/36/US_2016_SYLVAN_LOGO.jpg" alt="" />
                </div>
            </section>
            <section className="dashbord"
               style={{margin:"0 15px", padding:"60px 0px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                <h2 style={{fontSize: "36px", fontWeight: "700", color: "#323b4b", marginTop: "20px", marginBottom: "3px", textAlign: "center"}}>
                    Expand your market with innovative solutions <br />
                Make your business operations more efficient with us.</h2>
                <p style={{color:"#8A94A6", fontSize: "18px"}}>Sell your unique brand story and focus on improving customer retention.</p>
                <ul className="cards" style={{display:"flex"}}> 
                   
                    <li style={{listStyleType:"none", display:"flex", flexDirection:"column", width: "300px", margin: "15px",
                            borderRadius: "15px",
                            boxShadow: "15.4px 24.6px 62px 0 rgb(0 0 0 / 6%)",
                            backgroundColor: "#ffffff",
                            padding: "30px 20px",
                            textAlign: "left"}} className="left-part">
                        <img style={{width:"65px"}} src="https://jungleworks.com/wp-content/uploads/2021/07/ordering-dash.png" alt="" />
                        <strong style={{fontSize: "20px", padding: "10px 0px", fontWeight: "700"}}>Ordering Dashboard</strong>
                        
                        <div className="tick-text" style={{ display:"flex", color:"#8A94A6", flexDirection:"column"}}>
                            <span>
                                <img style={{width:"45px", left: "0px", top: "0px", bottom: "0px", margin: "auto"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyNNbqjqytE-0XggSHj1OyGptg4abtXknlytmrm0P6jCQ-CdGFJIWqAoJlrtoBIlD6uis&usqp=CAU" alt="" />
                                Order Management
                            </span>
                            <span>
                                <img style={{width:"45px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyNNbqjqytE-0XggSHj1OyGptg4abtXknlytmrm0P6jCQ-CdGFJIWqAoJlrtoBIlD6uis&usqp=CAU" alt="" />
                                Overall access control
                            </span>
                            <span>
                                <img style={{width:"45px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyNNbqjqytE-0XggSHj1OyGptg4abtXknlytmrm0P6jCQ-CdGFJIWqAoJlrtoBIlD6uis&usqp=CAU" alt="" />
                                Inventory Management
                            </span>
                        </div>
                    </li>
                    <li className="right-part" 
                           style={{listStyleType:"none", 
                            display:"flex", flexDirection:"column", width: "300px", margin: "15px",
                            borderRadius: "15px",
                            boxShadow: "15.4px 24.6px 62px 0 rgb(0 0 0 / 6%)",
                            backgroundColor: "#ffffff",
                            padding: "30px 20px",
                            textAlign: "left"}}>
                        <img style={{width:"65px"}} src="https://jungleworks.com/wp-content/uploads/2021/07/ordering-website.png" alt="" />
                        <strong style={{fontSize: "20px", padding: "10px 0px", fontWeight: "700"}}>Ordering Website</strong>
                        
                        <div className="tick-text" style={{ display:"flex", color:"#8A94A6", flexDirection:"column"}}>
                            <span>
                                <img style={{width:"45px", left: "0px", top: "0px", bottom: "0px", margin: "auto"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyNNbqjqytE-0XggSHj1OyGptg4abtXknlytmrm0P6jCQ-CdGFJIWqAoJlrtoBIlD6uis&usqp=CAU" alt="" />
                                Responsive Themes
                            </span>
                            <span>
                                <img style={{width:"45px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyNNbqjqytE-0XggSHj1OyGptg4abtXknlytmrm0P6jCQ-CdGFJIWqAoJlrtoBIlD6uis&usqp=CAU" alt="" />
                                Catalogue Management
                            </span>
                            <span>
                                <img style={{width:"45px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyNNbqjqytE-0XggSHj1OyGptg4abtXknlytmrm0P6jCQ-CdGFJIWqAoJlrtoBIlD6uis&usqp=CAU" alt="" />
                                SEO & Landing pages
                            </span>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="column-cards" style={{backgroundColor:"#fafbfc", padding: "60px 0px"}}>
                <div className="container" 
                            style={{paddingRight: "15px",
                                paddingLeft: "15px",
                                marginRight: "auto",
                                marginLeft: "auto"}}
                            >
                    <div className="row"> 
                    <ul style={{display: "flex", flexWrap: "wrap", alignItems: "inherit", width:"100%"}}>
                        <li style={{listStyleType:"none", width: "300px", display:"flex", flexDirection:"column", margin: "15px", borderRight: "1px solid #eee", padding: "0px 20px"}}>
                            <img style={{width:"65px", marginBottom:"10px", }} src="https://jungleworks.com/wp-content/uploads/2021/07/delivery-mgrt.png" alt="" />
                            <strong style={{fontSize: "23px"}}>Delivery Management</strong>
                            <strong style={{fontSize: "18px", color: "#8A94A6", lineHeight:"30px"}}>Maintain on-time delivery while <br /> navigating multiple destinations. <br />
                                Optimize routes, track in real-time, <br /> and more</strong>
                        </li>
                        <li style={{listStyleType:"none", width: "300px", display:"flex", flexDirection:"column", margin: "15px", borderRight: "1px solid #eee", padding: "0px 20px"}}>
                            <img style={{width:"65px", marginBottom:"10px"}} src="https://jungleworks.com/wp-content/uploads/2021/07/integration.png" alt="" />
                            <strong style={{fontSize: "23px"}}>Integration & Analytics</strong>
                            <strong style={{fontSize: "18px", color: "#8A94A6", lineHeight:"30px"}}>Integrate more than 100 tools to <br /> increase the efficiency of your single <br />
                             store business. 
                                Build reports that are <br /> customized to your specifications.</strong>
                        </li>
                        <li style={{listStyleType:"none", width: "300px", display:"flex", flexDirection:"column", margin: "15px", padding: "0px 20px"}}>
                            <img style={{width:"65px", marginBottom:"10px"}} src="https://jungleworks.com/wp-content/uploads/2021/07/marketing.png" alt="" />
                            <strong style={{fontSize: "23px"}}>Marketing Automation</strong>
                            <strong style={{fontSize: "20px", color: "#8A94A6", lineHeight:"30px"}}>Launch an SEO-friendly platform. <br />
                                Create landing pages that promote <br /> discounts and gift cards.</strong>
                        </li>
                    </ul>
                    </div>
                </div>
            </section>
            <section className="product-card" style={{padding: "60px 0px", textAlign: "center", marginRight:"95px", marginLeft:"55px"}}>
                <div className="container" 
                    style={{paddingRight: "15px",
                            paddingLeft: "15px",
                            marginRight: "auto",
                            marginLeft: "auto"}}>
                    <h2 style={{fontSize: "36px", marginTop: "20px", marginBottom: "10px"}}>
                        An Online Ordering & Delivery SaaS Platform <br /> For Every Business Industry.</h2> 
                    <p style={{color:"#8A94A6", fontSize:"18px"}}>Find your industry and quickly launch your online hyperlocal marketplace.</p>           
                    <div className="row" style={{display:"flex", marginRight:"-15px", marginLeft:"-15px"}}>
                        <div className="card-1" 
                        style={{position: "relative", minHeight: "1px", paddingRight: "15px", paddingLeft: "15px"}}>
                            <div className="card" style={{background: "#fff", padding: "20px 5px", borderTop: "1px solid #febb61", 
                                 boxShadow: "0px 16px 38px 0 rgb(0 0 0 / 6%)", margin: "45px 0 0", borderRadius: "12px"}}>
                                <h4 style={{fontSize: "18px", marginTop: "10px", marginBottom: "10px"}}><strong style={{fontWeight: "700"}}>Food</strong></h4> 
                                <img style={{width:"260px"}} src="https://jungleworks.com/wp-content/uploads/2021/11/foodDeliveryImg.webp" alt="" />
                                <a href="" />
                                <p style={{color:"#377DFF", fontWeight: "600", fontSize: "16px", display: "inline-block", 
                                            margin: "25px 0px 0px", transition: "0.4s",
                                            borderBottom: "1px solid #fff"}}>Live Demo</p>
                            </div>
                        </div>
                        <div className="card-2"
                           style={{position: "relative", minHeight: "1px", paddingRight: "15px", paddingLeft: "15px"}}>
                        <div className="card" style={{background: "#fff", padding: "20px 5px", borderTop: "1px solid #febb61", 
                                 boxShadow: "0px 16px 38px 0 rgb(0 0 0 / 6%)", margin: "45px 0 0", borderRadius: "12px"}}>
                                <h4 style={{fontSize: "18px", marginTop: "10px", marginBottom: "10px"}}><strong style={{fontWeight: "700"}}>Grocery</strong></h4> 
                                <img style={{width:"260px"}} src="https://jungleworks.com/wp-content/uploads/2021/09/groceryImg.png" alt="" />
                                <a href="" />
                                <p style={{color:"#377DFF", fontWeight: "600", fontSize: "16px", display: "inline-block", 
                                            margin: "25px 0px 0px", transition: "0.4s",
                                            borderBottom: "1px solid #fff"}}>Live Demo</p>
                            </div>
                        </div>
                        <div className="card-3"
                           style={{position: "relative", minHeight: "1px", paddingRight: "15px", paddingLeft: "15px"}}>
                        <div className="card" style={{background: "#fff", padding: "20px 5px", borderTop: "1px solid #febb61", 
                                 boxShadow: "0px 16px 38px 0 rgb(0 0 0 / 6%)", margin: "45px 0 0", borderRadius: "12px"}}>
                                <h4 style={{fontSize: "18px", marginTop: "10px", marginBottom: "10px"}}><strong style={{fontWeight: "700"}}>Pharmacy</strong></h4> 
                                <img style={{width:"260px"}} src="https://jungleworks.com/wp-content/uploads/2021/11/pharmacyImg.png" alt="" />
                                <a href="" />
                                <p style={{color:"#377DFF", fontWeight: "600", fontSize: "16px", display: "inline-block", 
                                            margin: "25px 0px 0px", transition: "0.4s",
                                            borderBottom: "1px solid #fff"}}>Live Demo</p>
                            </div>
                        </div>
                        <div className="card-4"
                          style={{position: "relative", minHeight: "1px", paddingRight: "15px", paddingLeft: "15px"}}>
                        <div className="card" style={{background: "#fff", padding: "20px 5px", borderTop: "1px solid #febb61", 
                                 boxShadow: "0px 16px 38px 0 rgb(0 0 0 / 6%)", margin: "45px 0 0", borderRadius: "12px"}}>
                                <h4 style={{fontSize: "18px", marginTop: "10px", marginBottom: "10px"}}><strong style={{fontWeight: "700"}}>Home Services</strong></h4> 
                                <img style={{width:"260px"}} src="https://jungleworks.com/wp-content/uploads/2021/11/homeServicesImg.webp" alt="" />
                                <a href="" />
                                <p style={{color:"#377DFF", fontWeight: "600", fontSize: "16px", display: "inline-block", 
                                            margin: "25px 0px 0px", transition: "0.4s",
                                            borderBottom: "1px solid #fff"}}>Live Demo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="uniq-background" style={{padding: "60px 0px", marginRight:"55px", marginLeft:"55px"}}>
                <div className="container" style={{paddingRight:"15px", paddingLeft:"15px", marginRight:"15px", marginLeft:"15px"}}>
                    <div className="row" style={{backgroundImage: `url("https://jungleworks.com/wp-content/uploads/2021/04/bg-banner.png")`,
                                         padding:"60px 50px", borderRadius:"16px", marginRight:"-15px", marginLeft:"-15px", display:"flex" }}>
                        <div className="left-part">
                            <p style={{color: "#fff", fontWeight: "700", margin: "0px", fontSize: "32px"}}>
                                Let's simplify and make it more about <br /> your brand!</p>
                            <span style={{color: "#fff", margin: "20px 0px 0px", fontSize:"18px"}}>Connect with our experts to learn more.</span>
                        </div>
                        <div className="right-part" style={{marginLeft:"16%"}}>
                            <button style={{background: "#377DFF", color: "#ffffff", justifyContent:"center", 
                                  alignItems:"center", height:"66px", padding:"0 42px", borderRadius:"10px", fontSize:"18px", fontWeight:"600", border:"none"}}
                                  >Get started</button>
                        </div>

                    </div>
                </div>
            </section>
            <section className="onDemand" style={{padding:"60px 0"}}>
                <div className="container">
                    <div className="row">
                        <h2 style={{fontSize: "36px",
                                    fontWeight: "900",
                                    textAlign: "center",
                                    color: "#474747",
                                    marginBottom: "25px",
                                    marginTop: "0"}}>On-Demand 101</h2>
                        <ul style={{display:"flex"}}>
                            <li style={{backgroundColor: "#fff",
                                        width: "calc(25% - 30px)",
                                        margin: "15px",
                                        textAlign: "left",
                                        transition: ".4s",
                                        display: "block",
                                        boxShadow: "0 7px 11px rgb(176 183 195 / 22%)",
                                        padding: "25px 20px",
                                        borderRadius: "10px"}}>
                                <img style={{paddingBottom:"10px"}} src="https://jungleworks.com/wp-content/uploads/2019/07/intellectual.png" alt="" />
                                <br />
                                <span style={{fontSize: "20px", fontWeight: "700", margin: "20px 0 10px"}}>Academy</span>
                                <p style={{fontSize: "18px", fontWeight: "400", paddingBottom: "30px", color:"#8A94A6", lineHeight:"35px"}}>
                                    Learn how to start, build <br /> and grow your own online <br /> business.</p>
                                <p style={{paddingBottom: "4px",transition: ".4s", position: "relative", color: "#377DFF", 
                                     fontWeight: 600, fontSize: "16px"}}>Read more</p>
                            </li>
                            <li style={{backgroundColor: "#fff",
                                        width: "calc(25% - 30px)",
                                        margin: "15px",
                                        textAlign: "left",
                                        transition: ".4s",
                                        display: "block",
                                        boxShadow: "0 7px 11px rgb(176 183 195 / 22%)",
                                        padding: "25px 20px",
                                        borderRadius: "10px"}}>
                                <img style={{paddingBottom:"10px"}} src="https://jungleworks.com/wp-content/uploads/2019/07/road-sign.png" alt="" />
                                <br />
                                <span style={{fontSize: "20px", fontWeight: "700", margin: "20px 0 10px"}}>Helpdesk</span>
                                <p style={{fontSize: "18px", fontWeight: "400", paddingBottom: "30px", color:"#8A94A6", lineHeight:"35px"}}>
                                  Step by step guide to <br /> setup your own online <br /> business with Yelo.</p>
                                <p style={{paddingBottom: "4px",transition: ".4s", position: "relative", color: "#377DFF", 
                                     fontWeight: 600, fontSize: "16px"}}>Read more</p>
                            </li>
                            <li style={{backgroundColor: "#fff",
                                        width: "calc(25% - 30px)",
                                        margin: "15px",
                                        textAlign: "left",
                                        transition: ".4s",
                                        display: "block",
                                        boxShadow: "0 7px 11px rgb(176 183 195 / 22%)",
                                        padding: "25px 20px",
                                        borderRadius: "10px"}}>
                                <img style={{paddingBottom:"10px"}} src="https://jungleworks.com/wp-content/uploads/2019/07/blogging.png" alt="" />
                                <br />
                                <span style={{fontSize: "20px", fontWeight: "700", margin: "20px 0 10px"}}>Blogs</span>
                                <p style={{fontSize: "18px", fontWeight: "400", paddingBottom: "30px", color:"#8A94A6", lineHeight:"35px"}}>
                                      Stay updated with <br /> Industry trends and latest <br /> news in the industry.</p>
                                <p style={{paddingBottom: "4px",transition: ".4s", position: "relative", color: "#377DFF", 
                                     fontWeight: 600, fontSize: "16px"}}>Read more</p>
                            </li>
                            <li style={{backgroundColor: "#fff",
                                        width: "calc(25% - 30px)",
                                        margin: "15px",
                                        textAlign: "left",
                                        transition: ".4s",
                                        display: "block",
                                        boxShadow: "0 7px 11px rgb(176 183 195 / 22%)",
                                        padding: "25px 20px",
                                        borderRadius: "10px"}}>
                                <img style={{paddingBottom:"10px"}} src="https://jungleworks.com/wp-content/uploads/2019/07/creative-idea.png" alt="" />
                                <br />
                                <span style={{fontSize: "20px", fontWeight: "700", margin: "20px 0 10px"}}>Business Ideas</span>
                                <p style={{fontSize: "18px", fontWeight: "400", paddingBottom: "30px", color:"#8A94A6", lineHeight:"35px"}}>
                                      Get Inspired with these <br /> interesting On-demand <br /> business Ideas.</p>
                                <p style={{paddingBottom: "4px",transition: ".4s", position: "relative", color: "#377DFF", 
                                     fontWeight: 600, fontSize: "16px"}}>Read more</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="global-serving" style={{padding:"60px 0px"}}>
                <div className="container" style={{paddingLeft:"15px", paddingRight:"15px", marginRight:"0px", marginLeft:"0px"}}>
                    <div className="row" style={{marginRight:"-15px", marginLeft:"-15px"}}>
                        <h2 style={{fontSize:"40px", fontWeight:"700", color:"#323b4b", margin:"0px 0px 15px",
                                        textTransform: "capitalize", textAlign:"center"}}> 
                            Serving Clients All Over The World</h2>
                        <div style={{textAlign:"center", margin:"0px auto 50px", fontSize:"18px", color:"#8A94A6"}}>Customers in over 180 countries are growing their businesses with Jungleworks</div>
                        <div classname="big-contaner" style={{backgroundImage: `url("https://jungleworks.com/wp-content/uploads/2021/04/globeImg.svg")`, display:"flex"}}>
                                <div className="littile-cards" style={{padding:"0px 80px ", marginBottom:"100px", display:"flex"}}>
                                    <div style={{position: "relative", minHeight: "1px", paddingRight: "15px", paddingLeft: "15px", width:"324px"}}>
                                        <div className="first-card" style={{borderRadius: "4px",boxShadow: "0 50px 77px 0 rgb(176 195 193 / 22%)",
                                                        backgroundColor: "#ffffff",
                                                        padding: "20px 15px",
                                                        width: "175px",
                                                        margin: "auto", marginTop:"35px",
                                                        display:"flex",
                                                        flexDirection:"column",
                                                        textAlign:"center"}}>
                                                <strong style={{color:"#2DCA8C", fontSize:"36px", fontWeight:"700"}}>10k+</strong>  
                                                <span style={{fontSize:"16px", color:"#000000"}}>Live business</span>          
                                        </div>
                                    </div>
                                    <div style={{position: "relative", minHeight: "1px", paddingRight: "15px", paddingLeft: "15px", width:"324px"}}>
                                        <div className="second-card" style={{borderRadius: "4px",boxShadow: "0 50px 77px 0 rgb(176 195 193 / 22%)",
                                                        backgroundColor: "#ffffff",
                                                        padding: "20px 15px",
                                                        width: "175px",
                                                        margin: "auto", marginTop:"35px",
                                                        display:"flex",
                                                        flexDirection:"column",
                                                        textAlign:"center"}}>
                                                <strong style={{color:"#FFBE3D", fontSize:"36px", fontWeight:"700"}}>180k+</strong>  
                                                <span style={{fontSize:"16px", color:"#000000"}}>Countries</span>          
                                        </div>
                                    </div>
                                    <div style={{position: "relative", minHeight: "1px", paddingRight: "15px", paddingLeft: "15px", width:"324px"}}>
                                        <div className="third-card" style={{borderRadius: "4px",boxShadow: "0 50px 77px 0 rgb(176 195 193 / 22%)",
                                                        backgroundColor: "#ffffff",
                                                        padding: "20px 15px",
                                                        width: "175px",
                                                        margin: "auto", marginTop:"35px",
                                                        display:"flex",
                                                        flexDirection:"column",
                                                        textAlign:"center"}}>
                                                <strong style={{color:"#FF715B", fontSize:"36px", fontWeight:"700"}}>5M+</strong>  
                                                <span style={{fontSize:"16px", color:"#000000"}}>Users</span>          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        
                    </div>
                </div>
            </section>
        </div> 
    );
};

export default Section;    