
import './NumberList.css';
import { useState } from "react";
import Numbers from '../Numbers/Numbers';


const options = ["1", "2", "3", "4", "5", "6"]

function NumberList({onSetParticipants, participants, isDisabled }) {
    const [selected, setSelected] = useState(options[0]);
    // const [participants, setParticipants] = useState({})

    const submit = () => {
        console.log(selected);
        fetch(`https://www.boredapi.com/api/activity?participants=${selected}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                onSetParticipants(data);
            });
    };
    //some sort of object structure can do the $
    //store the dollar sign as the value, line 35(ish) - (option.map)
    return (
        <>
            <form>
                <select
                    value={selected}
                    onChange={e => setSelected(e.target.value)}>
                    {options.map((value) => (
                        <option value={value} key={value}>
                            {value}
                        </option>
                    ))}
                </select>
                <button type="button" disabled={isDisabled} onClick={submit}>
                    Submit
                </button>
            </form>
            <div className="participants">
           <Numbers  participants={participants} />

            </div>
        </>
    );
}

export default NumberList;
