//import GlobalContext from '../../context/global-context';
//import { useContext} from 'react';
function buildHTML (element,setcodeObj,codeObj,outObj,setoutObj,property){
   // const {element,setcodeObj,codeObj} = useContext(GlobalContext)
  // const {html,code}=codeObj 
    let htm='';
    let chtm='';
    let cCss='';
    let Css='';
    let js='';
    let JS='';
    const {height,width,color,background} = property;
    //for nav bar
    if (element==="nav") {

        //html
       htm= (<nav>
                <a href="htt" class="logo"><img src="images/logo.png" alt="" srcset=""/>
                    <p>Rajvardhan</p>
                </a>
                
                <ul class="navList">
                    <li class="navItem"><a href="/">Home</a></li>
                    <li class="navItem"><a href="/startups.html">Startups</a></li>
                    <li class="navItem"><a href="/recentWork.html">Recent works</a></li>
                </ul>
                <button type="button" class="btnquotesNav m-none"><a
                        href="https://www.linkedin.com/in/rajyavardhan-singh-037b821aa"
                        target="">Contact</a></button>
                <div class="burgerNav">
                    <div class="line l-1"></div>
                    <div class="line l-2"></div>
                    <div class="line l-3"></div>
                </div>
            </nav> );
            
        chtm=(`
        <nav>
        <a href="htt" class="logo"><img src="images/logo.png" alt="" srcset=""/>
            <p>Rajvardhan</p>
        </a>
        
        <ul class="navList">
            <li class="navItem"><a href="/">Home</a></li>
            <li class="navItem"><a href="/startups.html">Startups</a></li>
            <li class="navItem"><a href="/recentWork.html">Recent works</a></li>
        </ul>
        <button type="button" class="btnquotesNav m-none"><a
                href="https://www.linkedin.com/in/rajyavardhan-singh-037b821aa"
                target="">Contact</a></button>
        <div class="burgerNav">
            <div class="line l-1"></div>
            <div class="line l-2"></div>
            <div class="line l-3"></div>
        </div>
    </nav>`);

//css
cCss= `
:root {
    --bg-color:`+background+`;
    --light-blue: #16D1AF;
    --white: #FFFFFF;
    --grey: rgba(255, 255, 255, 0.1)
}
nav a{
    color:`+color+`;
    text-decoration:none;
}
nav {
    background: var(--bg-color); 
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 160px;
    width: `+width+`px;
    height: `+height+`px;
    color:`+color+` ;
}
.burgerNav{
    display: none;
}

nav ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
}

nav ul li {
    display: flex;
    align-items: center;
    padding: 0 42px;
    font-weight: 400;
    font-size: 16px;
}

.logo {
    display: flex;
    align-items: center;
    height: 30px;

}

.logo img {
    height: 18px;
    padding-right: 5px;
}
 
.logo p {
    font-weight: 700;
}

.btnquotesNav {
    width: 139px;
    height: 39px;
    border-radius: 4px;
    font-size: 14px;
    background: var(--grey);
    color: var(--white);
    border: none;

}
/*Responsive*/
@media only screen and (max-width:1000px) {

    .m-none {
        display: none !important;
    }

    nav {
        justify-content: normal;
    }

    /* nav */
    .navList {
        list-style: none;
        text-decoration: none;
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 36%;

    }

    .resnav {

        transform: translateX(0%) !important;
        overflow: hidden !important;
        border-radius: 0 0 0 70%;

    }

    .fixed {
        position: fixed !important;
    }

    .d-none {
        display: none !important;
    }

    .line-1 {
        transform: rotate(45deg) translate(6.5px, 6px) !important;
    }

    .line-2 {

        transform: rotate(-45deg) !important;

    }

    .burgerNav {
        position: absolute;
        display: block;
        z-index: 5;
        top: 20px;
        right: 20px;

    }

    .burgerNav div {
        transition: all 0.2s ease-in;
    }

    .line {
        height: 2px;
        width: 32px;
        background: white;
        z-index: 4;
        margin: 7.5px;

    }

    nav {
        height: 80px;
        padding: 0 5%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        overflow: hidden;
    }

    .logo {
        margin-top: 25px;
    }

    .navList {
        transform: translateX(100%);
        align-self: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100vh;
        width: 100%;
        background: var(--bg-color);
        z-index: 4;
        position: fixed;
        transition: all 0.6s ease;


    }
}
`;
//js
js=`
const resNav= document.querySelector('.burgerNav');
const navList = document.querySelector('.navList');
const sect1= document.querySelector('.section-1');
const line1=document.querySelector('.l-1');
const line2=document.querySelector('.l-2');
const line3=document.querySelector('.l-3')



// responsive nav

resNav.addEventListener('click',()=>{

   navList.classList.toggle("resnav");
   resNav.classList.toggle('fixed');
   line1.classList.toggle('line-1');
   line2.classList.toggle('d-none');
   line3.classList.toggle('line-2');

   

})


`;
Css=(cCss); 
JS=(js)           
    }
    else{
        //setcodeObj({...property.width}) 
    }
    setcodeObj({...codeObj, html:htm,CSS:Css,JS:js});
    setoutObj({...outObj,html:chtm,CSS:cCss,JS:JS});
}

export default buildHTML;