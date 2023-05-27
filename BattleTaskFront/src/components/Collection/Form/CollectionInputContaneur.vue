<template>
  <div
    class="CollectionInputContaneur"
    v-on:input="changeSender"
    v-on:click="changeSender"
  >
    <InputNotification @onChange="notificationChangeListener" />
    <InputNameContaneur @onChange="nameChangeListener" />
    <InputColorContaneur @onChange="colorChangeListener" />
  </div>
</template>

<script>
import InputColorContaneur from "@/components/Input/InputColor/InputColor.vue";
import InputNotification from "@/components/Input/InputNotificationContaneur/InputNotification.vue";
import InputNameContaneur from "@/components/Input/InputName/InputName.vue";
export default {
  name: "CollectionInputContaneur",
  data() {
    return {
      notificationOn: false,
      collectionName: "",
      collectionColor: "",
    };
  },
  components: {
    InputNotification,
    InputNameContaneur,
    InputColorContaneur,
  },
  methods: {
    changeSender() {
      this.$emit("onChange", {
        notificationOn: this.notificationOn,
        collectionName: this.collectionName,
        collectionColor: this.collectionColor,
      });
    },
    nameChangeListener(event) {
      this.collectionName = event;
    },
    colorChangeListener(event) {
      this.collectionColor = event;
    },
    notificationChangeListener(event) {
      this.notificationOn = event;
    },
  },
};
</script>

<style lang="scss">
.CollectionInputContaneur {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  margin-top: 20px;
  padding: 0px 0px 20px 0px;
}
</style>
