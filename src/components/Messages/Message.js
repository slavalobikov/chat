import React from 'react';
import PropTypes from 'prop-types'
import  classNames  from 'classnames'


import './Messages.scss'
import Time from "../Time/Time";
import CheckIcon from "../CheckIcon/CheckIcon";

const Message = ({avatar, text, username, data, isMe, isReaded, attachments, isTyping}) => {
    return (

        <div className={classNames('message', {
            'message--isme' : isMe,
            'message-is-typing' : isTyping,
            'message-image':!!attachments && attachments.length === 1,
        }

            )}>
           <div className="message__avatar">
               <img
                   src={avatar}
                   alt={`Avatar ${username}`}/>
           </div>


            <div className="message__content">

                    <CheckIcon isMe={isMe} isReaded={isReaded} />

                    <div className="message__info">
                        {(isTyping || text) && <div className="message__bubble">
                    {!!text && <p className={'message__bubble__text'}>{text}</p>}
                    {isTyping
                    && <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>}
                </div>}
                        <div className="message__attachments">

                            {attachments && attachments.map(item => (
                                <div key={item} className={'message__attachments__item'}>
                                    <img className={'dialogImage'}  src={item.url} alt={item.filename}/>
                                </div>
                            ))}
                        </div>

                        {!!data && <span className={'message__content__date'}>
                            <Time data={data} />
{/*
                    {formatDistanceToNow(new Date(), { addSuffix: true,    })}
*/}
                </span>}
                    </div>

            </div>



        </div>


    );
};

Message.defaulProps = {
    user: {}
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    username: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool,
}

export default Message;