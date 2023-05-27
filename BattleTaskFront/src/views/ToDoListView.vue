<template>
  <ToDoListContent />
</template>

<script>
// @ is an alias to /src
import ToDoListContent from "@/components/ToDoList/ToDoListContent.vue";

export default {
  name: "ToDoListView",
  components: {
    ToDoListContent,
  },
};
</script>
