
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
        "沙溪路时代美食广场店":[106.681974,29.047926],
        "天星大道店":[106.644405,29.046767],
        "扶欢镇文峰村店":[106.707563,28.806750],
        "东溪镇草坪村店":[106.687862,28.779500],
        "篆塘镇篆南街店":[106.669934,28.893514],
        "安稳镇明月路店":[106.756955,28.655495],
        "丁山镇正街店":[106.589242,28.709670],
        "赶水藻渡街上店":[106.784251,28.749071],
        "扶欢镇农贸小区店":[106.759172,28.830796],
        "鸡公咀茶店子店（仁义庄）":[106.611645,28.971210],
        "乐兴社区陈家街店":[106.741580,29.153273],
        "隆盛镇莲花村店（莲花便民服务副食店）":[106.898973,29.120695],
        "永城镇永和村河坝组店（永和商店）":[106.823072,29.071475],
        "石角镇黄沙村店":[106.854322,29.009255],
        "横山镇回新路店":[106.692001,29.105921],
        "永新镇荆山村皂角林社店":[106.448460,28.941042],
        "龙山村新瓦房社店":[106.446534,28.895307],
        "高庙村店":[106.562694,28.791920],
        "沿河村石梯子社店":[106.685449,28.565263],
        "石壕镇高山村店":[106.685676,28.547683],

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
                    {name: "沙溪路时代美食广场店", value: '沙溪路时代美食广场店', code: '1'},
                    {name: "天星大道店", value: '天星大道店', code: '2'},
                    {name: "扶欢镇文峰村店", value: '扶欢镇文峰村店', code: '3'},
                    {name: "东溪镇草坪村店", value: '东溪镇草坪村店', code: '4'},
                    {name: "篆塘镇篆南街店", value: '篆塘镇篆南街店', code: '5'},
                    {name: "安稳镇明月路店", value: '安稳镇明月路店', code: '6'},
                    {name: "丁山镇正街店", value: '丁山镇正街店', code: '7'},
                    {name: "赶水藻渡街上店", value: '赶水藻渡街上店', code: '8'},
                    {name: "扶欢镇农贸小区店", value: '扶欢镇农贸小区店', code: '9'},
                    {name: "鸡公咀茶店子店（仁义庄）", value: '鸡公咀茶店子店（仁义庄）', code: '10'},
                    {name: "乐兴社区陈家街店", value: '乐兴社区陈家街店', code: '11'},
                    {name: "隆盛镇莲花村店（莲花便民服务副食店）", value: '隆盛镇莲花村店（莲花便民服务副食店）', code: '12'},
                    {name: "永城镇永和村河坝组店（永和商店）", value: '永城镇永和村河坝组店（永和商店）', code: '13'},
                    {name: "石角镇黄沙村店", value: '石角镇黄沙村店', code: '14'},
                    {name: "横山镇回新路店", value: '横山镇回新路店', code: '15'},
                    {name: "永新镇荆山村皂角林社店", value: '永新镇荆山村皂角林社店', code: '16'},
                    {name: "龙山村新瓦房社店", value: '中峰镇龙山村新瓦房社店', code: '17'},
                    {name: "高庙村店", value: '高庙村店', code: '18'},
                    {name: "沿河村石梯子社店", value: '打通镇沿河村石梯子社店', code: '19'},
                    {name: "石壕镇高山村店", value: '石壕镇高山村店', code: '20'}

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


