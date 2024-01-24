import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListGroup from './components/ListGroup'

function App() {
  const items = ["New York", "San Fransisco", "Denver", "Berlin", "New Delhi"]; 
  const handleSelectItem = (item: string) =>{
    console.log(item);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ListGroup items={items} heading={"Cities"} onSelectedItem={handleSelectItem}/>
    </>
  )
}

export default App
