import React from "react";
import './styles.css';
import { CONTENT } from '../../constants';

export const OutputField = () => {
    return (
        <div className="Output">
            <div 
                className="panel" 
                style={{
                    width: CONTENT[0].props.width, 
                    height: CONTENT[0].props.height,
                    visibility: CONTENT[0].props.visible ? 'visible' : 'hidden'
                }}>
            </div>

            <span
                className="label"
                style={{
                    visibility: CONTENT[1].props.visible ? 'visible' : 'hidden'
                }}>
                    {CONTENT[1].props.caption}
            </span>

            <button 
                className="button"
                style={{
                    width: CONTENT[2].props.width, 
                    height: CONTENT[2].props.height,
                    visibility: CONTENT[2].props.visible ? 'visible' : 'hidden'
                }}>
                    {CONTENT[2].type}
            </button>
        </div>
    );
};