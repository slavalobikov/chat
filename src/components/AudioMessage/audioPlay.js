import React from 'react';

const AudioPlay = ({setPlay, setCurrentProgress, setCurrentTime, audioElem, audio}) => {

    const timeUpdate = () => {

        setCurrentTime(audioElem.current.currentTime);
        const duration = audioElem.current && audioElem.current.duration || 0;
        setCurrentProgress( audioElem.current.currentTime / duration * 100);
    };

    return (
        <audio onEnded={() => {
            setPlay(false);
            setCurrentProgress(0);
            setCurrentTime(0);
        } }
               onTimeUpdate={timeUpdate}
               ref={audioElem}
               src={audio} preload={'auto'}  />


    );
};

export default AudioPlay;