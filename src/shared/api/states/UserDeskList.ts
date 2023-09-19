import { makeAutoObservable } from "mobx";
import { GetAllDesksForUserRequest } from "../requests/desks/GetAllDesksForUserRequest";
import { DeskDTO } from "../../types/interfaces/DTO/DeskDTO";

const EXAMPLE_DATA = [
  {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "string",
    "description": "string",
    "creatorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "memberIds": [
      "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    ],
    "taskGroupIds": [
      "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    ],
    "tagIds": [
      "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    ]
  },
	{
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "12211221",
    "description": "string",
    "creatorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "memberIds": [
      "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    ],
    "taskGroupIds": [
      "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    ],
    "tagIds": [
      "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    ]
  },
	{
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "3123123123",
    "description": "string",
    "creatorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "memberIds": [
      "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    ],
    "taskGroupIds": [
      "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    ],
    "tagIds": [
      "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    ]
  },
	{
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "string",
    "description": "string",
    "creatorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "memberIds": [
      "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    ],
    "taskGroupIds": [
      "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    ],
    "tagIds": [
      "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    ]
  },
	{
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "string",
    "description": "string",
    "creatorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "memberIds": [
      "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    ],
    "taskGroupIds": [
      "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    ],
    "tagIds": [
      "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    ]
  }
]

class UserDeskList {

	private data: DeskDTO[] = []

	constructor() {
		makeAutoObservable(this)
	}

	async fetch() {
		const response = await GetAllDesksForUserRequest()
		if (response)
			this.data = response
	}

	get() {
		return this.data
	}
}

export default new UserDeskList()