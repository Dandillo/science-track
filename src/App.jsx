import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { initHubConnection } from "./modules/";
import store from "./index";
import { Outlet } from "react-router";

const App = () => {
  useEffect(() => {
    // Инициализация hubConnection при монтировании компонента
 
  }, []);

  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  );
};

export default App;
