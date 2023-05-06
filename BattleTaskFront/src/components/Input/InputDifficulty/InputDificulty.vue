<template>
    <div class="InputDifficultySection">
        <div class="difficultyTitleContaner">
            Difficulté
        </div>
        <div class="inputDifficultyContaneur">
            <div class="difficultyDot difficultyHard"></div>
            <div class="difficultyDot difficultyMedium-Hard"></div>
            <div class="difficultyDot difficultyMedium-Easy"></div>
            <div class="difficultyDot difficultyEasy"></div>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return { difficulty: Number }
  },
  name: 'InputDifficulty',
  components: {

  },
  methods: {
    sendChange () {
      this.$emit('onChange', this.difficulty)
    }
  }
}

</script>

<style lang="scss">
.InputDifficultySection {
  background-color: inherit;
  width: 270px;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 14px;
}

.difficultyTitleContaner{
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    font-family: bebas;
    font-size: 24px;
}

.inputDifficultyContaneur{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    // margin-top: 10px;
    // margin-bottom: 10px;
    border: 1px solid black;
    width: 100%;
    height: 37px;
    box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
}

.difficultyDot{
    width: 15px;
    height: 15px;
    border-radius: 50%;
}

.difficultyHard{
    background-color: #F1414A99;
}

.difficultyMedium-Hard{
    background-color: #F1804199;
}

.difficultyMedium-Easy{
    background-color: #F2C93799;
}

.difficultyEasy{
    background-color: #1BC20099;
}

.difficultyHard:hover{
    background-color: #F1414A;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.difficultyMedium-Hard:hover{
    background-color: #F18041;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.difficultyMedium-Easy:hover{
    background-color: #F2C937;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.difficultyEasy:hover{
    background-color: #1BC200;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>
