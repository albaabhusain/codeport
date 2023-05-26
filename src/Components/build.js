//import GlobalContext from '../../context/global-context';
//import { useContext} from 'react';
function buildHTML (element,setcodeObj,codeObj,outObj,setoutObj){
   // const {element,setcodeObj,codeObj} = useContext(GlobalContext)
  // const {html,code}=codeObj 
    let htm='';
    let chtm='';
    if (element==="nav") {
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
            
        chtm=(`<nav>
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
    </nav>`)
           
    }
    else{
        //setcodeObj({...property.width}) 
    }
    setcodeObj({...codeObj, html:htm});
    setoutObj({...outObj,html:chtm});
}

export default buildHTML;