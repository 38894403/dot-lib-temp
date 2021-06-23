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
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
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
  height: 400px;
  width: 600px;
}
</style>
