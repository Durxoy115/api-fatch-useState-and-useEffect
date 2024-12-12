import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlag] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                const findCountry = data.find(country => country.name.common === 'Switzerland');
                const removeDublicateCountry = data.filter(country => country.name.common !== 'Switzerland');
                let newdata = [findCountry,...removeDublicateCountry    ]
                setCountries(newdata)
            });
    }, []);
    

    const handleVisitedCountries = (countryName) => {
        if (visitedCountries.includes(countryName)) {
            alert(`${countryName} is already in the visited countries list.`);
            return;
        }

        alert(`${countryName} has been added to your visited countries list.`);
        const newVisitedCountries = [...visitedCountries, countryName];
        setVisitedCountries(newVisitedCountries);
    };

    const handleVisitedFlags = flag => {
            const newVisitedFlag = [...visitedFlags, flag];
            setVisitedFlag(newVisitedFlag)
    }

    return (
        <div>
            <div className="flag">
                
                {
                    visitedFlags.map((flag,idx) => <img key={idx}  src={flag}></img>)
                }
            </div>
            <h3>Countries: {countries.length}</h3>
            <h3 style={{ color: 'yellow' }}>Visited Countries: {visitedCountries.length}</h3>

            <ul>
                {visitedCountries.map((countryName, index) => (
                    <li key={index}>{countryName}</li>
                ))}
            </ul>
                
            <div className="country-container">
                {countries.map((country) => (
                    <Country
                        key={country.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags = {handleVisitedFlags}
                        country={country}
                    />
                ))}
            </div>
        </div>
    );
};

export default Countries;
