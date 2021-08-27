import * as Constants from "../common/constants";
import * as Actions from "../common/actions";
import * as Utilities from "../common/utilities";

import React from "react";
import Dropdown from "./Dropdown";

/** @jsx jsx */
import { css } from "@emotion/react";
import { useQuery } from "react-query";
import { Line } from "react-chartjs-2";

import "chartjs-adapter-moment";

const STYLES_WRAPPER = css`
  background: ${Constants.colors.black};
  width: 100%;
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

const STYLES_LINES_CHART = css`
  margin: 4rem 0 0;
`;

type ChartProps = {
  assetKey: string;
};

const LineChart = ({ assetKey }: ChartProps) => {
  const { isLoading, error, data } = useQuery(
    "asset",
    async () => await Actions.getAsset({ assetKey })
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Encountered an error</p>;
  }

  const dataset = Utilities.getDataset(data!.values);

  return (
    <div css={STYLES_WRAPPER}>
      <div css={STYLES_HEADER}>
        <Dropdown options={[{ value: "yfi", label: "YFI" }]} />
      </div>
      <div css={STYLES_LINES_CHART}>
        <Line data={dataset} options={Constants.chartConfig} />
      </div>
    </div>
  );
};

export default LineChart;
