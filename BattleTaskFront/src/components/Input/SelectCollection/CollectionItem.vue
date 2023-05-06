<template>
    <div class="ItemContaneur" v-on:click="pick">
        <div class="colorDisplayer"> </div>
        <div class="nameDisplayer">{{Name}}</div>
    </div>
</template>

<script>

export default {
  props: {
    Name: String,
    Color: String
  },
  data () {
    return { boldedItem: '1px' }
  },
  name: 'CollectionItem',
  components: {

  },
  methods: {
    pick () {
      this.$emit('onChoose', this.Name)
      if (this.boldedItem !== '3px') {
        this.boldedItem = '3px'
      } else {
        this.boldedItem = '1px'
      }
    },
    pick2 () {
      console.log('okay')
    }
  }
}

</script>

<style lang="scss">

.ItemContaneur{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    height: 40px;
    width: 95%;
    margin-bottom: 15px;
    padding: 5px;
    border-radius: 10px;
    // box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

.ItemContaneur:hover{
    cursor: pointer;
    background-color: #06a0b166;
}

.nameDisplayer{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 30px;
    width: 100%;
    font-family: oxygen;
    font-size: 13px;
    // overflow:hidden;
    word-wrap: break-word;
}

.colorDisplayer{
    border-radius: 55%;
    height: 25px;
    width: 25px;
    margin-right: 10px;
    background-color: v-bind(Color);
}

</style>
