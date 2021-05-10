import { Route } from "react-router";
import "./App.css";
import Animals from './Components/Animals'

function App() {
  return (
    <div className="app">
      <Route path='/' component={Animals} />
    </div>
  );
}

export default App;
