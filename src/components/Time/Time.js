import React from 'react';
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns';

const Time = ({data}) => {
    return (
        <>
            {formatDistanceToNow(data)}
        </>
    );
};

Time.propTypes = {
    data: PropTypes.string,
};

export default Time;