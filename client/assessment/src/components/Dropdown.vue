<template>
  <div>
    <h3>{{Content.title}}</h3>
    <el-select
      v-model="value"
      placeholder="Select"
      @change="$emit('continue', value, Content.questionID)"
    >
      <el-option
        v-for="item in options"
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
    Content: Object
  },
  data() {
    return {
      selected: false,
      options: [
        {
          value: "Option1",
          label: "Option1"
        },
        {
          value: "Option2",
          label: "Option2",
          disabled: true
        },
        {
          value: "Option3",
          label: "Option3"
        },
        {
          value: "Option4",
          label: "Option4"
        },
        {
          value: "Option5",
          label: "Option5"
        }
      ],
      value: ""
    };
  }
};
</script>

<style>
</style>
