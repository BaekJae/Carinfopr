<template>
  <div id="register_a">
  <div id="register_area">
    <h1>Register</h1>
    반갑습니다. <br>
    차량관리 동반자 카인포입니다.
  </div>
  <div>
      <div>
        <div class="text-align"><label for="email">이메일 <b class="centerdot">&centerdot;</b></label></div><br>
        <input id="email" v-model="user.email" type="email" placeholder="이메일" required>
      </div>
      <div>
        <div class="text-align"><label for="pass1">비밀번호 <b class="centerdot">&centerdot;</b></label></div><br>
        <input id="pass1" v-model="user.password" type="password" placeholder="비밀번호" required><br>
        <input id="pass2" v-model="user.passwordConfirm" type="password" placeholder="비밀번호 확인" required><br>
      </div>
      <div>
        <div class="text-align"><label for="name">닉네임 <b class="centerdot">&centerdot;</b></label></div><br>
        <input id="name" v-model="user.name" type="text" placeholder="닉네임을 입력하세요." required><br>
      </div>
      <div>
        <div class="text-align"><label for="car">차종 <b class="centerdot">&centerdot;</b></label></div><br>
        <input id="car" v-model="user.car" type="text" placeholder="차종을 입력하세요" required><br>
      </div>
      <div>
        <div class="text-align"><label for="distance">주행거리 <b class="centerdot">&centerdot;</b></label></div><br>
        <input id="distance" v-model="user.drivedistance" type="number" placeholder="주행거리를 입력하세요" required><br>
      </div>
      <button @click="signUp">가입하기</button>
  </div>
  </div>
</template>

<script>
import registerUser from '../api/index.js'

export default {
  name: "register",
  data(){
    return{
      user: {
        email: '',
        name: '',
        password: '',
        passwordConfirm: '',
        car: '',
        drivedistance: 0,
      }
    }
  },
  methods: {
    signUp: function (event) {
      this.axios.post('http://localhost:8081/api/users/signUp', {
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        user: this.user
      }).then((res) => {
        alert("반갑습니다. 가입이 완료되었습니다.");
        this.$router.push('/login');
        if (res.data.success == false) {
          alert(res.data.message);
        }
      })
          .catch(function (error) {
            alert('error')
          })
    }
  }
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
#pass1, #pass2, #name, #car, #distance{
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