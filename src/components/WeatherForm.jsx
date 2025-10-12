import React, {useState} from "react";
const WeatherForm = ({ onSearch }) => {
    const[city,setcity] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(city) {
            onSearch(city);
            setcity("");
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <input 
             type = "text"
             placeholder="Enter city"
             value={city}
             onChange={ (e) => setcity(e.target.value)}/>
             <button type = "submit">Search</button>
        </form>
    );
};

export default WeatherForm;