import React from 'react';
import {Dropdown, MenuProps} from "antd";
import {DeleteOutlined, EditOutlined, EllipsisOutlined} from "@ant-design/icons";

interface EditDeleteDropdownProps {
    item: any;

}

const EditDeleteDropdown: React.FC<EditDeleteDropdownProps> = ({item}) => {

    //TODO onCLick del and edit modal

    const items: MenuProps['items'] = [
        {
            key: "edit",
            label: "Edit",
            icon: <EditOutlined/>
        },
        {
            key: "delete",
            label: "Delete",
            icon: <DeleteOutlined/>
        },
    ]


    return (
        <Dropdown
            trigger={["click"]}
            menu={{items}}
        >
            <EllipsisOutlined style={{color: "#FFFF", fontSize: "20px"}}/>
        </Dropdown>

    );
};

export default EditDeleteDropdown;