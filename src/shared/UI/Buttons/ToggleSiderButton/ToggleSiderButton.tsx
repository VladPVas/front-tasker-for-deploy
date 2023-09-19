import { Button } from "antd";
import { HeaderButtonStyleSheet } from "../../../styles/HeaderButtonStyleSheet";
import { observer } from 'mobx-react-lite';
import CollapseSider from '../../../api/states/CollapseSider';
import FazeToggleSiderIcon from './FazeToggleSiderIcon';

const ToggleSiderButton = observer(() => {

    const HandleOnClickChange = () => {
        CollapseSider.toggle()
    }


    return (
        <Button
            onClick={() => HandleOnClickChange()}
            style={HeaderButtonStyleSheet}
        >
            <FazeToggleSiderIcon/>
        </Button>
    );
});

export default ToggleSiderButton;