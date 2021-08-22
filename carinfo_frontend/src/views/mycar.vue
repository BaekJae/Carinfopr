<template>
  <div id="mycar">
    <h1>내 차: 더 뉴 모닝</h1>
    <div class="blank"></div>
    <div id="repairinfo">
      <div>
        <canvas id="engineoil" width="10" height="10"></canvas>엔진오일
      </div>
      <div>
        <canvas id="belt" width="10" height="10"></canvas>벨트
      </div>
      <div>
        <canvas id="wiper" width="10" height="10"></canvas>와이퍼
      </div>
      <div>
        <canvas id="missionoil" width="10" height="10"></canvas>미션오일
      </div>
      <div>
        <canvas id="brake_line" width="10" height="10"></canvas>브레이크 라이닝
      </div>
      <div>
        <canvas id="brakeoil" width="10" height="10"></canvas>브레이크 오일
      </div>
      <div>
        <canvas id="plug" width="10" height="10"></canvas>점화플러그
      </div>
    </div>
    <div class="blank"></div>
    <div>
      <h1>주행거리 입력</h1>
      <div>
        <h3>현재 주행거리 : 79,165km</h3>
        <div><label for="drive">주행 거리 입력</label></div><br>
        <input id="drive" name="drive" type="text" placeholder="주행 거리를 입력하세요." required><br>
        <button type="button" onClick="">주행 거리 제출</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "mycar"
}
</script>

<style scoped>
.blank{
  height:10px;
}
#mycar{
  text-align: center;
}
canvas{
  border: 2px solid black;
  margin-bottom: 1%;
}
#engineoil{
  margin-right:90%;
}
#belt{
  margin-right:93.9%;
}
#wiper{
  margin-right:91.6%;
}
#missionoil{
  margin-right:90.3%;
}
#brake_line{
  margin-right:83.8%;
}
#brakeoil{
  margin-right:85.9%;
}
#plug{
  margin-right:88.5%;
}
#repairinfo{
  width:50%;
  margin:auto;
  text-align: right;
}
button{
  width:120px;
  height:23px;
  border:2px solid lightblue;
  border-radius: 10px;
  background-color: ivory;
  color:lightblue;
  display: inline-block;
}
#drive{
  width:20%;
  height:20px;
  border-radius: 5px;
  margin-bottom: 1%;
  display: inline-block;
}
</style>