import {get,post,post_array} from '../http/axios';
export default {
    namespaced:true,
    state:{
        orders:[],
        orderPay:[],
        orderService:[],
        orderComment:[]
    },
    mutations:{
        refreshOrders(state,orders){
            state.orders=orders
        },
        refreshorderPay(state,orders){
            state.orderPay=orders.filter((item)=>{
                return item.status==='待支付'
             })
        },
        refreshorderReceive(state,orders){
            state.orderService=orders.filter((item)=>{
                return item.status==='未服务'
             })
        },
        refreshComment(state,orders){
            state.orderComment=orders.filter((item)=>{
                return item.status==='未评价'
             })
        },
        dateParse(state){
            state.orders.forEach((item)=>{
                if(item.orderTime){
                    let date = new Date(item.orderTime);
                    let Y = date.getFullYear() + '-';
                    let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                    let D = (date.getDate()< 10 ? '0'+date.getDate() : date.getDate())+' ';
                    let h = (date.getHours()< 10 ? '0'+date.getHours() : date.getHours())+ ':';
                    let m = (date.getMinutes()< 10 ? '0'+date.getMinutes() : date.getMinutes())+ ':';
                    let s = (date.getSeconds()< 10 ? '0'+date.getSeconds() : date.getSeconds());
                    item.orderTime = Y+M+D+h+m+s;
                  }else{
                    return '';
                  }
            })
        }
    },
    actions:{
        async findAllOrders (context){
            let response = await get("/order/findAll")
            context.commit("refreshOrders",response.data)
            context.commit("refreshorderPay",response.data);
            context.commit("refreshorderReceive",response.data);
            context.commit("refreshComment",response.data)
            context.commit("dateParse")
        },
        
    }
}