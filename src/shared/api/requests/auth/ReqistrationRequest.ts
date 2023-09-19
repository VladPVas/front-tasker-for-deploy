import { SignUpRequestDTO } from "../../../types/interfaces/DTO/SignUpRequestDTO";
import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { ApiInstance } from "../../utils/functions/ApiInstance";

export async function ReqistrationRequest(request_body: SignUpRequestDTO) {
	try {
		await ApiInstance.post(BASE_URL + `/auth/sign/up`, request_body)
	} catch(error) {
		ErrorCatch(error)
	}
}