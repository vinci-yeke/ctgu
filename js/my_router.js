/**
 * Created by yk on 2017/4/9.
 */

//    vue路由设置
console.log('-------------myrouter----------------------')
//   1. 定义路由组件
const Main = {template: '#temp-main'}
const Movie = {template: '#temp-vedio'}
const App_down = {template: '#temp-app'}
const Connect = {template: '#temp-connect'}
//const Upload = {template:'./template/temp_upload.html'}
//const Login = {template:'./template/temp_login.html'}



// 2. 定义路由
const routes = [
    {path: '/main-page', component: Main},
    {path: '/movie', component: Movie},
    {path: '/app_down', component: App_down},
    {path: '/connect', component: Connect},
    {path: '/', redirect: '/main-page'},
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes:routes
    // （缩写）相当于 routes: routes
})


// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    router:router
}).$mount('#vuemain')


// 现在，应用已经启动了！
//var temp_app = new Vue({})
//var temp_connect = new Vue({})
//var temp_login = new Vue({})
//var temp_main = new Vue({})
//var temp_upload = new Vue({})
new Vue({
    el:'#files-list',
    data:{
        file_movies:[
            {name:'yk',img:'./img/vans.jpg',intro:'dsadasdas',link:'231'},
            {name:'yk',img:'./img/vans.jpg',intro:'dsadasdas',link:'231'},
            {name:'yk',img:'./img/vans.jpg',intro:'dsadasdas',link:'231'},
            {name:'yk',img:'./img/vans.jpg',intro:'dsadasdas',link:'231'},
            {name:'yk',img:'./img/vans.jpg',intro:'dsadasdas',link:'231'},
            {name:'yk',img:'./img/vans.jpg',intro:'dsadasdas',link:'231'},
            {name:'yk',img:'./img/vans.jpg',intro:'dsadasdas',link:'231'},
            {name:'yk',img:'./img/vans.jpg',intro:'dsadasdas',link:'231'},
            {name:'yk',img:'./img/vans.jpg',intro:'dsadasdas',link:'231'},
            {name:'yk',img:'./img/vans.jpg',intro:'dsadasdas',link:'231'},
            {name:'yk',img:'./img/vans.jpg',intro:'dsadasdas',link:'231'},
            {name:'yk',img:'./img/vans.jpg',intro:'dsadasdas',link:'231'}
        ]
    },
    render: (createElement) => createElement(Movie),
    methods:{}
})