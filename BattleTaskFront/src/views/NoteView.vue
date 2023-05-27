<template>
  <NoteContent />
</template>

<script>
// @ is an alias to /src
import NoteContent from "@/components/Note/NoteContent.vue";

export default {
  name: "NoteView",
  components: {
    NoteContent,
  },
};
</script>
