import React, { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { QuestionList } from '../data/QuestionList'

const Test = () => {
    const navigate = useNavigate();
    const [no, setNo] = useState(0);
    const [mbtiScore, setMbtiScore] = useState([
        { id: "EI", score: 0 },
        { id: "SN", score: 0 },
        { id: "TF", score: 0 },
        { id: "JP", score: 0 }
    ]);

    console.log('mbtiScore', mbtiScore);

    const addScore = (_score) => {
        setNo(no + 1);

        if(no >= QuestionList.length - 1) {
            const mbti = mbtiScore.reduce((acc, curr) =>
                acc + (curr.score >= 2 ? curr.id.substring(0, 1): curr.id.substring(1, 2)), ""
            )
            console.log('mbti', mbti);
            navigate({
                pathname: '/result',
                search: `?${createSearchParams({
                    mbti: mbti
                })}`
            })
        } else {
            const _type = QuestionList[no]["type"];
            const newMbtiScore = mbtiScore.map((s) => 
                s.id === _type? {id: s.id, score: s.score + 1} : s
            );
            setMbtiScore(newMbtiScore);
        }
    }

    return (
        <>
            <p className="fs-3 mt-100">
                <span id="no">{no + 1}</span> 문제 / 12 문제
            </p>
            <div id="title" className="fs-1 mt-30"> 
                {QuestionList[no].title}
            </div>
            <div className="d-grid gap-2 mt-100"> 
                <button id="A" className="btn btn-primary" onClick={() => addScore(1)}>{QuestionList[no].A}</button> 
                <button id="B" className="btn btn-primary" onClick={() => addScore(0)}>{QuestionList[no].B}</button>
            </div>
        </>
    );
}
 
export default Test;