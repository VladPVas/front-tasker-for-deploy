import React, { CSSProperties, useEffect } from 'react';
import ToggleSiderButton from "../../shared/UI/Buttons/ToggleSiderButton/ToggleSiderButton";
import ProfileButton from "../../shared/UI/Buttons/ProfileButton/ProfileButton";
import ExitButton from "../../shared/UI/Buttons/ExitButton/ExitButton";
import { Header } from "antd/es/layout/layout";
import { Space } from "antd";
import { LabelStyleSheet } from "../../shared/styles/LabelStyleSheet";
import { observer } from 'mobx-react-lite';
import CurrentDesk from '../../shared/api/states/CurrentDesk';
import CurrentDeskMember from '../../shared/api/states/CurrentDeskMember';
import CurrentUser from '../../shared/api/states/CurrentUser';

const MyHeader = observer(() => {

    const DeskMemberInfo = () => {
        if (CurrentDesk.get() && CurrentDeskMember.get()) {
            return CurrentUser.get()?.username + ` : ` + CurrentDeskMember.get()?.authorityKey
        } else {
            return CurrentUser.get()?.username
        }
    }

    const MyHeaderStyleSheet: CSSProperties = {
        background: "#303030",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: "10px",
        paddingRight: "10px",
        height: "-moz-min-content"
    }

    return (
        <Header style={MyHeaderStyleSheet}>
            <Space align='baseline'>
                <ToggleSiderButton/>
                <Space size={"small"}/>
                <label style={LabelStyleSheet}>{CurrentDesk.get()?.name}</label>
                <label style={LabelStyleSheet}>{DeskMemberInfo()}</label>
            </Space>
            <Space align='baseline'>
                <ProfileButton/>
                <Space size={"small"}></Space>
                <ExitButton/>
            </Space>
        </Header>
    );
});

export default MyHeader;