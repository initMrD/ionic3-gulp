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
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          type: 'gauge',
          radius:"71%",
          startAngle:180,
          endAngle:0,
          min:-80,
          max:20,
          splitNumber:5,
          axisLine:{
            lineStyle:{
              color:[[0.8,'#FF7F00'],[1,'#D5D5D5']],
              width:20
            }
          },
          splitLine:{
            lineStyle:{
              color:{
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(255, 255, 255, 1)' // 0% 处的颜色
                }, {
                  offset: 0.1, color: 'rgba(255, 255, 255, 0.0)' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              },
              width:20
            }
          },
          axisTick:{
            show:false
          },
          pointer:{
            length:'30%',
          },
          axisLabel:{//刻度数字
            show:false
          },
          detail:{//底部数字
            show:false,
          },
          title:{//中心标题
            show:false
          },
          data: [{value: -20, name: '涨跌幅度'}]
        }
      ]
    };
    myChart.setOption(option);
  }

}
