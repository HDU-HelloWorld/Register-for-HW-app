<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(async () => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});


</script>
<style>
wx-swiper .wx-swiper-dot {
  position: relative;
  bottom: 8px;
  width: 15px;
  height: 4px;
  border-radius: 3px;
  margin: 0;
  padding: 0;
}

wx-swiper .wx-swiper-dot-active {
  /* background-color: #388BF5; */
  position: relative;
  bottom: 8px;
  width: 15px;
  height: 4px;
  border-radius: 3px;
  margin: 0;
  padding: 0;
}
</style>
