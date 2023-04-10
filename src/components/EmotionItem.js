import React from 'react';

export default function EmotionItem({
    isSelected, onClick, emotion_id, emotion_img, emotion_descript}) {
    return (
        <div 
        className={['EmotionItem', isSelected ? `Emotion_on_${emotion_id}` : 'Emotion_off'].join(' ')}
        onClick={() => onClick(emotion_id)}
        >
            <img src={emotion_img} />
            <span>{emotion_descript}</span>
        </div>
    );
}

