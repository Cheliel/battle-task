<template>
    <div class="InputNotificationContaneur">
        <img v-if="this.notificationOn" v-on:click="notificationEvent" src="@/assets/img/notification_on.svg" class="BT_Notification on">
        <img v-if="!this.notificationOn" v-on:click="notificationEvent" src="@/assets/img/notification_off.svg" class="BT_Notification off">
    </div>
</template>

<script>

export default {
  data () {
    return {
      notificationOn: false
    }
  },
  name: 'InputNotification',
  components: {

  },
  methods: {
    notificationEvent () {
      this.notificationOn = !this.notificationOn
      this.$emit('onChange', this.notificationOn)
    }
  }
}

</script>

<style lang="scss">
.InputNotificationContaneur{
  display: flex;
  flex-direction: row;
  align-items: right;
  justify-content: right;
  width: 300px;
  padding: 5px;
  height: 35px;
}

.BT_Notification{
    font-family: oxygen;
    height: 30px;
    width: 30px;
}

.off{
  opacity: 0.6;
}

.off:hover{
  cursor: pointer;
  opacity: 1;
}

.on{
  opacity: 0.6;
}

.on:hover{
  cursor: pointer;
  opacity: 1;
}

</style>
