<template>
   <FullCalendar :options="calendarOptions" class="full-calendar" />
</template>
<script>

import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
export default {
  data () {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        events: [
          { title: 'manger un fruit en sirop', date: '2023-05-08', ID: '1' },
          { title: 'manger un sirupeux', date: '2023-05-08', ID: '2' },
          { title: 'manger les deux', date: '2023-05-08', ID: '3', backgroundColor: '#f1414a' }
        ],
        eventColor: '#06a0b1',
        eventClick: this.eventsClick
      }
    }
  },
  name: 'CalendarContaner',
  components: {
    FullCalendar
  },
  methods: {
    sendChange () {
      this.$emit('onChange', this.name)
    },
    handleDateClick: function (arg) {
      alert('date click on =>' + arg.dateStr)
    },
    eventsClick (arg) {
      console.log(arg.event._def)
      console.log(arg.event._def.title)
      console.log(arg.event._def.extendedProps.ID)
    }
  }
}

</script>
.
<style lang="scss">
.full-calendar{
  height: 500px;
  width: 700px;
  background-color: #dcdfe5;
  padding: 20px 20px 0px 20px;
  box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin-right: 125px;
  scrollbar-width:none;
}

.full-calendar div {
  scrollbar-width:none;
}

.full-calendar div::-webkit-scrollbar {
  display: none;
}
</style>
