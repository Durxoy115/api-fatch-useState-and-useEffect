    import { useState } from 'react';
    import './Country.css'
    const Country = ({country, handleVisitedCountries}) => {
        const {name, capital, languages,population, area, flags} = country;
        // Convert languages object to an array of values
        const languageList = languages ? Object.values(languages) : [];
        // console.log(languages,languageList);

        const [visited, setVisited]= useState(false);
        
        const handleVisited = ()=> {
            setVisited(!visited);
        };
       
        

        return (
            <div className='country'>
                <h3>Name: {name?.common || "Unknown"}</h3>
                <h4>Capital: {capital}</h4>
                <p>Population: {population}</p>
                <p>Area: {area}</p>
                <p>Languages: {languageList.length > 0 ? languageList.join(", ") : "No languages available"}</p>
                <img src={flags.png} alt="" />
                <button style={{margin: '5px', width: '100%'}} onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
                <button style={{width:'100%'}} onClick={() => handleVisitedCountries(country.name.common)}>Mark Visited</button>
                <div style={{ color: visited ? 'orange' : 'black' }}>
                {visited ? 'I have visited this country!' : 'I want to visit this country!'}
                </div>
                
            
            </div>
        );
    };

    export default Country;
