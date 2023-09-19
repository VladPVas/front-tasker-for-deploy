import { ERoleKey } from "../../enums/ERoleKey";

export interface RoleDTO {
	id?: number,
	key?: ERoleKey,
	authority?: string
}