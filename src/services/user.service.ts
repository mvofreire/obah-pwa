import request from "utils/request";

export const loadLoggedUserInformation = () => {
  return request.get("/me");
};
