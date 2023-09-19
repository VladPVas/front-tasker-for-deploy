import React from 'react';
import {Button} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {IconStyleSheet} from "../../../styles/IconStyleSheet";
import {HeaderButtonStyleSheet} from "../../../styles/HeaderButtonStyleSheet";

const ProfileButton = ({...props}) => {
    return (
        <Button
            style={HeaderButtonStyleSheet}
            icon={<UserOutlined style={IconStyleSheet}/>}
            {...props}
        />
    );
};

export default ProfileButton;