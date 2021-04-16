import request from "utils/request";

export const makeLogin = (email: string, password: string) => {
  return request.post("/login", { email, password });
};

export const registerUser = (name: string, email: string, password: string) => {
  return request.post("/register/client", { name, email, password });
};

export const emailExists = (email: string) => {
  return request.post("/client/email-exists", { email });
};
