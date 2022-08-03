import React from "react";

export type InputFieldProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
  type?: string;
};

export type SubmitButtonProps = {
  onClick: any;
  label: string;
};
