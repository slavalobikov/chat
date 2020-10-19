import React from 'react';


import './Home.scss'
import Message from "../../components/Messages/Message";

const Home = () => {
    return (
        <section className={'home'}>
            <Message
                avatar={'https://avatars.mds.yandex.net/get-zen_doc/60808/pub_5d28c47546f4ff00ac25f73d_5d28c4e925667300ad6aa0cd/scale_1200'}
                text = {'Салам Брут, как уничтожается флок в галасе? '}
                data = {'19.02 19:34'}
                username={'Егор Булаткин'}

            />
        </section>
    );
};

export default Home;