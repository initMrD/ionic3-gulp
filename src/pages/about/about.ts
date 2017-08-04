import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
declare var echarts;

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  gender = "";

  output() {
    console.log(this.gender);
  }

  dwData = [
    {value: 10, name: '4月'},
    {value: 52, name: '5月'},
    {value: 200, name: '6月'},
    {value: 334, name: '7月'},
    {value: 390, name: '8月'},
    {value: 330, name: '9月'}
  ];
  barData = [[3, 10], [4, 52], [5, 200], [6, 334], [7, 390], [8, 330], [9, 220]];

  chartFormatter = function (name) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
// 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pieDemo'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(this.option);
    var barChart = echarts.init(document.getElementById('lineDemo'));
    // 使用刚指定的配置项和数据显示图表。
    barChart.setOption(this.generateBarChart(this.barData));
  }
  option = {
    tooltip: {
      trigger: 'item',
      formatter: "{b}: {c} ({d}%)"
    },
    calculable : false,
    series : [
      {
        type:'pie',
        radius : [50, '80%'],
        center : ['50%', '50%'],
        color: ['#D5D5D5', '#EE4000','#2CBBFA'],
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        lableLine: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        data:[
          {value:65, name:'test1'},
          {value:10, name:'test2',selected:true},
          {value:25, name:'test3'}
        ]
      }
    ]
  };


  generateBarChart(data) {
    return {
      tooltip: {
        show: false
      },
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: {
            alignWithLabel: true
          },

        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],

      series: [
        {
          type: 'bar',
          barWidth: '60%',
          data: data,
          itemStyle:{
            normal:{
              color:'#00B8FF'
            }
          },
          markLine: {
            lineStyle: {
              normal: {
                type: 'dashed',
                width: 2,
                color: '#EE4000',
              }
            },
            label: {
              normal: {
                show: false
              }
            },
            symbolSize: 0,
            data: [{
              name: '采购价',
              yAxis: 150
            }
            ]
          }
        }
      ]
    }
  }


  generateChart(data) {
    var array = {};
    for (var item in data) {
      array[data[item].name] = data[item].value;
    }
    return {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: data,
        width: 150,
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 15,
        top: 50,
        formatter: function (name) {
          return name + "          " + array[name];
        }
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['25%', '60%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          center: ['70%', '40%'],
          data: data
        }
      ],
      color: ['#EE4000', '#fab202', '#3399ff', '#50e3c2', '#B8E986', '#00B8FF']
    }
  }
}
