<template>
  <div class="textContaneur">
    <div class="ContaneurInputNameSection">
      <div class="InputNameSection">
          <div class="inputNameContaneur">
              <input v-on:input="sendChange" placeholder="NOTE" type="text" class="inputNote" v-model="name">
              <hr class="lign">
          </div>
      </div>
      <div class="hideDesciptionButton">
        <img v-if="isDisplayDescription" v-on:click="displayDescriptionEvent" src="@/assets/img/arrow_down.svg">
        <img v-if="!isDisplayDescription" v-on:click="displayDescriptionEvent" src="@/assets/img/arrow_up.svg">
      </div>
    </div>
    <InputDesciption v-if="isDisplayDescription"/>
</div>
</template>

<script>
import InputDesciption from '../InputDescription/InputDesciption.vue'
export default {
  data () {
    return { isDisplayDescription: true }
  },
  name: 'InputNameContaneur',
  components: {
    InputDesciption
  },
  methods: {
    sendChange () {
      this.$emit('onChange', this.name)
    },
    displayDescriptionEvent () {
      this.isDisplayDescription = !this.isDisplayDescription
    },
    sendDisplayDesciption () {
      this.$emit('descriptionDisplayer', this.isDisplayDescription)
    }
  }
}

</script>

<style lang="scss">

.textContaneur{
  display: flex;
  flex-direction: column;
}

.hideDesciptionButton{
  border-radius: 50%;
  background-color: #06A0B1;
  display: flex;
  align-items: end;
  margin-left:15px;
  opacity: 0.7;
}

.hideDesciptionButton:hover{
  opacity: 1;
}

.hideDesciptionButton img {
  height: 35px;
}

.ContaneurInputNameSection{
  display:flex;
  flex-direction: row;
  align-items: end;
}

.InputNameSection {
  background-color: #DCDFE5;
  height: 90px;
  width: 70%;
  margin-top: 5px;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: solid #0e0f19 3px;
  border-radius: 14px;
}

.inputNameContaneur{
    margin-top: 40px;
    font-family: oxygen;
}

.inputNote{
  background-color: #DCDFE5;
  border: none;
  outline: none;
  width: 98%;
  height: 20px;
  font-family: oxygen;
  font-size: 15px;
}
.inputNote::target-text{
  font-family: oxygen;
  font-size: 15px;
}

input[type=text]:focus {
  margin-bottom: 7px;
}

</style>
