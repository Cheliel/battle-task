<template>
    <div class="ItemContaneur" v-on:click="pick">
        <div class="nameDisplayer">{{Name}}</div>
        <div class="colorDisplayer"> </div>
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
    margin-bottom: 8px;
    padding: 5px;
    border-radius: 10px;
    border: solid black v-bind(boldedItem);
}

.ItemContaneur:hover{
    border: solid black 3px;
    cursor: pointer;
}

.nameDisplayer{
    height: 25px;
    width: 100%;
    font-family: oxygen;
    font-size: 17px;
    overflow:hidden;
}

.colorDisplayer{
    border-radius: 55%;
    height: 25px;
    width: 25px;
    background-color: v-bind(Color);
}

</style>
