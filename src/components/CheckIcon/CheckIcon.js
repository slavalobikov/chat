import React from 'react';
import checkedSVG from "../../assest/img/readed.svg";
import nocheckedSVG from "../../assest/img/noreaded.svg";
import PropTypes from "prop-types";
import Time from "../Time/Time";

const CheckIcon = ({isMe, isReaded}) => {
    return (
        <>
            {!!isMe && (isReaded
                ? <img src={checkedSVG} alt="checked message"/>
                : <img src={nocheckedSVG} alt="no checked message"/>)}
        </>
    );
};

Time.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
};


export default CheckIcon;