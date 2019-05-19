<template>
  <div class="dropdown">
    <h3 :style="enlarge? {fontSize:'36px'}:{}">{{Content.title}}</h3>
    <el-select
      v-model="value"
      placeholder="Select"
      @change="$emit('continue', value, Content.questionID)"
    >
      <el-option
        v-for="item in Content.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: {
    Content: Object,
    enlarge: Boolean,
    oldVal: String
  },
  data() {
    return {
      selected: false,

      value: ""
    };
  },
  activated() {
    if (this.oldVal !== undefined && this.oldVal.length !== 0) {
      this.value = this.oldVal;
    }
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
  padding-bottom: 15px;
}
.dropdown {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
