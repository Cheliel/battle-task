<template>
  <div class="InputPseudoSection">
    <div class="inputPseudoContaneur">
      <input
        v-on:input="sendChange"
        placeholder="Pseudo"
        required="required"
        type="text"
        class="inputPseudo"
        v-model="pseudo"
      />
      <hr class="lign" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { pseudo: "" };
  },
  name: "InputPseudo",
  components: {},
  methods: {
    sendChange() {
      this.$emit("onChange", this.pseudo);
    },
  },
};
</script>

<style lang="scss">
.InputPseudoSection {
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

.inputPseudoContaneur {
  margin-top: 10px;
  font-family: oxygen;
}

.inputPseudo {
  background-color: #dcdfe5;
  border: none;
  outline: none;
  width: 98%;
  height: 20px;
  font-family: oxygen;
  font-size: 15px;
}

input[type="text"]:focus {
  margin-bottom: 7px;
}
</style>
