import React from 'react';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import s from './App.css';

const App = ({ state }) => {
  return (
    <div className={s.wrapper}>
      <Header navItems={state.navItems} />
      <Content projects={state.projects} projectsAttic={state.projectsAttic} />
    </div>
  );
};

export default App;
