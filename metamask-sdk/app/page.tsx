"use client"

import { MetaMaskProvider } from "@metamask/sdk-react";
import { ConnectWalletButton } from "../components/ConnectWalletButton";

export default function Home() {
  const host =
    typeof window !== "undefined" ? window.location.host : "defaultHost";

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Next-Metamask-Boilerplate",
      url: host, // using the host constant defined above
    },
  };
  return (
    <main className="flex justify-center mt-40">
      <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
        <ConnectWalletButton />
      </MetaMaskProvider>
    </main>
  );
}
