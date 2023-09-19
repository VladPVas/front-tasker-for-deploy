export interface TaskGroupDTO {
	id: string,
	name: string,
	description: string,
	deskId: string,
	taskIds?: string[],
	position: number
}