import React, { useContext, useState } from "react";
import GlobalContext from "../context/global-context";
import "../styles/topBar.scss";
import {Link} from 'react-router-dom'

const TopBar = () => {
  const { element, setElement } = useContext(GlobalContext);
  //const {setEffects}=useContext(GlobalContext);
  const [type, setType] = useState("");
  const Inp = () => {
    if (type === "element") {
      return (
        <select value={element} onChange={(e) => setElement(e.target.value)}>
          <option value="-1">Select Element</option>
          <option value="nav">Navbar</option>
          <option value="hero">Hero</option>
          <option value="card">Card</option>
          <option value="container">Container</option>
          <option value="footer">Footer</option>
        </select>
      );
    } else if (type === "effect") {
      return (
        <select onChange={(e) => e.target.value} disabled>
          <option value="-1">Select Effect</option>
          <option value="test">test</option>
        </select>
      );
    }
  };
  return (
    <div className="TopBar">
      <div>
        <h3><Link to='/Landing'>CodePort</Link></h3>
      </div>
      <div>
        <div className="select">
          {/* <label htmlFor="Type">Component Type</label> */}
          <select name="Type" onChange={(e) => setType(e.target.value)}>
            <option value="-1">Select Type</option>
            <option value="element" >Element</option>
            <option value="effect">Effect</option>
          </select>
        </div>
        <div className="select">
          <Inp />
        </div>
      </div>
      <div>
        <input type="text" placeholder='#000000' />
      </div>
    </div>
  );
};

export default TopBar;
