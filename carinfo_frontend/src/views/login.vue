<template>
  <div class="blank"></div>
  <div id="register">
    <h1>LOGIN</h1>
    <form>
      <div id="Login">
        <input id="email" v-model="user.userid" type="email" placeholder="이메일"><br>
        <input id="pass" v-model="user.password" type="password" placeholder="비밀번호"><br>
      </div>
      <div class="blank2"></div>
      <button @click.prevent="login">로그인</button> <br>
      <div class="blank2"></div>
      <div class="align-left">
        <router-link to="/register">회원가입</router-link>
      </div>
      <div class="align-right">
        <router-link to="#">아이디&centerdot;비밀번호 찾기</router-link>
      </div>
    </form>
  </div>
  <div class="blank"></div>
</template>

<script>
export default {
  name: "login",
  data: function () {
    return {
      user: {
        userid: '',
        password: ''
      }
    }
  },
  methods: {
    login: function (event) {
      let res = this.axios.post('http://localhost:8081/api/users/login', {
        user: this.user
      }).then((res)=>{
        console.log(res);
        this.$store.state.currentUserinfo.name = res.data.d.name;
        this.$store.state.currentUserinfo.car = res.data.d.car;
        this.$store.state.currentUserinfo.drivedistance = res.data.d.drivedistance;
        this.$store.commit('Changestate');
        this.$router.push({
          path: '/mycar'
        });
      })
    }
  }
}
</script>

<style scoped>
form{
  text-align: center;
}
#register{
  text-align: center;
  margin-top: 5%;
  margin-left: auto;
}
#login{
  margin-top: 5%;
  margin-bottom: 2%;
}
.blank{
  margin-top: 5%;
}
.blank2{
  margin-top: 1%;
}
.align-left{
  display:inline-block;
  text-align: center;
  margin: auto;
  width: 150px;
  text-decoration: #444;
}
.align-right{
  display: inline-block;
  text-align: right;
  margin: auto;
  width: 150px;
  padding-left: 100px;
}
#email{
  width:20%;
  height:20px;
  border-radius: 5px;
  margin-bottom: 1%;
}
#pass{
  width:20%;
  height:20px;
  border-radius: 5px;
}
button{
  width:120px;
  height:46px;
  border:2px solid lightblue;
  border-radius: 5px;
  background-color: ivory;
  color:lightblue;
  margin-right:50px;
}
</style>