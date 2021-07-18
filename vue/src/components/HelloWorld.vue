<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="main" ref="main"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  created() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ["product", "2012", "2013", "2014", "2015", "2016"],
            ["A", 51.1, 30.4, 65.1, 53.3, 90],
            ["B", 86.5, 92.1, 85.7, 83.1],
            ["C", 24.1, 67.2, 79.5, 86.4],
          ],
        },
        xAxis: [
          { type: "category", gridIndex: 0 },
          { type: "category", gridIndex: 1 },
        ],
        yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
        grid: [{ bottom: "55%" }, { top: "55%" }],
        series: [
          // These series are in the first grid.
          { type: "bar", seriesLayoutBy: "row" },
          { type: "bar", seriesLayoutBy: "row" },
          // { type: "bar", seriesLayoutBy: "row" },
          // These series are in the second grid.
          { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
          { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
          { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
          { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
          { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
  margin: 0 auto;
  height: 400px;
  width: 600px;
}
</style>
