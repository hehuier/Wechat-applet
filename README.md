# wechat [原生项目搭建](https://github.com/zce/weapp-boilerplate)
##  [app.is](https://github.com/EastWorld/wechat-app-mall/blob/master/app.js)
``` javascipt
/**
 * Request 模块 请求数据
 * @type {Object}
 */
const api = require('./utils/request.js')
```
## app.json
### [pages](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#pages)  
>**All pages must be here.**  
>**First is default to view**  
``` javascipt
{ "pages": ["pages/index/index", "pages/logs/logs"] }
```
### [window](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#window) 
  >**用于设置小程序的状态栏、导航条、标题、窗口背景色。**  
``` javascipt
{
  "window": {
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "微信接口功能演示",
    "backgroundColor": "#eeeeee",
    "backgroundTextStyle": "light"
  }
}
``` 
### [tabBar](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#tabBar) 
>**如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。**  
``` javascipt
{
  "tabBar": {
      "color": "#999999",
      "selectedColor": "#35495e",
      "borderStyle": "white",
      "backgroundColor": "#f5f5f5",
      "list": [
        {
          "text": "榜单",
          "pagePath": "pages/board/board",
          "iconPath": "images/board.png",
          "selectedIconPath": "images/board-actived.png"
        },
        {
          "text": "搜索",
          "pagePath": "pages/search/search",
          "iconPath": "images/search.png",
          "selectedIconPath": "images/search-actived.png"
        },
        {
          "text": "我的",
          "pagePath": "pages/profile/profile",
          "iconPath": "images/profile.png",
          "selectedIconPath": "images/profile-actived.png"
        }
      ]
    }
}
``` 
  ### [networkTimeout](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#networkTimeout) 
  >**网络超时时间**  
  ``` javascipt
"networkTimeout": {
   "request": 10000,
   "downloadFile": 10000
  }
  ``` 
  ## [utils](https://github.com/EastWorld/wechat-app-mall/tree/master/utils) 封装的公共模块
  
  # [wepy](https://github.com/Tencent/wepy)
  
  #小程序 小结
  ## 关于登录
  >[wx.login]( https://developers.weixin.qq.com/miniprogram/dev/api/api-login.html)
  >[wx.checkSession](https://developers.weixin.qq.com/miniprogram/dev/api/signature.html#wxchecksessionobject) 校验当前用户session_key是否有效
  >[wx.authorize](https://developers.weixin.qq.com/miniprogram/dev/api/authorize.html)向用户发起授权申请  
  >wx.getUserInfo 获取用户基本信息  
  ## 生成海报
  利用[canvas](https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html)绘制海报 ---> canvasToTempFilePath 导出图片 --> wx.saveImageToPhotosAlbum({}）将图片保存在本地相册中
``` javascipt  
class CanvasKit {
    constructor() {
    }
    drawImg(option = {}) {
      ...
      return this
    }
    drawRect(option = {}) {
      return this
    }
    drawText(option = {}) {
      ...
      return this
    }
    static exportImg(option = {}) {
      ...
    }
  }
  
  let drawer = new CanvasKit('canvasId').drawImg(styleObj1).drawText(styleObj2)
  drawer.exportImg()
``` 
**小程序中无法绘制网络图片到canvas上，需要通过downLoadFile 先下载图片到本地临时文件才可以绘制**
  
  
  


