import React from 'react';
import {TeamOutlined, FormOutlined, EllipsisOutlined} from '@ant-design/icons';
import { Input } from 'antd';


import './Home.scss'
import Message from "../../components/Messages/Message";
import Dialogs from "../../components/Dialogs/Dialogs";


const { Search } = Input;
const onSearch = value => console.log(value);

const Home = () => {
    return (
        <section className={'home'}>
            <div className="chat">
                <div className="chat__sidebar">
                    <div className="chat__sidebar-header">
                        <div>

                        <TeamOutlined className={'users'}  />
                            <span>Список диалогов</span>
                        </div>
                        <FormOutlined className={'edit'} />
                    </div>
                    <div className={'chat__sidebar-search'}>
                        <Search
                            placeholder="Поиск среди контактов"
                            allowClear
                            onSearch={onSearch}
                            /*
                                                    style={{ width: 200, /!*margin: '0 10px'*!/ }}
                            */
                        />
                    </div>
                    <div className="chat__sidebar-dialogs">
                        <Dialogs
                            items={
                                [
                                    {
                                        "_id": "5f9c1ba623ffc3010eab2673",
                                        "text": "Eu dolore elit culpa nostrud reprehenderit commodo est amet mollit fugiat sit commodo. Deserunt eiusmod et non nisi incididunt amet nisi officia amet mollit. Cupidatat in velit in aute labore aliquip.",
                                        "created": "Tue Sep 15 1987 06:25:56 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "5f9c1ba6934f9b0ce93cfa0b",
                                            "fullname": "Laurel Brooks",
                                            "ava": null
                                        },
                                        "message": {
                                            "isReded": false,
                                            "isRededNewMessageForYou": false,
                                            "unreaded": 14
                                        }
                                    },
                                    {
                                        "_id": "5f9c1ba6654c1de57e1a7310",
                                        "text": "Incididunt culpa sit voluptate aliqua laborum. Proident aliqua quis veniam ex eiusmod pariatur commodo in laboris laborum ea non consectetur. Adipisicing ipsum nostrud est reprehenderit nisi magna anim esse incididunt non est.",
                                        "created": "Sat Jul 26 2003 13:35:20 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "5f9c1ba6f1a521eb9b8f4291",
                                            "fullname": "Frederick Clemons",
                                            "ava": null
                                        },
                                        "message": {
                                            "isReded": false,
                                            "isRededNewMessageForYou": false,
                                            "unreaded": 14
                                        }
                                    },
                                    {
                                        "_id": "5f9c1ba69691f19e76c0f26e",
                                        "text": "Culpa consectetur quis mollit proident tempor magna adipisicing deserunt fugiat proident sunt. Consectetur duis anim voluptate sit excepteur aliqua occaecat pariatur. Reprehenderit Lorem laboris aute fugiat esse elit fugiat deserunt elit eiusmod adipisicing.",
                                        "created": "Sun Mar 23 1986 06:29:05 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "5f9c1ba6f61ee3e71ae8d41e",
                                            "fullname": "Berg Cantrell",
                                            "ava": null
                                        },
                                        "message": {
                                            "isReded": false,
                                            "isRededNewMessageForYou": false,
                                            "unreaded": 0
                                        }
                                    },
                                    {
                                        "_id": "5f9c1ba60074e7d93ee2a10a",
                                        "text": "Magna excepteur aliquip veniam adipisicing nulla sunt ex ut aute. Pariatur aliquip in ullamco sint reprehenderit excepteur culpa nostrud. Anim velit est enim nisi officia aute ipsum id fugiat.",
                                        "created": "Sun Mar 09 2003 12:59:16 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "5f9c1ba60cc493966ff570e6",
                                            "fullname": "Clarke Gallagher",
                                            "ava": null
                                        },
                                        "message": {
                                            "isReded": false,
                                            "isRededNewMessageForYou": false,
                                            "unreaded": 7
                                        }
                                    },
                                    {
                                        "_id": "5f9c1ba64193f3e67f24e80b",
                                        "text": "Ipsum dolore minim sint laboris ut nulla exercitation. Cupidatat et dolor laborum voluptate est aute ut eu dolor pariatur proident labore. Ea qui cillum est Lorem aliquip non magna laboris duis consectetur.",
                                        "created": "Mon Jan 10 1972 19:23:08 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "5f9c1ba69e0d360731db68e9",
                                            "fullname": "Annabelle Rivas",
                                            "ava": null
                                        },
                                        "message": {
                                            "isReded": false,
                                            "isRededNewMessageForYou": false,
                                            "unreaded": 12
                                        }
                                    },
                                    {
                                        "_id": "5f9c1ba6f5a24578b9ae4d65",
                                        "text": "Do tempor duis occaecat et reprehenderit officia reprehenderit voluptate deserunt nisi nulla et eiusmod. Velit mollit aliquip aliquip fugiat sint laborum mollit est consequat Lorem dolor occaecat sint. Mollit ea ex commodo ad.",
                                        "created": "Tue Apr 07 1970 13:53:39 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "5f9c1ba6da7d6ad8c6798edc",
                                            "fullname": "Hollie Kline",
                                            "ava": null
                                        },
                                        "message": {
                                            "isReded": false,
                                            "isRededNewMessageForYou": false,
                                            "unreaded": 18
                                        }
                                    },
                                    {
                                        "_id": "5f9c1ba6e03267d1b15262f6",
                                        "text": "Enim sunt excepteur ea aliquip consequat pariatur. Aliqua fugiat duis officia ad incididunt laborum cillum. Anim consectetur tempor elit in.",
                                        "created": "Fri Jul 05 2013 08:21:12 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "5f9c1ba6cc640ffb593643ca",
                                            "fullname": "Ola Pugh",
                                            "ava": null
                                        },
                                        "message": {
                                            "isReded": false,
                                            "isRededNewMessageForYou": false,
                                            "unreaded": 18
                                        }
                                    },
                                    {
                                        "_id": "5f9c1ba618abbc107b0ec10a",
                                        "text": "Dolor sunt elit tempor esse laborum non do. Eiusmod anim velit non ea cupidatat deserunt cillum ea dolor minim et reprehenderit cillum. Esse deserunt sit proident consectetur esse ea laboris duis aliqua exercitation.",
                                        "created": "Thu Oct 16 1997 11:44:13 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "5f9c1ba69785c51c5d023ec3",
                                            "fullname": "Millie Rasmussen",
                                            "ava": null
                                        },
                                        "message": {
                                            "isReded": false,
                                            "isRededNewMessageForYou": false,
                                            "unreaded": 15
                                        }
                                    },
                                    {
                                        "_id": "5f9c1ba6d1cbfb8d019482ed",
                                        "text": "Laborum ullamco qui ex nisi do duis commodo qui excepteur officia proident. Ipsum exercitation aute deserunt pariatur. Id irure Lorem elit consectetur eu cupidatat laborum.",
                                        "created": "Wed Apr 20 1983 01:04:38 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "5f9c1ba610ec485c0bf27484",
                                            "fullname": "Rose Mcbride",
                                            "ava": null
                                        },
                                        "message": {
                                            "isReded": false,
                                            "isRededNewMessageForYou": false,
                                            "unreaded": 5
                                        }
                                    },
                                    {
                                        "_id": "5f9c1ba693763959d9a451ba",
                                        "text": "Ea velit deserunt reprehenderit nostrud. Velit deserunt ut sit aliquip pariatur enim laborum duis commodo pariatur reprehenderit. Commodo officia duis et voluptate laboris tempor ad et nisi laborum excepteur cupidatat nulla.",
                                        "created": "Fri Nov 17 1989 19:31:00 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "5f9c1ba60ca17c6969d15c85",
                                            "fullname": "Barton Castillo",
                                            "ava": null
                                        },
                                        "message": {
                                            "isReded": false,
                                            "isRededNewMessageForYou": false,
                                            "unreaded": 4
                                        }
                                    },
                                    {
                                        "_id": "5f9c1ba6952377450c938e30",
                                        "text": "Ea enim sunt elit velit aliqua id proident magna duis qui excepteur amet cillum sint. Irure et nostrud sunt laboris cillum excepteur veniam exercitation qui qui sint ut proident in. In ad voluptate exercitation eiusmod proident sint cillum esse pariatur.",
                                        "created": "Tue Jan 25 1972 04:42:27 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "5f9c1ba658ab2d724a5555a0",
                                            "fullname": "Chandra Hyde",
                                            "ava": null
                                        },
                                        "message": {
                                            "isReded": false,
                                            "isRededNewMessageForYou": false,
                                            "unreaded": 17
                                        }
                                    },
                                    {
                                        "_id": "5f9c1ba696fa11b26f631fce",
                                        "text": "Adipisicing deserunt nisi pariatur veniam occaecat sint cupidatat nostrud cupidatat excepteur ex amet veniam. Reprehenderit laborum enim amet quis minim anim voluptate ullamco magna occaecat ad et. Reprehenderit ex aute reprehenderit voluptate.",
                                        "created": "Sat Aug 01 2020 13:13:37 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "5f9c1ba6b64c86f82c7dd9f8",
                                            "fullname": "Reese Garcia",
                                            "ava": null
                                        },
                                        "message": {
                                            "isReded": false,
                                            "isRededNewMessageForYou": false,
                                            "unreaded": 11
                                        }
                                    },
                                    {
                                        "_id": "5f9c1ba62a044d996103f540",
                                        "text": "Ad fugiat veniam cupidatat cillum amet id ex id. Commodo labore ullamco excepteur occaecat laboris officia magna incididunt esse sunt sunt labore. Fugiat labore nulla eiusmod mollit adipisicing laborum.",
                                        "created": "Fri Nov 06 1970 19:48:57 GMT+0000 (UTC)",
                                        "user": {
                                            "_id": "5f9c1ba6ac56086cb7e3a88e",
                                            "fullname": "Patterson Holland",
                                            "ava": null
                                        },
                                        "message": {
                                            "isReded": false,
                                            "isRededNewMessageForYou": false,
                                            "unreaded": 14
                                        }
                                    }
                                ]
                            }
                        />


                    </div>
                </div>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-fullname">Димасик Сага</b>
                            <div className="chat__dialog-header-status">
                                <div className="status status--online">Онлайн</div>
                            </div>
                        </div>
                        <EllipsisOutlined />
                    </div>
                    <div className="chat__dialog-messages">
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

                            ]} />

                        <Message
                            avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKA0jbPWp-MsSJYulCRw2jL55_m6watKdE5w&usqp=CAU'}
                            text = {'Салам Брут, как уничтожается флок в галасе? '}
                            data = {new Date()}
                            username={'Тимон'}
                            isMe={true}
                            isReaded={true} />

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
                            data={new Date(2014, 11, 20)}
                            audio={'https://cdn4.sefon.pro/files/prev/192/%D0%A2%D0%B8%D0%BC%D0%B0%20%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D1%85%20-%20%D0%92%D0%B5%D1%81%D0%BD%D1%83%D1%88%D0%BA%D0%B8%20%28192kbps%29.mp3'}
                        />
                        <Message
                            avatar={'https://avatars.mds.yandex.net/get-zen_doc/60808/pub_5d28c47546f4ff00ac25f73d_5d28c4e925667300ad6aa0cd/scale_1200'}
                            username={'Тимон'}
                            isMe={false}
                            isTyping={true} />

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Home;
/*
<Dialogs
    items={[
        {
            id: Math.random(),
            text:'Буду продолжать до тех пор, пока не найду того, кого не смогу победить» Томас Шелби',
            created: 'Fri Oct 22 2020 19:29:06 GMT+0300 (Moscow Standard Time)',
            message:{
                isReded: true,
                isRededNewMessageForYou: true,
                unreaded:3,
            },
            user:{
                fullname:'Сергей Шнитко',
                isOnline: false,
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
/!*
                isMe={false}
*!/

/>
<Message
    avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKA0jbPWp-MsSJYulCRw2jL55_m6watKdE5w&usqp=CAU'}
    text = {'Салам Брут, как уничтожается флок в галасе? '}
    data = {new Date()}
    username={'Тимон'}
    isMe={true}
    isReaded={true}
    /!*                attachments = {[
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

                    ]}*!/

/>
<Message
avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKA0jbPWp-MsSJYulCRw2jL55_m6watKdE5w&usqp=CAU'}
text = {'Салам Брут, как уничтожается флок в галасе? '}
data = {new Date()}
username={'Тимон'}
isMe={true}
isReaded={false}
/!*                attachments = {[
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

                ]}*!/

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
data={new Date(2014, 11, 20)}
audio={'https://cdn4.sefon.pro/files/prev/192/%D0%A2%D0%B8%D0%BC%D0%B0%20%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D1%85%20-%20%D0%92%D0%B5%D1%81%D0%BD%D1%83%D1%88%D0%BA%D0%B8%20%28192kbps%29.mp3'}
/>
<Message
    avatar={'https://avatars.mds.yandex.net/get-zen_doc/60808/pub_5d28c47546f4ff00ac25f73d_5d28c4e925667300ad6aa0cd/scale_1200'}
    username={'Тимон'}
    isMe={false}
    isTyping={true}
    /!*                attachments = {[
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

                    ]}*!/

/>*/
/*[
                                {
                                    id: Math.random(),
                                    text:'Буду продолжать до тех пор, пока не найду того, кого не смогу победить» Томас Шелби',
                                    created: 'Fri Oct 22 2020 19:29:06 GMT+0300 (Moscow Standard Time)',
                                    message:{
                                        isReded: true,
                                        isRededNewMessageForYou: true,
                                        unreaded:3,
                                    },
                                    user:{
                                        fullname:'Сергей Шнитко',
                                        isOnline: false,
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

                            ]*/


/*[
                                {
                                    id: Math.random(),
                                    text:'Буду продолжать до тех пор, пока не найду того, кого не смогу победить» Томас Шелби',
                                    created: 'Fri Oct 22 2020 19:29:06 GMT+0300 (Moscow Standard Time)',
                                    message:{
                                        isReded: true,
                                        isRededNewMessageForYou: true,
                                        unreaded:3,
                                    },
                                    user:{
                                        fullname:'Сергей Шнитко',
                                        isOnline: false,
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

                            ]*/