import * as Utilities from "./utilities";

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

type TooltipContext = {
  parsed: {
    y: number;
  };
};

export const chartConfig = {
  scales: {
    x: {
      type: "timeseries",
      time: {
        stepSize: 3,
      },
      grid: {
        color: "rgba(255, 255, 255, 0.06)",
      },
    },
    y: {
      grid: {
        color: "rgba(255, 255, 255, 0.06)",
      },
      ticks: {
        callback: function (value: number) {
          return "$" + value;
        },
      },
    },
  },
  elements: {
    line: {
      borderJoinStyle: "round",
      borderWidth: 1,
      tension: 0.4,
    },
    point: {
      pointRadius: 2.5,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      titleFont: {
        size: 16,
      },
      titleMarginBottom: 0,
      footerFont: {
        weight: "normal",
      },
      callbacks: {
        title: Utilities.getTooltipTitle,
        label: Utilities.getTooltipLabel,
        footer: Utilities.getTooltipFooter,
      },
    },
  },
};
