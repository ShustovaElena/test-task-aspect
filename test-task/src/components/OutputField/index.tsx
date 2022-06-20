import React from "react";
import './styles.css';
import { useAppSelector } from '../../store/hooks';
import { Drawer } from "../Drawer";

export const OutputField = () => {
    const content = useAppSelector((state) => state.content.data);

    return (
        <div className="Output">
            <Drawer contentData={content} />
        </div>
    );
};