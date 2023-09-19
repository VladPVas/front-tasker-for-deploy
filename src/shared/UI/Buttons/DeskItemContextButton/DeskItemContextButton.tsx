import { EllipsisOutlined } from "@ant-design/icons"
import { Dropdown, MenuProps } from "antd"
import { DeskDTO } from "../../../types/interfaces/DTO/DeskDTO"
import { useState } from "react"
import CurrentDeskMember from "../../../api/states/CurrentDeskMember"
import CurrentDesk from "../../../api/states/CurrentDesk"
import CurrentUser from "../../../api/states/CurrentUser"
import { GetDeskMemberByIdRequest } from "../../../api/requests/deskMembers/GetDeskMemberByIdRequest"
import { DeskMemberDTO } from "../../../types/interfaces/DTO/DeskMemberDTO"
import css from '../DeskItemContextButton/DeskItemContextButton.module.css'

interface DeskItemContextButtonProps {
	deskItem: DeskDTO
}

const DeskItemContextButton: React.FC<DeskItemContextButtonProps> = ({deskItem: desk}) => {
	const [deskItem, setDeskItem] = useState<DeskDTO>(desk)

	const EDIT_KEY = '1'
	const DELETE_KEY = '2'

	const handleButtonClick = async (id: string) => {

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

	const handleMenuClick: MenuProps['onClick'] = (e) => {
		switch (e.key) {
			case EDIT_KEY:
				// EDIT_MODAL
				break;

			case DELETE_KEY:
				// DELETE_MODAL
				break;

			default:
				break;
		}
	}

	const items: MenuProps['items'] = [
		{
			key: EDIT_KEY,
			label: 'Edit',
		},
		{
			key: DELETE_KEY,
			label: 'Delete'
		}
	];

	const menuProps = {
		items,
		onClick: handleMenuClick,
	};

	return (
		<Dropdown.Button
			className={css.button}
			icon={<EllipsisOutlined />}
			menu={menuProps}
			onClick={() => handleButtonClick(desk.id)}
		>
			{desk.name}
		</Dropdown.Button>
	)
}

export default DeskItemContextButton

// -------------------------------------------------------------------------
		// <Dropdown>
		// 	<EllipsisOutlined />
		// </Dropdown>

		// <div>
		// 	<EllipsisOutlined />
		// </div>

	// 	render: (record: any) => (
	// 		<GDropdown
	// 			dropdownRender={() => <>{actionMenu(record)}</>}
	// 			placement="bottomRight"
	// 			arrow={{ pointAtCenter: true }}
	// 			trigger={['click']}
	// 		>
	// 			<GButton icon={<EllipsisOutlined />} />
	// 		</GDropdown>

	// 		const actionMenu = (record: any) => (
	// 			<GMenu
	// 			items={[
	// 			{
	// 				key: 'edit',
	// 				label: translation.common.CommonEditLabel.value,
	// 				icon: <EditOutlined />,
	// 				onClick: () => {
	// 				showModal(record.fullItem);
	// 				},
	// 			},
	// 			{
	// 				key: 'delete',
	// 				danger: true,
	// 				icon: <DeleteOutlined />,
	// 				label: translation.common.CommonDeleteLabel.value,

	// 				onClick: () =>
	// 					modal.confirm({
	// 						icon: <CloseCircleOutlined style={{ fontSize: '20px', color: '#ff4d4f' }} />,
	// 						title: translation.common.CommonModalWarningTitle.value,
	// 						content: translation.common.CommonModalWarningDeleteContent.value,
	// 						okType: 'danger',
	// 						okText: translation.common.CommonModalWarningDeleteOkText.value,
	// 						cancelText: translation.common.CommonModalWarningDeleteCancelText.value,
	// 						cancelButtonProps: { className: css.g_button },

	// 						onOk: async () => {
	// 							await dispatch(deleteProfileFieldAction({ list: [record.key] }));
	// 							uptadeFilter();
	// 						},
	// 						keyboard: true,
	// 				}),
	// 			},
	// 			]}
	// 			/>
	// 		);