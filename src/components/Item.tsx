import React from "react";
import "./Item.css";

const Item = ({ item, setOpenModalPopMenu, setCurrentItem }: any) => {
  const clickHandler = () => {
    setCurrentItem(item);
    setOpenModalPopMenu(true);
  };
  return (
    <div className="itemBox" onClick={clickHandler}>
      <div>word : {item.word}</div>
      <div>definition : {item.meanings[0].definitions[0].definition}</div>
    </div>
  );
};

export default Item;
