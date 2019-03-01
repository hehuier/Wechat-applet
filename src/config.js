// ENV
const env = 'production' // 'development' or 'production'

// WXAPP VERSION
const version = 1.0

// WXAPP INFO
const appInfo = {
  appid:'wx54be502e9f76d294',
  secret:'4411f4e56bc341c3f83d860cc5e305af',
	apiAppid:'cuzco7163'
}

// development and production host
const hosts = {
  development: 'https://smallapp.dragontrail.cn',
  production: 'https://xcx.dragontrail.cn'
}

// apis
const api = {
  // 用户登录
  login:{
    method: 'POST',
    url: '/login/userkey'
  },
  // 获取主菜单
  live:{
    method: 'GET',
    url: '/live/list'
  },
  video:{
    method: 'GET',
    url: '/article/detail'
  },
  weather:{
    method: 'GET',
    url: '/weather'
  },
  exchange: {
    method: 'GET',
    url: '/exchange'
  },
  // 获取所有区域
  regions: {
    method: 'GET',
    url: '/place/regions'
  },
  //旅游贴士
/*  tip: {
    method: 'GET',
    url: '/tip/tipsoftheme'
  }, */ 
  // 获取某一区域下的某一分类中的景点设施
  places: {
    method: 'GET',
    url: '/place/places'
  },
  // 景点设施详情
  place: {
    method: 'GET',
    url: '/place/detail'
  },
  //旅行贴士
/*  tip: {
    method: 'GET',
    url: '/article/tip'
  },*/
  cate: {
    method: 'GET',
    url: '/article/cate/82'
  },  
  //旅游行程
  alltrip: {
    method: 'GET',
    url: '/alltrip/list'
  },
  alltripDetail: {
    method: 'GET',
    url: '/alltrip/detail'
  },
  // 文章列表
  articles: {
  	method: 'GET',
  	url: '/article/articles'
  },
  // 某一主题文章列表
  theme: {
    method: 'GET',
    url: '/article/theme'
  },
  // 文章详情  旅行贴士详情页
  article: {
  	method: 'GET',
  	url: '/article/detail'
  },
  // 热门景点
/*  hot: {
    method: 'GET',
    url: '/article/hot'
  },*/
  //精彩内容
  hot: {
    method: 'GET',
    url: '/article/cate/84'
  },
  // 增加行程
  addtrip: {
    method: 'POST',
    url: '/schedule/add'
  },
  // 删除行程
  deletetrip: {
    method: 'POST',
    url: '/schedule/mark'
  },
  // 行程列表
  triplist: {
    method: 'POST',
    url: '/schedule/list'
  },
  // 优惠券列表
  coupon: {
    method: 'GET',
    url: '/coupon/list'
  },
  // 优惠券清除
  couponclear: {
    method: 'GET',
    url: '/coupon/clear'
  },
  // 增加优惠券
  addcoupon: {
    method: 'POST',
    url: '/coupon/add'
  },
  createPoster: {
    method: 'GET',
    url: '/activity/share'  
  },
  // 景点相关优惠券
  relations: {
    method: 'GET',
    url: '/place/relations'
  },
  // 搜索
  search: {
    method: 'GET',
    url: '/search/global'
  }

}

module.exports = {
  env,
  version,
  appInfo,
  api: disposeUrl(api, hosts[env])
}

function disposeUrl (obj, prefix) {
  Object.keys(obj).forEach(v => {
    if (obj[v].url) {
      obj[v].url = prefix + obj[v].url + '?appid=' + appInfo.apiAppid
    } else {
      obj[v] = disposeUrl(obj[v], prefix)
    }
  })

  return obj
}
