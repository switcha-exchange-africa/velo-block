import React from "react";
import WalletPage from "./Wallet";
import { useRouter } from "next/router";

function Wallet() {
  const Router = useRouter();
  return <WalletPage />;
}

export default Wallet;
