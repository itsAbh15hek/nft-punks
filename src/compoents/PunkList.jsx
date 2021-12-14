import React from "react";
import "./punklist.css";
import CollectionCard from "./CollectionCard";
import { useHorizontalScroll } from "./scroll";

const PunkList = ({ punkList, setSelectedPunk }) => {
  const scrollRef = useHorizontalScroll();

  return (
    <div className="punklist" ref={scrollRef}>
      {punkList.map((punk) => (
        <div onClick={() => setSelectedPunk(punk)} id={punk.id}>
          <CollectionCard
            name={punk.name || "Bowl Punk"}
            id={punk.id}
            price={punk?.traits[0]?.value || "5"}
            image={
              punk.image_original_url ||
              "https://ipfs.thirdweb.com/ipfs/bafkreiasgnibw32isqfyjnv5lhj4wxzp6izayculjlo4ampmmfla3j4tj4"
            }
          />
        </div>
      ))}
    </div>
  );
};

export default PunkList;
