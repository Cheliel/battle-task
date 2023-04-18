<template>
    <div class="InputNameSection">
        <div class="inputNameContaneur">
            <input v-on:input="sendChange" placeholder="NAME" type="text" class="inputName" v-model="name">
            <hr class="lign">
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return { name: '' }
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

.inputName{
  background-color: #DCDFE5;
  border: none;
  outline: none;
  width: 98%;
  height: 20px;
  font-family: oxygen;
  font-size: 15px;
}
.inputName::target-text{
  font-family: oxygen;
  font-size: 15px;
}

input[type=text]:focus {
  margin-bottom: 7px;
}

</style>
