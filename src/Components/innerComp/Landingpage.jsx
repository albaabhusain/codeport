import React from 'react';
import '../../styles/Landing.scss'
import Backimg from '../../assets/logo/Codeportimg.png'
import {Link} from 'react-router-dom'
const Landingpage = () => {
    return (
        <>
           
<div>
    
    <nav className="navbar navbar-expand-lg navbar-dark " id="nav-bar">
        <div className="container-fluid ">
            <a className="navbar-brand" href="#">CodePort <sup>beta</sup></a>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarTogglerDemo02" >
                <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 align-items-lg-center align-items-xl-center">
                    <li className="nav-item px-2">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item px-2">
                        <a className="nav-link" href="#">Documentation</a>
                    </li>
                    <li className="nav-item px-2">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item px-2">
                        <a className="nav-link" href="#"><button className="btn-contact">Buy Pro</button></a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>

 


    <div className="container-fluid col-xxl-12 hero-sect">
        <div className=" row flex-lg-row-reverse align-items-center justify-content-end pt-4 mx-3">
            <div className="col-10 col-sm-8 col-lg-6 p-0 m-0">
                <div className="hero-img-wrap">
                    <img src={Backimg} alt=""/>
                </div>
                
            </div>
            <div className="col-lg-6 px-5 my-5">
                <div className="lc-block mb-3">
                    <div editable="rich">
                        <h2 className="fw-bold display-5">A tool curated for <br/> Developers</h2>
                    </div>
                </div>

                <div className="lc-block mb-4">
                    <div editable="rich">
                        <p className="lead">
                            It is a tool that let you make a landing page in less then 10 minutes and with clean code so that you can add your touch to it in future.
                        </p>
                    </div>
                </div>

                <div className="lc-block d-grid gap-2 d-md-flex justify-content-md-start mt-4 pt-3">
                    <Link to='/'className=" me-md-2" href="#"><button className="btn-hero-get">Get Started</button> </Link>
                    <a className="px-1 d-none " href="#" role="button"><button className="btn-hero-view "><img className="me-3"src="./assets/Group 1410104389.svg" alt=""/> View
                            intro</button></a>
                </div>

            </div>
        </div>
    </div>




    <div className="container-fluid benefits-sect py-3 my-3 mb-5 pb-5 pt-5 mt-5 ">
        <div className="container col-12 pb-3 mb-4">
            <div className="text-center col-lg-6 col-10 m-auto">
                <h1 className="p-4 pb-3">Benefits of using CodePort</h1>
                <p>Although it gives the developers to build a landing pages and even whole static pages in few minutes , it has a lot to offer !</p>
            </div>
        </div>

        <div className="container-fluid my-2 p-2">
            <div className=" d-flex">
                <div className="b-card container text-center d-flex flex-column justify-content-start align-items-center">
                    <div className="b-color3 b-color"></div>
                    <div className="b-head ">Increase Productivity</div>
                    <p>
                        Getting the frontend done in few minutes gives time to focus on other corners.
                    </p>
                </div>
                <div className="b-card container text-center d-flex flex-column justify-content-start align-items-center">
                    <div className="b-color"></div>
                    <div className="b-head">Clean Code</div>
                    <p>
                        well structued code let you understand and edit it in no time.
                    </p>
                </div>
                <div className="b-card container text-center d-flex flex-column justify-content-start align-items-center">
                    <div className="b-color2 b-color"></div>
                    <div className="b-head">Premium Design</div>
                    <p>
                        It offers all the components with premium and latest design trend.
                    </p>
                </div>
                
                <div className="b-card container text-center d-flex flex-column justify-content-start align-items-center">
                    <div className="b-color4 b-color"></div>
                    <div className="b-head">Quick Support</div>
                    <p>
                        Stuck somewhere , feel free to contact us we love to help you out.
                    </p>
                </div>

            </div>
        </div>

    </div>


  

    <div className="about-cont container-fluid pt-4 mb-5 pb-5">
        <div className="container abt-sect px-4  d-flex align-items-center">
            <img className="abt-vec-img" src="./assets/Vector 6.png" alt=""/>

            <div>
                <img className="abt-img" src="./assets/Group 1000003772.svg" alt=""/>
            </div>
            <div className="contaner-abt">

            </div>
            <div className="container p-4 m-2 abt-content d-flex flex-column justify-content-end  w-75 pe-0 me-0">
                <h1 className="py-2 mb-3">Our Story</h1>
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur. Urna fermentum pulvinar in ph <br/> vitae enim. Amet duis accumsan at facilisi nec. Non proin vulputate eu <br/> odio d Non proin vulputate eu </p>
                <button className="btn-hero-get my-3 align-self-start mt-4">Know More</button>
            </div>
        </div>
    </div>
    

    <div className="container-fluid courses-sect mt-5">

        <div className="container-fluid benefits-sect py-3 my-3 mt-2">

            <div className="container col-12">
                <div className="text-center col-lg-5 col-10 m-auto">
                    <h1 className="p-4 pb-3">Pricing $</h1>
                    <p>Till beta phase all features will be available for free to all users, after that the pricng will be as follows.</p>
                </div>
            </div>

            <img src="./assets/Vector 9.svg" className="cour-vec-arrow" alt=""/>
            <img className="cour-vec-img" src="./assets/Vector 8.svg" alt=""/>
            
          
            <div className=" card-cont  d-flex justify-content-between flex-wrap align-content-around">
             
                <div className="cour-card cour-card-col container p-4 m-3">
                    <div className="cour-head  fs-5 fw-bold">
                        CP Basic
                    </div>
                    <p className="py-2 ">
                        - 5 Basic components. <br/>
                        - 3 Templates for each components. <br/>
                        - Basic Css properties customisable. <br/>
                        - Email Support. <br/>
                    </p>
                    <button className="cour-btn my-0  fw-bold w-100">₹0/Month</button>

                </div>
             
                <div className="cour-card cour-card-col container p-4 m-3">
                    <div className="cour-head  fs-5 fw-bold">
                        CP Premium
                    </div>
                    <p className="py-2 ">
                        - All features in Basic. <br/>
                        - All Advance and responsive components. <br/>
                        - 20+ CSS effects with animation. <br/>
                        - On call support. <br/>
                    </p>
                    <button className="cour-btn my-0  fw-bold w-100">₹1990/Month</button>

                </div>
             
                <div className="cour-card cour-card-col container p-4 m-3">
                    <div className="cour-head  fs-5 fw-bold">
                        CP Professional
                    </div>
                    <p className="py-2 ">
                        - All features in CP Premium. <br/>
                        - On demand customised Templates, Effects , Compponents. <br/>
                        - Instant call support. <br/>
                    </p>
                    <button className="cour-btn my-0  fw-bold w-100">₹2990/Month</button>

                </div>
                

            </div>

        </div>
     </div>   

        <div className="py-5 my-5 divider">
            <hr/>
        </div>
        


      

        <div className="container-fluid" id="add-sect">
            <div className="container-fluid add-sect">
                <div className="add-left">
                    <div>
                        <h1 className="py-4 fs-1 fw-bold">CodePort</h1>
                        <div className="mb-4">
                            <h3 className="py-3 pb-1 ">- Linkedin</h3>
                            <p>Follow us to stay updated <br/> LINK</p>
                        </div>
                        <div>
                            <h3 className="py-3 pb-1">- Instagram</h3>
                            <p>Get the insights and tutorials on our page <br/> LINK</p>
                        </div>
                       
                    </div>
                </div>
                <div className="add-center">
                    <img className="add-img" src="./assets/Group 1000003949.svg" alt=""/>
                </div>
                <div className="add-right">
                    <div>
                        <p className="p-3"><span className="">Contact Sales</span> : +91 9044367157 </p>
                        <p className="p-3"><span className="">Email Sales</span> : cpsales@codeport.in </p>
                        <p className="p-3"><span className="">Contact Support</span> :+91 7398653778 </p>
                        <p className="p-3"><span className="">Email Support</span> : cpsupport@codeport.in </p>
                    </div>
                </div>
            </div>
            <div className="p-5 m-5">
              
            </div>
        </div>


      

        <footer>
            <div className="footer">
                <div className=" inner-footer  py-3">
                    <div className=" ">
                        <div className="fs-4 fw-bold pb-3 py-4">
                           CodePort
                        </div>
                        <div className="text-muted foot-left-text">
                            If you are interested to contribute to this project or have feedback feel free to contact us.
                        </div>
                        <div className="d-flex mt-2 pt-1">
                            <div className="py-2 me-2"> <img  className="foot-icon" src="./assets/Group 1000003650.svg" alt=""/> </div>
                            <div className="p-2"><img  className="foot-icon" src="./assets/Group 1410104390.svg" alt=""/></div>
                            <div className="p-2"><img  className="foot-icon" src="./assets/Group 1000003654.svg" alt=""/></div>
                        </div>

                    </div>

                    <div className="px-3 mx-3">
                        <div className="fs-5 py-4 pb-3 fw-600">
                            Pages
                        </div>
                        <div>
                            <div className="text-muted">
                                <div className="py-2 fs-6">Home</div>
                                <div className="py-2 fs-6">Documentation</div>
                                <div className="py-2 fs-6">About</div>
                            </div>
                        </div>

                    </div>

                    <div className="px-4 mx-4">
                        <div className="fs-5 py-4 pb-3 fw-600">
                            Services
                        </div>
                        <div>
                            <div className="text-muted">
                                <div className="py-2 fs-6">Template Editor</div>
                                <div className="py-2 fs-6">Responsive Comp.</div>
                                <div className="py-2 fs-6">On Demand Design</div>
                            </div>
                        </div>

                    </div>

                    <div className="px-4 mx-5">
                        <div className="fs-5 py-4 pb-3 fw-600">
                            Contact us at
                        </div>
                        <div className="d-flex align-items-center ">
                            <div className="foo-call text-muted me-2">Call at : 9090234900</div> <div className="foo-btn">9AM - 8PM</div>
                        </div>

                    </div>
                </div>
                 <div className="py-3 mt-3 ">
                     <hr className=""/>
                     <div className="lower-foot">
                        <div className="text-muted">
                            Copyright, CodePort 2023.   
                        </div>
                        <div className="text-muted">
                            Beta v1.2
                        </div>
                     </div>
                </div>
            </div>
        </footer>


</div> 
        </>
    );
}

export default Landingpage;
