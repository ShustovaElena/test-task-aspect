import React from "react";
import './styles.css';
import { IElement } from "../../types";
import { checkValue } from "../Panel";

export const Label = (data: IElement) => {
    const { caption, visible } = data.props;

    return (
        <span
            className="label"
            style={{
                visibility: checkValue(visible) ? 'visible' : 'hidden'
            }}>
                {caption}
        </span>
    );
};