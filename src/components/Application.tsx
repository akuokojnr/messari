import * as Constants from "../common/constants";
import * as Actions from "../common/actions";
import * as Utilities from "../common/utilities";

import React from "react";
import Chart from "./Chart";

/** @jsx jsx */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { useQuery } from "react-query";

const STYLES_WRAPPER = css`
  max-width: ${Constants.sizes.maxWidth};
  margin: 6rem auto;
`;

const STYLES_TITLE = css`
  font-size: 3rem;
`;

const Application = () => {
  /* const [selectedAsset, setSelectedAsset] = useState<{value: string; label: string}>({value: "yfi", label: "YFI"}); */
  const [assetKey, setAssetKey] = useState<string>("yfi");

  const {
    isLoading,
    error,
    data: assets,
  } = useQuery("assets", async () => await Actions.getAssets());

  let dropdownOptions;
  if (assets) {
    dropdownOptions = Utilities.getDropdownOptions(assets!);
  } else {
    dropdownOptions = [{ value: "yfi", label: "YFI" }];
  }

  return (
    <section>
      <div css={STYLES_WRAPPER}>
        <h3 css={STYLES_TITLE}>Dashboard</h3>
        <Chart assetKey={assetKey} dropdownOptions={dropdownOptions} />
      </div>
    </section>
  );
};

export default Application;
