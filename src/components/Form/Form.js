import React from "react";
import './Form.css';

const Form = props => (
    <div className="form-div">
        <form className="form" onSubmit={props.getWeather}>
            <input className="city-input" type="text" name="city" placeholder="Search place..." />
            <button className="search-btn">Search</button>
        </form>
    </div>
);

export default Form;