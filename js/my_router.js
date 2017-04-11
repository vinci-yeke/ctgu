/**
 * Created by yk on 2017/4/9.
 */
console.log('-------------myrouter----------------------')
//   1. 创建模版
const Main = {
    template: '#temp-main'
}
const Movie = {
    template: '#temp-vedio',
    data: function () {
        return {
            file_movies: [
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk1', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk2', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk3', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk4', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk5', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk6', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk7', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk8', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'},
                {name: 'yk', img: './img/vans.jpg', intro: 'dsadasdas', link: '231'}
            ]
        }
    }
}
const App_down = {template: '#temp-app',
        data(){
            return{
                appSorts:[
                    {name:'学习',list:[
                        {id:'312',name:'aaa',href:''},
                        {id:'',name:'bbb',href:''},
                        {id:'',name:'ccc',href:''}
                    ]},
                    {name:'娱乐',list:[
                        {id:'312',name:'aaa',href:''},
                        {id:'',name:'bbb',href:''},
                        {id:'',name:'ccc',href:''}
                    ]},
                    {name:'工具',list:[
                        {id:'312',name:'aaa',href:''},
                        {id:'',name:'bbb',href:''},
                        {id:'',name:'ccc',href:''}
                    ]},
                    {name:'学习',list:[
                        {id:'312',name:'aaa',href:''},
                        {id:'',name:'bbb',href:''},
                        {id:'',name:'ccc',href:''}
                    ]},
                    {name:'娱乐',list:[
                        {id:'312',name:'aaa',href:''},
                        {id:'',name:'bbb',href:''},
                        {id:'',name:'ccc',href:''}
                    ]},
                    {name:'工具',list:[
                        {id:'312',name:'aaa',href:''},
                        {id:'',name:'bbb',href:''},
                        {id:'',name:'ccc',href:''}
                    ]},
                    {name:'学习',list:[
                        {id:'312',name:'aaa',href:''},
                        {id:'',name:'bbb',href:''},
                        {id:'',name:'ccc',href:''}
                    ]},
                    {name:'娱乐',list:[
                        {id:'312',name:'aaa',href:''},
                        {id:'',name:'bbb',href:''},
                        {id:'',name:'ccc',href:''}
                    ]},
                    {name:'工具',list:[
                        {id:'312',name:'aaa',href:''},
                        {id:'',name:'bbb',href:''},
                        {id:'',name:'ccc',href:''}
                    ]}
                ]
            }
        }
}
const Connect = {template: '#temp-connect'}
const Play = {template: '#temp-play'}
//const Upload = {template:'./template/temp_upload.html'}
//const Login = {template:'./template/temp_login.html'}


// 2. 配置路由路径
const routes = [
    {path: '/main-page', component: Main},
    {
        path: '/movie', component: Movie,
        //children:[
        //    {path:'/movie/play',component:Play}
        //]
    },
    {path:'/play',component:Play},
    {path: '/app_down', component: App_down},
    {path: '/connect', component: Connect},
    {path: '/', redirect: '/main-page'},
]

// 3. 实例化路由对象用于添加
const router = new VueRouter({
    routes: routes
})


// 4. 将路由注册到vue实例上

const app = new Vue({
    router: router
}).$mount('#vuemain')

//new Vue({
//    el: '#files-list',
//    data(){
//        return {}
//    },
//    computed: {
//        file_movies: function () {
//            return this.file_movies;
//        }
//    },
//    methods: {}
//})

// ���ڣ�Ӧ���Ѿ������ˣ�
//var temp_app = new Vue({})
//var temp_connect = new Vue({})
//var temp_login = new Vue({})
//var temp_main = new Vue({})
//var temp_upload = new Vue({})
