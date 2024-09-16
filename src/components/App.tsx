import  Card  from "./Card";
import DeleteListButton from "./DeleteListButton";
import Footer from "./Footer";
import Header from "./Header";
import DeleteCardButton from "./DeleteCardButton";
import NewCardForm from "./NewCardForm";
import Board from "./Board";


function App() {
  return (
  <div className="h-full flex flex-col justify-between p-8 min-h-screen">
    <Header />
    <DeleteListButton />
    <DeleteCardButton />
    <NewCardForm />
    <Board />
    <Footer />
  </div>

  );
}

export default App;
