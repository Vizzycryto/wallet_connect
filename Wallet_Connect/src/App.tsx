import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useEffect } from "react";
import { useNetwork } from "wagmi";
import "./App.css";

function App() {
  const { open } = useWeb3Modal();
  const { chain } = useNetwork();
  useEffect(() => {
    console.log("switched to " + chain?.id);
  }, [chain?.id]);
  return (
    <div className="App">
      <w3m-button />
      <button onClick={() => open({ view: "Networks" })}>Send</button>
      <p>{chain?.name}</p>
    </div>
  );
}

export default App;
