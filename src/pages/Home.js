import React, { useContext, useEffect, useState } from 'react';
import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';
import { DiaryStateContext } from '../App';
import DiaryList from '../components/DiaryList';

export default function Home() {

    const diaryList = useContext(DiaryStateContext);

    const [data, setData] = useState([]);
    const [curDate, setCurDate] = useState(new Date());

    useEffect(() => {

        if(diaryList.length >=1 ) {
            const firstDate = new Date(
                curDate.getFullYear(),
                curDate.getMonth(),
                1
            ).getTime();
    
            const lastDate = new Date(
                curDate.getFullYear(),
                curDate.getMonth()+1,
                0,
                23,
                59,
                59
            ).getTime();
    
            setData(diaryList.filter((item) => item.date >= firstDate && item.date < lastDate))
        }

    }
    , [curDate, diaryList]);

    // useEffect(() => console.log(data));

    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth()+1}월`;
    const increMonth = () => {
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth()+1, curDate.getDate()))
    };
    const decreMonth = () => {
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth()-1, curDate.getDate()))
    }
    return (
        <div>
            <MyHeader 
            headText ={headText}
            leftChild ={<MyButton
                text={'<'}
                onClick={decreMonth}
                />}
            rightChild ={<MyButton
                text={'>'}
                onClick={increMonth}
                />}
            />
            <DiaryList diaryList={data} />
        </div>
    );
}

