import React, { useEffect, useState } from "react";
import ig from "../assets/owner/instagram.png";
import twt from "../assets/owner/twitter.png";
import more from "../assets/owner/more.png";
import "./showcase.css";

const ShowCase = ({ selectedPunk, punkList }) => {
  const [activePunk, setActivePunk] = useState({});
  useEffect(() => {
    setActivePunk(selectedPunk);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPunk]);
  useEffect(() => {
    setActivePunk({ ...punkList });
  }, [punkList]);
  return (
    <div className="showcase">
      <div className="punk-highlight">
        <div className="punk-image-container">
          <img
            src={
              activePunk?.image_original_url ||
              "https://ipfs.thirdweb.com/ipfs/bafkreiasgnibw32isqfyjnv5lhj4wxzp6izayculjlo4ampmmfla3j4tj4"
            }
            alt="punk"
            className="selected-punk"
          />
        </div>
        <div className="showcase-content">
          <div className="punk-details">
            <h1 className="title">{activePunk?.name || "Bowl Punk"}</h1>
            <span className="showcase-item-id">.#{activePunk?.id}</span>
          </div>
          <div className="owner-details">
            <div className="owner-image-container">
              <img
                src={activePunk?.owner?.profile_img_url}
                alt="owner"
                className="owner-image"
              />
            </div>
            <div className="owner-credentials">
              <p className="owner-wallet-address">
                {activePunk?.owner?.address}
              </p>
              <p className="owner-handle">
                @{activePunk?.owner?.user || "A15"}
              </p>
            </div>
            <div className="owner-sm">
              <img src={ig} alt="" className="owner-sm-img" />
            </div>
            <div className="owner-sm">
              <img src={twt} alt="" className="owner-sm-img" />
            </div>
            <div className="owner-sm">
              <img src={more} alt="" className="owner-sm-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
