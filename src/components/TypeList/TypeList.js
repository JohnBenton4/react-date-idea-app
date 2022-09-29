
import './TypeList.css';
import { useState } from "react";
import Type from '../Type/Type';


const options = ["recreational", "social", "relaxation"]

//line below would be where onSetType would be passed in
function TypeList({onSetType, type, isDisabled}) {
    const [selected, setSelected] = useState(options[0]);
    // const [type, setType] = useState({})
    //add another const that renames the above so it can be used in App.js
    //insead of living here it lives in App/js  

    const submit = () => {
        console.log(selected);
        fetch(`https://www.boredapi.com/api/activity?type=${selected}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                onSetType(data);
                //This above would be a onSetType (a prop instead of what is currently there),
            });
    };

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