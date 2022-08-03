import "./SearchField.css";
import { InputFieldProps } from "../types";

const SearchField = ({
  onChange,
  placeHolder,
  type = "text",
}: InputFieldProps) => {
  return (
    <input
      className="inputField"
      placeholder={placeHolder}
      type={type}
      onChange={onChange}
      min="1"
    />
  );
};

export default SearchField;
