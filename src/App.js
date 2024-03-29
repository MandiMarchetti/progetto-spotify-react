import "./App.css";
import SidebarVertical from "./components/SidebarVertical";
import NavBarBottom from "./components/NavBarBottom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App container-fluid">
      <SidebarVertical />
      <NavBarBottom />
    </div>
  );
}

export default App;
