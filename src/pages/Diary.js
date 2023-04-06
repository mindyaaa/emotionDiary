import React from 'react';
import { useParams } from 'react-router-dom';

export default function Diary() {
    const {id} = useParams();

    return (
        <div>
            <p>이곳은 DIARY: {id} 입니다</p>
        </div>
    );
}

