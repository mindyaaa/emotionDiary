import React, { useState } from 'react';
import MyButton from './MyButton';
import { useNavigate } from 'react-router-dom';


const sortOptionList = [
    {value : 'latest', name : '최신순'},
    {value : 'oldest', name : '오래된순'}
];

const filterOptionList = [
    {value : 'all', name : '전부다'},
    {value : 'good', name : '좋은 감정만'},
    {value : 'bad', name : '안좋은 감정만'}
];

const ControlMenu = ({value, onChange, optionList}) => {
    return <select
    className='ControlMenu'
    value={value}
    onChange={(e) => onChange(e.target.value)}
    >
        {optionList.map((item,index) => 
        <option
        value={item.value}
        key={index}
        >{item.name}</option>)}
    </select>
}

export default function DiaryList({diaryList}) {

    const navigate = useNavigate();


    const [sortType, setSortType] = useState('latest');
    const [filter, setFilter] = useState('all');

    const getProcessedDiaryList = () => {

        const filterCallback = (item) => {
            if(filter === 'good') {
                return parseInt(item.emotion) <=3;
            } else {
                return parseInt(item.emotion) >3;
            }
        }
        const compare = (a,b) => {
            if(sortType ==='latest') {
                return parseInt(b.date) - parseInt(a.date);
            } else return parseInt(a.date) - parseInt(b.date);
        }
        const copyList = JSON.parse(JSON.stringify(diaryList));
        const filteredList = filter === "all" ? copyList : copyList.filter((item) => filterCallback(item));

        const sortedList = filteredList.sort(compare);
        return sortedList;
    };

    return (
        <div className='DiaryList'>
            <ControlMenu 
            value={sortType} 
            onChange={setSortType}
            optionList={sortOptionList}
             />

            <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
             />

             <MyButton
             text={'새로운 일기 쓰기'}
             type={'positive'}
             onClick={() => navigate('/new')}
              />
            {getProcessedDiaryList().map((item) => <h2 key={item.id}>{item.content} {item.emotion}</h2>)}
        
        </div>
    );
}

DiaryList.defaultProps = {
    diaryList : [],
}
