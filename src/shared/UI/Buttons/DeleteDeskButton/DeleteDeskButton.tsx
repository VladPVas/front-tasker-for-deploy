import React from 'react';
import {Button} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

const DeleteDeskButton = () => {
    return (
        <Button
            icon={<DeleteOutlined />}
        />
    );
};

export default DeleteDeskButton;