<template>
  <div class="radio-group-container" id="radio-group">
    <h3 :style="enlarge? {fontSize:'32px'}:{}">{{Content.title}}</h3>
    <div class="radio-btn-c">
      <el-radio
        v-model="radio1"
        label="yes"
        border
        @change="$emit('continue', radio1, Content.questionID)"
      >Yes</el-radio>
    </div>
    <div class="radio-btn-c">
      <el-radio
        v-model="radio1"
        label="no"
        border
        @change="$emit('continue', radio1, Content.questionID)"
      >No</el-radio>
    </div>
  </div>
</template>


<script>
export default {
  name: "radiogroup",
  props: {
    Content: Object,
    fill: String,
    enlarge: Boolean,
    oldVal: String
  },
  data() {
    return {
      radio1: ""
    };
  },
  methods: {
    keypressListener: function(e) {
      if (String.fromCharCode(e.keyCode) == "y") {
        this.radio1 = "yes";
        this.$emit("continue", this.radio1, this.Content.questionID);
      } else if (String.fromCharCode(e.keyCode) == "n") {
        this.radio1 = "no";
        this.$emit("continue", this.radio1, this.Content.questionID);
      }
    }
  },
  activated() {
    document.onkeypress = this.keypressListener;
    if (this.oldVal !== undefined && this.oldVal.length !== 0) {
      this.radio1 = this.oldVal;
    }
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
}
.test {
  color: black;
}
.radio-group-container {
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.radio-btn-c {
  padding-top: 20px;
}
</style>
