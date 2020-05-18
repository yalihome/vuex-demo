import Vue from "vue/dist/vue.esm.js";
import VueX, { mapState, mapGetters } from "vuex";
// import VueRouter from "vue-router";
import style from "./index.less";
import val, { name, isWoman } from "../service";
import { age,m } from "../service";
import obj from "../service/service";
// obj.lala="fdf";
// age = 12345;
// obj = {
//     lala: "dfdf"
// }
// console.log(age);
console.log(obj);
// console.log(all);
// console.log(val);


// import routes from "../route.js";
// import Navs from "../components/nav/nav.vue";

// Vue.use(VueRouter);
// const router = new VueRouter(routes);
// console.log(routes);

Vue.use(VueX);
//rem 的基础
document.body.style.fontSize = window.innerWidth * 28 / 640 + "px";
console.log("in index");
let store = new VueX.Store({
    state: {
        count: 0,
        todos: [
            { name: "katy", age: 30, done: true },
            { name: "win7", age: 29, done: false }
        ]
    },
    getters: {
        getTodoById: (state) => {
            return (id) => { return state.todos.find(todo => todo.id === id); }
        },
        doneTodos(state) {
            return state.todos.filter(todo => todo.done);
        },
        doneTodosCount(state, getters) {
            return getters.doneTodos.length;
        }
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    },
    actions: {
        increment(context) {
            context.commit("increment");
        }
    }
});


// mapState 返回值为对象，可传参数组，可传参对象
let Counter = {
    template: "<div>{{count}}:{{countPlusLocalState}}</div>",
    data: function () {
        return {
            localCount: 10,
            lastName: "",
            firstName: ""
        };
    },
    computed: {
        name() {
            return this.lastName + this.firstName;
        },
        ...mapState({
            count: state => state.count,
            countalias: "count",
            countPlusLocalState(state) {
                return state.count + this.localCount
            }
        }),
        ...mapGetters(["doneTodos", "doneTodosCount"])
    }
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
        changeState(e) {
            //不光是取值，还想从各个组件内部设置值
            console.log(this.$store);
            this.$store.commit("increment");
            window.setTimeout(() => {
                console.log(this.$store.state.count)
            }, 1000);
        }
    }
});


