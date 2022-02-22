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
      <Link href="https://opensea.io/collection/teamlsbtd">
        TeamLSBTD(OpenSea)
      </Link>
      <Link href="https://lsbtd.mypinata.cloud/ipfs/Qmapp6HRjPV83cdazVdVur62srregQLnUmfdgJLCXd1aQP">
        NEOh662Animals1V3
      </Link>
      <Link href="https://lsbtd.mypinata.cloud/ipfs/QmQ5iDTkLVv5upUD2mx5c2HDPstmLSEvrShxnRALAjucRE">
        NEOh662Animals2V1
      </Link>
      <Link href="https://lsbtd.mypinata.cloud/ipfs/QmYXMDzpkcvNEPdfXTBN8TDH18kbY4JHSvjtGZsuNoEeRA">
        NEOh662Animals3V1
      </Link>
    </div>
  );
};

export default Home;
