<template>
  <div class="order">
    <van-tabs v-model="activeName">
      <van-tab title="全部订单" name="AllOrder" :data="orders">
        <van-card
          v-for="c in orders"
          :key="c.id"
          :price="c.total"
          :desc="c.status"  
          :title="c.orderTime"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        />


      </van-tab>


      <van-tab title="未付款" name="WaitPay">
         <van-card
          v-for="c in orderPay"
          :key="c.id"
          :price="c.total"
          :desc="c.status"  
          :title="c.orderTime"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        />

      </van-tab>



      <van-tab title="未服务" name="WaitService">
         <van-card
          v-for="c in orderService"
          :key="c.id"
          :price="c.total"
          :desc="c.status"  
          :title="c.orderTime"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        />

      </van-tab>


      <van-tab title="未评价" name="WaitComment">
         <van-card
          v-for="c in orderComment"
          :key="c.id"
          :price="c.total"
          :desc="c.status"  
          :title="c.orderTime"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        />

      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return{
      activeName:"AllOrder",
      
    }
  },
  created(){
    this.findAllOrders();
  },
  computed:{
    ...mapState("order",["orders","orderPay","orderService","orderComment"])
  },
  methods:{
    ...mapActions("order",["findAllOrders"])
  }
}
</script>
<style scoped>

</style>