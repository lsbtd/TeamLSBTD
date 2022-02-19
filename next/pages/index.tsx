import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Link href="https://opensea.io/assets/klaytn/0x4bcbf73ecdc0ca3e3b307194e5fb6db7d9190540/1">
        OpenSea
      </Link>
      <Link href="https://lsbtd.mypinata.cloud/ipfs/QmY1Yhe2eTGrA2vTerm7TFQJJ8FtWxv8RgzopdaQ2r3VgR">
        NEOh662Animals1
      </Link>
    </div>
  );
};

export default Home;
