<template>
    <div class="NoteInputContaneur" v-on:input="changeSender" v-on:click="changeSender">
      <InputNotification @onChange="notificationChangeListener"/>
      <InputNote @onChange="nameChangeListener"/>
      <div class="NoteSubSection">
          <div class="Contaneur_Date_Difficulty">
            <InputCalendar class="item_time_dificulty"/>
            <InputTime class="item_time_dificulty"/>
            <InputDificulty class="item_time_dificulty"/>
          </div>
          <CollectionList/>
      </div>
    </div>
</template>

<script>
import InputNotification from '@/components/Input/InputNotificationContaneur/InputNotification.vue'
import InputNote from '@/components/Input/InputNote/InputNote.vue'
import InputCalendar from '@/components/Input/InputCalendar/InputCalendar.vue'
import InputDificulty from '@/components/Input/InputDifficulty/InputDificulty.vue'
import CollectionList from '@/components/Input/SelectCollection/CollectionList.vue'
import InputTime from '@/components/Input/InputTime/InputTime.vue'
import { ref } from 'vue'

export default {
  name: 'CollectionInputContaneur',
  data () {
    return {
      notificationOn: false,
      collectionName: '',
      collectionColor: '',
      counter: ref(0)
    }
  },
  components: {
    InputNotification,
    InputNote,
    InputCalendar,
    InputDificulty,
    CollectionList,
    InputTime

  },
  methods: {
    changeSender () {
      this.$emit('onChange', {
        notificationOn: this.notificationOn,
        collectionName: this.collectionName,
        collectionColor: this.collectionColor
      })
    },
    displayPannel (val) {
      this.counter = val
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
.NoteInputContaneur{
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  background-color: inherit;
  height: inherit;
  width: 100%;
  // padding: 20px 20px 0px 20px;
}

.NoteSubSection{
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: right;
}

.Contaneur_Date_Difficulty{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.item_time_dificulty{
  margin-top: 20px;
}
</style>
