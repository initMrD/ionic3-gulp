import { Component } from '@angular/core';
import {Config} from '../../app/Config';
import {DragulaService} from "ng2-dragula";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController,private dragulaService: DragulaService) {
    console.info(Config.baseUrl);
  }


  getRight(i){
    for(var j =0 ;j < document.getElementById('pluginlist').children.length;j++){
      if (document.getElementById('pluginlist').children[j]==document.getElementById(i)){
        return (j%4)*document.body.clientWidth*0.2;
      }
    }
  }
  getTop(i){
    for(var j =0 ;j < document.getElementById('pluginlist').children.length;j++){
      if (document.getElementById('pluginlist').children[j]==document.getElementById(i)){
        return parseInt(j/4+"")*document.body.clientWidth*0.2;
      }
    }
  }

  canDrag = false;


  setting(){
    console.info(this.pluginList);
    this.canDrag = !this.canDrag;
  }
  cPluginList = [
    {
      icon:'assets/svg/电话.svg',
      name:'电话链接',
      func:function () {
      }
    },
    {
      icon:'assets/svg/电话.svg',
      name:'电话插件',
      func:function () {
      }
    },
    {
      icon:'assets/svg/电视.svg',
      name:'视频播放',
      func:function () {
      }
    },
    {
      icon:'assets/svg/map.svg',
      name:'百度地图',
      func:function () {
      }
    },
    {
      icon:'assets/svg/comments.svg',
      name:'融云',
      func:function () {
      }
    },
    {
      icon:'assets/svg/抢单1.svg',
      name:'复制粘贴',
      func:function () {
      }
    },
    {
      icon:'assets/svg/版本检测40.svg',
      name:'文件下载',
      func:function () {
      }
    },
    {
      icon:'assets/svg/电视.svg',
      name:'打开网页',
      func:function () {
      }
    },
    {
      icon:'assets/svg/bags.svg',
      name:'轻应用',
      func:function () {
      }
    },
    {
      icon:'assets/svg/我的二维码.svg',
      name:'相机',
      func:function () {
      }
    },
    {
      icon:'assets/svg/jump.svg',
      name:'跳转',
      func:function () {
      }
    },
    {
      icon:'assets/svg/statistics.svg',
      name:'友盟统计',
      func:function () {
      }
    },
    {
      icon:'assets/svg/phone-landscape.svg',
      name:'强制横屏',
      func:function () {
      }
    },
    {
      icon:'assets/svg/phone-portrait.svg',
      name:'强制竖屏',
      func:function () {
      }
    },
    {
      icon:'assets/svg/qq.svg',
      name:'QQ登陆',
      func:function () {
      }
    },
    {
      icon:'assets/svg/permission.svg',
      name:'安卓权限',
      func:function () {
      }
    }
  ];

  pluginList = [
  {
    icon:'assets/svg/电话.svg',
    name:'电话链接',
    func:function () {
    }
  },
  {
    icon:'assets/svg/电话.svg',
    name:'电话插件',
    func:function () {
    }
  },
  {
    icon:'assets/svg/电视.svg',
    name:'视频播放',
    func:function () {
    }
  },
  {
    icon:'assets/svg/map.svg',
    name:'百度地图',
    func:function () {
    }
  },
  {
    icon:'assets/svg/comments.svg',
    name:'融云',
    func:function () {
    }
  },
  {
    icon:'assets/svg/抢单1.svg',
    name:'复制粘贴',
    func:function () {
    }
  },
  {
    icon:'assets/svg/版本检测40.svg',
    name:'文件下载',
    func:function () {
    }
  },
  {
    icon:'assets/svg/电视.svg',
    name:'打开网页',
    func:function () {
    }
  },
  {
    icon:'assets/svg/bags.svg',
    name:'轻应用',
    func:function () {
    }
  },
  {
    icon:'assets/svg/我的二维码.svg',
    name:'相机',
    func:function () {
    }
  },
  {
    icon:'assets/svg/jump.svg',
    name:'跳转',
    func:function () {
    }
  },
  {
    icon:'assets/svg/statistics.svg',
    name:'友盟统计',
    func:function () {
    }
  },
  {
    icon:'assets/svg/phone-landscape.svg',
    name:'强制横屏',
    func:function () {
    }
  },
  {
    icon:'assets/svg/phone-portrait.svg',
    name:'强制竖屏',
    func:function () {
    }
  },
  {
    icon:'assets/svg/qq.svg',
    name:'QQ登陆',
    func:function () {
    }
  },
  {
    icon:'assets/svg/permission.svg',
    name:'安卓权限',
    func:function () {
    }
  }
];
}
