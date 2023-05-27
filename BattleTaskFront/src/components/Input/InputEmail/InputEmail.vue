<template>
  <div class="InputEmailSection">
    <div class="inputEmailContaneur">
      <input
        v-on:input="sendChange"
        v-on:change="verifMail"
        placeholder="Email"
        required="required"
        id="inputEmaill"
        type="email"
        class="inputEmail"
        v-model="mail"
      />
      <hr class="lign" />
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
const regex = '[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+'

export default {
  data() {
    return { mail: "" };
  },
  name: "InputEmail",
  components: {},
  props: {
    width: String,
  },
  methods: {
    sendChange() {
      this.$emit("onChange", this.name);
    },
    verifMail() {
      if (!this.mail.match(regex)) {
        const x = document.getElementById("inputEmaill");
        console.log(x.value);
        x.style.color = "#f1414a";
        // x.style.color = 'red'
      } else {
        const x = document.getElementById("inputEmaill");
        console.log(x.value);
        x.style.color = "#000000";
      }
    },
  },
};
</script>

<style lang="scss">
.InputEmailSection {
  background-color: #dcdfe5;
  height: 50px;
  width: v-bind(width);
  margin-top: 5px;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: solid #0e0f19 2px;
  border-radius: 14px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.inputEmailContaneur {
  margin-top: 10px;
  font-family: oxygen;
}

.inputEmail {
  background-color: #dcdfe5;
  border: none;
  outline: none;
  width: 98%;
  height: 20px;
  font-family: oxygen;
  font-size: 15px;
}

input[type="email"]:focus {
  margin-bottom: 7px;
}
</style>
