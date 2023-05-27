<template>
  <div class="answerContaner">
    <p>{{ answer }}</p>
  </div>
</template>

<script>
export default {
  name: "FaqConteneur",
  props: {
    answer: String,
  },
};
</script>

<style>
.answerContaner {
  width: 100%;
  font-style: oxygen;
  font-size: 17px;
}
.answerContaner p {
  margin-left: 6%;
}
</style>
