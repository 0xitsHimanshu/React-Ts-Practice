import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

function App() {
  // const items = ["New York", "San Fransisco", "Denver", "Berlin", "New Delhi"];
  // const handleSelectItem = (item: string) =>{
  // console.log(item);
  // }
  const text = "You could check in some other time";
  const [AlertVisiblity, setAlertVisiblity] = useState(false);

  return (
    <>
      <h1>Vite + React</h1>
      {/* <ListGroup items={items} heading={"Cities"} onSelectedItem={handleSelectItem}/> */}

      {AlertVisiblity && (
        <Alert text={text} onClick={() => setAlertVisiblity(false)}>
          Hello World!!!
        </Alert>
      )}

      <Buttons color="success" onClick={() => setAlertVisiblity(true)}>
        Dark
      </Buttons>
    </>
  );
}

export default App;
