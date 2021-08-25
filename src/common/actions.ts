const returnJSON = async (route: string, options?: {}) => {
  const response = await fetch(route, options);
  const json = await response.json();

  return json;
};

type getAssetParams = {
  assetKey: string;
};

export const getAsset = async ({ assetKey }: getAssetParams) => {
  return await returnJSON(
    `https://data.messari.io/api/v1/assets/${assetKey}/metrics/price/time-series?start=2021-01-01&end=2021-02-01&interval=1d`
  );
};
