import React from 'react';
import orderBy from 'lodash/orderBy';
import isToday from 'date-fns/isToday';


import Dialog from "../DialogItem/Dialog";


const Dialogs = ( {items} ) => {
    
    console.log(items)
    return (
        <div className="dialogs">
            {orderBy(items, ['created'], ['desc']).map(item => (
                    <Dialog
                        key={item._id}
                        text={item.text}
                        created={item.created}
                        message={item.message}
                        user={item.user}   />
                )
            )}
        </div>

    );
};

export default Dialogs;