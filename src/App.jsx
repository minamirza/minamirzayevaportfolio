import { useState } from "react";
import "./App.css";
import Onepage from "./Components/Onepage";
import Secondpage from "./Components/Secondpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto p-4">
        <Onepage />
        <Secondpage />
      </div>
    </>
  );
}

export default App;
