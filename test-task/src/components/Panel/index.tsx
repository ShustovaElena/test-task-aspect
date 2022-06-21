import React from "react";
import './styles.css';
import { IElement } from "../../types";
import { Drawer } from "../Drawer";

export const checkValue = (props: string | boolean | number) => {
    if (typeof props === 'string') {
        return JSON.parse(props);
    } else {
        return props;
    }
};

export const Panel = (data: IElement) => {
    const { width, height, visible } = data.props;

    return (
        <div 
            className="panel" 
            style={{
                width: checkValue(width as number), 
                height: checkValue(height as number),
                visibility: checkValue(visible) ? 'visible' : 'hidden'
            }}>
            {data.content && <Drawer contentData={data.content} />}
        </div>
    );
};