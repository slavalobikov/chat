import React from 'react';
import orderBy from 'lodash/orderBy';
import Dialog from "../DialogItem/Dialog";


import {Input} from 'antd';


const {Search} = Input;






const Dialogs = ( {items, onSearch, inputValue} ) => {
    
    return (
        <div className="dialogs">

            <div className={'chat__sidebar-search'}>
                <Search
                    placeholder="Поиск среди контактов"
                    allowClear
                    value={inputValue}
                    onChange={e => onSearch(e.target.value)}

                />

            </div>


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