import * as Utilities from "./utilities";

export const colors = {
  white: "#FFFFFF",
  black: "#050309",
  gray: "#AAAEBE",
  blue: "#180ED9",
  green: "#37AA6D",
  red: "#C1545E",

  text: "#000000",

  bgColor: "#111317",
  bgColor100: "#2A2F39",
  bgColor200: "#1A1E23",
  bgHighlight: "#323844",

  borderColor: "rgba(255, 255, 255, 0.16)",
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
      titleAlign: "center",
      titleMarginBottom: 0,
      footerFont: {
        weight: "normal",
      },
      footerAlign: "center",
      xAlign: "center",
      yAlign: "bottom",
      backgroundColor: "rgba(50,56,68, 0.85)",
      callbacks: {
        title: Utilities.getTooltipTitle,
        label: Utilities.getTooltipLabel,
        footer: Utilities.getTooltipFooter,
      },
    },
  },
};
