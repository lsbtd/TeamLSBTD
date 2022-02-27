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
      <Link href="https://lsbtd.mypinata.cloud/ipfs/QmRzyX5rwx7YnxZDnHaZ6FAWkQXKzPJHpwcp6DRC3fwErb">
        NEOh662Animals3V2
      </Link>
      <Link href="https://lsbtd.mypinata.cloud/ipfs/QmcrvYverm6yrfgP31526K3Vuuoe6C6J7nTvnw3P2fkwiQ">
        NEOh662Animals4V1
      </Link>
      <Link href="https://lsbtd.mypinata.cloud/ipfs/Qmaq7tCLiVUgALKCU8BdJ6qN4Eu7BZQYw5nwikCtoejwAU">
        NEOh662Animals5V1
      </Link>
    </div>
  );
};

export default Home;
