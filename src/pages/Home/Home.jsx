import React from 'react';


import './Home.scss'
import Message from "../../components/Messages/Message";

const Home = () => {
    return (
        <section className={'home'}>
            <Message
                avatar={'https://avatars.mds.yandex.net/get-zen_doc/60808/pub_5d28c47546f4ff00ac25f73d_5d28c4e925667300ad6aa0cd/scale_1200'}
                text = {'Салам Брут, как уничтожается флок в галасе? '}
                data = {'Mon Oct 19 2020 13:56:31 GMT+0300 (Moscow Standard Time)'}
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
                data = {'19.02 19:34'}
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

        </section>
    );
};

export default Home;