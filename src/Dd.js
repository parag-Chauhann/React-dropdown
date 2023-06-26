import "./dropdown.css"
import { useState } from "react";

const Dropdown = () => {

    const [mouseEnter, setMouseEnter] = useState(false);
    const [content] = useState(['Yes', 'Probably not']);
    const [value, setValue] = useState('');

    const onClickHandeler = (e) => {
        setValue(e.target.textContent);
        setMouseEnter(false);
    }

    const onMouseHover = () => {
        setMouseEnter(!mouseEnter);
    }

    const results = content.map((result, index) => {
        return <a href="#" onClick={onClickHandeler} key={index}>{result}</a>;
    })

    return (
        <div className="dropdown">
            <h1>Should you use a dropdown?</h1>
            <h3>{value}</h3>
            <button className="dropbtn" onMouseEnter={onMouseHover}>Select</button>
            <div className="dropdown-content" style={{ display: `${mouseEnter ? 'block' : 'none'}` }}>
                {results}
            </div>
        </div>
    );
}

export default Dropdown;