import React from 'react';
import MyButton from './MyButton';
import { useNavigate } from 'react-router-dom';


export default function DiaryItem({id, emotion, content, date}) {
    const navigate = useNavigate();

    const strDate = new Date(date).toLocaleDateString();
    return (
        <div className='DiaryItem'>
            <div className={[`emotion_img_wrapper emotion_img_wrapper_${emotion}`]}>
                <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
            </div>

            <div 
            className='info_wrapper'
            onClick={() => navigate(`/diary/${id}`)}
            >
                <div className='diary_date'>{strDate}</div>
                <div className='diary_content_preview'
                >{content.slice(0,25)}</div>
            </div>

            <div className='btn_wrapper'>
                <MyButton
                text={'수정하기'}
                onClick={() => navigate(`/edit/${id}`)}
                />
            </div>
        </div>
    );
}
