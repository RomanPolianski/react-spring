import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import s from "./App.css"

const App = ({state}) => {
  return (
    <div className={s.wrapper}>
      <Header navItems={state.navItems} />
      <Content />
    </div>
  );
};

export default App;
