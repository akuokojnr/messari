import * as Constants from "../common/constants";
import * as Actions from "../common/actions";
import * as Utilities from "../common/utilities";

import React from "react";
import Dropdown from "./Dropdown";
import Spinner from "./Spinner";
import AssetMetrics from "./AssetMetrics";

/** @jsx jsx */
import { css } from "@emotion/react";
import { useQuery } from "react-query";
import { Line } from "react-chartjs-2";
import { Option } from "../types/dropdown";

import "chartjs-adapter-moment";

const STYLES_WRAPPER = css`
  background: ${Constants.colors.black};
  width: 100%;
  border-radius: 2rem;
  margin: 6rem 0;
  padding: 3rem;
  min-height: 50rem;
`;

const STYLES_HEADER = css`
  display: flex;
`;

const STYLES_LINES_CHART = css`
  margin: 4rem 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 55rem;
`;

const STYLES_ERROR = css`
  p {
    font-size: 1.6rem;
  }

  button {
    width: 100%;
    max-width: 25rem;
    background: ${Constants.colors.blue};
    color: ${Constants.colors.white};
    text-align: center;
    font-size: 1.5rem;
    border: none;
    border-radius: 0.5rem;
    padding: 1.2rem;
    cursor: pointer;
    margin: 2rem 0;
  }
`;

const STYLES_CARD = css`
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.16);

  .name {
    font-size: 1.4rem;
    margin: 0 0 1rem;
    color: ${Constants.colors.gray};
  }

  .price {
    font-size: 2.8rem;
    display: flex;

    span {
      display: inline-block;
    }

    span + span {
      font-size: 1.4rem;
      margin: 0 0 0 auto;
      color: ${Constants.colors.gray};
    }
  }
`;

type ChartProps = {
  assetKey: string;
  dropdownOptions: Option[];
  dropdownValue: Option;
  handleDropdownChange: (value: Option) => void;
};

const LineChart = ({
  assetKey,
  dropdownOptions,
  dropdownValue,
  handleDropdownChange,
}: ChartProps) => {
  const { isLoading, error, data } = useQuery(
    ["asset", assetKey],
    async () => await Actions.getAsset({ assetKey })
  );

  const { data: assetMetrics } = useQuery(
    ["asset-metric", assetKey],
    async () => await Actions.getAssetMetrics({ assetKey })
  );
  console.log(assetMetrics);

  const dataset = data && Utilities.getDataset(data!.values);

  const refreshPage = () => window.location.reload();

  return (
    <div css={STYLES_WRAPPER}>
      {/* <div>
        <div css={STYLES_CARD}>
          <p className="name">Bitcoin</p>
          <p className="price">
            <span>$450,028</span>
            <span>BTC</span>
          </p>
        </div>
      </div>*/}
      <div>
        <div css={STYLES_HEADER}>
          <Dropdown
            options={dropdownOptions}
            selectedValue={dropdownValue}
            handleDropdownChange={handleDropdownChange}
          />
          {assetMetrics?.market_data && (
            <AssetMetrics data={assetMetrics?.market_data} />
          )}
        </div>
        <div css={STYLES_LINES_CHART}>
          {isLoading ? (
            <Spinner size="3rem" />
          ) : error ? (
            <div css={STYLES_ERROR}>
              <p>Oops! We encountered an error.</p>
              <button onClick={refreshPage}>Try again</button>
            </div>
          ) : (
            <Line data={dataset} options={Constants.chartConfig} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LineChart;
