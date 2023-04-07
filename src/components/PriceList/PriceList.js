
import './PriceList.css';
import { useState } from "react";
import Price from '../Price/Price';

let $ = "0";
let $$ = "0.1";
let $$$ = "0.2";
let $$$$ = "0.3";
let $$$$$ = "0.4";

const options = ["$", "$$", "$$$", "$$$$", "$$$$$"]
// const options = ["0", "0.1", "0.2", "0.3", "0.4"]

function PriceList({onSetPrice, price, isDisabled }) {
    const [selected, setSelected] = useState(options[0]);

    const submit = () => {
        console.log(selected);
        fetch(`https://www.boredapi.com/api/activity?price=${selected}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                onSetPrice(data);
            });
    };
   
    return (
        <>
            <form>
                <select className="pricelist"
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
            <div>
           <Price  price={price} />

            </div>
        </>
    );
}

export default PriceList;
