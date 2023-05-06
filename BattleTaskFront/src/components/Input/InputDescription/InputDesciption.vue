<template>
    <div class="InputDescriptionSection">
        <div class="inputDescriptionContaneur">
            <textarea v-on:input="sendChange" rows="100" cols="10" placeholder="Description" type="text" class="inputDescription" v-model="name"> </textarea>
            <hr class="lign">
        </div>
    </div>
</template>

<script>

export default {
  props: {
    isDisplayDescription: Boolean
  },
  name: 'InputDescriptionContaneur',
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
  height: 130px;
  width: 100%;
  margin-top: 5px;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: solid #0e0f19 2px;
  box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  margin-top: 35px;
}

// .inputDescriptionContaneur{
//     margin-top: 15px;
//     font-family: oxygen;
// }

.inputDescription, textarea{
  background-color: #DCDFE5;
  border: none;
  outline: none;
  width: 98%;
  height: 100px;
  resize: none;
  scrollbar-width:none;

}

.inputDescription::-webkit-scrollbar{
  display: none;
}

textarea{
  font-family: oxygen;
  font-size: 15px;
}

input[type=text]:focus {
  margin-bottom: 7px;
}

</style>
