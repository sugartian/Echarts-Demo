// 第一个柱状图
(function () {
  // 变量在各自的作用域中，所以不会有命名冲突
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "旅游行业",
          "教育行业",
          "游戏行业",
          "医疗行业",
          "电商行业",
          "社交行业",
          "金融行业",
        ],
        axisTick: {
          alignWithLabel: true,
        },
        // 修改刻度标签相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "9",
        },
        // 不显示x轴的相关样式
        axisLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        // y轴文字标签样式
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12",
        },
        // y轴线条样式
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 2,
          },
        },
        // y轴分割线样式
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
      },
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        // 修改柱子的宽度
        barWidth: "35%",
        data: [200, 300, 300, 900, 1500, 1200, 600],
        // 修改柱子圆角
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5,
        },
      },
    ],
  };
  myChart.setOption(option);
  // 4.让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})(); //多个立即执行函数中间必须有分号

// 第二个柱状图
(function () {
  // 声明颜色数组
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 变量在各自的作用域中，所以不会有命名冲突
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));
  // 2.指定配置和数据
  var option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%",
    },
    xAxis: {
      show: false,
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        // 不显示y轴线条
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        // y轴文字的颜色设置为白色
        axisLabel: {
          color: "#fff",
        },
      },
      {
        show: true,
        // 第二组y轴
        inverse: true,
        data: [702, 350, 610, 793, 664],
        // 不显示y轴的线
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff",
          },
        },
      },
    ],
    series: [
      {
        name: "条",
        type: "bar",
        // 柱子之间的距离
        barCategoryGap: 50,
        // 修改柱子的宽度
        barWidth: 10,
        // 柱子设为圆角
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            // 此时的color可以修改不同柱子颜色
            color: function (params) {
              // 表示每个柱子的对象dataIndex是当前柱子的索引号
              return myColor[params.dataIndex];
            },
          },
        },
        data: [70, 34, 60, 78, 69],
        // 显示柱子内的文字
        label: {
          show: true,
          position: "inside",
          // {c}会自动解析为数据 data里的数据
          // a是系列的名字 b数据名 c是数据值
          formatter: "{c}%",
        },
        yAxisIndex: 0,
      },
      {
        name: "框",
        type: "bar",
        // 柱子之间的距离
        barCategoryGap: 50,
        // 修改柱子的宽度
        barWidth: 15,
        data: [100, 100, 100, 100, 100],
        itemStyle: {
          // 设置第二个的样式
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15,
        },
        yAxisIndex: 1,
      },
    ],
  };
  // 3.把配置给实例对象
  myChart.setOption(option);
  // 4.让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 折线图1 模块制作
(function () {
  var yearData = [
    {
      year: "2020", // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      ],
    },
    {
      year: "2021", // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34],
      ],
    },
  ];
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".line .chart"));

  var option = {
    // 通过color修改两条线的颜色
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      trigger: "axis",
    },
    legend: {
      // 如果series的name属性有值就不用写data了
      // data: ["邮件营销", "联盟广告"],
      // 修改图例组件的文字颜色
      textStyle: {
        color: "#4c9bfd",
      },
      // 标题的位置
      right: "10%", //加引号
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true, //显示边框
      borderColor: "#012f4a", //边框颜色
      containLabel: true, //包含文字刻度在内
    },
    // 下载功能
    /* toolbox: {
      feature: {
        saveAsImage: {},
      },
    }, */
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      axisTick: {
        show: false, //去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd", //文本颜色
        fontSize: "10",
      },
      axisLine: {
        show: false, //去除轴线
      },
      boundaryGap: false, //去除轴内间距
    },
    // y轴的数据会根据series里自动显示，所以不用写
    yAxis: {
      type: "value",
      axisTick: {
        show: false, //去除刻度线
      },
      // 刻度标签的颜色
      axisLabel: {
        color: "#4c9bfd", //文本颜色
      },
      axisLine: {
        show: false, //去除轴线
      },
      // y轴分割线
      splitLine: {
        lineStyle: {
          color: "#012f4a", //分割线颜色
        },
      },
    },
    series: [
      {
        name: "新增粉丝",
        type: "line",
        // 让折线带有弧度
        smooth: true,
        // 页面一显示展示2020年数据
        data: yearData[0].data[0],
      },
      {
        name: "新增游客",
        type: "line",
        smooth: true,
        data: yearData[0].data[1],
      },
    ],
  };
  // 3.把配置给实例对象
  myChart.setOption(option);
  // 4.让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  // 5.点击切换效果 事件委托
  $(".line h2").on("click", "a", function () {
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 重新渲染数据
    myChart.setOption(option);
  });
})();

// 折线图2模块制作
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".line1 .chart"));
  // 2.指定配置和数据
  var option = {
    // 鼠标滑过的提示信息
    tooltip: {
      trigger: "axis",
    },
    legend: {
      top: "0%",
      // data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
      // 头提示文字的样式
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12",
      },
    },

    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "26",
          "28",
          "29",
          "30",
        ],
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 7,
          },
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)",
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12,
          },
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
      },
    ],
    series: [
      {
        name: "邮件营销",
        type: "line",
        smooth: true,
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: 2,
        },
        // 填充区域的颜色
        areaStyle: {
          // 渐变色，只需要复制即可
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)", // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)", // 渐变线的结束颜色
              },
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)",
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12,
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        /* emphasis: {
          focus: "series",
        }, */
        data: [
          30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30,
          60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40,
        ],
      },
      {
        name: "转发量",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2,
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)",
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)",
          },
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12,
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        /* emphasis: {
          focus: "series",
        }, */
        data: [
          130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130,
          20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20,
        ],
      },
    ],
  };
  // 3.把配置给实例对象
  myChart.setOption(option);
  // 4.让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 饼状图1
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var option = {
    color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: {
      bottom: "0%",
      // 修改小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // orient: "vertical",
      // 修改图例组件的文字为12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12",
      },
      data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
    },
    series: [
      {
        name: "年龄分布",
        type: "pie",
        // 修改内圆的半径和外圆的半径(饼形图的大小)
        radius: ["40%", "60%"],
        avoidLabelOverlap: false,
        // 图形上的文字
        label: {
          show: false,
          position: "center",
        },
        // 文字和图之间的线
        labelLine: {
          show: false,
        },
        data: [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" },
        ],
      },
    ],
  };
  // 3.把配置给实例对象
  myChart.setOption(option);
  // 4.让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 饼形图2
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".pie1 .chart"));
  var option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff",
    ],
    legend: {
      bottom: "0%",
      // 修改小图标的宽度和高度
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12",
      },
    },

    series: [
      {
        name: "地区分布",
        type: "pie",
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        // 面积模式修改为半径模式
        roseType: "radius",
        labelLine: {
          // 连接扇形图线长 长线
          length: 4,
          // 连接文字线长 短线
          length2: 6,
        },
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "四川" },
          { value: 42, name: "湖北" },
        ],
        label: {
          fontSize: 10,
        },
      },
    ],
  };
  // 3.把配置给实例对象
  myChart.setOption(option);
  // 4.让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
