import React, {useState} from 'react';
import {Input} from "antd";
import {SmileOutlined, CameraOutlined, AudioOutlined, ArrowRightOutlined} from '@ant-design/icons';

import './ChatInput.scss'


const ChatInput = () => {

    const [value, setValue] = useState('')

    return (
        <div className="chat__input" >
            <div className="chat__input__smile-btn">
                <SmileOutlined/>
            </div>
            <Input size={'large'}
                   onChange={(e) => setValue( e.target.value )}
                   value={value}
                placeholder={'Введите текст сообщения'}

            />
            <div className="chat__input__actions">
                <CameraOutlined className={`icons camera`}  />
                {!value && <AudioOutlined className={'icons send'}/>}
                {!!value && <ArrowRightOutlined className={'icons send'}/>}
                <SmileOutlined className={'icons smiles'} />
            </div>
        </div>
    );
};

export default ChatInput;