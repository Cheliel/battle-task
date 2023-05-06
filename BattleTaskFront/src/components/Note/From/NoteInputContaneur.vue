<template>
    <div class="CollectionInputContaneur" v-on:input="changeSender" v-on:click="changeSender">
      <InputNotification @onChange="notificationChangeListener"/>
      <InputNote @onChange="nameChangeListener"/>
    </div>
</template>

<script>
import InputNotification from '@/components/Input/InputNotificationContaneur/InputNotification.vue'
import InputNote from '@/components/Input/InputNote/InputNote.vue'
// import { ref } from 'vue'

// const display = ref(true)

export default {
  name: 'CollectionInputContaneur',
  data () {
    return {
      notificationOn: false,
      collectionName: '',
      collectionColor: ''
    }
  },
  components: {
    InputNotification,
    InputNote
  },
  methods: {
    changeSender () {
      this.$emit('onChange', {
        notificationOn: this.notificationOn,
        collectionName: this.collectionName,
        collectionColor: this.collectionColor
      })
    },
    nameChangeListener (event) {
      this.collectionName = event
    },
    colorChangeListener (event) {
      this.collectionColor = event
    },
    notificationChangeListener (event) {
      this.notificationOn = event
    }
  }
}

</script>

<style lang="scss">
.CollectionInputContaneur{
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  background-color: #DCDFE5;
  height: 100%;
  width: 100%;
  margin-top: 50px;
  padding: 20px;
}

</style>
