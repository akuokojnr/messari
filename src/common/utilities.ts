import { Chart } from "chart.js";

type ChartData = number[][];

export const formatChartData = (
  data: ChartData
): { x: number; y: number }[] => {
  return data.map((item) => ({ x: item[0], y: item[4] }));
};

type ChartArea = {
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
};

export const generateGradient = (
  ctx: CanvasRenderingContext2D,
  chartArea: ChartArea
) => {
  let width, height, gradient;

  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;

  // NOTE(daniel): generate gradient because this is either the first render or the size of the chart has changed
  if (gradient === null || width !== chartWidth || height !== chartHeight) {
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, "rgba(255,158,178,0.04)");
    gradient.addColorStop(0.7, "rgba(255,99,132,0.18");
  }

  return gradient;
};

export const getChartBgColor = ({ chart }: { chart: Chart }) => {
  const { ctx, chartArea } = chart;

  if (!chartArea) {
    // NOTE(daniel): This case happens on initial chart load
    return null;
  }

  return generateGradient(ctx, chartArea);
};

export const getDataset = (data: ChartData) => ({
  datasets: [
    {
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: getChartBgColor,
      data: formatChartData(data),
      fill: "start",
    },
  ],
});

type TooltipItem = {
  parsed: {
    x: number;
    y: number;
  };
};

export const getTooltipTitle = (item: TooltipItem[]) => {
  let amount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(item[0].parsed.y);
  return amount;
};

export const getTooltipLabel = () => "";

export const getTooltipFooter = (item: TooltipItem[]) => {
  let timestamp = item[0].parsed.x;
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(timestamp);
};
