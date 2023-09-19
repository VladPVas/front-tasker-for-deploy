import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { ApiInstance } from "../../utils/functions/ApiInstance";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";

export async function DeleteTagRequest(id: string) {
	try {
		await ApiInstance.delete(BASE_URL + `/tag/` + id, GetRequestHeader())
	} catch(error) {
		ErrorCatch(error)
	}
}