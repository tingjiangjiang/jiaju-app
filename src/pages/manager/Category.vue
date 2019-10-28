<template>
  <div id="category">
    <van-nav-bar title="商品分类" left-text="返回" left-arrow @click-left="onClickLeft" :fixed="false"/>
    <van-row>
      <van-col span="6">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            :title="c.name"
            v-for="c in categories"
            :key="c.id"
            @click="productsHandler(c.id)"
          />
        </van-sidebar>
      </van-col>
      <van-col span="18">
        <van-card
          :num="c.num"
          :price="c.price"
          :desc="c.description"
          :title="c.name"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          v-for="c in products"
          :key="c.id"
        >
          <div slot="footer">
            <van-stepper @change="priceHandler"/>
          </div>
        </van-card>
      </van-col>
    </van-row>
    <van-submit-bar :price="total" button-text="提交订单" />
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      activeKey: 0,
      total:0,
      // value:0
    };
  },
  created() {
    this.findAllCategories();
  },
  computed: {
    ...mapState("category", ["categories", "products"])
  },
  methods: {
    ...mapMutations("category", ["loadCategoryId"]),

    ...mapActions("category", ["findAllCategories", "searchByCategoryId"]),

    onClickLeft() {
      this.$router.go(-1)
    },
    productsHandler(id) {
      this.searchByCategoryId(id);
    },
    priceHandler(price){
        // alert(price)
        this.total += price
        // (this.total) *= 100
    }
  }
};
</script>