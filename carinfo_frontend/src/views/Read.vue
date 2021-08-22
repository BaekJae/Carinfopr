<template>
<div class="read">
  <!--제목 위치-->
  <div class="title"><h1>안녕하세요 첫글입니다.</h1></div>
  <div class="date">
    <!--작성일 위치-->
    <h4 class="align-right">2021-08-21</h4>
    <h4 class="align-right">더 뉴 모닝</h4>
    <h4 class="align-right">master</h4>
    <hr>
  </div>
  <div class="text">
    <!--본문 내용-->
    안녕하세요 첫글입니다.
  </div>
</div>
</template>

<script>
export default {
  name: "Read"
}
</script>

<style scoped>
.read{
  width:80%;
  margin:auto;
}
.title{
  text-align: center;
  margin-bottom: 2%;
}
.date{
  text-align:right;
  margin-bottom: 5%;
}
.align-right{
  display: inline-block;
  text-align: right;
  margin: auto;
  padding-left: 1%;
}
.text{
  margin-bottom: 5%;
}
</style>