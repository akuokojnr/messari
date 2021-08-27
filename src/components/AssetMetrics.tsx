import * as Utilities from "../common/utilities";
import * as Constants from "../common/constants";

import React from "react";

/** @jsx jsx */
import { css } from "@emotion/react";

const STYLES_WRAPPER = css`
  margin: 0 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 50rem;
  width: 100%;

  .title {
    font-size: 1.2rem;
    margin: 0 0 0.5rem;
    opacity: 0.7;
  }

  .amount {
    font-size: 1.5rem;

    span {
      display: inline-block;
    }

    span + span {
    }
  }
`;

const STYLES_PERCENT = (num: number) => css`
  margin: 0 0 0 1rem;
  font-size: 1.2rem;
  color: ${num > 0
    ? Constants.colors.green
    : num < 0
    ? Constants.colors.red
    : Constants.colors.white};
`;

type AssetMetricsProps = {
  data: {
    price_usd: number;
    price_btc: number;
    price_eth: number;
    volume_last_24_hours: number;
    percent_change_usd_last_24_hours: number;
    percent_change_btc_last_24_hours: number;
    percent_change_eth_last_24_hours: number;
  };
};

const AssetMetrics = ({ data }: AssetMetricsProps) => {
  return (
    <div css={STYLES_WRAPPER}>
      <div>
        <p className="title">Price USD</p>
        <p className="amount">
          <span>{Utilities.formatAssetNumber(data.price_usd)}</span>
          <span
            css={STYLES_PERCENT(data.percent_change_usd_last_24_hours)}
            title="Change in the last 24 hours"
          >
            {Utilities.formatAssetNumber(
              data.percent_change_usd_last_24_hours,
              "percent"
            )}
          </span>
        </p>
      </div>
      <div>
        <p className="title">Price BTC</p>
        <p className="amount">
          <span>{Utilities.formatAssetNumber(data.price_btc)}</span>
          <span
            css={STYLES_PERCENT(data.percent_change_btc_last_24_hours)}
            title="Change in the last 24 hours"
          >
            {Utilities.formatAssetNumber(
              data.percent_change_btc_last_24_hours,
              "percent"
            )}
          </span>
        </p>
      </div>
      <div>
        <p className="title">Price ETH</p>
        <p className="amount">
          <span>{Utilities.formatAssetNumber(data.price_eth)}</span>
          <span
            css={STYLES_PERCENT(data.percent_change_eth_last_24_hours)}
            title="Change in the last 24 hours"
          >
            {Utilities.formatAssetNumber(
              data.percent_change_eth_last_24_hours,
              "percent"
            )}
          </span>
        </p>
      </div>
      <div>
        <p className="title">24h Volume</p>
        <p className="amount">
          {Utilities.formatAssetNumber(data.volume_last_24_hours)}
        </p>
      </div>
    </div>
  );
};

export default AssetMetrics;
