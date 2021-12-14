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
        "https://thingproxy.freeboard.io/fetch/https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x9cADBBC66a4f934720CF430340D4747A0D75c60D&order_direction=asc",
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((results) => results.json());
      console.log("openseaData.assets", openseaData.assets);
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
      <ShowCase selectedPunk={selectedPunk} punkList={punkList[0]} />
      <PunkList punkList={punkList} setSelectedPunk={setSelectedPunk} />
    </div>
  );
}

export default App;
