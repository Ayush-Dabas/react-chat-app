import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import { ChatFeed } from "./components/index.js";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="cf9cecff-f457-4553-9548-1ac71419cd7e"
        userName="Hunny"
        userSecret="12345"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;
