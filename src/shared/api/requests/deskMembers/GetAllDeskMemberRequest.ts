import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";
import { ApiInstance } from "../../utils/functions/ApiInstance";

export async function GetAllDeskMemberRequest() {
	try {
		const response = await ApiInstance.get(BASE_URL + `/desk_member`, GetRequestHeader())
		return response.data
	} catch(error) {
		ErrorCatch(error)
	}
}