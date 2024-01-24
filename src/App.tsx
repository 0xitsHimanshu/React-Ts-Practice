import "./App.css";
// import ListGroup from './components/ListGroup'
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

function App() {
  // const items = ["New York", "San Fransisco", "Denver", "Berlin", "New Delhi"];
  // const handleSelectItem = (item: string) =>{
  // console.log(item);
  // }
  
  return (
    <>
      <h1>Vite + React</h1>
      {/* <ListGroup items={items} heading={"Cities"} onSelectedItem={handleSelectItem}/> */}

      <Alert>
        Hello <span>World!!!</span>
      </Alert>

      <Buttons color="success" onClick={()=>console.log("CLICKED")}>
        Dark
      </Buttons>
    </>
  );
}

export default App;
