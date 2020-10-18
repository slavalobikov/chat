import React from 'react'
import './Block.scss'
import classNames from 'classnames'

const Block = ({children, className}) => {

    return (
        <div className={'block'} className={classNames('block', className)}>
            {children}
        </div>
    )
}

export default Block;