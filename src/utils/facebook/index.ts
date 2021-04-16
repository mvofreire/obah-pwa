//@ts-nocheck
import FacebookSDK from "./facebookClass";

let instance: IFacebookSDK;
export const makeLoginWithFacebook = async (): Promise<IFacebookUser> => {
  const data = await instance.makeLogin();
  return data;
};

const init = () => {
  instance = new FacebookSDK();
  return {};
};

export default init();
