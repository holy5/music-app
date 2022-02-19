import Sidebar from "./components/Sidebar";
import MainPanel from "./components/MainPanel";
import RightPanel from "./components/RightPanel";
import Playbar from "./components/Playbar";

function App() {
  return (
    <div className="min-h-[100vh] relative">
      <Sidebar />
      <MainPanel />
      <RightPanel />
      <Playbar />
    </div>
  );
}

export default App;
