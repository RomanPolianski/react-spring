/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import Header from './Components/Header/Header';
import s from './App.css';
import Login from './Components/Login/Login';
import SignUp from './Components/Registration/SignUp';
import { fetchProjects } from './Redux/itemsRenderSlice';

const Content = lazy(() => import('./Components/Content/Content'));

function App() {
  return (
    <div className={s.wrapper}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

function Main() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading</div>}>
        <Content />
      </Suspense>
    </>
  );
}

export default App;
