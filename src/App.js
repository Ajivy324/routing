import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom';
import Start from './components/Start';
import Hello from './components/Hello'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/:word" element={<Hello/>}/>
        <Route path="/:word/:col/:bg" element={<Hello/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
