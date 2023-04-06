import React, { useReducer, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Edit from './pages/Edit';
import New from './pages/New';
import Diary from './pages/Diary';

const reducer = (state, action) => {
  const newState =[];

  switch(action.type) {
    case 'INIT' : return action.data;

    case 'CREATE' : {
      newState = [...state, action.data];
      return newState;
      break;
    };

    case 'REMOVE' : {
      newState = state.filter((diary) => diary.id !== action.targetId);
      return newState;
      break;
    };

    case 'EDIT' : {
      newState = state.map((item) => item.id === action.data.id ? {...action.data} : item);
      return newState;
      break;
    };

    default : return state;
  }
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();


const dummyData = [
  {
    id:1,
    emotion:1,
    content:'Monday',
    date:1680759906162
  },
  {
    id:2,
    emotion:2,
    content:'Tuesday',
    date:1680759906163
  },
  {
    id:3,
    emotion:3,
    content:'Wednesday',
    date:1680759906164
  },
  {
    id:4,
    emotion:4,
    content:'Thursday',
    date:1680759906165
  },
  {
    id:5,
    emotion:5,
    content:'Friday',
    date:1680759906166
  }
]


function App() {

  console.log(new Date().getTime());

  const [data, dispatch] = useReducer(reducer, dummyData);
  const dataId = useRef(0);

  //CREATE

  const onCreate = (date, emotion, content) => {
    dispatch({type:'CREATE', data:{
      id: dataId,
      emotion,
      content,
      date: new Date(date).getTime()
    }})
    dataId.current +=1 ;
  }

  //REMOVE

  const onRemove = (targetId) => {
    dispatch({type : 'REMOVE', targetId})
  };

  //EDIT
  const onEdit = (targetId, date, emotion, content) => {
    dispatch({type:'EDIT', data : {
      id: targetId,
      date : new Date(date).getTime(),
      emotion,
      content
    }})
  }

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider 
      value={{
        onCreate, onEdit, onRemove
        }}>
        <BrowserRouter>
            <div className="App">
              {/* <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`}/> */}
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/diary/:id' element={<Diary />}/>
                <Route path='/new' element={<New />}/>
                <Route path='/edit' element={<Edit />}/>
              </Routes>
            </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>

  );
}

export default App;
