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
    {value: 335, name: '直接访问'},
    {value: 310, name: '邮件营销'},
    {value: 234, name: '联盟广告'},
    {value: 135, name: '视频广告'},
    {value: 1548, name: '搜索引擎'}
  ];

  chartFormatter = function (name) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
// 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pieDemo'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(this.generateChart(this.dwData));
  }
  generateChart(data){
    var array = {};
    for(var item in data){
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
        data:data,
        width: 150,
        itemWidth:12,
        itemHeight:12,
        itemGap:15,
        top: 50,
        formatter: function (name) {
          return name + "          " +array[name];
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
      color:['#EE4000','#fab202','#3399ff','#50e3c2','#B8E986','#00B8FF']
    }
  }
}
