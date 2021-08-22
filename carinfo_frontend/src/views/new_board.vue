<template>
  <div class="new_board">
    <h1 class="title_b">NEW_BOARD</h1>
    <div>
        <div>
          <div class="title_c">
            <label for="title">제목 &centerdot;</label>
          </div>
          <input id="title" v-model="textdata.title" name="title" type="text">
        </div>
        <div>
          <div class="title_c">
            <label for="content">내용</label>
          </div>
          <textarea id="content" v-model="textdata.text" rows="10"></textarea>
        </div>
        <button @click="writingmemo">글쓰기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "new_board",
  data(){
    return{
      textdata:{
        title:'',
        text:'',
        writer:'',
        date:Date(),
      }
    }
  },
  methods:{
    onClick: function(event){
      this.axios.post('http://localhost:8081/insert',{
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        textdata: this.textdata,
      }).then((res) => {
        alert('글쓰기 완료');
        this.$router.push('/board');
      })
    },
    checkLogin(){
      if(this.$store.state.Login == false){
        alert("로그인이 필요합니다.");
        this.$router.push({
          path:'/login'
        });
      }
    }
  },
  mounted(){
    this.checkLogin();
  }
}
</script>

<style scoped>
.new_board{
  text-align: center;
  width:80%;
  margin: auto;
}
.title_b{
  margin-bottom: 2%;
}
#title{
  width:100%;
  height:20px;
  border-radius: 5px;
  margin-bottom: 1%;
}
.title_c{
  text-align: left;
}
textarea{
  width:100%;
}
button{
  width:80px;
  height:30px;
  border:2px solid lightblue;
  border-radius: 5px;
  background-color: ivory;
  color:lightblue;
  margin-right:50px;
}
</style>