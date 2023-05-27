<template>
  <div class="about">
    <BibicheItem />
  </div>
</template>

<script>
// @ is an alias to /src
import BibicheItem from "@/components/BibicheItem.vue";

export default {
  name: "HomeView",
  components: {
    BibicheItem,
  },
};
</script>
