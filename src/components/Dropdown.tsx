import * as Constants from "../common/constants";

import React from "react";
import Select, { StylesConfig } from "react-select";

/** @jsx jsx */
import { css } from "@emotion/react";
import { Option } from "../types/dropdown";

const customStyles: StylesConfig<Option, IsMulti> = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: Constants.colors.bgColor200,
    borderColor: Constants.colors.bgColor200,
    boxShadow: state.isFocused ? "none" : provided.boxShadow,
    fontSize: "1.4rem",

    "&:hover": {
      cursor: "pointer",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: Constants.colors.white,
    fontSize: "1.6rem",
    fontWeight: 500,
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
    backgroundColor: Constants.colors.bgColor200,
    padding: "0.5rem 1rem",
  }),
  menuList: (provided) => ({
    ...provided,
    msOverflowStyle: "none",
    scrollbarWidth: "none",

    "&::-webkit-scrollbar": {
      width: "0.3rem",
    },

    "&::-webkit-scrollbar-thumb": {
      background: Constants.colors.bgHighlight,
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? Constants.colors.bgHighlight
      : Constants.colors.bgColor200,
    color: state.isSelected ? Constants.colors.white : Constants.colors.gray,
    fontSize: "1.4rem",
    borderRadius: 5,

    "&:hover": {
      cursor: "pointer",
      color: Constants.colors.white,
      backgroundColor: Constants.colors.bgHighlight,
    },

    "&:active": {
      backgroundColor: Constants.colors.bgColor100,
    },
  }),
};

const STYLES_WRAPPER = css`
  max-width: 10rem;
  width: 100%;
`;

type IsMulti = false;

type DropdownProps = {
  options: Option[];
  selectedValue: Option;
  handleDropdownChange: (value: Option) => void;
};

const Dropdown = ({
  options,
  selectedValue,
  handleDropdownChange,
}: DropdownProps) => {
  return (
    <div css={STYLES_WRAPPER}>
      <Select
        styles={customStyles}
        options={options}
        value={selectedValue}
        onChange={(value) => handleDropdownChange(value!)}
      />
    </div>
  );
};

export default Dropdown;
