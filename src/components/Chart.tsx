import * as Constants from "../common/constants";

import React from "react";

/** @jsx jsx */
import { css } from "@emotion/react";

const STYLES_WRAPPER = css`
  background: ${Constants.colors.black};
  width: 100%;
  min-height: 40rem;
  border-radius: 2rem;
  margin: 6rem 0;
  padding: 3rem;
`;

const STYLES_HEADER = css`
  .title {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

type ChartProps = {
  data: {
    symbol: string;
  };
};

const Chart = ({ data }: ChartProps) => {
  const { symbol } = data;

  console.log(data);

  return (
    <div css={STYLES_WRAPPER}>
      <div css={STYLES_HEADER}>
        <p className="title">{symbol}</p>
        <div></div>
      </div>
      <svg />
    </div>
  );
};

export default Chart;
