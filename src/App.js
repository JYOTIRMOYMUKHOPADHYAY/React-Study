import './App.css';
import Recipe from "./Recipe"
function App() {
  return (
    <div>
      <header >
       <Recipe title="pasta"
          ingredients={['flour', 'water']}
          instructions="Mix ingredients"
          img="spaghetti.jpg"
          />
      </header>
    </div>
  );
}

export default App;
