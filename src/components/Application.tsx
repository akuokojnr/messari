import * as Constants from "../common/constants";

import React from "react";

/** @jsx jsx */
import { css } from "@emotion/react";

const STYLES_WRAPPER = css`
  max-width: ${Constants.sizes.maxWidth};
  margin: 6rem auto;
`;

const STYLES_TITLE = css`
  font-size: 3rem;
`;

function App() {
  return (
    <section>
      <div css={STYLES_WRAPPER}>
        <h3 css={STYLES_TITLE}>Dashboard</h3>
      </div>
    </section>
  );
}

export default App;
