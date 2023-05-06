<template>
    <div class="InputDescriptionSection">
        <div class="inputDescriptionContaneur">
            <textarea v-on:input="sendChange" rows="10" cls="10" placeholder="Description" type="text" class="inputDescription" v-model="name"> </textarea>
            <hr class="lign">
        </div>
    </div>
</template>

<script>

export default {
  props: {
    isDisplayDescription: Boolean
  },
  name: 'InputNameContaneur',
  components: {

  },
  methods: {
    sendChange () {
      this.$emit('onChange', this.name)
    }
  }
}

</script>

<style lang="scss">
.InputDescriptionSection {
  background-color: #DCDFE5;
  height: 90px;
  width: 90%;
  margin-top: 5px;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: solid #0e0f19 3px;
  border-radius: 14px;
  margin-top: 35px;
}

.inputDescriptionContaneur{
    margin-top: 40px;
    font-family: oxygen;
}

.inputDescription{
  background-color: #DCDFE5;
  border: none;
  outline: none;
  width: 98%;
  height: 20px;
  font-family: oxygen;
  font-size: 15px;
}
.inputDescription::target-text{
  font-family: oxygen;
  font-size: 15px;
}

input[type=text]:focus {
  margin-bottom: 7px;
}

</style>
