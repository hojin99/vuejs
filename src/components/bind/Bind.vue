<template>
<div>
  <li>v-bind - 단방향 바인딩</li>
  <br>
  <span :title="spanTitle">{{message}}</span>
  <br>
  <button @click="changeText">Change Text</button>
  <hr>
  <li>v-model - 양방향 바인딩</li>
  <p>{{message}}</p>
  <label>문자 변경 : </label><input v-model="message">
  <hr>
</div>
</template>

<script>
export default {
  // data 객체는 Vue의 반응형 시스템에 추가되어서, data의 값이 변경되면 뷰가 변경됨
  // data는 함수여야 함 (객체일 경우 참조 형태이므로 각 컴포넌트 인스턴에서 공유하게 됨)
  data() {
    return {
      spanTitle: 'Span 제목입니다.',
      message: '마우스를 올려 놓으면 Tooltip이 나옵니다.',

    }
  },
  // 모듈 내에서 사용할 수 있는 메소드
  methods: {
    changeText() {
      this.message='Mouse Over!!';
    }
  }

}
</script>

<style>

</style>