import React from 'react';
import {Button} from "antd";
import { DeskDTO } from '../../../types/interfaces/DTO/DeskDTO';

interface ConfirmCancelButtonProps {
    ButtonText: string,
    ButtonHandle: ConfirmCancelButtonHandle
}



type AddHandle = (newDesk: DeskDTO) => void
type CancelHandle = () => void
export type ConfirmCancelButtonHandle = AddHandle | CancelHandle

const ConfirmCancelButton: React.FC<ConfirmCancelButtonProps> = ({ButtonText, ButtonHandle}) => {
    return (
        <Button onClick={() => ButtonHandle}>
            {ButtonText}
        </Button>
    );
};

export default ConfirmCancelButton;