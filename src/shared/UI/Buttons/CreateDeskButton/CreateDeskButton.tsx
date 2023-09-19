import React from 'react';
import '../../Buttons/CreateDeskButton/CreateDeskButton.css'
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";

const CreateDeskButton = () => {

    // TODO добавить модалку добавление доски
    const handleClick = () => {

    }


    return (
        <PlusOutlined
            className={"createDeskButton"}
            onClick={handleClick}/>
    );
};

export default CreateDeskButton;