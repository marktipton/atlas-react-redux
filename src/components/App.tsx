import Footer from "./Footer";
import Header from "./Header";
import Board from "./Board";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="">
          <Header />
          <Board />
          <Footer />
        </div>
      </PersistGate>
    </Provider>

  );
}

export default App;
