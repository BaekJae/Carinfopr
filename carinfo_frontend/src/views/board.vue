<template>
  <div class="board">
    <h1>Board</h1>
    <p>자유게시판입니다. 자유로운 대화 나누세요 :D!</p>
    <table>
      <thead>
        <th class="news_th">제목</th>
        <th class="news_th">작성자</th>
        <th class="news_th">차종</th>
        <th class="news_th">작성시간</th>
      </thead>
      <!--게시글 최대 8개-->
      <tbody>
        <tr class="news_th">
          <td class="writing">
            <router-link to="/read">안녕하세요. 첫글입니다.</router-link>
          </td>
          <td>
              master
          </td>
          <td>
            더 뉴 모닝
          </td>
          <td>
            2021-08-21
          </td>
        </tr>
        <tr class="news_th">
          <td class="writing">
            <router-link to="/read">안녕하세요. 첫글입니다.</router-link>
          </td>
          <td>
            master
          </td>
          <td>
            더 뉴 모닝
          </td>
          <td>
            2021-08-21
          </td>
        </tr>
        <tr class="news_th">
          <td class="writing">
            <router-link to="/read">안녕하세요. 첫글입니다.</router-link>
          </td>
          <td>
            master
          </td>
          <td>
            더 뉴 모닝
          </td>
          <td>
            2021-08-21
          </td>
        </tr>
        <tr class="news_th">
          <td class="writing">
            <router-link to="/read">안녕하세요. 첫글입니다.</router-link>
          </td>
          <td>
            master
          </td>
          <td>
            더 뉴 모닝
          </td>
          <td>
            2021-08-21
          </td>
        </tr>
        <tr class="news_th">
          <td class="writing">
            <router-link to="/read">안녕하세요. 첫글입니다.</router-link>
          </td>
          <td>
            master
          </td>
          <td>
            더 뉴 모닝
          </td>
          <td>
            2021-08-21
          </td>
        </tr>
        <tr class="news_th">
          <td class="writing">
            <router-link to="/read">안녕하세요. 첫글입니다.</router-link>
          </td>
          <td>
            master
          </td>
          <td>
            더 뉴 모닝
          </td>
          <td>
            2021-08-21
          </td>
        </tr>
        <tr class="news_th">
          <td class="writing">
            <router-link to="/read">안녕하세요. 첫글입니다.</router-link>
          </td>
          <td>
            master
          </td>
          <td>
            더 뉴 모닝
          </td>
          <td>
            2021-08-21
          </td>
        </tr>
        <tr class="news_th">
          <td class="writing">
            <router-link to="/read">안녕하세요. 첫글입니다.</router-link>
          </td>
          <td>
            master
          </td>
          <td>
            더 뉴 모닝
          </td>
          <td>
            2021-08-21
          </td>
        </tr>
      </tbody>
    </table>
    &lt; 1 2 3 &gt;
    <div class="blank"></div>
  </div>
</template>

<script>
export default {
  name: "board"
}
</script>

<style scoped>
.board{
  text-align: center;
}
.blank{
  margin-top:2%;
}
table{
  border-top: 2px solid #444;
  border-bottom: 2px solid #444;
  border-collapse: collapse;
  margin: 0px auto;
  width: 80%;
  text-align: center;
  font-weight: normal;
  font-size: 0.8em;
}
table > tbody > th,td{
  padding: 10px;

}
.news_th{
  border-bottom: 1px solid #444;
  padding: 10px;
}
.writing{
  text-align: left;
}
</style>