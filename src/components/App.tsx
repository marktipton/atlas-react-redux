import  Card  from "./Card";
import DeleteListButton from "./DeleteListButton";
import Footer from "./Footer";
import Header from "./Header";
import DeleteCardButton from "./DeleteCardButton";
import NewCardForm from "./NewCardForm";
import List from "./List";
import Board from "./Board";


function App() {
  return (
  <>
    <Header />
    <DeleteListButton />
    <Card />
    <DeleteCardButton />
    <NewCardForm />
    <List />
    <Board />
    <Footer />
  </>

  );
}

export default App;
