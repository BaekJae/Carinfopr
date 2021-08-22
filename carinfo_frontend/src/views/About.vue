<template>
  <div class="about">
    <div class="btn_area">
      <button><a href="#think">아이디어</a></button>
      <button><a href="#how">어떻게?</a></button>
    </div>
    <article id="think">
      <h1>About Service</h1><br>
      <h1>"언제 차를 고치지?"</h1><br>
      작은 생각 하나가 저희 프로젝트의 시작이었습니다.<br><br>

      첫 차를 구매한 사람, 기존에 차를 운행하던 사람 모두<br>
      차량의 정비주기를 완벽하게 안다는 것은 쉽지 않습니다.<br><br>

      차량의 정비 소홀은 차량에 <strong>심각한 손상</strong>을 주며<br>
      이는 곧 주요 동력계통에 영향을 주어 <strong>차량이 정지되거나, 과도한 정비비 부담</strong>으로 이어집니다.<br>
      더 나아가서는, <strong>운전자의 안전</strong>에도 영향을 미칩니다.<br><br>

      이제 여러분의 곁에서 카인포가 비서처럼, 꼼꼼하게 알려드리겠습니다<br>
      카인포와 같이 안전운전하세요!
    </article>
    <article id="how">
      <h1>"그럼 어떻게 알려주나요?"</h1>
      카인포는 운전자의 입력 사항을 기반으로, 정비 주기 표에 맞추어 계산하여 알려드립니다.<br>
      <img src="../assets/repairperiod.png"><br>
      <small>&lt; 표 1 - 정비주기 표 일부 &gt;</small><br><br>
      단, 가혹조건에서 주행하시면 이보다 더 짧은 주기로 교체하셔야 한다는 것 명심하세요!<br>
      <img src="../assets/hard.png" width="630" ><br>
      <small>&lt; 표 2 - 가혹조건 &gt;</small><br><br>
      같이 안전운전 해요 우리!
    </article>
  </div>
</template>

<script>
export default{
  name: "about",
  components:{}
}
</script>

<style scoped>

.about{
  text-align: center;
}

article{
  margin-bottom: 5%;
  padding: 5px;
}

img{
  margin-bottom: 10px;
  margin-top: 10px;
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
.btn_area{
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
