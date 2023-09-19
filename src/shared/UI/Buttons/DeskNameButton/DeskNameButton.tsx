import React from 'react';
import {Button} from "antd";
import CurrentDesk from '../../../api/states/CurrentDesk';
import { observer } from 'mobx-react-lite';
import CurrentDeskMember from '../../../api/states/CurrentDeskMember';
import CurrentUser from '../../../api/states/CurrentUser';
import { GetDeskMemberByIdRequest } from '../../../api/requests/deskMembers/GetDeskMemberByIdRequest';
import { DeskMemberDTO } from '../../../types/interfaces/DTO/DeskMemberDTO';

interface DeskNameButtonProps {
    DeskName: string,
    DeskId: string
}
const DeskNameButton: React.FC<DeskNameButtonProps> = observer(({DeskName, DeskId}) => {

    const HandleOnClick = async (id: string) => {

        await CurrentDesk.fetch(id)
        
        
        const requestBody: string | undefined = CurrentUser.get()?.id
        const requestTemp: string[] | undefined = CurrentDesk.get()?.memberIds
        
        if (requestBody && requestTemp) {
            const promises = requestTemp.map(value => GetDeskMemberByIdRequest(value));
            const members = (await Promise.all(promises)).filter(member => member) as DeskMemberDTO[];
            console.log(members);
            const currentDeskMember = members.find(value => value.userId === requestBody)

            if (currentDeskMember) {
                CurrentDeskMember.set(currentDeskMember);
            } else throw new Error("Not found Current desk member");
        }
    }

    return (
        <Button
            className='button'
            onClick={() => HandleOnClick(DeskId)}
        >
            {DeskName}
        </Button>
    );
});

export default DeskNameButton;