import React from 'react';
import {Button} from "antd";
import {ExportOutlined} from "@ant-design/icons";
import {IconStyleSheet} from "../../../styles/IconStyleSheet";
import {HeaderButtonStyleSheet} from "../../../styles/HeaderButtonStyleSheet";

const ExitButton = ({...props}) => {
    return (
        <Button
            style={HeaderButtonStyleSheet}
            icon={<ExportOutlined style={IconStyleSheet}/>}
            {...props}
        />
    );
};

export default ExitButton;