import "./App.css";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";

const App = ({state}) => {
  return (
    <div>
      <Header navItems={state.navItems} />
      <Content />
    </div>
  );
};

export default App;
