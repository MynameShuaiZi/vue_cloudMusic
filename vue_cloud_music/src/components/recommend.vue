<template>
  <div>
    <!--0.轮播图的视图-->
    <div v-if='recommends.length>0' class='slider-wrapper'>
      <slider>
        <div class="slider-item" :key="index" v-for="(item,index) in recommends">
          <a :href='item.url'>
            <img :src='item.pic'/>
          </a>
        </div>
      </slider>
    </div>
    <div class='recommend'>
      <!--1.推荐歌单-->
      <div class='recommend-playlist'>
        <div class='playlist-header'>
          <p>推荐歌单</p>
        </div>
        <div class='playlist-container' v-if="discList.length>0">
          <div class="line1 clear">

            <a href="">
              <img :src="discList[0].picUrl" alt="">
              <p>{{discList[0].name}}</p>
            </a>


            <a href="">
              <img :src="discList[1].picUrl" alt="">
              <p>{{discList[1].name}}</p>
            </a>


            <a href="">
              <img :src="discList[2].picUrl" alt="">
              <p>{{discList[2].name}}</p>
            </a>

          </div>
          <div class="line2 clear">

            <a href="">
              <img :src="discList[3].picUrl" alt="">
              <p>{{discList[3].name}}</p>
            </a>


            <a href="">
              <img :src="discList[4].picUrl" alt="">
              <p>{{discList[4].name}}</p>
            </a>


            <a href="">
              <img :src="discList[5].picUrl" alt="">
              <p>{{discList[5].name}}</p>
            </a>

          </div>
        </div>
        <div class="loading-container" v-show="!discList.length">
          <loading></loading>
        </div>
      </div>
      <!--2.最新音乐-->
      <div class='new-music clear'>
        <div class='music-playlist clear'>
          <p>最新音乐</p>
        </div>
        <div class='playlist-container clear' v-if="newMusic.length>0">
          <a href="container-song" v-for="item in newMusic">
            <div class='song'>
              <div class='song-name'>
                {{item.name}}
                <span v-if="item.song.alias.length>0">{{'(' + item.song.alias[0] + ')'}}</span>
                <img src="../common/img/ldpi_93c23ed5-7366-4fa3-8eb6-9960f62b37d2.png" alt=""></div>
              <div class='song-author'>
                <img src="../common/img/2018-01-20_182334.jpg" alt=""> {{item.song.artists[0].name + '-' + item.name}}
              </div>
            </div>
          </a>
        </div>
      </div>
      <!--3.下载网易云音乐APP-->
      <div class="down-load">
        <div class='app'>
          <div>
            N.L&Music
          </div>
          <div>有你的加入</div>
          <div>N.L&Music 更精彩</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Slider from '@/base/slider/slider'
  import Loading from '@/base/load/loading'

  export default {

    data() {
      return {
        recommends: [],
        discList: [],
        newMusic: []
      }
    },
    created() {
      this.sliderShow()
      this.discListShow()
      this.newMusicShow()
    },
    methods: {
      sliderShow() {
        this.$http.get('http://localhost:3000/banner').then((response) => {
//          console.log(response.body.banners);
          this.recommends = response.body.banners
//          console.log(this.recommends);
        })
      },
      discListShow() {
        this.$http.get('http://localhost:3000/personalized').then((response) => {
//          console.log(response.body.result)
          this.discList = response.body.result
        })
      },
      newMusicShow() {
        this.$http.get('http://localhost:3000/personalized/newsong').then((response) => {
          console.log(response.body.result)
          this.newMusic = response.body.result
        })
      }
    },
    components: {
      Slider,
      Loading
    }
  }
</script>
