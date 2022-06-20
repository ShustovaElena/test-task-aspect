import React, { useState } from "react";
import { useAppSelector,useAppDispatch } from '../../store/hooks';
import { changeContent } from '../../store/slices/ContentSlice';
import { IElement } from "../../types";
import './styles.css';

export const Form = () => {
    const [path, setPath] = useState('');
    const [value, setValue] = useState('');
    const content = useAppSelector((state) => state.content.data);
    const dispatch = useAppDispatch();
    const arr = path.split('.');

    function getDeepCopy(obj: any) {
        let cloneObj: any = {};
    
        if (Array.isArray(obj)) {
            cloneObj = [];
        }

        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key as never] === 'object') {
                    cloneObj[key] = getDeepCopy(obj[key]);
                    continue;
                } else {
                    cloneObj[key as never] = obj[key as never];
                }
            }
        }
    
        return cloneObj;
    }

    const changeValue = (contentData: IElement[]) => {
        try {
        const objNum = Number(arr.shift()?.match(/\d+/)?.[0]);
        if ((arr[0].match(/\d+/)?.[0])) {
            const newData = contentData[objNum].content as IElement[]
            changeValue(newData);
        }

        const updateObjKey = arr.pop() as string;

        if (arr.length === 1) {
            const innerKey = arr[0] as never;
            const newObj = contentData[objNum as number];
            const innerObj = newObj[innerKey] as object;
            const newObjValue = {[updateObjKey]: value};
            const result = {...newObj, [innerKey]: {...innerObj, ...newObjValue}};
            contentData[objNum] = result;
            console.log('result', result);
        }

        console.log('contentData', contentData);
        console.log('content', content);
    } 
    catch(error) {
        console.log(error);
    }
    };

    const handleChangePath = (event: React.ChangeEvent) => {
        setPath((event.target as HTMLInputElement).value);
    }

    const handleChangeValue = (event: React.ChangeEvent) => {
        setValue((event.target as HTMLInputElement).value);
    }
    
    const handleSubmit = (event: React.FormEvent) => {
        const updateObj = getDeepCopy(content);
        changeValue(updateObj);
        dispatch(changeContent(updateObj));
        event.preventDefault();
    }

    return (
        <form className="Form" onSubmit={(e) => handleSubmit(e)}>
            <div className="input">
                <label htmlFor="path">Путь</label>
                <input 
                    className="Text-field" 
                    type='text' id="path"
                    value={path} 
                    onChange={handleChangePath}
                />
            </div>

            <div className="input">
                <label htmlFor="newValue">Новое значение</label>
                <input
                    className="Text-field" 
                    type='text' 
                    id="newValue"
                    value={value} 
                    onChange={handleChangeValue}
                />
            </div>

            <input className="Submit" type="submit" value="Применить" />
        </form>
    );
};