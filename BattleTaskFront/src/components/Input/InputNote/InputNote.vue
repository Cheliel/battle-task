<template>
  <div class="textContaneur">
    <div class="ContaneurInputNoteSection">
      <div class="InputNoteSection">
          <div class="inputNoteContaneur">
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
  justify-content: right;
  align-items: start;
  width: 100%;
}

.hideDesciptionButton{
  border-radius: 50%;
  background-color: #06A0B166;
  display: flex;
  align-items: end;
  margin-left:15px;
}

.hideDesciptionButton:hover{
  background-color: #06A0B1;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  cursor: pointer;

}

.hideDesciptionButton img {
  height: 25px;
}

.ContaneurInputNoteSection{
  display:flex;
  flex-direction: row;
  align-items: end;
  width: 80%;
}

.InputNoteSection {
  background-color: #DCDFE5;
  height: 50px;
  width: 100%;
  margin-top: 5px;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: solid #0e0f19 2px;
  box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
}

.inputNoteContaneur{
    margin-top: 10px;
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
