import React from "react";
import plotly from "plotly.js/dist/plotly";
import createPlotComponent from "react-plotly.js/factory";

const Plot = createPlotComponent(plotly);

export default () => (
  <Plot
    data={[
      {
        type: "treemap",
        labels: [
          "Eve",
          "Cain",
          "Seth",
          "Enos",
          "Noam",
          "Abel",
          "Awan",
          "Enoch",
          "Azura"
        ],
        parents: [
          "",
          "Eve",
          "Eve",
          "Seth",
          "Seth",
          "Eve",
          "Eve",
          "Awan",
          "Eve"
        ],
        values: [10, 14, 12, 10, 2, 6, 6, 1, 4],
        textinfo: "label+value+percent parent+percent entry",
        domain: { x: [0, 0.48] },
        outsidetextfont: { size: 20, color: "#377eb8" },
        marker: { line: { width: 2 } },
        pathbar: { visible: false }
      },
      {
        type: "treemap",
        branchvalues: "total",
        labels: [
          "Eve",
          "Cain",
          "Seth",
          "Enos",
          "Noam",
          "Abel",
          "Awan",
          "Enoch",
          "Azura"
        ],
        parents: [
          "",
          "Eve",
          "Eve",
          "Seth",
          "Seth",
          "Eve",
          "Eve",
          "Awan",
          "Eve"
        ],
        domain: { x: [0.52, 1] },
        values: [65, 14, 12, 10, 2, 6, 6, 1, 4],
        textinfo: "label+value+percent parent+percent entry",
        outsidetextfont: { size: 20, color: "#377eb8" },
        marker: { line: { width: 2 } },
        pathbar: { visible: false }
      }
    ]}
    layout={{
      width: 960,
      height: 720,
      annotations: [
        {
          showarrow: false,
          text: "branchvalues: <b>remainder</b>",
          x: 0.25,
          xanchor: "center",
          y: 1.1,
          yanchor: "bottom"
        },
        {
          showarrow: false,
          text: "branchvalues: <b>total</b>",
          x: 0.75,
          xanchor: "center",
          y: 1.1,
          yanchor: "bottom"
        }
      ]
    }}
  />
);
