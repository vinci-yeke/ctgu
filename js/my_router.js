/**
 * Created by yk on 2017/4/9.
 */

//    vue·������
console.log('-------------myrouter----------------------')
//   1. ����·�����
const Main = {template: '#temp-main'}
const Movie = {template: '#temp-vedio'}
const App_down = {template: '#temp-app'}
const Connect = {template: '#temp-connect'}
//const Upload = {template:'./template/temp_upload.html'}
//const Login = {template:'./template/temp_login.html'}



// 2. ����·��
const routes = [
    {path: '/main-page', component: Main},
    {path: '/movie', component: Movie},
    {path: '/app_down', component: App_down},
    {path: '/connect', component: Connect},
    {path: '/', redirect: '/main-page'},
]

// 3. ���� router ʵ����Ȼ�� `routes` ����
const router = new VueRouter({
    routes:routes
    // ����д���൱�� routes: routes
})


// 4. �����͹��ظ�ʵ����
// �ǵ�Ҫͨ�� router ���ò���ע��·�ɣ�
// �Ӷ�������Ӧ�ö���·�ɹ���
const app = new Vue({
    router:router
}).$mount('#vuemain')


// ���ڣ�Ӧ���Ѿ������ˣ�
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