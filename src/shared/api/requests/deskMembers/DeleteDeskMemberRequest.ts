import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";
import { ApiInstance } from "../../utils/functions/ApiInstance";

export async function DeleteDeskMemberRequest(id: string) {
	try {
		await ApiInstance.delete(BASE_URL + `/desk_member/` + id, GetRequestHeader())
	} catch(error) {
		ErrorCatch(error)
	}
}