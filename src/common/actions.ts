const returnJSON = async (route: string) => {
  const response = await fetch(route);
  const json = await response.json();

  return json;
};

type GetAssetParams = {
  assetKey: string;
};

type GetAsset = {
  id: string;
  name: string;
  symbol: string;
  values: Array<Array<number>>;
};

export const getAsset = async ({
  assetKey,
}: GetAssetParams): Promise<GetAsset> => {
  let res = await returnJSON(
    `https://data.messari.io/api/v1/assets/${assetKey}/metrics/price/time-series?start=2021-01-01&end=2021-02-01&interval=1d&fields=id,name,symbol,values`
  );

  if (res.status?.error_code) {
    throw new Error(res.status.error_message);
  }

  let { id, name, symbol, values } = res.data;
  return { id, name, symbol, values };
};

type GetAssetMetrics = {
  id: string;
  market_data: {
    price_usd: number;
    price_btc: number;
    price_eth: number;
    volume_last_24_hours: number;
    percent_change_usd_last_24_hours: number;
    percent_change_btc_last_24_hours: number;
    percent_change_eth_last_24_hours: number;
  };
};

export const getAssetMetrics = async ({
  assetKey,
}: GetAssetParams): Promise<GetAssetMetrics> => {
  let res = await returnJSON(
    `https://data.messari.io/api/v1/assets/${assetKey}/metrics?fields=id,market_data`
  );

  if (res.status?.error_code) {
    throw new Error(res.status.error_message);
  }

  let { id, market_data } = res.data;
  return { id, market_data };
};

type GetAllAssets = {
  id: string;
  symbol: string;
  slug: string;
  name: string;
  metrics: {
    [key: string]: object;
  };
};

export const getAssets = async (): Promise<GetAllAssets[]> => {
  let res = await returnJSON(
    `https://data.messari.io/api/v1/assets?fields=id,symbol,slug,name,metrics`
  );

  if (res.status?.error_code) {
    throw new Error(res.status.error_message);
  }

  let result = res.data.map(
    ({ id, symbol, slug, name, metrics }: GetAllAssets) => ({
      id,
      symbol,
      slug,
      name,
      metrics,
    })
  );

  return result;
};
