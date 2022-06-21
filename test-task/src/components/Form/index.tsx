import React, { useState } from "react";
import { FIRST_ELEMENT } from "../../constants";
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
                if (typeof obj[key] === 'object') {
                    cloneObj[key] = getDeepCopy(obj[key]);
                    continue;
                } else {
                    cloneObj[key] = obj[key];
                }
            }
        }
    
        return cloneObj;
    }

    const changeValue = (contentData: IElement[]) => {
        try {
            const objNum = Number(arr.shift()?.match(/\d+/)?.[FIRST_ELEMENT]);

                if (arr[FIRST_ELEMENT] && (arr[FIRST_ELEMENT].match(/\d+/)?.[FIRST_ELEMENT])) {

                    if (!contentData[objNum].content && typeof JSON.parse(value) === 'object') {
                        contentData[objNum].content = [];
                    } else {
                        const newData = contentData[objNum].content as IElement[]
                        changeValue(newData);
                    }
                }

            const updateObjKey = arr.pop() as string;

            if (arr.length !== FIRST_ELEMENT) {
                const innerKey = arr[FIRST_ELEMENT] as never;
                const newObj = contentData[objNum as number];
                const innerObj = newObj[innerKey] as object;
                const newObjValue = {[updateObjKey]: value};
                const result = {...newObj, [innerKey]: {...innerObj, ...newObjValue}};
                contentData[objNum] = result;
            } 
            else {
                contentData[objNum].content?.push(JSON.parse(value));
            }
        } catch(error: any) {
            if (error.name === 'SyntaxError') {
                console.log('Не верный формат данных! Введите, например, {"type": "button", "props": {"caption": "test", "visible": "true"}}');
            }
            if (error.name === 'TypeError') {
                console.log('Элемента по данному пути не существует');
            }
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