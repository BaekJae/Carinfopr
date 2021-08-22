<template>
  <header>
    <div class="logo">
      <router-link to="/home"><h1>Carinfo</h1></router-link>
    </div>
    <div id="userinfo">
      <router-link to="/login">Login</router-link>
      <router-link to="/register">register</router-link>
    </div>
  </header>
  <nav id="menu">
    <router-link to="/about">카인포?</router-link>
    <router-link to="/board">게시판</router-link>
    <router-link to="/mycar">내 차 정보보기</router-link>
  </nav>
  <hr>
  <router-view/>
  <footer>
    <small>(주)카인포<br>
      대표이사 : 백재경 &nbsp;&nbsp;&nbsp;&nbsp; 개발자 이메일:kis89576@naver.com</small>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: CookieRun;
}
@font-face {
  font-family: 'CookieRun';
  src: url('../font/CookieRun-Bold.woff2') format('woff2'),
  url('../font/CookieRun-Bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'CookieRun';
  src: url('../font/CookieRun-Regular.woff2') format('woff2'),
  url('../font/CookieRun-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

header{
}
a{
  text-decoration: none;
  color:black
}

#menu{
  padding:5px;
  text-align: center;
}

#menu a{
  padding-right: 14%;
  padding-left: 14%;
}

.logo{
  text-align: center;
}

#userinfo{
  text-align: right;
}

#userinfo a{
  padding: 5px;
}
</style>
