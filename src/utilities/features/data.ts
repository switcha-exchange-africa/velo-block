import File from "../../../public/assets/svgs/greenmenu.svg";
import BlueFile from "../../../public/assets/svgs/bluemenu.svg";
import PinkFile from "../../../public/assets/svgs/pinkmenu.svg";
import SkyFile from "../../../public/assets/svgs/skymenu.svg";

export const CardData = [
  {
    id: 1,
    bgColor: "cardColor.100",
    leftIcon: File,
    title: "P2P Trading",
    description: "Bank Transfer, Digital Wallet Transfer",
    path: "/p2p",
  },

  {
    id: 2,
    bgColor: "cardColor.200",
    leftIcon: BlueFile,
    title: "Quick Trade",
    description: "Bank Transfer, Digital Wallet Transfer",
    path: "/quick-trade",
  },

  {
    id: 3,
    bgColor: "cardColor.300",
    leftIcon: PinkFile,
    title: "Deposit",
    description: "Bank Transfer, Digital Wallet Transfer",
    path: "/wallet",
  },

  {
    id: 4,
    bgColor: "cardColor.400",
    leftIcon: SkyFile,
    title: "Withdraw",
    description: "Bank Transfer, Digital Wallet Transfer",
    path: "/wallet",
  },
];
