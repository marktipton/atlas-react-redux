import  Card  from "./Card";
import DeleteListButton from "./DeleteListButton";
import Footer from "./Footer";
import Header from "./Header";
import DeleteCardButton from "./DeleteCardButton";
import NewCardForm from "./NewCardForm";
import Board from "./Board";


function App() {
  return (
  <>
    <Header />
    <DeleteListButton />
    <DeleteCardButton />
    <NewCardForm />
    <Board />
    <Footer />
  </>

  );
}

export default App;
