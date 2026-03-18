import Sidebar from "./components/Sidebar";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;