<template>
    <div class="InputColorSection">
        <div class="InputColorContaneur">
            <div v-on:focusout="colorFocusOut()" v-on:focusin="colorFocusIn()" class="displayPrefix">
                <div id="prefixColor" v-if="!isEmptyFiled()">#</div>
                <input placeholder="#" type="text" class="inputColor"
                v-on:input="filedColor"
                v-model="inputColor">
            </div>
            <hr class="lign">
        </div>
        <div class="colorPreview">
            <div class="labelColorPreview">
                <label>Color</label>
            </div>
            <div class="colorContaneur"></div>
        </div>
    </div>
</template>

<script>

const prefixColor = '#'

export default {
  expose: ['publicMethod'],
  data () {
    return {
      inputColor: '',
      color: '#7d5889',
      onFocusColor: 0
    }
  },
  name: 'InputColorContaneur',
  components: {

  },
  methods: {
    filedColor () {
      if (this.inputColor === '') {
        this.color = '#7d5889'
      } else {
        this.color = prefixColor + this.inputColor
      }
      this.$emit('onChange', this.color)
    },
    isEmptyFiled () {
      if (this.inputColor !== '') {
        return false
      }
      return true
    },
    colorFocusIn () {
      console.log(this.onFocusColor)
      this.onFocusColor = 50
    },
    colorFocusOut () {
      console.log(this.onFocusColor)
      this.onFocusColor = 0
    },
    getColorInput () {
      return this.inputColor
    }
  }
}

</script>

<style lang="scss">
.InputColorSection{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #DCDFE5;
  height: 90px;
  width: 50%;
  margin-top: 30px;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: solid #0e0f19 3px;
  border-radius: 14px;
}

.InputColorContaneur{
    margin-top: 45px;
    width: 30%;
    font-family: oxygen;
}

.colorPreview{

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: right;
    width: 20%;
}

.colorContaneur{
    margin-top: 7px;
    width: 90px;
    height: 25px;
    background-color: v-bind(color);
    border: solid #0e0f19 3px;
    border-radius: 8px;
}

.labelColorPreview{
    display: flex;
    align-items: center;
    justify-content: right;
    width: 70%;
}

.inputColor{
  background-color: #DCDFE5;
  border: none;
  outline: none;
  height: 20px;
  font-family: oxygen;
  font-size: 18px;
}

.displayPrefix{
  display: flex;
  align-items: center;
  height: 20px;
  font-size: 18px;
  font-family: oxygen;
}

</style>
