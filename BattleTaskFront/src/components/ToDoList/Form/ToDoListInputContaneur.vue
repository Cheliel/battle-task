<template>
    <div class="ToDoListInputContaneur" v-on:input="changeSender" v-on:click="changeSender">
      <InputNotification @onChange="notificationChangeListener"/>
      <InputNameContaneur @onChange="nameChangeListener"/>
      <InputCalendar class="ToDoList_date_section"/>
      <CollectionList/>
    </div>
</template>

<script>

import InputNotification from '@/components/Input/InputNotificationContaneur/InputNotification.vue'
import InputNameContaneur from '@/components/Input/InputName/InputName.vue'
import CollectionList from '@/components/Input/SelectCollection/CollectionList.vue'
import InputCalendar from '@/components/Input/InputCalendar/InputCalendar.vue'
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
    CollectionList,
    InputCalendar

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
  background-color: inherit;
  padding: 20px 10px 20px 0px ;
}

.ToDoList_date_section{
  margin-top: 20px;
}

</style>
