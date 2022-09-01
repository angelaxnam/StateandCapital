import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Display from '../components/Display';
import LandingPage from '../components/LandingPage'
import QuizPage from '../components/QuizPage';
import Body from './Body';

function MainRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body/>}>
          <Route index element={<LandingPage/>}/>
          <Route
                  path='test'
                  element={<QuizPage/>}
                />
          </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;