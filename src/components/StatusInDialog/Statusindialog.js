import React from 'react';
import classNames from 'classnames'

const Statusindialog = ({online}) => {
    return (
        <div className={classNames('status',
            {'status--online': online})}>
            {online ? 'Онлайн' : 'офлайн'}
        </div>
    );
};



export default Statusindialog;