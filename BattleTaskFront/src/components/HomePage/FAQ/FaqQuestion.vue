<template>
    <div class="ContanerQuestion">
      <div>
        <img src="../../../assets/img/question_ring.svg">
        <p>{{ question }}</p>
      </div>
      <button v-on:click="displayAnswer()">
        <img v-if="!showingAnswer"
        src="../../../assets/img/arrow_down.svg">
        <img v-else
        src="../../../assets/img/arrow_up.svg">
      </button>
    </div>
    <FaqAnswer v-if="showingAnswer" :answer="answer"/>
</template>

<script>
import FaqAnswer from './FaqAnswer.vue'
export default {
  name: 'FaqQuestion',
  props: {
    question: String,
    answer: String
  },
  data () {
    return { showingAnswer: false }
  },
  methods: {
    displayAnswer () {
      this.showingAnswer = !this.showingAnswer
    }
  },
  components: { FaqAnswer }
}
</script>

<style>
.ContanerQuestion{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 700;
}
.ContanerQuestion div{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ContanerQuestion div img{
  margin-right: 10px;
  width: 20px;
}
.ContanerQuestion button{
  background: none;
  border: none;
}
.ContanerQuestion img{
  width: 40px;
}
</style>
