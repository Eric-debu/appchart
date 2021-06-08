//自调用函数
(function () {
    // 1、页面一加载就要知道页面宽度计算
    var setFont = function () {
        // 因为要定义变量可能和别的变量相互冲突，污染，所有用自调用函数
        var html = document.documentElement;// 获取html
        // 获取宽度
        var width = html.clientWidth;

        // 判断
        if (width < 1024) width = 1024
        if (width > 1920) width = 1920
        // 设置html的基准值
        var fontSize = width / 80 + 'px';
        // 设置给html
        html.style.fontSize = fontSize;
    }
    setFont();
    // 2、页面改变的时候也需要设置
    // 尺寸改变事件
    window.onresize = function () {
        setFont();
    }
})();



(function () {
    //事件委托
    $('.monitor').on('click', ' a', function () {
        //点击当前的a 加类名 active  他的兄弟删除类名
        $(this).addClass('active').siblings().removeClass('active');
        //获取一一对应的下标
        var index = $(this).index();
        //选取content 然后对应下标的 显示   当前的兄弟.content隐藏
        $('.content').eq(index).show().siblings('.content').hide();
    });
    //滚动
    //原理：把marquee下面的子盒子都复制一遍 加入到marquee中
    //      然后动画向上滚动，滚动到一半重新开始滚动
    //因为选取的是两个marquee  所以要遍历
    $('.monitor .marquee').each(function (index, dom) {
        //将每个 的所有子级都复制一遍
        var rows = $(dom).children().clone();
        //再将新的到的加入原来的
        $(dom).append(rows);
    });

})();
(function () {
    var myechart = echarts.init($('.pie')[0]);
    option = {
        // 控制提示
        tooltip: {
            // 非轴图形，使用item的意思是放到数据对应图形上触发提示
            trigger: 'item',
            // 格式化提示内容：
            // a 代表图表名称 b 代表数据名称 c 代表数据  d代表  当前数据/总数据的比例
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 控制图表
        series: [
            {
                // 图表名称
                name: '地区',
                // 图表类型
                type: 'pie',
                // 南丁格尔玫瑰图 有两个圆  内圆半径10%  外圆半径70%
                // 百分比基于  图表DOM容器的半径
                radius: ['10%', '60%'],
                // 图表中心位置 left 50%  top 50% 距离图表DOM容器
                center: ['50%', '50%'],
                // 半径模式，另外一种是 area 面积模式
                roseType: 'radius',
                // 数据集 value 数据的值 name 数据的名称
                data: [
                    {value: 1545, name: '简易案件'},//196
                    {value: 1110, name: '1千元以下'},//实际上是152843 ，此处为了美观
                    {value: 1100, name: '1千元-5千元'},//实际上是153360，此处为了美观
                    {value: 181, name: '5千元-1万元'},//11371
                    {value: 98, name: '1万元-5万元'},//953
                    {value: 76, name: '5万元以上'},//381
                ],
                //文字调整
                label: {
                    fontSize: 12
                },
                //引导线
                labelLine: {
                    length: 8,
                    length2: 10
                }
            }
        ],
        color: [
            "#006cff",
            "#cd5501",
            "#ed8884",
            "#ffc80a",
            "#0096ff",
            "#9fe6b8",
        ],
    };
    myechart.setOption(option);
     myechart.on('click',function (params) {
        location.href='http://39.104.58.152:8012/login?redirect=%2Fdashboard'
    })
})();


(function () {
    // console.log(companyname);
    // console.log(first_claim);

    var cpy = {};
    var companyname = new Array();
    var first_claim = new Array();



    option = {
        // 工具提示
        tooltip: {
            // 触发类型  经过轴触发axis  经过轴触发item
            trigger: 'item',
            // 轴触发提示才有效
            axisPointer: {
                // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果
                type: 'shadow'
            }
        },
        // 图表边界控制
        grid: {
            // 距离 上右下左 的距离
            left: '0',
            right: '3%',
            bottom: '3%',
            top: '5%',
            // 大小是否包含文本【类似于boxsizing】
            containLabel: true,
            //显示边框
            show: true,
            //边框颜色
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        // 控制x轴
        xAxis: [
            {
                // 使用类目，必须有data属性
                type: 'category',
                // 使用 data 中的数据设为刻度文字
                //data: ['上海1', '广州22', '北京34', '深圳1', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                //data: companyname,
                // '专卖科', '研发部', '运维部', '市场稽查一队', '市场稽查二队','政务大队'
                data: ['专卖科', '研发部', '运维部', '市场稽查一队', '市场稽查二队','政务大队'],

                // 刻度设置
                axisTick: {
                    // true意思：图形在刻度中间
                    // false意思：图形在刻度之间
                    alignWithLabel: false,
                    show: false
                },
                //文字
                axisLabel: {
                    color: '#4c9bfd',
                    rotate: 25
                        /*formatter: val => {
                            let txt = val
                            if (val.length > 3) {
                                txt = val.substr(0, 3) + '...'
                            }
                            return txt
                        }*/

                    },


            }
        ],
        // 控制y轴
        yAxis: [
            {
                // 使用数据的值设为刻度文字
                type: 'value',
                axisTick: {
                    // true意思：图形在刻度中间
                    // false意思：图形在刻度之间
                    alignWithLabel: false,
                    show: false
                },
                //文字
                axisLabel: {
                    color: '#4c9bfd'
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                },
            }
        ],
        // 控制x轴
        series: [

            {
                // series配置
                // 颜色
                itemStyle: {
                    // 提供的工具函数生成渐变颜色
                    color: new echarts.graphic.LinearGradient(
                        // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#00fffb'}, // 0 起始颜色
                            {offset: 1, color: '#0061ce'}  // 1 结束颜色
                        ]
                    )
                },
                // 图表数据名称
                name: '部门任务分数',
                // 图表类型
                type: 'bar',
                // 柱子宽度
                barWidth: '60%',
                // 数据
                // data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                data: [245,188,258,306,325,277],
            }

        ]
    };

    var myechart = echarts.init($('.users .bar')[0]);
    myechart.setOption(option);
     myechart.on('click',function (params) {
        location.href='http://39.104.58.152:8012/login?redirect=%2Fdashboard'
    })

})();

// //订单
// (function () {
//     var data = {
//         day365: { orders: '20,301,987', amount: '99834' },
//         day90: { orders: '301,987', amount: '9834' },
//         day30: { orders: '1,987', amount: '3834' },
//         day1: { orders: '987', amount: '834' }
//     //点击事件
//     $('.order').on('click', '.filter a', function () {
//         //点击之后加类名
//         $(this).addClass('active').siblings().removeClass('active');
//         // 先获取点击a的 data-key自定义属性
//         var key = $(this).attr('data-key');
//         //获取自定义属性
//         // data{}==>data.shuxing data['shuxing]
//         key = data[key];//
//         $('.order .item h4:eq(0)').text(key.orders);
//         $('.order .item h4:eq(1)').text(key.amount);
//     });
//     //定时器
//     var index = 0;
//     var aclick = $('.order a');
//     setInterval(function () {
//         index++;
//         if (index > 3) {
//             index = 0;
//         }
//         //每san秒调用点击事件
//         aclick.eq(index).click();
//     }, 3000);
// })();


//专利增长
(function () {

    var option = {
        //鼠标提示工具
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            // 类目类型
            type: 'category',
            // x轴刻度文字
            data: ['2020年1月','2020年2月','2020年3月', '2020年4月', '2020年5月', '2020年6月', '2020年7月', '2020年8月', '2020年9月', '2020年10月', '2020年11月', '2020年12月'],
            axisTick: {
                show: false//去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd'//文本颜色
            },
            axisLine: {
                show: false//去除轴线
            },
            boundaryGap: false//去除轴内间距
        },
        yAxis: {
            // 数据作为刻度文字
            type: 'value',
            axisTick: {
                show: false//去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd'//文本颜色
            },
            axisLine: {
                show: false//去除轴线
            },
            boundaryGap: false//去除轴内间距
        },
        //图例组件
        legend: {
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色

            },
            right: '10%'//距离右边10%
        },
        // 设置网格样式
        grid: {
            show: true,// 显示边框
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            borderColor: '#012f4a',// 边框颜色
            containLabel: true // 包含刻度文字在内
        },
        series: [{
            name: '用户申请',
            // 数据
            data: [97, 100, 115, 129, 164, 237, 383, 400, 485, 701, 716, 762],
            // 图表类型
            type: 'line',
            // 圆滑连接
            smooth: true,
            itemStyle: {
                color: '#00f2f1'  // 线颜色
            }
        },
            {
                name: '平均在线人数',
                // 数据
                data: [28, 58, 66,88,122, 166, 158, 188, 199, 228, 255, 250],
                // 图表类型
                type: 'line',
                // 圆滑连接
                smooth: true,
                itemStyle: {
                    color: '#ed3f35'  // 线颜色
                }
            }]
    };
    var myechart = echarts.init($('.line')[0]);
    myechart.setOption(option);
     myechart.on('click',function (params) {
        location.href='http://39.104.58.152:8012/login?redirect=%2Fdashboard'
    })


})();


(function () {
    var data = [
        {name: '可爱多', num: '9,086'},
        {name: '娃哈哈', num: '8,341'},
        {name: '喜之郎', num: '7,407'},
        {name: '八喜', num: '6,080'},
        {name: '小洋人', num: '6,724'},
        {name: '好多鱼', num: '2,170'},
    ]
    $('.inner').on('mouseenter', '.sup li', function () {
        $(this).addClass('active').siblings().removeClass('active');
        //获取随机的值  sort方法 是给数组排序 a-b是从小到大
        //.5-随机0-1的数 可能为正可能为负 排序就会随机
        var radomData = data.sort(function (a, b) {
            return 0.5 - Math.random()
        });
        var html = '';
        radomData.forEach(function (item) {
            html += `<li><span>${item.name}</span><span>${item.num} <s class="icon-up"></s></span></li>`;
        });
        //渲染
        $('.sub').html(html);
    });
    $('.province .sup li').eq(0).mouseenter();
    var index = 0;
    var timer = setInterval(() => {
        index++;
        if (index > 5) {
            index = 0;
        }
        $('.sup li').eq(index).mouseenter();
    }, 2000);
})();




