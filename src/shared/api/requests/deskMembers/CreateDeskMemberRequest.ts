import { DeskMemberDTO } from "../../../types/interfaces/DTO/DeskMemberDTO";
import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { ApiInstance } from "../../utils/functions/ApiInstance";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";

export async function CreateDeskMemberRequest(deskMember: DeskMemberDTO) {
	try {
		await ApiInstance.post(BASE_URL + `/desk_member`, deskMember, GetRequestHeader())
	} catch(error) {
		ErrorCatch(error)
	}
}