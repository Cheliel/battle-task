<template>
  <span class="Error">{{ text }}</span>
</template>

<script>
// Les mots doivent être les mêmes
export default {
  name: "DisplayError",
  data() {
    return {};
  },
  props: {
    text: String,
  },
};
</script>

<style lang="scss">
.Error {
  color: #f1414a;
}
</style>
