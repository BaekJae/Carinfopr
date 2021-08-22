<template>
  <div class="blank"></div>
  <div id="register">
    <h1>LOGIN</h1>
    <form>
      <div id="login">
        <input id="email" name="email" type="email" placeholder="이메일"><br>
        <input id="pass" name="pass" type="password" placeholder="비밀번호"><br>
      </div>
      <button type="submit">로그인</button> <br>
      <div class="blank2"></div>
      <div class="checkbox-area">
        <input id="keep_login" name="keep_login" type="checkbox" value="Y">
        <label for="keep_login">로그인 상태 유지</label><br>
      </div>
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
  name: "login"
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