import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Result from './pages/result';
import Test from './pages/test';

const MbtiRouter = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/test' element={<Test />} />
                <Route path='/result' element={<Result />} />
            </Routes>
        </BrowserRouter>
    );
}
 
export default MbtiRouter;