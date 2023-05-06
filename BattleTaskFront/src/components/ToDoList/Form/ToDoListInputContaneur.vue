<template>
    <div class="ToDoListInputContaneur" v-on:input="changeSender" v-on:click="changeSender">
      <InputNotification @onChange="notificationChangeListener"/>
      <InputNameContaneur @onChange="nameChangeListener"/>
      <CollectionList/>
    </div>
</template>

<script>

import InputNotification from '@/components/Input/InputNotificationContaneur/InputNotification.vue'
import InputNameContaneur from '@/components/Input/InputName/InputName.vue'
import CollectionList from '@/components/Input/SelectCollection/CollectionList.vue'
export default {
  name: 'CollectionInputContaneur',
  data () {
    return {
      notificationOn: false,
      Name: ''
    }
  },
  components: {
    InputNotification,
    InputNameContaneur,
    CollectionList

  },
  methods: {
    changeSender () {
      this.$emit('onChange', {
        notificationOn: this.notificationOn,
        Name: this.Name
      })
    },
    nameChangeListener (event) {
      this.Name = event
    },
    notificationChangeListener (event) {
      this.notificationOn = event
    }
  }
}

</script>

<style lang="scss">
.ToDoListInputContaneur{
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  background-color: #DCDFE5;
  height: 100%;
  width: 100%;
  padding: 20px;
}

</style>
