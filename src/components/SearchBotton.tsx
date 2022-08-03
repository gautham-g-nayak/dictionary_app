import "./SearchButton.css";
import { SubmitButtonProps } from "../types";

const SearchButton = ({ label, onClick }: SubmitButtonProps) => {
  const submitHandler = () => {};

  return (
    <button onClick={onClick} className="submitButton">
      {label}
    </button>
  );
};

export default SearchButton;
