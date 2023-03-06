import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ResultList } from '../data/ResultList'

const Result = () => {
    const [createSearchParams] = useSearchParams();
    const mbti = createSearchParams.get('mbti');

    return (
        <>
            <img id="img" className="rounded-circle mt-30" width="200px" 
                src={`${process.env.PUBLIC_URL}/assets/img/${mbti}.png`} alt="result" /> 
            <h2 id="mbtiType" className="mt-30">{ResultList[mbti].mbtiType}</h2> 
            <h3 id="explain" className="mt-30">{ResultList[mbti].explain}</h3> 
        </>
    );
}
 
export default Result;