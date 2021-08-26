export const colors = {
  white: "#FFFFFF",
  black: "#050309",

  text: "#000000",

  bgColor: "#111317",
};

export const sizes = {
  sm: "768px",
  md: "1024px",

  maxWidth: "1200px",
};

export const chartConfig = {
  scales: {
    x: {
      type: "timeseries",
      time: {
        stepSize: 3,
      },
    },
  },
  elements: {
    line: {
      borderJoinStyle: "round",
      tension: 0.4,
    },
    point: {
      pointRadius: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
