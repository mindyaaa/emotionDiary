import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Edit from './pages/Edit';
import New from './pages/New';
import Diary from './pages/Diary';
import RouterTest from './components/RouterTest';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <h1>MINDY</h1>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/diary' element={<Diary />}/>
            <Route path='/new' element={<New />}/>
            <Route path='/edit' element={<Edit />}/>
          </Routes>
          <RouterTest />
        </div>
    </BrowserRouter>
  );
}

export default App;
