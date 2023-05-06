<template>
    <div class="InputCalendarSection">
        <div class="CalendarTitleSection"> Durée</div>
        <div class="inputCalendarContaneur">
            <VueDatePicker class="Datepicker" time-picker :markers="markers" v-model="date"/>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss'
import { addDays } from 'date-fns'

const selectedColor = ref('blue')

export default {
  data () {
    return {
      date: ref(new Date()),
      markers: ref([
        {
          date: addDays(new Date(), 1),
          type: 'dot',
          color: '#f1414a',
          tooltip: [{ text: 'Dot with tooltip', color: '#f1414a' }]
        },
        {
          date: addDays(new Date(), 2),
          type: 'dot',
          color: '#000000',
          tooltip: [
            { text: 'First tooltip', color: 'blue' },
            { text: 'Second tooltip', color: 'yellow' }
          ]
        },
        {
          date: addDays(new Date(), 3),
          type: 'dot',
          color: '#ffffff'
        }
      ])
    }
  },
  props: {
    isDisplayDescription: Boolean
  },
  name: 'InputTime',
  components: {
    VueDatePicker
  },
  methods: {
    sendChange () {
      this.$emit('onChange', this.name)
      console.log(this.date, selectedColor, this.markers)
    }
  }
}

</script>

<style>

.InputCalendarSection{
    display: flex;
    flex-direction: column;
}

.CalendarTitleSection{
  font-family: bebas;
    font-size: 24px;
}

.inputCalendarContaneur{
    flex:1;
    border: solid black 1px
}

.dp__theme_light {
  box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
   --dp-background-color: #dcdfe5;
   --dp-text-color: #212121;
   --dp-hover-color: #f3f3f3;
   --dp-hover-text-color: #212121;
   --dp-hover-icon-color: #959595;
   --dp-primary-color: #06a0b1;
   --dp-primary-text-color: #f8f5f5;
   --dp-secondary-color: #c0c4cc;
   --dp-border-color: #ddd;
   --dp-menu-border-color: #ddd;
   --dp-border-color-hover: #aaaeb7;
   --dp-disabled-color: #f6f6f6;
   --dp-scroll-bar-background: #f3f3f3;
   --dp-scroll-bar-color: #959595;
   --dp-success-color: #76d275;
   --dp-success-color-disabled: #a3d9b1;
   --dp-icon-color: #959595;
   --dp-danger-color: #ff6f60;
   --dp-highlight-color: rgba(25, 118, 210, 0.1);
}

</style>
