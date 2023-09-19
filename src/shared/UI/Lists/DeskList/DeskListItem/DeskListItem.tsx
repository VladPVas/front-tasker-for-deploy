import React from 'react';
import {DeskDTO} from '../../../../types/interfaces/DTO/DeskDTO';
import {List} from 'antd';
import EditDeleteDropdown from "../../../Dropdown/EditDeleteDropdown";
import CurrentDesk from "../../../../api/states/CurrentDesk";
import CurrentUser from "../../../../api/states/CurrentUser";
import {GetDeskMemberByIdRequest} from "../../../../api/requests/deskMembers/GetDeskMemberByIdRequest";
import CurrentDeskMember from "../../../../api/states/CurrentDeskMember";
import {DeskMemberDTO} from "../../../../types/interfaces/DTO/DeskMemberDTO";

interface DeskListItemProps {
    desk: DeskDTO
}

const DeskListItem: React.FC<DeskListItemProps> = ({desk}) => {

    const handleButtonClick = async (id: string) => {

        await CurrentDesk.fetch(id)

        const requestBody: string | undefined = CurrentUser.get()?.id
        const requestTemp: string[] | undefined = CurrentDesk.get()?.memberIds

        if (requestBody && requestTemp) {
            const promises = requestTemp.map(value => GetDeskMemberByIdRequest(value));
            const members = (await Promise.all(promises)).filter(member => member) as DeskMemberDTO[];
            const currentDeskMember = members.find(value => value.userId === requestBody)

            if (currentDeskMember) {
                CurrentDeskMember.set(currentDeskMember);
            } else throw new Error("Not found Current desk member");
        }
    }

    return (
        <List.Item
            onClick={() => handleButtonClick(desk.id)}
            actions={[<EditDeleteDropdown item={desk}/>]}>
            <span style={{
                color: "#FFFF",
                paddingLeft: "10px",
                fontSize: "18px",
                cursor: "pointer",
                transition: "0.35s"
            }}>{desk.name}</span>
        </List.Item>
    );
};

export default DeskListItem;

//-----------------------------------------------------------------------------------
// <div className='deskListItem'>
//     <div className='mainButton'>
//         <DeskNameButton DeskName={desk.name} DeskId={desk.id}/>
//     </div>
//     <div className='buttons'>


//         {/* <EditDeskButton/>
//         <DeleteDeskButton/> */}
//     </div>
// </div>