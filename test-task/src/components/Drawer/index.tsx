import React from "react";
import { Panel } from '../Panel';
import { Label } from "../Label";
import { Button } from "../Button";
import { IElement } from "../../types";

interface IDrawer {
    contentData: IElement[],
}

export const Drawer: React.FC<IDrawer> = (props: IDrawer) => {
    const { contentData } = props;

    return (
        <>
            {contentData.map((item, index) => {
                if (item.type === 'panel') {
                    return <Panel key={index} {...item} />
                }

                if (item.type === 'label') {
                    return <Label key={index} {...item} />
                } 

                if (item.type === 'button') {
                    return <Button key={index} {...item} />
                }
            })}
        </>
    );
};