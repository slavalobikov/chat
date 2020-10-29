import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types'
import  classNames  from 'classnames'


import './Messages.scss'
import Time from "../Time/Time";
import CheckIcon from "../CheckIcon/CheckIcon";
import wave from '../../assest/img/wave.svg'



const Message = ({avatar, text, username, data, isMe, isReaded, attachments, isTyping, audio}) => {

    const [isPlay, setPlay] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setCurrentProgress] = useState(0);
    const audioElem = useRef(null);

    useEffect(() => {
        if (!audioElem.current) {
            return
        }

        audioElem.current.addEventListener('timeupdate', () => {

            setCurrentTime(Math.round(audioElem.current.currentTime));
            const duration = audioElem.current && audioElem.current.duration || 0;


            setCurrentProgress( audioElem.current.currentTime / duration * 100);
        })
    }, []);



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
            {!!audio && <audio ref={audioElem} src={audio} preload={'auto'}  />

            }
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
                            {!!audio &&
                            <div className={'message__bubble__audio'}>

                                <div className="message__bubble__audio-progress">

                                    <div className="message__bubble__audio-info">
                                        <button onClick={togglePlay}>
                                            {!!isPlay
                                                ? <img
                                                    className={'pause'} src="https://img.icons8.com/metro/26/000000/pause.png"
                                                    alt={'Pause'}
/*
                                                    onClick={() => setPlay(false)}
*/

                                                />
                                                : <img
                                                    className={'play'}
                                                    src="https://img.icons8.com/metro/26/000000/play.png"
/*
                                                    onClick={() => setPlay(true)}
*/
                                                />
                                            }

                                        </button>
                                    </div>
                                    <div className="message__bubble__audio-wave">
                                        <img src={wave} alt="wave"/>
                                    </div>
                                    <span className={'message__bubble__audio-duration'}>
                                        {currentTime}
                                    </span>
                                </div>


                            </div>}
                </div>
                        </div>}
                        <div className="message__attachments">

                            {attachments && attachments.map(item => (
                                <div key={item.id} className={'message__attachments__item'}>
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