<template>
  <div class="InputPasswordSection">
    <div class="InputPasswordSubSection">
        <div class="inputPasswordContaneur">
            <div class="zob">
              <input v-on:change="sendChange" placeholder="Password" required="required" type="password" id="password" class="inputPassword" v-model="password">
              <img v-on:click="showPassword" v-if="inputType === 'password'" src="@/assets/img/visibility_on.svg" class="PasswordVisibilty">
              <img v-on:click="hidePassword" v-if="inputType === 'text'" src="@/assets/img/visibility_off.svg" class="PasswordVisibilty">
            </div>
            <hr class="lign">
        </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  data () {
    return {
      password: ref(''),
      inputType: ref('password')
    }
  },
  name: 'InputPassword',
  components: {

  },
  methods: {
    sendChange () {
      this.$emit('onChange', { password: this.password })
    },
    showPassword () {
      const x = document.getElementById('password')
      x.type = 'text'
      this.inputType = 'text'
    },
    hidePassword () {
      const x = document.getElementById('password')
      x.type = 'password'
      this.inputType = 'password'
    }
  }
}

</script>

<style lang="scss">

.InputPasswordSection{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 100%;
}

.InputPasswordSubSection {
  background-color: #DCDFE5;
  height: 50px;
  width: 70%;
  margin-top: 5px;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: solid #0e0f19 2px;
  border-radius: 14px;
  box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);

}

.inputPasswordContaneur{
    margin-top: 10px;
    font-family: oxygen;
}

.inputPassword{
  background-color: #DCDFE5;
  border: none;
  outline: none;
  width: 98%;
  height: 20px;
  font-family: oxygen;
  font-size: 15px;
}

input[type=password]:focus {
  margin-bottom: 7px;
}

input[type=text]:focus {
  margin-bottom: 7px;
}

.PasswordVisibilty{
  height: 25px;
  margin-left: 12px;
}

.PasswordVisibilty:hover{
  cursor: pointer;
}

.zob{
  display: flex;
}
</style>
