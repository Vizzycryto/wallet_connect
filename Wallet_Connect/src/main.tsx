import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet, zkSyncTestnet } from "wagmi/chains";

// Replace this project ID with yours
// from cloud.walletconnect.com
const projectId = "2a2a5978a58aad734d13a2d194ec469a";

const chains = [mainnet, arbitrum, zkSyncTestnet];

const wagmiConfig = defaultWagmiConfig({
  projectId,
  chains,
  metadata: {
    name: "test",
  },
});

createWeb3Modal({
  chains,
  projectId,
  wagmiConfig,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <App />
    </WagmiConfig>
  </React.StrictMode>,
);
