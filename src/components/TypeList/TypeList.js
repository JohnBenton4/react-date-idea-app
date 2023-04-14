
import './TypeList.css';
import { useState } from "react";
import Type from '../Type/Type';


const options = ["recreational", "social", "relaxation"]

function TypeList({onSetType, type, isDisabled}) {
    const [selected, setSelected] = useState(options[0]);

    const submit = () => {
        console.log(selected);
        fetch(`https://www.boredapi.com/api/activity?type=${selected}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                onSetType(data);
            });
    };

    return (
        <>
            <form>
                <select className="typelist"
                    value={selected}
                    onChange={e => setSelected(e.target.value)}>
                    {options.map((value) => (
                        <option value={value} key={value}>
                            {value}
                        </option>
                    ))}
                </select>
                <br></br>
                <br></br>
                <button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" disabled={isDisabled} onClick={submit} >
                    
                    Submit
                </button>
            </form>
            <div >
           <Type  type={type} />

            </div>
        </>
    );
}

export default TypeList;
