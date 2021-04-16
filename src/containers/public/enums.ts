export enum Page {
  Login,
  Register,
}

export enum EmailValidation {
  Denied,
  Allowed,
  NotChecked,
}

export const ErrorMessage = {
  email: "E-mail não existe ainda.",
  password: "Parece que a senha esta errada.",
  registerError:
    "Parece que estamos com uma instalbilidade, tente novamente mais tarde!",
};
