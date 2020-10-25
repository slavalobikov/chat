import React from 'react';
import classNames from 'classnames'
import format from "date-fns/format";
import isToday from 'date-fns/isToday'



import Time from "../Time/Time";
import CheckIcon from "../CheckIcon/CheckIcon";
import './Dialog.scss'



const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format(new Date(created_at), 'HH:mm')
    } else {
        return format(new Date(created_at), 'dd.MM.yyyy')
    }
};


const Dialog = ({user, message, text, created  } ) => {


    return (
        <div className={classNames('dialogs__item' , {
          'dialogs__item-online' : user.isOnline,
        }
        )}>
            <div className="dialogs__item__avatar ">
                <img src={user.ava || 'https://sun9-47.userapi.com/A_7qEQsvcowPScHL105H48sFFVsSJvR0Zn4_9A/fhgbWPdZNJE.jpg'}
                     alt={`ava ${user.fullname}`}/>
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    <span>{/*<Time data={new Date()} />*/}
                        {getMessageTime(created)}
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{text}</p>
                    <div className={classNames("dialogs__item-info-bottom-read", {
                        "dialogs__item-info-bottom-count": message.isRededNewMessageForYou,
                    })}>
                        { !message.isRededNewMessageForYou ? <CheckIcon isMe={true} isReaded={message.isReded} /> : <span>{message.unreaded}</span>   }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Dialog;