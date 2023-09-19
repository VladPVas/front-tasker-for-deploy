import { getAuth } from "../localStorage/auth";

export function GetRequestHeader() {
  return {
    headers: {
      Authorization: getAuth(),
    },
  };
}