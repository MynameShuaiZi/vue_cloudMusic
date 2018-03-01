<template>
  <div class='main'>
    <!--网易云音乐标题-->
    <div class='header clear'>
      <div class='header-title'>
        <div class='header-logo'>
          <img src="../common/img/logo.png" alt="">
          <a href="#">N.L&Music</a>
        </div>
      </div>
      <div class='header-nav'>
        <ul>
          <li>
            <router-link tag="div" to="/recommend" class="nav">
              <span class="nav- link">推荐音乐</span>
            </router-link>
          </li>
          <li>
            <router-link tag="div" to="/hotSong" class="nav">
              <span class="nav-link">热歌榜</span>
            </router-link>
          </li>
          <li>
            <router-link tag="div" to="/search" class="nav">
              <span class="nav-link">搜索</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class='container clear'>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {}
    },
    mounted: function () {
//        $('.header-nav').on('click','li',function(e){
//          var $tar=$(e.target);
//          $tar.addClass('hover').siblings().removeClass('hover');
//        })
    },
    methods: {
//            jump:function(route) {
//              this.$router.push(route);
//            }
    }
  }
</script>
