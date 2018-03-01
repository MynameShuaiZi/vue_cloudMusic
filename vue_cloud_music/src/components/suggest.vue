<template>
  <div>
   <div class="suggest">
        <ul class="suggest-list" v-show="query">
          <li class="suggest-item">
            <div class="suggest-header">
              <img class="icon-header" :src="listHeader[0].artist.picUrl" alt="">
              <span class="suggest-title">
                歌手:
              </span>
              <span class="suggest-name">
                  {{listHeader[0].artist.name}}
              </span>
              <span class="suggest-ref">
                  ({{listHeader[0].artist.alias[0]}})
              </span>
            </div>
          </li>
          <li class="suggest-item clear">
            <div class="suggest-header">
              <div class="suggest-float ">
                <img class="icon-header" :src="listHeader[0].picUrl" alt="">
                  <span class="suggest-title">
                  专辑:
                  </span>
                  <span class="suggest-name1">
                      {{listHeader[0].name}}
                  </span>
                  <p class="suggest-name2">
                      {{listHeader[0].artist.name}}
                  </p>
              </div>
            </div>
          </li>


          <li class="suggest-item" :key="index" v-for="(item,index) in list">
            <div class="'icon">
              {{item.name}}
            </div>
            <div class="name">
              <img class="img1" src="../common/img/2018-01-20_182334.jpg" alt="">
              <p class="text-name">
                {{item.artists[0].name}}
              </p>
              <p class="text-text">
                 &nbsp;-&nbsp;
              </p>
              <p class="text-song">
                  {{item.name}}
              </p>
              <img class="img2" src="../common/img/ldpi_93c23ed5-7366-4fa3-8eb6-9960f62b37d2.png" alt="">
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
  export default {
    props: {
      query: {
        type: String,
        default:''
      }
    },
    data(){
      return {
        list:[],
        listHeader:[]
      }
    },
    methods:{
      search() {
        this.$http.get('http://localhost:3000/search?keywords='+this.query).then((result)=>{
          console.log(result.body.result.songs);
          this.list=result.body.result.songs
        })
      },
      searchHeader(){
        this.$http.get('http://localhost:3000/search?keywords='+this.query+'&type=10').then((result)=>{
          this.listHeader=result.body.result.albums
        })
      }
    },
    watch: {
      query() {
        this.search()
        this.searchHeader()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/variable"
  @import "../common/stylus/mixin"

  .suggest
    height: 100%
    overflow: hidden
    .suggest-list
      padding: 0 10px
      .suggest-item
        padding-bottom: 10px
        font-size:17px
        font-family: '微软雅黑'
        margin-top:9px
        border-bottom:1px solid #EEEFF0
        position:relative
        max-height:56px
        over-flow:hidden
        .suggest-header
          .suggest-title
            color:#000000;
          .suggest-name
            color:#507DAF
          .suggest-name1
            color:#000000
          .suggest-name2
            position:absolute
            left:55px
            bottom:7px
            color:#507DAF
            font-size:12px
          .suggest-float
            float:left
        .icon
          width: 60%
          overflow :hidden
        /*[class^='icon-']*/
            /*font-size: 14px*/
//            color：$color-text-d
        .icon-header
          width:50px
          height:50px

      .name
        display :flex
        font-size: $font-size-medium
        color: $color-text-d
        .text-name
          margin-top:4px
          color:#507DAF
          max-width:60%
          overflow:hidden
        .text-song
          margin-top:4px
          color:#A58888
          max-width:70%
          max-height:17px;
          overflow:hidden
        .text-text
          margin-top:4px
          font-size :12px
          color:#888
        .img1{
            width: 15px
            height: 12px
            margin-right: 4px
            position:relative
            top:8px
        }
        .img2{
            width: 30px
            height: 30px
            position:absolute
            right:-1px
            bottom:16px

        }
    .no-result-wrapper
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>

