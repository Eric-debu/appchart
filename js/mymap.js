
var outname = ['文龙街道','古南街道','万盛街道','三江街道','东林街道','横山镇','永城镇','永新镇','关坝镇','南桐镇','安稳镇','打通镇','扶欢镇',
    '新盛镇','石壕镇','石林镇','中峰镇','石角镇','篆塘镇','赶水镇','郭扶镇','金桥镇','隆盛镇','青年镇','黑山镇','丁山镇','万东镇','三角镇','丛林镇','东溪镇'];

var outvalue = [0, 524, 13, 140, 75, 13, 83, 11, 19, 15, 69, 260, 39, 4, 31, 104, 36, 1052, 33, 347, 9, 157, 22, 4, 18, 5, 2398, 41, 0, 484];
var outdata=[];
for (var i = 0; i < outname.length; i++) {
    outdata.push({
        name: outname[i],
        value: outvalue[i]
    })
}
    var geoCoordMap = {
        "店铺1":[106.681974,29.047926],
        "店铺2":[106.644405,29.046767],
        "店铺3":[106.707563,28.806750],
        "店铺4":[106.687862,28.779500],
        "店铺5":[106.669934,28.893514],
        "店铺6":[106.756955,28.655495],
        "店铺7":[106.589242,28.709670],
        "店铺8":[106.784251,28.749071],
        "店铺9":[106.759172,28.830796],
        "店铺10":[106.611645,28.971210],
        "店铺11":[106.741580,29.153273],
        "店铺12":[106.898973,29.120695],
        "店铺13":[106.823072,29.071475],
        "店铺14":[106.854322,29.009255],
        "店铺15":[106.692001,29.105921],
        "店铺16":[106.448460,28.941042],
        "店铺17":[106.446534,28.895307],
        "店铺18":[106.562694,28.791920],
        "店铺19":[106.685449,28.565263],
        "店铺20":[106.685676,28.547683],

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




    var createOption = function(){
        var option = {
            // backgroundColor: '#404a59',
            tooltip: {
                show:true,
                trigger: 'item',
                formatter: function (params) {
                    console.log(params)
                    return '&nbsp;&nbsp;'+params.name+'&nbsp;&nbsp;';
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

                show:false,
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
                    normal:{
                        show:false
                    },
                    emphasis: {
                        show: false,
                        fontSize:15,
                        color:'yellow'
                    }
                },
                layoutSize: "100%",
                itemStyle: {
                    normal: {
                        borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00F6FF'
                        }, {
                            offset: 1,
                            color: '#53D9FF'
                        }], false),
                        borderWidth: 3,
                        shadowColor: 'rgb(10,76,139)',
                        shadowOffsetY: 0,
                        shadowBlur: 60
                    }
                }
            },
            series : [{
                type: 'map',
                map: 'chongqing_qijiang',
                aspectScale: 0.75,
                //zoom:1.1,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: true,
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: {
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#073684' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#061E3D' // 100% 处的颜色
                            }],
                        },
                        borderColor: '#215495',
                        borderWidth: 1,
                    },
                    emphasis: {
                        areaColor: {

                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#073684' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#061E3D' // 100% 处的颜色
                            }],
                        },
                    }
                },
                data: outdata
            },
                {
                name : "店铺",
                type : 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData([
                    {name: "店铺1", value: '店铺1', code: '1'},
                    {name: "店铺2", value: '店铺2', code: '2'},
                    {name: "店铺3", value: '店铺3', code: '3'},
                    {name: "店铺4", value: '店铺4', code: '4'},
                    {name: "店铺5", value: '店铺5', code: '5'},
                    {name: "店铺6", value: '店铺6', code: '6'},
                    {name: "店铺7", value: '店铺7', code: '7'},
                    {name: "店铺8", value: '店铺8', code: '8'},
                    {name: "店铺9", value: '店铺9', code: '9'},
                    {name: "店铺10", value: '店铺10', code: '10'},
                    {name: "店铺11", value: '店铺11', code: '11'},
                    {name: "店铺12", value: '店铺12', code: '12'},
                    {name: "店铺13", value: '店铺13', code: '13'},
                    {name: "店铺14", value: '店铺14', code: '14'},
                    {name: "店铺15", value: '店铺15', code: '15'},
                    {name: "店铺16", value: '店铺16', code: '16'},
                    {name: "店铺17", value: '店铺17', code: '17'},
                    {name: "店铺18", value: '店铺18', code: '18'},
                    {name: "店铺19", value: '店铺19', code: '19'},
                    {name: "店铺20", value: '店铺20', code: '20'}

                ]),
                symbolSize: 15,
                show:true,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [{
                                offset: 0,
                                color:
                                    'rgba(5,80,151,0.2)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(0,206,209,0.7)'
                            }, {
                                offset: 1,
                                color: 'rgba(0,206,209,0.8)'
                            }],
                            global: false // 缺省为 false
                        },
                    }

                },
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


