<template>
  <div id="register_a">
  <div id="register_area">
    <h1>Register</h1>
    반갑습니다. <br>
    차량관리 동반자 카인포입니다.
  </div>
  <div>
    <form id="register" action="#" method="POST" enctype="multipart/form-data">
      <div>
        <div class="text-align"><label for="email">이메일 <b class="centerdot">&centerdot;</b></label></div><br>
        <input id="email" name="email" type="email" placeholder="이메일" required>
      </div>
      <div>
        <div class="text-align"><label for="pass1">비밀번호 <b class="centerdot">&centerdot;</b></label></div><br>
        <input id="pass1" name="pass" type="password" placeholder="비밀번호" required><br>
        <input id="pass2" type="password" placeholder="비밀번호 확인" required><br>
      </div>
      <div>
        <div class="text-align"><label for="name">닉네임 <b class="centerdot">&centerdot;</b></label></div><br>
        <input id="name" name="name" type="text" placeholder="닉네임을 입력하세요." required><br>
      </div>
      <div>
        <div class="text-align"><label for="car">차종 <b class="centerdot">&centerdot;</b></label></div><br>
        <input id="car" name="car" type="text" placeholder="차종을 입력하세요" required><br>
      </div>
      <button id="regbutton" type="button" @click="">가입하기</button>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  name: "register"
}
</script>

<style scoped>
#register_a{
  text-align: center;
  margin-bottom: 5%;
}
#email{
  width:20%;
  height:20px;
  border-radius: 5px;
}
#register_area{
  padding: 5px;
  margin-bottom: 2%;
}
#pass1, #pass2, #name, #car{
  width:20%;
  height:20px;
  border-radius: 5px;
  margin-bottom:10px;
}
button{
  width:120px;
  height:46px;
  border:2px solid lightblue;
  border-radius: 5px;
  background-color: ivory;
  color:lightblue;
}
</style>