import { TagDTO } from "../../../types/interfaces/DTO/TagDTO";
import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { ApiInstance } from "../../utils/functions/ApiInstance";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";

export async function CreateTagRequest(tag: TagDTO) {
	try {
		await ApiInstance.post(BASE_URL + `/tag`, tag, GetRequestHeader())
	} catch(error) {
		ErrorCatch(error)
	}
} 