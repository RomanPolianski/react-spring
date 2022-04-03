import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import s from './App.css';
import Login from './Components/Login/Login';
import { fetchProjects } from './Redux/itemsRenderSlice';
import SignUp from './Components/Registration/SignUp';

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
  const dispatch = useDispatch();
  useEffect(() => {
    const value = '';
    dispatch(fetchProjects(value));
  }, []);

  if (!isAuth) {
    return <Navigate to="/signUp" />;
  }
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default App;
