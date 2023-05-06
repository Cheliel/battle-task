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
            <input v-on:input="emitColor" class="colorContaneur" type="color" v-model="color" >
            <!-- <div class="colorContaneur"><input type="color" v-model="color" > </div>-->
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
    emitColor () {
      this.$emit('onChange', this.color)
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
  height: 44px;
  width: 50%;
  margin-top: 30px;
  padding: 5px;
  padding-left: 10px;
  // padding-right: 10px;
  border: solid #0e0f19 2px;
  box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
}

.InputColorContaneur{
    margin-top: 20px;
    width: 30%;
    font-family: bebas;
}

.colorPreview{

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: right;
    width: 10%;
}

.colorContaneur{
    width: 30px;
    height: 30px;
    margin-right: 20px;
    background-color:#DCDFE5;
    border-radius: 50%;
    border : none;
}

.labelColorPreview{
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    font-size: 15px;
    font-weight: 500;
    font-family: oxygen;
}

.inputColor{
  background-color:inherit;
  border: none;
  outline: none;
  height: 20px;
  font-family: oxygen;
  font-weight: 500;
  font-size: 18px;
}

.displayPrefix{
  display: flex;
  align-items: center;
  height: 20px;
  font-size: 18px;
  font-family: oxygen;
}

input[type=color]::-webkit-color-swatch,
::-moz-color-swatch, ::-webkit-color-swatch-wrapper {
  border-radius: 50%;
}

</style>
