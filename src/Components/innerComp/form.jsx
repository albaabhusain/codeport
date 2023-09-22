import React, { useContext } from 'react';
import GlobalContext from '../../context/global-context';


const Form = () => {

    const { element, property, setProperty, setspProperty, spProperty } = useContext(GlobalContext)
    const { height, width, color, background, unith, unitw } = property;
    const{type}=spProperty;
    const { alignment } = spProperty;
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setProperty({ ...property, [name]: value })

    }
    const handlespInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setspProperty({ ...spProperty, [name]: value })
        console.log(spProperty);

    }
    const submitHandleGeneral = (e) => {
        e.preventDefault();
    }

    const SpclForm = () => {
        if (element === 'nav') {
            return (
                <>
                    <div>
                        <label htmlFor="alignment">Alignment :</label>
                        <select type="select" name="alignment" value={alignment} onChange={handlespInput} >
                            <option value="space-around">Around</option>
                            <option value="space-between">Between</option>
                            <option value="center">Center</option>
                        </select>
                    </div>
                </>
            )
        }
        else if(element === 'card'){
            return (
                <>
                    <div>
                        <label htmlFor="type">Type :</label>
                        <select type="select" name="type" value={type} onChange={handlespInput} >
                            <option value="imgtxt" >Image & Text</option>
                            <option value="imgbtn">Image & Button</option>
                            <option value="icotxt">Icon & Text</option>
                            <option value="icobtn">Icon & Button</option>
                        </select>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <div className="generalForm">
                <form action="" onSubmit={submitHandleGeneral}>
                    <div>
                        <h3>Primary Properties</h3>
                    </div>
                    <div>
                        <label htmlFor="height">Height :</label>
                        <div>
                            <input type="text" name="height" value={height} onChange={handleInput} />
                            <select type="text" name="unith" id="inpUnith" className='inpUnits' value={unith} onChange={handleInput} >
                                <option value="px">px</option>
                                <option value="%">%</option>
                                <option value="vw">vw</option>
                                <option value="vh">vh</option>
                            </select>
                        </div>

                    </div>
                    <div>
                        <label htmlFor="width">Width :</label>
                        <div>
                            <input type="text" name="width" value={width} onChange={handleInput} />
                            <select type="select" name="unitw" id="inpUnitw" className='inpUnits' value={unitw} onChange={handleInput} >
                                <option value="px">px</option>
                                <option value="%">%</option>
                                <option value="vw">vw</option>
                                <option value="vh">vh</option>

                            </select>
                        </div>


                    </div>
                    <div>
                        <label htmlFor="color">Color :</label>
                        <div>
                            <div className='colorBox colordiv'>{color}</div>
                            <input type="color" name="color" value={color} onChange={handleInput} />
                        </div>

                    </div>
                    <div>
                        <label htmlFor="background">Background :</label>
                        <div>
                            <div className='bcolorBox colordiv'>{background}</div>
                            <input type="color" name="background" value={background} onChange={handleInput} />
                        </div>

                    </div>
                    
                    <div>
                    <h3>Secondary Properties</h3>
                    </div>
                    <>
                        <SpclForm />
                    </>
                    <input type="submit" className='submit-btn' value="Export" />
                </form>
            </div>
        </>
    );
}

export default Form;
