<template>
  <div class="nav">
    <li>
      <NavItem navItem="PRODUCT LINE UP" navItem_jp="商品カタログ"/>
    </li>
    <li>
      <NavItem navItem="FEATURE" navItem_jp="特徴" />
    </li>
    <li class="nav-child-container">
      <NavItem navItem="OUR BRAND" navItem_jp="ピエール・エルメについて">
        <div class="nav-child">
          <NavChild childFirst="ピエール・エルメについて" childSecond="ブランドヒストリー"/>
        </div>
      </NavItem>
    <li class="nav-child-container">
      <NavItem navItem="BOUTIQUES" navItem_jp="店舗検索">
        <div class="nav-child">
          <NavChild childFirst="国内ブティック一覧" childSecond="海外ブティック一覧" />
        </div>
      </NavItem>
    </li>
    <li>
      <NavItem navItem="PRIVATE DELIVERY" navItem_jp="プライベートデリバリー" />
    </li>
    <li class="nav-child-container">
      <NavItem navItem="SHOP ONLINE" navItem_jp="オンラインブティック">
        <div class="shop-online-child-container">
          <ShopOnlineChild />
        </div>
      </NavItem>
    </li>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavItem from '@/components/atoms/NavItem.vue'
import NavChild from '@/components/atoms/NavChild.vue'
import ShopOnlineChild from '@/components/molecs/ShopOnlineChild.vue'

export default Vue.extend({
  name: 'Nav',

components: {
    NavItem,
    NavChild,
    ShopOnlineChild
  }
})
</script>

<style scoped>
  .nav {
    display: flex;
    position: relative;
    justify-content: space-around;
    font-size: 10px;
    width: 100vw;
    margin: 0;
  }
  .nav li{
    list-style: none;
    display: flex;
  }
  .nav li:not(:last-child)::after {
    /* content: url("/img/header_border.svg"); */
    display: block;
    width: 1.5px;
    height: 30px;
    overflow: hidden;
  }
.nav-child {
  display: none;
  position: absolute;
  width: 100%;
  top: 30px;
  right: 0;
  background-color: white;
  justify-content: center;
  list-style: none;
  margin: 0;
}
.nav-child-container:hover .nav-child {
  display: flex;
}
.shop-online-child-container {
  display: none;
  position: absolute;
  width: 100%;
  top: 60px;
  right: 0;
  z-index: 1;
  background-color: white;
  justify-content: center;
  list-style: none;
  margin: 0;
  z-index: 1;

}
.nav-child-container:hover .shop-online-child-container {
  display: flex;
}
</style>