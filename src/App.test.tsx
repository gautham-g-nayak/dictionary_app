import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import PopUpModal from "./components/PopUpModal";
import SearchField from "./components/SearchField";
import SearchButton from "./components/SearchBotton";
import Item from "./components/Item";
import HomePage from "./pages/HomePage";

describe("test pop up modal component", () => {
  test("close button", () => {
    render(
      <PopUpModal
        currentItem={{
          word: "help",
          meanings: [
            {
              definitions: [
                { definition: "Action given to provide assistance" },
              ],
            },
          ],
        }}
        setOpenModalPopMenu={jest.fn}
      />
    );
    screen.debug();
    const closeButton = screen.getByText("CLOSE");
    fireEvent.click(closeButton);
  });
});

describe("test search field component", () => {
  test("render search field component", () => {
    const inputProps = {
      placeHolder: "label",
      onChange: jest.fn(),
      type: "text",
    };
    render(<SearchField {...inputProps} />);
    screen.debug();
  });
});

describe("test search button component", () => {
  test("render search button component", () => {
    const inputProps = {
      label: "label",
      onClick: jest.fn(),
    };
    render(<SearchButton {...inputProps} />);
    screen.debug();
  });
});

describe("test app component", () => {
  test("render app component", () => {
    render(<App />);
    screen.debug();
  });
});

describe("test homePage ", () => {
  test("render homePage ", () => {
    render(<HomePage />);
    screen.debug();
  });
  test("renders text", () => {
    render(<HomePage />);
    const title = screen.getByText(/SEARCH/i);
    expect(title).toBeInTheDocument();
  });

  test("search button", () => {
    render(<HomePage />);
    screen.debug();
    const submitButton = screen.getByText("SEARCH");
    fireEvent.click(submitButton);
  });
});

describe("test item component", () => {
  test("render item component", () => {
    const item = {
      word: "help",
      meanings: [
        {
          definitions: [{ definition: "Action given to provide assistance" }],
        },
      ],
    };
    render(
      <Item item={item} setOpenModalPopMenu={jest.fn()} setCurrentItem={item} />
    );
    screen.debug();
  });
});
