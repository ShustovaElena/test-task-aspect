import React from "react";
import './styles.css';
import { IElement } from "../../types";
import { checkVisible } from "../Panel";

export const Button = (data: IElement) => {
    const { width, height, caption, visible } = data.props;

    return (
        <button 
            className="button"
            style={{
                width: width, 
                height: height,
                visibility: checkVisible(visible) ? 'visible' : 'hidden'
            }}>
                {caption}
        </button>
    );
};