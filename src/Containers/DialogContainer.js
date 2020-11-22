import React, {useState} from 'react';
import Dialogs from "../components/Dialogs/Dialogs";

const DialogsContainer = ({items}) => {

    const [inputValue, setValue] = useState('');
    const [filtred, setFiltredItems] = useState(Array.from(items));


    const onChangeInput = value => {
        setFiltredItems(items.filter(dialog => dialog.user.fullname.indexOf(value) >= 0))
        setValue(value)
    }

    return (
        <Dialogs items={filtred} onSearch={onChangeInput} inputValue={inputValue} />
    );
};

export default DialogsContainer;