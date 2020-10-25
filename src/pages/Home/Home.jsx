import React from 'react';


import './Home.scss'
import Message from "../../components/Messages/Message";
import Dialogs from "../../components/Dialogs/Dialogs";

const Home = () => {
    return (
        <section className={'home'}>
            <Dialogs
                items={[
                    {
                        id: Math.random(),
                        text:'Буду продолжать до тех пор, пока не найду того, кого не смогу победить» Томас Шелби',
                        created: 'Fri Oct 22 2020 19:29:06 GMT+0300 (Moscow Standard Time)',
                        message:{
                        isReded: true,
                        isRededNewMessageForYou: false,
                        unreaded:3,
                    },
                        user:{
                            fullname:'Сергей Шнитко',
                            isOnline: true,
                            ava: null,
                     }
                    },
                    {
                        text:'Буду продолжать до тех пор, пока не найду того, кого не смогу победить» Томас Шелби',
                        created: 'Fri Oct 30 2020 19:29:06 GMT+0300 (Moscow Standard Time)',
                        message:{
                        isReded: true,
                        isRededNewMessageForYou: true,
                        unreaded:3,
                    },
                        user:{

                        fullname:'Сергей Шнитко',
                        isOnline: true,
                        ava: null,
                }}

                ]}
            />

            <Message
                avatar={'https://avatars.mds.yandex.net/get-zen_doc/60808/pub_5d28c47546f4ff00ac25f73d_5d28c4e925667300ad6aa0cd/scale_1200'}
                text = {'Салам Брут, как уничтожается флок в галасе? '}
                data = {new Date()}
                username={'Егор Булаткин'}
                attachments = {[
                    {
                        filename: 'image.jpg',
                        url: 'https://sun9-68.userapi.com/zsfC3P7xPw3gXxJtwwd9wkjOvyFJ5KZ2Dn5UXQ/pPLwx8JyOx8.jpg',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://sun9-74.userapi.com/EjHp-OKBuqTXp8wH3NeVEtO9OqVKIXVD_lZbmw/Z-qHgAo8OV4.jpg',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://sun9-74.userapi.com/EjHp-OKBuqTXp8wH3NeVEtO9OqVKIXVD_lZbmw/Z-qHgAo8OV4.jpg',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://sun9-74.userapi.com/CGMIh0tYhJ8YPldmQp_KqFLKFAf1G0Byz_7RpQ/ZUQaybBhaLA.jpg',
                    },

                ]}
/*
                isMe={false}
*/

            />
            <Message
                avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKA0jbPWp-MsSJYulCRw2jL55_m6watKdE5w&usqp=CAU'}
                text = {'Салам Брут, как уничтожается флок в галасе? '}
                data = {new Date()}
                username={'Тимон'}
                isMe={true}
                isReaded={true}
/*                attachments = {[
                    {
                        filename: 'image.jpg',
                        url: 'https://sun9-68.userapi.com/zsfC3P7xPw3gXxJtwwd9wkjOvyFJ5KZ2Dn5UXQ/pPLwx8JyOx8.jpg',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://sun9-74.userapi.com/EjHp-OKBuqTXp8wH3NeVEtO9OqVKIXVD_lZbmw/Z-qHgAo8OV4.jpg',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://sun9-74.userapi.com/EjHp-OKBuqTXp8wH3NeVEtO9OqVKIXVD_lZbmw/Z-qHgAo8OV4.jpg',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://sun9-74.userapi.com/CGMIh0tYhJ8YPldmQp_KqFLKFAf1G0Byz_7RpQ/ZUQaybBhaLA.jpg',
                    },

                ]}*/

            />
            <Message
                avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKA0jbPWp-MsSJYulCRw2jL55_m6watKdE5w&usqp=CAU'}
                text = {'Салам Брут, как уничтожается флок в галасе? '}
                data = {new Date()}
                username={'Тимон'}
                isMe={true}
                isReaded={false}
/*                attachments = {[
                    {
                        filename: 'image.jpg',
                        url: 'https://sun9-68.userapi.com/zsfC3P7xPw3gXxJtwwd9wkjOvyFJ5KZ2Dn5UXQ/pPLwx8JyOx8.jpg',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://sun9-74.userapi.com/EjHp-OKBuqTXp8wH3NeVEtO9OqVKIXVD_lZbmw/Z-qHgAo8OV4.jpg',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://sun9-74.userapi.com/EjHp-OKBuqTXp8wH3NeVEtO9OqVKIXVD_lZbmw/Z-qHgAo8OV4.jpg',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://sun9-74.userapi.com/CGMIh0tYhJ8YPldmQp_KqFLKFAf1G0Byz_7RpQ/ZUQaybBhaLA.jpg',
                    },

                ]}*/

            />

            <Message
                avatar={'https://avatars.mds.yandex.net/get-zen_doc/60808/pub_5d28c47546f4ff00ac25f73d_5d28c4e925667300ad6aa0cd/scale_1200'}
                username={'Тимон'}
                isMe={false}
                attachments = {[
                                    {
                                        filename: 'image.jpg',
                                        url: 'https://sun9-68.userapi.com/zsfC3P7xPw3gXxJtwwd9wkjOvyFJ5KZ2Dn5UXQ/pPLwx8JyOx8.jpg',
                                    },
                                ]}

            />
            <Message
                avatar={'https://avatars.mds.yandex.net/get-zen_doc/60808/pub_5d28c47546f4ff00ac25f73d_5d28c4e925667300ad6aa0cd/scale_1200'}
                username={'Тимон'}
                isMe={false}
                isTyping={true}
                /*                attachments = {[
                                    {
                                        filename: 'image.jpg',
                                        url: 'https://sun9-68.userapi.com/zsfC3P7xPw3gXxJtwwd9wkjOvyFJ5KZ2Dn5UXQ/pPLwx8JyOx8.jpg',
                                    },
                                    {
                                        filename: 'image.jpg',
                                        url: 'https://sun9-74.userapi.com/EjHp-OKBuqTXp8wH3NeVEtO9OqVKIXVD_lZbmw/Z-qHgAo8OV4.jpg',
                                    },
                                    {
                                        filename: 'image.jpg',
                                        url: 'https://sun9-74.userapi.com/EjHp-OKBuqTXp8wH3NeVEtO9OqVKIXVD_lZbmw/Z-qHgAo8OV4.jpg',
                                    },
                                    {
                                        filename: 'image.jpg',
                                        url: 'https://sun9-74.userapi.com/CGMIh0tYhJ8YPldmQp_KqFLKFAf1G0Byz_7RpQ/ZUQaybBhaLA.jpg',
                                    },

                                ]}*/

            />

        </section>
    );
};

export default Home;