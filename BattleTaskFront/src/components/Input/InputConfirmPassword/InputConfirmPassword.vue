<template>
  <div class="InputPasswordConfirmationSection">
    <div class="inputPasswordConfirmationContaneur">
      <input
        v-on:change="sendChange"
        placeholder="Password Confirmation"
        required="required"
        type="Password"
        class="inputPasswordConfirmation"
        v-model="passwordConfirmation"
      />
      <hr class="lign" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { passwordConfirmation: "" };
  },
  name: "InputConfirmationPassword",
  components: {},
  methods: {
    sendChange() {
      this.$emit("onChange", {
        passwordConfirmation: this.passwordConfirmation,
      });
    },
  },
};
</script>

<style lang="scss">
.InputPasswordConfirmationSection {
  background-color: #dcdfe5;
  height: 50px;
  width: 85%;
  margin-top: 5px;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: solid #0e0f19 2px;
  border-radius: 14px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.inputPasswordConfirmationContaneur {
  margin-top: 10px;
  font-family: oxygen;
}

.inputPasswordConfirmation {
  background-color: #dcdfe5;
  border: none;
  outline: none;
  width: 98%;
  height: 20px;
  font-family: oxygen;
  font-size: 15px;
}

input[type="password"]:focus {
  margin-bottom: 7px;
}
</style>
