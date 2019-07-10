<template>
  <div id="first-Page">
    <div class="dash-board">
      <div class="paper">
        靜
      </div>
      <div id="date" class="paper">
        ？？？？？？
      </div>
      <div class="paper">
        靜
      </div>
    </div>
    <div class="scatter-item">
      <div id="scatter" style="height: 100%; width: 100%;"></div>
    </div>
  </div>
</template>

<script>
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/scatter')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
// var echarts = require('echarts');
export default {
  name: 'Dashboard',
  title: '首页',
  nocache: false,

  mounted() {
    this.getAnalysis()
    setInterval(() => {
      this.getDate()
    }, 1000)
  },

  methods: {
    getAnalysis() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('scatter'))
      var data = [
        [
          [28604, 77, 17096869, 'Australia', '昨天'],
          [31163, 77.4, 27662440, 'Canada', '昨天'],
          [1516, 68, 1154605773, 'China', '昨天'],
          [13670, 74.7, 10582082, 'Cuba', '昨天'],
          [28599, 75, 4986705, 'Finland', '昨天'],
          [29476, 77.1, 56943299, 'France', '昨天'],
          [31476, 75.4, 78958237, 'Germany', '昨天'],
          [28666, 78.1, 254830, 'Iceland', '昨天'],
          [1777, 57.7, 870601776, 'India', '昨天'],
          [29550, 79.1, 122249285, 'Japan', '昨天'],
          [2076, 67.9, 20194354, 'North Korea', '昨天'],
          [12087, 72, 42972254, 'South Korea', '昨天'],
          [24021, 75.4, 3397534, 'New Zealand', '昨天'],
          [43296, 76.8, 4240375, 'Norway', '昨天'],
          [10088, 70.8, 38195258, 'Poland', '昨天'],
          [19349, 69.6, 147568552, 'Russia', '昨天'],
          [10670, 67.3, 53994605, 'Turkey', '昨天'],
          [26424, 75.7, 57110117, 'United Kingdom', '昨天'],
          [37062, 75.4, 252847810, 'United States', '昨天'],
        ],
        [
          [44056, 81.8, 23968973, 'Australia', '今天'],
          [43294, 81.7, 35939927, 'Canada', '今天'],
          [13334, 76.9, 1376048943, 'China', '今天'],
          [21291, 78.5, 11389562, 'Cuba', '今天'],
          [38923, 80.8, 5503457, 'Finland', '今天'],
          [37599, 81.9, 64395345, 'France', '今天'],
          [44053, 81.1, 80688545, 'Germany', '今天'],
          [42182, 82.8, 329425, 'Iceland', '今天'],
          [5903, 66.8, 1311050527, 'India', '今天'],
          [36162, 83.5, 126573481, 'Japan', '今天'],
          [1390, 71.4, 25155317, 'North Korea', '今天'],
          [34644, 80.7, 50293439, 'South Korea', '今天'],
          [34186, 80.6, 4528526, 'New Zealand', '今天'],
          [64304, 81.6, 5210967, 'Norway', '今天'],
          [24787, 77.3, 38611794, 'Poland', '今天'],
          [23038, 73.13, 143456918, 'Russia', '今天'],
          [19360, 76.5, 78665830, 'Turkey', '今天'],
          [38225, 81.4, 64715810, 'United Kingdom', '今天'],
          [53354, 79.1, 321773631, 'United States', '今天'],
        ],
      ]
      // 绘制图表
      myChart.setOption({
        title: {
          text: '近7天用户登录分析',
        },
        legend: {
          right: 10,
          data: ['昨天', '今天'],
        },
        xAxis: {
          splitLine: {
            lineStyle: {
              type: 'dashed',
            },
          },
        },
        yAxis: {
          splitLine: {
            lineStyle: {
              type: 'dashed',
            },
          },
          scale: true,
        },
        series: [
          {
            name: '昨天',
            data: data[0],
            type: 'scatter',
            symbolSize: function(data) {
              return Math.sqrt(data[2]) / 5e2
            },
            label: {
              emphasis: {
                show: true,
                formatter: function(param) {
                  return param.data[3]
                },
                position: 'top',
              },
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                  {
                    offset: 0,
                    color: 'rgb(251, 118, 123)',
                  },
                  {
                    offset: 1,
                    color: 'rgb(204, 46, 72)',
                  },
                ]),
              },
            },
          },
          {
            name: '今天',
            data: data[1],
            type: 'scatter',
            symbolSize: function(data) {
              return Math.sqrt(data[2]) / 5e2
            },
            label: {
              emphasis: {
                show: true,
                formatter: function(param) {
                  return param.data[3]
                },
                position: 'top',
              },
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                  {
                    offset: 0,
                    color: 'rgb(129, 227, 238)',
                  },
                  {
                    offset: 1,
                    color: 'rgb(25, 183, 207)',
                  },
                ]),
              },
            },
          },
        ],
      })
    },

    getDate() {
      const dateId = document.getElementById("date")
      dateId.innerText = new Date().toLocaleString()
    }
  },
}
</script>
<style lang="less" scoped>
#first-Page {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .dash-board {
    flex: 2;
    width: 100%;
    height: 100px;
    display: flex;
    .paper {
      font-size: 35px;
      text-align: center;
      line-height: 2;
      justify-content: space-around;
      width: 200px;
      height: 80px;
      position: relative;
      margin: 30px auto;
      padding: 30px 0;
      border: 1px solid #efefef;
      background-color: #fffffd;
      background-image: url(paper.png);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset;

      &::before,
      &::after {
        content: '';
        z-index: -1;
        position: absolute;
        left: 10px;
        bottom: 10px;
        width: 45%;
        height: 55%;
        max-height: 100px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        transform: skew(-15deg) rotate(-4deg);
      }
      &::after {
        left: auto;
        right: 10px;
        transform: skew(15deg) rotate(4deg);
      }
    }
    #date.paper {
      font-size: 25px;
    }
  }
  .scatter-item {
    flex: 3;
    background: url('./paper.png') repeat !important;
  }
}
</style>
