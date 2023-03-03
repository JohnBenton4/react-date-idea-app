import './Search.css';
import React, { useState } from 'react';
import {secret} from '../../secret.js'

function Search({activity}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [dates, setDates] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    const submit = (event) => {
        event.preventDefault();
console.log(secret)
        fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${activity}&location=${searchTerm}`, {
            method: "GET",
            headers: { "Authorization": `${secret.secretAPIKey}` }
        })
            .then((response) => response.json())
            .then((data) => {
                const dates = data.businesses;
                setDates(dates);
                setHasSearched(true);
            });
    };

    const renderDates = () => {
        if (!hasSearched) {
            return "";
        }
         if (!dates.length) {
            return "Sorry";
        }
        return (
            <div className="css">
                {dates.map((date) => (
                    <div className="result" key={date.id}>{date.name} </div>
                ))}
            </div>
        );
    };
    return (
        <>
            <form onSubmit={submit}>
                <label className="find">
                    Find a Date Idea Near YOU!:
                    <br></br>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                    ></input>
                </label>
                {/* <input type="submit"></input> */}
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
            <div className="search">{renderDates()}
            </div>
        </>
    );
    
}

export default Search;
