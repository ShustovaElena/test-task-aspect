import React from "react";
import './styles.css';
import { IElement } from "../../types";
import { Drawer } from "../Drawer";

export const checkVisible = (props: string | boolean) => {
    if (typeof props === 'string') {
        return JSON.parse(props);
    } if (typeof props === 'boolean') {
        return props;
    }
};

export const Panel = (data: IElement) => {
    const { width, height, visible } = data.props;

    return (
        <div 
            className="panel" 
            style={{
                width: width, 
                height: height,
                visibility: checkVisible(visible) ? 'visible' : 'hidden'
            }}>
            {data.content && <Drawer contentData={data.content} />}
        </div>
    );
};