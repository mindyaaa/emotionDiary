import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Edit from './pages/Edit';
import New from './pages/New';
import Diary from './pages/Diary';
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <MyHeader 
          headText={'헤더입니드'}
          leftChild={<MyButton text={'왼쪽 버튼'} />}
          rightChild={<MyButton text={'오른쪽 버튼'} />}
           />
          <h1>MINDY</h1>

          <MyButton
          text={'버트은'}
          type={'positive'}
          onClick={() => console.log('버튼클릭!')}
           />

          <MyButton
          text={'버트은'}
          type={'negative'}
          onClick={() => console.log('버튼클릭!')}
           />

          <MyButton
          text={'버트은'}
          onClick={() => console.log('버튼클릭!')}
           />

          {/* <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`}/> */}
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/diary/:id' element={<Diary />}/>
            <Route path='/new' element={<New />}/>
            <Route path='/edit' element={<Edit />}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
