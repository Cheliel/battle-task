<template>
    <div class="collectionContaneur">
      <navigation-bar/>
      <FormNoteContaneur/>
      <FooterSection/>
    </div>
  </template>

<script>
import NavigationBar from '../HomePage/NavBar/NavigationBar.vue'
import FooterSection from '../HomePage/Footer/FooterSection.vue'
import FormNoteContaneur from '@/components/Note/From/FormNoteContaneur.vue'
export default {
  name: 'CollectionContent',
  components: {
    NavigationBar,
    FormNoteContaneur,
    FooterSection
  }
}

</script>

<style lang="scss">
.collectionContaneur{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
