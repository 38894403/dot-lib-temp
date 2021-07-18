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

      var hours = [
        "7a",
        "8a",
        "9a",
        "10a",
        "11a",
        "12p",
        "1p",
        "2p",
        "3p",
        "4p",
        "5p",
        "6p",
        "7p",
        "8p",
        "9p",
        "10p",
        "11p",
      ];
      var days = [
        "Thursday",
      ];

      var data = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 2, 0],
        [0, 3, 0],
        [0, 4, 0],
        [0, 5, 0],
        [0, 6, 0],
        [0, 7, 0.5],
        [0, 8, 0],
        [0, 9, 1],
      ];
      data = data.map(function (item) {
        return [item[1], item[0], item[2] || "-"];
      });

      option = {
        tooltip: {
          position: "top",
        },
        grid: {
          height: "50%",
          top: "10%",
        },
        xAxis: {
          type: "category",
          data: hours,
          splitArea: {
            show: true,
          },
        },
        yAxis: {
          type: "category",
          data: days,
          splitArea: {
            show: true,
          },
        },
        visualMap: {
          min: 0,
          max: 10,
          calculable: true,
          orient: "horizontal",
          left: "center",
          bottom: "15%",
        },
        series: [
          {
            name: "Punch Card",
            type: "heatmap",
            data: data,
            label: {
              show: true,
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
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
  margin: 0 auto;
  height: 400px;
  width: 100%;
}
</style>
