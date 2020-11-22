import React, { useRef, useState} from 'react';
import PropTypes from 'prop-types'
import  classNames  from 'classnames'


import Time from "../Time/Time";
import CheckIcon from "../CheckIcon/CheckIcon";
import AudioMessage from "../AudioMessage/AudioMessage";
import AudioPlay from "../AudioMessage/audioPlay";
import './Messages.scss'




const Message = ({avatar, text, username, data, isMe, isReaded, attachments, isTyping, audio}) => {

    const [isPlay, setPlay] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);


    const [progress, setCurrentProgress] = useState(0);
    const audioElem = useRef(null);



    const togglePlay = () => {
        if (!isPlay) {
            audioElem.current.play();
            setPlay(true);

        } else {
            audioElem.current.pause();
            setPlay(false);
        }
    };









    return (

        <div className={classNames('message', {
            'message--isme' : isMe,
            'message-is-typing' : isTyping,
            'message-image':!!attachments && attachments.length === 1,
            'message-is-audio': !!audio,
        }

            )}>
            {!!audio && <AudioPlay
                setPlay={setPlay}
                setCurrentTime={setCurrentTime}
                setCurrentProgress={setCurrentProgress}
                audioElem={audioElem}
                audio={audio}

            />}
           <div className="message__avatar">
               <img
                   src={avatar}
                   alt={`Avatar ${username}`}/>
           </div>


            <div className="message__content">

                    <CheckIcon isMe={isMe} isReaded={isReaded} />

                    <div className="message__info">

                        {  (audio || isTyping || text) &&
                        <div className={'dima'}>
                        <div className="message__bubble">



                    {!!text && <p className={'message__bubble__text'}>{text}</p>}
                    {isTyping
                    && <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>}
                            {!!audio && <AudioMessage
                                togglePlay={togglePlay}
                                progress={progress}
                                currentTime={currentTime}
                                isPlay={isPlay}
                            />}
                </div>
                        </div>}
                        <div className="message__attachments">

                            {attachments && attachments.map((item, index) => (
                                <div key={index} className={'message__attachments__item'}>
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
    audio: PropTypes.string,
}

export default Message;