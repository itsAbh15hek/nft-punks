import { useEffect, useState } from "react";
import "./App.css";
import Header from "./compoents/Header";
import PunkList from "./compoents/PunkList";
import ShowCase from "./compoents/ShowCase";
import eth from "./assets/eth.png";

function App() {
  const [punkList, setPunkList] = useState([]);

  const [selectedPunk, setSelectedPunk] = useState(punkList[0]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await fetch(
        `https://api.allorigins.win/raw?url=${encodeURIComponent(
          "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x9cADBBC66a4f934720CF430340D4747A0D75c60D&order_direction=asc"
        )}`
      ).then((response) => response.json());

      // fetch(
      //   "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x9cADBBC66a4f934720CF430340D4747A0D75c60D&order_direction=asc"
      // ).then((results) => results.json());
      setPunkList(openseaData.assets);
    };
    getMyNfts();
  }, []);

  if (punkList.length === 0)
    return (
      <div className="app">
        <Header />

        <div className="loading">
          <img src={eth} alt="eth" className="loading-animation" />
        </div>
      </div>
    );
  return (
    <div className="app">
      <Header />
      <div className="main">
        <ShowCase selectedPunk={selectedPunk} punkList={punkList[0]} />
        <PunkList punkList={punkList} setSelectedPunk={setSelectedPunk} />
      </div>
    </div>
  );
}

export default App;
