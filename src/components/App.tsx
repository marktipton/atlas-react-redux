import Footer from "./Footer";
import Header from "./Header";
import Board from "./Board";
import { Provider } from "react-redux";
import { store } from "../store";


function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <Board />
        <Footer />
      </div>
    </Provider>

  );
}

export default App;
