
/*
 * 专业大厅地图标点
 */
var geoCoordMap = {
    "店铺1":[106.681974,29.047926],
    "店铺2":[106.644405,29.046767],
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                code : data[i].code
            });
        }
    }
    return res;
};

/*
 * 初始化地图
 */
var max = 6000,
    min = 10;
var maxSize4Pin = 100,
    minSize4Pin = 20;
var chart ;
var createOption = function(){
    var option = {
        // backgroundColor: '#404a59',
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return params.name;
            }
        },
        color: ['blue','#61c5f9','#97AEF9','#5CBC32','#ECAB51'],
        legend : {
            selectedMode: 'single',
            orient : 'vertical',
            left : '30px',
            bottom : '55px',
            icon: "rect",
            data : ['店铺'],
            //============

            show:true,
            //=============
            selected:{
                '店铺':false,

            },
            textStyle : {
                color : "red"
            },
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'red' // 0% 处的颜色
                }, {
                    offset: 1, color: 'blue' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        },
        geo: {
            map: 'chongqing_qijiang',
            label: {
                emphasis: {
                    show: false
                }
            },
            layoutSize: "100%",
            itemStyle: {
                normal: {
                    areaColor: '#B3E1F5',
                    borderColor: '#7EB4CB',
                    borderWidth:'2',
                },
                emphasis: {
                    areaColor: '#D1F1FD'
                }
            }
        },
        series : [{
            type: 'effectScatter',
            coordinateSystem: 'geo',
            rippleEffect: {
                brushType: 'stroke'
            },
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(5,80,151,0.2)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(5,80,151,0.8)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,108,255,0.7)'
                        }],
                        global: false // 缺省为 false
                    },
                }

            },
            label: {
                normal: {
                    show: true,
                    color: '#fff',
                    fontWeight: 'bold',
                    position: 'inside',
                    formatter: function (para) {
                        return '{cnNum|' + para.data.value[2] + '}'
                    },
                    rich: {
                        cnNum: {
                            fontSize: 13,
                            color: '#D4EEFF',
                        }
                    }
                },
            },
            symbol: 'circle',
            symbolSize: function (val) {
                if (val[2] === 0) {
                    return 0;
                }
                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                var b = maxSize4Pin - a * max;
                return a * val[2] + b * 1.2;
            },
            data: convertData([
                {name: "店铺1", value: '店铺1', code: '20'},
                {name: "店铺2", value: '店铺2', code: '20'}
            ]),
            zlevel: 1,
        },

        ]
    }
    return option;
}
  function drawDistrictArea(mapJson) {
      echarts.registerMap('chongqing_qijiang', mapJson);
      chart = echarts.init(document.querySelector(".map .chart"));
       var option = createOption();
      chart.setOption(option);
      chart.on('click',function(e){
        console.log(e);
      });
  }

  
var jsCtx='./';
  $.get(jsCtx + 'json/chongqing_qijiang.json',drawDistrictArea);

