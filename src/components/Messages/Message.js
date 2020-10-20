import React from 'react';
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns';
import  classNames  from 'classnames'


import checkedSVG from './../../assest/img/readed.svg';
import nocheckedSVG from './../../assest/img/noreaded.svg';
/*
import { rulocale } from 'date-fns/locale/ru'
*/
/*
var formatDistanceToNow = require('date-fns/formatDistanceToNow')
*/
/*
import  distanceInWordsToNow  from '.date-fns/distance_in_words_to_now';
*/


import './Messages.scss'

const Message = ({avatar, text, username, data, isMe, isReaded, attachments}) => {
    return (

        <div className={classNames('message', {'message--isme' : isMe})}>
           <div className="message__avatar">
               <img
                   src={avatar}
                   alt={`Avatar ${username}`}/>
           </div>
            <div className="message__content">
                {isMe && (isReaded
                    ? <img src={checkedSVG} alt="checked message"/>
                    : <img src={nocheckedSVG} alt="no checked message"/>)}

                    <div className="message__info">
                <div className="message__bubble">
                    <p className={'message__bubble__text'}>{text}</p>
                </div>
                        <div className="message__attachments">

                            {attachments && attachments.map(item => (
                                <div key={item} className={'message__attachments__item'}>
                                    <img className={'dialogImage'}  src={item.url} alt={item.filename}/>
                                </div>
                            ))}
                        </div>

                        <span className={'message__content__date'}>
                    {formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true,    })}
                </span>
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
}

export default Message;