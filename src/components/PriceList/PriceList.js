
import './PriceList.css';
import { useState } from "react";
import Price from '../Price/Price';


const options = ["0", "0.1", "0.2", "0.3", "0.4"]
//$ = 0; $$ = 0.1; $$$ = 0.2; $$$$ = 0.3; $$$$$ = 0.4

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
                <button type="button" disabled={isDisabled} onClick={submit} class="btn btn-info">
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
