import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryStateContext } from '../App';
import DiaryEditor from '../components/DiaryEditor';

export default function Edit() {

    const [originData, setOriginData] = useState();
    const {id} = useParams();
    const navigate = useNavigate();

    const diaryList = useContext(DiaryStateContext);

    useEffect(() => {
        if(diaryList.length >=1) {
            const targetDiary = diaryList.find(
                (item) => parseInt(item.id) === parseInt(id)
                );

            if(targetDiary) {
                setOriginData(targetDiary);
            } else {
                navigate('/', {replace:true});
            }
        }
    },[diaryList, id])
    return (
        <div>
            {originData && <DiaryEditor
            isEdit={true}
            originData={originData}
             />}
        </div>
    );
}

