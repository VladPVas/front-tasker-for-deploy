import React from 'react';
import {Input, Layout} from "antd";
import ConfirmCancelButton, { ConfirmCancelButtonHandle } from "../../Buttons/ConfirmCancelButton/ConfirmCancelButton";

interface SiderModalProps {
    FirstLabelText: string,
    SecondLabelText: string,
    FirstButtonText: string,
    SecondButtonText: string,
    FirstButtonHandle: ConfirmCancelButtonHandle,
    SecondButtonHandle: ConfirmCancelButtonHandle
}

export const CancelHandle = () => {
    
}

const SiderModal: React.FC<SiderModalProps> = ({
                                                    FirstLabelText,
                                                    SecondLabelText,

                                                    FirstButtonText,
                                                    SecondButtonText,

                                                    FirstButtonHandle,
                                                    SecondButtonHandle

                                                }) => {
    return (
        <Layout>
            <Layout>
                <label>{FirstLabelText}</label>
                <Input/>
            </Layout>
            <Layout>
                <label>{SecondLabelText}</label>
                <Input/>
            </Layout>
            <Layout>
                <ConfirmCancelButton ButtonText={FirstButtonText} ButtonHandle={FirstButtonHandle}/>
                <ConfirmCancelButton ButtonText={SecondButtonText} ButtonHandle={SecondButtonHandle}/>
            </Layout>
        </Layout>
    );
};

export default SiderModal;