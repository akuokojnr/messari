import * as Constants from "../common/constants";

import React from "react";
import Select, { StylesConfig } from "react-select";

/** @jsx jsx */
import { css } from "@emotion/react";

type OptionType = {
  value: string;
  label: string;
};

type IsMulti = false;

const customStyles: StylesConfig<OptionType, IsMulti> = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: Constants.colors.bgColor,
    borderColor: Constants.colors.bgColor,
    "box-shadow": state.isFocused && "none",
    fontSize: "1.4rem",

    "&:hover": {
      borderColor: Constants.colors.bgColor,
      cursor: "pointer",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: Constants.colors.white,
    fontSize: "1.6rem",
    fontWeight: 600,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: Constants.colors.gray,
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: Constants.colors.bgColor,
    padding: "0.5rem 1rem",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? Constants.colors.bgColor100
      : Constants.colors.bgColor,
    color: state.isSelected ? Constants.colors.white : Constants.colors.gray,
    fontSize: "1.4rem",
    borderRadius: 5,

    "&:hover": {
      cursor: "pointer",
      color: Constants.colors.white,
      backgroundColor: Constants.colors.bgColor100,
    },

    "&:active": {
      backgroundColor: Constants.colors.bgColor100,
    },
  }),
};

type DropdownProps = {
  options: OptionType[];
};

const STYLES_WRAPPER = css`
  max-width: 10rem;
`;

const Dropdown = ({ options }: DropdownProps) => {
  return (
    <div css={STYLES_WRAPPER}>
      <Select styles={customStyles} options={options} />
    </div>
  );
};

export default Dropdown;
