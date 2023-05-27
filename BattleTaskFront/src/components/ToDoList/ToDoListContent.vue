<template>
  <div class="toDoListContaneur">
    <navigation-bar />
    <FormToDoListContaneur />
    <FooterSection />
  </div>
</template>

<script>
import NavigationBar from "../HomePage/NavBar/NavigationBar.vue";
import FooterSection from "../HomePage/Footer/FooterSection.vue";
import FormToDoListContaneur from "./Form/FormToDoListContaneur.vue";
export default {
  name: "ToDoListContent",
  components: {
    NavigationBar,
    FormToDoListContaneur,
    FooterSection,
  },
};
</script>

<style lang="scss">
.toDoListContaneur {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
