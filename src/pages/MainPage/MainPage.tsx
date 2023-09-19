import React, {useEffect} from 'react';
import MyHeader from "../../widgets/MyHeader/MyHeader";
import {Layout} from "antd";
import MySider from '../../widgets/MySider/MySider';
import MyContent from '../../widgets/MyContent/MyContent';
import CurrentUser from '../../shared/api/states/CurrentUser';
import UserDeskList from '../../shared/api/states/UserDeskList';
import '../MainPage/MainPage.css'

const MainPage = () => {

    async function initFetch() {
        await CurrentUser.fetch()
        await UserDeskList.fetch()
    }

    useEffect(() => {
        initFetch()
    }, [])

    return (
        <Layout className='main'>
            <MyHeader/>
            <Layout hasSider className='lower'>
                <MySider/>
                <MyContent/>
            </Layout>
        </Layout>
    );
};

export default MainPage;
