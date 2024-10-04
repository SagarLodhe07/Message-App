import ChatContainer from "./Component/ChatContainer";
import Sidebar from "./Component/Sidebar";

function App() {
  
  return (
      <div className="w-full h-screen flex">
          <Sidebar/>
          <ChatContainer/>
      </div>

  );
}

export default App;
