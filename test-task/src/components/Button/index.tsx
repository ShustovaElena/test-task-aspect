import React from "react";
import './styles.css';
import { IElement } from "../../types";
import { checkValue } from "../Panel";

export const Button = (data: IElement) => {
    const { width, height, caption, visible } = data.props;

    return (
        <button 
            className="button"
            style={{
                width: checkValue(width as number), 
                height: checkValue(height as number),
                visibility: checkValue(visible) ? 'visible' : 'hidden'
            }}>
                {caption}
        </button>
    );
};