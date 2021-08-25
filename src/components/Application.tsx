import * as Constants from "../common/constants";

import React from "react";
import Chart from "./Chart";

/** @jsx jsx */
import { useState } from "react";
import { css } from "@emotion/react";

const STYLES_WRAPPER = css`
  max-width: ${Constants.sizes.maxWidth};
  margin: 6rem auto;
`;

const STYLES_TITLE = css`
  font-size: 3rem;
`;

const Application = () => {
  const [assetKey, setAssetKey] = useState<string>("yfi");

  return (
    <section>
      <div css={STYLES_WRAPPER}>
        <h3 css={STYLES_TITLE}>Dashboard</h3>
        <Chart assetKey={assetKey} />
      </div>
    </section>
  );
};

export default Application;
