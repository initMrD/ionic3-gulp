import { Component } from '@angular/core';
import {IonicPage} from "ionic-angular";
declare var echarts;

/**
 * Generated class for the DashboardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@IonicPage({name: 'dashboard-component'})
@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardComponent {

  text: string;

  constructor() {
    console.log('Hello DashboardComponent Component');
    this.text = 'Hello World';
  }
  ionViewDidLoad() {
    var myChart = echarts.init(document.getElementById('dashboardDemo'));
    var option = {
      tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
      },
      series: [
        {
          type: 'gauge',
          radius:"71%",
          startAngle:180,//起始角度
          endAngle:0,//结束角度
          min:-50,//最大值
          max:50,//最小值
          splitNumber:4,//分隔区域，分割线=splitNumber-1
          axisLine:{//盘的颜色
            lineStyle:{
              color:[[0.3,'red'],[0.5,'#FF7F00'],[1,'#D5D5D5']],//这里分别设置的时0-0.8和0.8-1的颜色
              width:20//盘的宽度
            }
          },
          splitLine:{
            show:false,
            lineStyle:{//分割线样式，这里用的是径向渐变做出小圆点的效果（有点丑，可以考虑用图片替代）
              color:{
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(255, 255, 255, 1)' // 0% 处的颜色
                }, {
                  offset: 0.1, color: 'rgba(255, 255, 255, 0.0)' // 100% 处的颜色
                }]
              },
              width:20//分割线宽度
            }
          },
          axisTick:{//小刻度
            show:false
          },
          pointer:{
            length:'30%',//指针大小
          },
          axisLabel:{//刻度数字
            show:true,
            formatter: function(value){
              if(value==0){
                return '0';
              }else{
                return '';
              }
            },
            distance:0
          },
          detail:{//底部数字
            show:true,
          },
          title:{//中心标题
            show:false
          },
          data: [{value: -30, name: '涨跌幅度'}]//显示的数据
        }
      ]
    };
    myChart.setOption(option);
  }

}
