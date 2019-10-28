<template>
  <div class="home">
    <van-row>
      <img style="width:100%" src="../../assets/images/home_02.png" alt="">
    </van-row>
    <van-row>
      <van-grid :column-num="3">
        <van-grid-item
          v-for="c in categories"
          :key="c.id"
          :icon="c.icon"
          :text="c.name"
          @click="categoryHandler(name)"
        />
      </van-grid>
    </van-row>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return {
          name:"/category"

    }
  },
  created(){
    this.findAllCategories();
  },
  computed:{
    ...mapState("category",["categories"])
  },
  methods:{
    ...mapActions("category",["findAllCategories"]),
    categoryHandler(path){
      this.$router.push({path})
    }
  }
}
</script>