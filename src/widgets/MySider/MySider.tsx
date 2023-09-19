import Sider from "antd/es/layout/Sider";
import CreateDeskButton from "../../shared/UI/Buttons/CreateDeskButton/CreateDeskButton";
import DeskList from "../../shared/UI/Lists/DeskList/DeskList";
import { observer } from 'mobx-react-lite';
import UserDeskList from '../../shared/api/states/UserDeskList';
import '../MySider/MySider.css';
import CollapseSider from "../../shared/api/states/CollapseSider";

const MySider = observer(() => {


    return (
        <Sider style={{transition: "1s"}} collapsed={CollapseSider.get()} collapsedWidth={0}>
            <div className="mySider">
                <DeskList
                    data={UserDeskList.get()}/>
            </div>
        </Sider>
    );
});

export default MySider;