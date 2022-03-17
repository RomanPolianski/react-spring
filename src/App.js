import React from 'react';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import s from './App.css';
import Login from './Components/Login/Login';

function App({ state }) {
  return (
    <div className={s.wrapper}>
      <Header navItems={state.navItems} />
      <Content projects={state.projects} projectsAttic={state.projectsAttic} />
      <Login />
    </div>
  );
}

export default App;
