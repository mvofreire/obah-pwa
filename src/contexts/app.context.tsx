import React, { useCallback, useContext, useState } from "react";
import { Modal } from "antd";
import { setStorage, getStorage, clearStorage } from "utils/storage";
import config from "config";
import { loadLoggedUserInformation } from "services/user.service";
import { useHistory } from "react-router-dom";
import { IUser } from "interfaces/IUser";

interface AppContextValue {
  session: {} | null;
  user: IUser | null;
  setUserSession: (session: any) => void;
  logoutUser: () => void;
  setUserInformation: (user: IUser) => void;
}

const AppContext = React.createContext({} as AppContextValue);
const AppContextProvider: React.FunctionComponent = ({ children }) => {
  const [session, setSession] = useState(getStorage(config.storageKey));
  const [user, setUser] = useState<IUser | null>(
    getStorage(config.storageUserKey) as IUser | null
  );
  const history = useHistory();

  const setUserSession = useCallback(async (userSession) => {
    setSession(userSession);
    setStorage(config.storageKey, userSession);

    const userInformation = await loadLoggedUserInformation();
    setUser(userInformation);
    setStorage(config.storageUserKey, userInformation);
  }, []);

  const setUserInformation = useCallback(async (userInformation) => {
    setUser(userInformation);
    setStorage(config.storageUserKey, userInformation);
  }, []);

  const logoutUser = useCallback(() => {
    Modal.confirm({
      title: "Ahhh!!!",
      content: "Deseja realemente sair?",
      okText: "Sair",
      cancelText: "Fechar",
      centered: true,
      onOk() {
        setSession(null);
        setUser(null);
        clearStorage();

        history.replace("/");
      },
    });
  }, [history]);

  return (
    <AppContext.Provider
      value={{
        session,
        setUserSession,
        logoutUser,
        user,
        setUserInformation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppContextProvider };
