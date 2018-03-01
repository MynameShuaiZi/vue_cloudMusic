<template>
  <div>
    <div class='search'>
      <div class='search-input'>
        <img src="../common/img/search.png" alt="">
        <input v-model="query" class='input' type="text" placeholder="搜索歌曲、歌手、专辑" autofocus>
        <img @click="clear" class="delete" src="../common/img/delete.png" alt="" v-show="query">
      </div>
    </div>
    <div class="hotSearch" v-show='!query'>
      <h3>热门搜索</h3>
      <ul>
        <li @click="getQuery(tmp.name)" class="item" v-for="tmp in singer">{{tmp.name}}</li>
      </ul>
    </div>
    <suggest :query="query"></suggest>
  </div>
</template>
<script>
  //  import SearchBox from '../base/search-box/search-box'
  import Suggest from './suggest.vue'
  export default {
    components:{
      Suggest
    },
    name: 'search',
    data() {
      return {
        query: '',
        singer: []
      }
    },
    created() {
      this.getSinger()
    },
    methods: {
      clear() {
        this.query = ''
      },
      getSinger() {
        this.$http.get('http://localhost:3000/top/artists').then((response) => {
          this.singer = response.body.artists.slice(0, 9)
        })
      },
      getQuery(query) {
        this.query = query
      }
    }
  }
</script>
<style>
  .search {
    width: 100%;
    height: 70px;
    text-align: center;
    border-bottom: 1px solid #EEEFF0;
  }

  .search > .search-input {
    height: 40px;
    line-height: 50px;

  }

  .search > .search-input > img:first-child {
    position: absolute;
    width: 18px;
    top: 130px;
    left: 8px;
  }

  .search > .search-input img.delete {
    position: absolute;
    width: 18px;
    top: 130px;
    right: 10px;
    opacity: 0.7;
  }

  .search .input {
    margin-top: 20px;
    width: 100%;
    height: 27px;
    line-height: 40px;
    border-radius: 20px;
    border: 1px solid #CCCCCC;
    outline: none;
    padding: 0 30px;
    background-color: #EBECEC;
    opacity: 0.6;
    box-sizing: border-box;
  }

  .hotSearch {
    margin-left: 10px;
  }

  h3 {
    font-size: 12px;
    line-height: 12px;
    color: #666;
    margin: 10px 0 10px 10px;
  }

  .item {
    display: inline-block;
    height: 32px;
    margin-right: 8px;
    margin-bottom: 8px;
    padding: 0 14px;
    font-size: 14px;
    line-height: 32px;
    color: #333;
    border: 1px solid #F0F1F3;
    border-radius: 20px;
  }
</style>
