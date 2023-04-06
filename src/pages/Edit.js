import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Edit() {

    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get('id');
    console.log(id);

    const mode = searchParams.get('mode');
    console.log(mode);

    const mindu = searchParams.get('mindy');
    console.log(mindu);

    return (
        <div>
            <p>이곳은 EDIT 페이지 입니다</p>
            <button onClick={() => setSearchParams({mindy:"mindy"})}>바꾸기</button>
            <button onClick={() => navigate('/home')}>Go Home</button>
        </div>
    );
}

