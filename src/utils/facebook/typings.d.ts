interface IFacebookSDK {
  makeLogin(): Promise<IFacebookUser | null>;
}

interface IFacebookConfig {
  graphVersion: string;
  appId: string;
  redirectUrl: string;
  appSecret: string;
  scopes: string[];
}

interface IFacebookUser {}
