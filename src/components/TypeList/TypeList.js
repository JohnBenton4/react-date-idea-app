
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




// const encodedParams = new URLSearchParams();
// encodedParams.append("accessToken", "B5zGPqGxprwzPS5tqCB74TdLcdQp6hjqmTHLBOFrgafDr0mZ1siRiRuIO9d1SMvsOEAXx7tVFSursP_2xFL4pEjF6IqEhTNYyvYhpzlSxpLZ6fDqonMjmkJpIO8sY3Yx");

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Key': 'e586be0296mshd626650aaf80186p1b8480jsn6f5561770d79',
// 		'X-RapidAPI-Host': 'YelpAPIserg-osipchukV1.p.rapidapi.com'
// 	},
// 	body: encodedParams
// };

// fetch('https://yelpapiserg-osipchukv1.p.rapidapi.com/getBusinesses', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



//Address needed for the fetch
//https://api.yelp.com/v3/businesses/search?location=Atlanta