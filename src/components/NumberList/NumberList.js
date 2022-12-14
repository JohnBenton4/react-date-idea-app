
import './NumberList.css';
import { useState } from "react";
import Numbers from '../Numbers/Numbers';

const options = ["1", "2", "3", "4", "5", "6"]

function NumberList({onSetParticipants, participants, isDisabled }) {
    const [selected, setSelected] = useState(options[0]);

    const submit = () => {
        console.log(selected);
        fetch(`https://www.boredapi.com/api/activity?participants=${selected}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                onSetParticipants(data);
            });
    };

    return (
        <>
            <form>
                <select className="numberlist"
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
                <button type="button" disabled={isDisabled} onClick={submit} className="btn btn-info">
                    Submit
                </button>
            </form>
            <div >
           <Numbers  participants={participants} />

            </div>
        </>
    );
}

export default NumberList;
