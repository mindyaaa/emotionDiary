import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DiaryEditor from '../components/DiaryEditor';


export default function New() {
    return (
        <div>
            <DiaryEditor />
        </div>
    );
}

