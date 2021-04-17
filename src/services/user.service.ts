import request from "utils/request";

export const loadLoggedUserInformation = () => {
  return request.get("/me");
};

export const changeUserImage = (image: File) => {
  return request.upload("/user/image", { image });
};
