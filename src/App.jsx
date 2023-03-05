import React, { useEffect, useState } from "react";
import { Provider } from "rxdb-hooks";
import AppRouter from "./components/AppRouter";
import { db } from "./services";
import MessengerService from "./services/MessengerService";

const App = () => {
  const [dbState, setDbState] = useState();

  useEffect(() => {
    if (localStorage.getItem("token") !== undefined) {
      MessengerService.init();
    } else {
      MessengerService.destruct();
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await db.createInstance();

      setDbState(db.rx);
    };

    init();
  }, []);

  return (
    <Provider db={dbState}>
      <AppRouter />
    </Provider>
  );
};

export default App;
