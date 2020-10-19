import React from 'react';
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns';
/*
var formatDistanceToNow = require('date-fns/formatDistanceToNow')
*/
/*
import  distanceInWordsToNow  from '.date-fns/distance_in_words_to_now';
*/


import './Messages.scss'

const Message = ({avatar, text, username, data}) => {
    return (
        <div className={'message'}>
           <div className="message__avatar">
               <img
                   src={avatar}
                   alt={`Avatar ${username}`}/>
           </div>
            <div className="message__content">
                <div className="message__bubble">
                    <p className={'message__bubble__text'}>{text}</p>
                </div>
                <span className={'message__content__date'}>
                    {formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true })}
                </span>
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
}

export default Message;