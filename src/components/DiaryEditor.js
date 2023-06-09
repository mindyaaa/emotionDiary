import React, { useState, useRef, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MyHeader from './MyHeader';
import MyButton from './MyButton';
import EmotionItem from './EmotionItem';
import { DiaryDispatchContext } from '../App';
import { getStringDate } from '../util/date';
import { emotionList } from '../util/emotion';

export default function DiaryEditor({isEdit, originData}) {

    const contentRef = useRef();
    const [content, setContent] = useState('');
    const [emotion, setEmotion] = useState(3);
    const [date, setDate] = useState(getStringDate(new Date()));
    const navigate = useNavigate();

    const {onCreate, onEdit} = useContext(DiaryDispatchContext);

    const handleClickEmot = (emotion) => {
        setEmotion(emotion);
    }


    const handleSubmit = () => {
        if(content.length < 1) {
            contentRef.current.focus();
            return;
        }

        if(window.confirm(
                isEdit ? '일기를 수정하시겠습니까?' : '새로운 일기를 작성하시겠습니까?'
                )
        ) {
            if(!isEdit) {
                onCreate(date, emotion, content);
            } else {
                onEdit(originData.id, date, emotion, content)
            }
        }

        navigate('/',{replace:true});
    }


    useEffect(()=>{
        if(isEdit) {
            setDate(getStringDate(new Date(parseInt(originData.date))));
            setEmotion(originData.emotion);
            setContent(originData.content);
        }
    },[isEdit, originData]);

    return (
        <div className='DiaryEditor'>
            <MyHeader 
            headText={isEdit ? '일기 수정하기' : '새로운 일기쓰기'}
            leftChild={<MyButton 
                onClick={() => navigate(-1)}
                text={'< 뒤로가기'} />
            }
            />

            <div>

            <section>
                <h4>오늘은 언제인가요?</h4>
                <div
                    className='input_box'
                >
                    <input
                    className='input_date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type='date'
                    />
                </div>
            </section>

            <section>
                <h4>오늘의 감정</h4>
                <div className='input_box emotion_list_wrapper'>
                    {emotionList.map((item) => (
                        <EmotionItem 
                        key={item.emotion_id} 
                        {...item} 
                        onClick={handleClickEmot}
                        isSelected={item.emotion_id === emotion ? true : false}
                        />
                    ))}
                </div>
            </section>

            <section>
                <h4>오늘의 일기</h4>
                <div className='input_box text_wrapper'>
                    <textarea
                    placeholder='How was today?'
                    ref={contentRef}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                     />
                </div>
            </section>

            <section>
                <div
                className='control_box'>
                    <MyButton 
                    text={'취소하기'}
                    onClick={() => navigate(-1)}
                     />
                    <MyButton
                    text={'작성완료'}
                    type={'positive'}
                    onClick={handleSubmit}
                     />
                </div>
            </section>
            </div>
        </div>
    );
}

