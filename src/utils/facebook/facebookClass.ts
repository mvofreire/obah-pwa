class Facebook implements IFacebookSDK {
  private config: IFacebookConfig = {
    graphVersion: "v7.0",
    appId: "464444931019486",
    appSecret: "29f524bef0e747f790b9da2b527ba324",
    redirectUrl: "http://localhost:3000",
    scopes: [""],
  };
  private fb: fb.FacebookStatic = window.FB;

  constructor(config?: Partial<IFacebookConfig>) {
    this.config = {
      ...this.config,
      ...config,
    };
  }

  async makeLogin(): Promise<IFacebookUser | null> {
    return new Promise((resolve, reject) => {
      this.fb.login(function (loginResponse) {
        console.log(loginResponse);
        if (loginResponse.authResponse) {
          console.log("Welcome!  Fetching your information.... ");
          FB.api("/me", function (response) {
            console.log(response);
            resolve(null);
          });
        } else {
          reject("User cancelled login or did not fully authorize.");
        }
      });
    });
  }
}

export default Facebook;
