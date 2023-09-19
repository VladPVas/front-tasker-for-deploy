import React from 'react';
import {List} from "antd";
// import VirtualList from 'rc-virtual-list'
import DeskListItem from "./DeskListItem/DeskListItem";
import { DeskDTO } from '../../../types/interfaces/DTO/DeskDTO';
import css from '../DeskList/DeskList.module.css'
import CreateDeskButton from "../../Buttons/CreateDeskButton/CreateDeskButton";

interface DeskListProps {
    data?: DeskDTO[]
}

const DeskList: React.FC<DeskListProps> = ({data}) => {
    console.log(data)

    return (
        <List
            header={<CreateDeskButton/>}
            className={css.deskList}
            dataSource={data}
            renderItem={(item) => <DeskListItem desk={item} />}
        />
    );
};

export default DeskList;