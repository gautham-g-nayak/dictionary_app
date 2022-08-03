import SearchField from "../components/SearchField";
import SearchButton from "../components/SearchBotton";
import "./HomePage.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "../components/Item";
import PopUpModal from "../components/PopUpModal";

const HomePage = () => {
  const [keyword, setKeyword] = useState("");
  const [info, setInfo] = useState<any>([]);
  const [err, setErr] = useState(false);
  const [openModalPopMenu, setOpenModalPopMenu] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [random, setRandom] = useState<any>([]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const API: string = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

  const randomAPI: string = "https://random-words-api.vercel.app/word";

  useEffect(() => {
    axios
      .get<[]>(randomAPI)
      .then((response: any) => {
        console.log(response.data);
        console.log(response.data[0].word);
        setRandom([response.data[0].word, response.data[0].definition]);
      })
      .catch((e) => {
        console.log("err random");
      });
  }, []);

  const submitHandler = () => {
    axios
      .get<[]>(API)
      .then((response: any) => {
        console.log(response.data);
        setErr(false);
        setInfo(response.data);
      })
      .catch((e) => {
        setInfo([]);
        setErr(true);
      });
  };

  return (
    <div>
      {openModalPopMenu && (
        <PopUpModal
          setOpenModalPopMenu={setOpenModalPopMenu}
          currentItem={currentItem}
        />
      )}
      <div className="homeHeadContainer">
        <SearchField onChange={searchHandler} placeHolder="Enter Keyword" />
        <SearchButton onClick={submitHandler} label="SEARCH" />
      </div>
      {info && (
        <div className="itemContainer">
          {info.map((item: any, key: number) => (
            <Item
              item={item}
              setOpenModalPopMenu={setOpenModalPopMenu}
              setCurrentItem={setCurrentItem}
              key={key}
            />
          ))}
        </div>
      )}
      {err && (
        <div className="err">
          Sorry pal, we couldn't find definitions for the word you were looking
          for
        </div>
      )}
      <div className="itemContainer">
        {!info.length && (
          <div className="itemBox2">
            <div>WORD OF THE DAY:</div>
            <div>word : {random[0]}</div>
            <div>definition : {random[1]}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
