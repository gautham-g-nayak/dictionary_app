import "./PopUpModal.css";
import React from "react";

function PopUpModal({ setOpenModalPopMenu, currentItem }: any) {
  const handleClosePopMenu = () => setOpenModalPopMenu(false);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div>Details:</div>
        <div>word : {currentItem.word}</div>
        <div>
          definition :{" "}
          {currentItem.meanings[0].definitions.map((def: any, key: number) => {
            return `${def.definition}                      `;
          })}
        </div>
        <div className="footer">
          <button
            style={{ backgroundColor: "#0c7ca8", cursor: "pointer" }}
            onClick={handleClosePopMenu}
            className="submitButton"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUpModal;
