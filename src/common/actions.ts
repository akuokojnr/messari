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
    `https://data.messari.io/api/v1/assets/${assetKey}/metrics/price/time-series?start=2021-01-01&end=2021-02-01&interval=1d`
  );

  if (res.status?.error_code) {
    throw new Error(res.status.error_message);
  }

  let { id, name, symbol, values } = res.data;

  return { id, name, symbol, values };
};

type GetAllAssets = {
  id: string;
  symbol: string;
  slug: string;
};

export const getAssets = async (): Promise<GetAllAssets[]> => {
  let res = await returnJSON(`https://data.messari.io/api/v1/assets`);

  if (res.status?.error_code) {
    throw new Error(res.status.error_message);
  }

  let result = res.data.map(({ id, symbol, slug }: GetAllAssets) => ({
    id,
    symbol,
    slug,
  }));

  return result;
};
