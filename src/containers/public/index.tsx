import React, { useCallback, useState } from "react";
import { ConditionalRender, Content } from "components";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import { Page } from "./enums";

const PublicContainer = () => {
  const [page, setPage] = useState<Page>(Page.Login);

  const handleChangePage = useCallback(async (page: Page) => {
    setPage(page);
  }, []);

  return (
    <Content center>
      <ConditionalRender condition={page === Page.Login}>
        <LoginPage changePage={handleChangePage} />
      </ConditionalRender>
      <ConditionalRender condition={page === Page.Register}>
        <RegisterPage changePage={handleChangePage} />
      </ConditionalRender>
    </Content>
  );
};

export default PublicContainer;
