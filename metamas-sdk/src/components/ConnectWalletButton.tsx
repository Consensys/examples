import { useSDK } from "@metamask/sdk-react";
import { formatAddress } from "../lib/utils";
import WalletIcon from "@/components/Icons/WalletIcon";

export const ConnectWalletButton = () => {
  const { sdk, connected, connecting, account } = useSDK();

  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };

  const disconnect = () => {
    sdk?.terminate()
  };
  return (
    <button
      disabled={connecting}
      onClick={connected ? disconnect : connect}
      className={`bg-slate-700 text-slate-100 px-4 py-2 rounded-lg hover:bg-slate-600 transition ${
        connected && "bg-green-800 hover:bg-red-300"
      }`}
    >
      {connected ? (
        <div className="flex gap-4 items-center">
          <WalletIcon /> {account}
        </div>
      ) : (
        <div className="flex gap-4 items-center">
          <WalletIcon /> Connect Wallet
        </div>
      )}
    </button>
  );
};