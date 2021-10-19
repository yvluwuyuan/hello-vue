<template>
  <div>
  <el-row>
    <el-button plain @click="count++">Count++</el-button>
    <h1>count的数值:{{count}}</h1>
    <el-button type="primary" plain @click="count--">Count--</el-button>
  </el-row>

<el-row>

  <h1>输入的年份为:{{input}}</h1>
  <el-input
      placeholder="请输入内容"
      v-model="input"
      clearable>
  </el-input>
  <el-button type="primary" plain @click="islearyear">是否为闰年</el-button>
  {{isleap}}闰年
  </el-row>

  </div>
</template>

<script>
export default {
name: "ElementUI",
  data(){
  return {
    count: 0,
    input: 0,
    isleap:'不是'
  }
  },
  methods:{
    islearyear(){
      if (this.input %400==0){
        this.isleap='是';
      }
      else if (this.input %4==0 && this.input %100!=0){
        this.isleap='是';
      }
    }
  }
}
</script>

<style scoped>

</style>