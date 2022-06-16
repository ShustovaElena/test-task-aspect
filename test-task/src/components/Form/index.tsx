import React from "react";
import './styles.css';

export const Form = () => {
    return (
        <form className="Form">
            <div className="input">
                <label htmlFor="path">Путь</label>
                <input className="Text-field" type='text' id="path"/>
            </div>

            <div className="input">
                <label  htmlFor="newValue">Новое значение</label>
                <input className="Text-field" type='text' id="newValue" />
            </div>

            <input className="Submit" type="submit" value="Применить" />
        </form>
    );
};