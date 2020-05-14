import Vue from "vue/dist/vue.esm.js";
import VueX,{mapState} from "vuex";
// import VueRouter from "vue-router";
import style from "./index.less";
// import routes from "../route.js";
// import Navs from "../components/nav/nav.vue";

// Vue.use(VueRouter);
// const router = new VueRouter(routes);
// console.log(routes);

Vue.use(VueX);
//rem 的基础
document.body.style.fontSize = window.innerWidth*28/640 +"px";

let store = new VueX.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state){
            state.count++;
        }
    }
});


// mapState 返回值为对象，可传参数组，可传参对象
let Counter = {
    template: "<div>{{count}}:{{countPlusLocalState}}</div>",
    data: function(){
        return {
            localCount: 10
        };
    },
    computed: mapState({
        count: state=> state.count,
        countalias: "count",
        countPlusLocalState(state){
            return state.count + this.localCount
        }
    })
};

let app = new Vue({
    el: "#app",
    store: store,
    data: {
        name: "katy"
    },
    components: {
        Counter
    },
    methods: {
        changeState(e){
            //不光是取值，还想从各个组件内部设置值
            console.log(this.$store);
            this.$store.commit("increment");
            window.setTimeout(()=>{
                console.log(this.$store.state.count)
            },1000);
        }
    }
});
