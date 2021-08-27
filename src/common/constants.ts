import * as Utilities from "./utilities";

export const colors = {
  white: "#FFFFFF",
  black: "#050309",
  gray: "#AAAEBE",

  text: "#000000",

  bgColor: "#111317",
  bgColor100: "#2A2F39",
  bgColor200: "#22262E",
  bgHighlight: "#323844",
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
      backgroundColor: "rgba(255, 255, 255, 0.35)",
      callbacks: {
        title: Utilities.getTooltipTitle,
        label: Utilities.getTooltipLabel,
        footer: Utilities.getTooltipFooter,
      },
    },
  },
};
