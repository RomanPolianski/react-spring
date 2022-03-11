import "./App.css";
import Header from "./Components/Header/Header";

const App = ({state}) => {
  return (
    <div>
      <Header navItems={state.navItems} />
    </div>
  );
};

export default App;
