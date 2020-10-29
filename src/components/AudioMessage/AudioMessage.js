import React from 'react';
import wave from "../../assest/img/wave.svg";
import convertCurrentTime from "../../utils/helpler/convertCurrentTime";

const AudioMessage = ({togglePlay, progress, currentTime, isPlay }) => {




    return (
        <div className={'message__bubble__audio'}>

            <div className="message__bubble__audio-progress">

                <div className="message__bubble__audio-info">
                    <button onClick={togglePlay} >
                        {!!isPlay
                            ? <img
                                className={'pause'} src="https://img.icons8.com/metro/26/000000/pause.png"
                                alt={'Pause'}

                            />
                            : <img
                                className={'play'}
                                src="https://img.icons8.com/metro/26/000000/play.png"
                            />
                        }

                    </button>
                </div>
                <div className="message__bubble__audio-wave">
                    <img src={wave} alt="wave"/>
                    <div
                        style={{width: progress + '%'}}
                        className="message__bubble__audio-pr">

                    </div>
                </div>
                <span className={'message__bubble__audio-duration'} >
                                        {convertCurrentTime(currentTime)}
                                    </span>
            </div>


        </div>
    );
};

export default AudioMessage;