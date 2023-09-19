export interface TaskDTO_RequestBody {
	id?: string,
	name?: string,
	description?: string,
	creatorId?: string,
	taskGroupId?: string | null,
	memberIds?: string[],
	tagIds?: string[],
	createdAt?: string,
	untilDate?: string,
	position?: number
}