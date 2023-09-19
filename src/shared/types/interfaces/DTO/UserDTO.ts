import { ERoleKey } from "../../enums/ERoleKey";

export interface UserDTO {
	id?: string,
	username?: string,
	roleKey?: ERoleKey
}