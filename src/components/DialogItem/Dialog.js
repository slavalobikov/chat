import React from 'react';



import Time from "../Time/Time";
import CheckIcon from "../CheckIcon/CheckIcon";
import './Dialog.scss'

const Dialog = ({user, message,  isReaded } ) => {

    return (
        <div className={'dialogs__item dialogs__item-online'}>
            <div className="dialogs__item__avatar ">

{/*
                <img src={props.items[0].user.ava || 'https://sun9-47.userapi.com/A_7qEQsvcowPScHL105H48sFFVsSJvR0Zn4_9A/fhgbWPdZNJE.jpg'} alt={`${user.fullname} avatar`}/>
*/}
                <img src="https://sun9-47.userapi.com/A_7qEQsvcowPScHL105H48sFFVsSJvR0Zn4_9A/fhgbWPdZNJE.jpg" alt=""/>
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
{/*
                    <b>{user.fullname}</b>
*/}                     <b>Сергей Шнитко</b>
                    <span>{/*<Time data={new Date()} />*/} 17:32 </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>Какя цитата Славик блят...Какя цитата Славик блят...Какя цитата Славик блят...</p>
                    <div className="dialogs__item-info-bottom-count">
3
{/*
                        <CheckIcon isMe={true} isReaded={true} />
*/}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialog;