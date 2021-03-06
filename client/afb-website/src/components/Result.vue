<template>
  <div class="result-container">
    <div class="top-bar">
      <div class="logo-bar">
        <router-link to="/">
          <img class="logo-image" src="../assets/AgeFriendlyBusinessLogo2.svg" alt="logo">
        </router-link>
      </div>

      <img
        class="font-change-icon"
        src="@/assets/font-change-button.svg"
        alt="change font icon"
        @click="enlarge=!enlarge"
      >
    </div>

    <div class="score-section">
      <div class="left-section">
        <div class="text-area">
          <h1
            :style="enlarge? {fontSize:'42px'}:{}"
          >Here’s your Age-Friendly {{testType=='employer'? "Employer":"Customer Service"}} score</h1>
          <h4 :style="enlarge? {fontSize:'38px'}:{}">Congratulations– you completed the assessment!</h4>
          <h4
            :style="enlarge? {fontSize:'38px'}:{}"
          >Taking the time to complete this assessment shows your commitment to {{testType=="employer"?"being an age-friendly employer":"providing age-friendly customer service"}}.</h4>
          <h4
            :style="enlarge? {fontSize: '38px'}:{}"
          >Please take a moment to review your results and get tips to make your business even more age-friendly.</h4>
        </div>
        <div class="btn-section">
          <el-button @click="$emit('retryWithBusInfo', Result[0])" type="primary" plain>retry</el-button>
          <el-button @click="exportPdf" type="primary" plain>download results</el-button>
        </div>
      </div>

      <dir class="score-circle">
        <el-progress
          type="circle"
          :percentage="correctPercent"
          color="#cc3e16"
          status="text"
          :width="circleSize"
        >
          <span :style="{fontSize: '36px'}">{{correctCount}} / {{totalQ}}</span>
        </el-progress>
      </dir>
    </div>

    <el-tabs class="tabs" v-model="activeName" :stretch="true">
      <el-tab-pane
        class="tab-pane"
        v-for="(section, index) in questions"
        :key="index"
        :label="section.sectionTitle"
        :name="'n' + index"
      >
        <ResultDetail
          :TipsAndResponse="combinedQuestionAndResponse[index]"
          :sectionTitle="section.sectionTitle"
          :enlarge="enlarge"
          :generalTips="findTipsFromMap(section.sectionTitle)"
          :color="color[index%color.length]"
        ></ResultDetail>
      </el-tab-pane>
    </el-tabs>
    <Footer></Footer>
  </div>
</template>
<script>
import ResultDetail from "./ResultDetail";
import Footer from "./Footer";
import jsPDF from "jspdf";
import "jspdf-autotable";
export default {
  name: "result",
  components: {
    ResultDetail,
    Footer
  },
  props: ["Result", "Questions", "generalTips", "testType"],
  data() {
    return {
      color: [
        "#FFF4F1",
        "#f5f7fe",
        "#F1EBF3",
        "rgba(95,69,133,0.12)",
        "#E7E6F4",
        "#F4E8F2"
      ],
      summary: "Your business is very age-friendly!",
      activeName: "n0",
      totalQ: 0,
      correctCount: 0,
      questions: this.Questions,
      enlarge: false,
      circleSize: 200
    };
  },
  computed: {
    isMobile: function() {
      return !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
    },
    correctPercent: function() {
      let count = 0;
      let total = 0;
      for (let i = 0; i < this.questionResponse.length; i++) {
        for (let j = 0; j < this.questionResponse[i].length; j++) {
          if (this.questionResponse[i][j] == "yes") {
            count++;
          }
          total++;
        }
      }
      this.updateNumber(count, total);
      return (count / total) * 100;
    },
    questionResponse: function() {
      return this.Result.slice(1);
    },
    combinedQuestionAndResponse: function() {
      let output = [];
      for (let i = 0; i < this.questionResponse.length; i++) {
        let tempArr = [];
        for (let j = 0; j < this.questionResponse[i].length; j++) {
          let QApair = {};
          QApair.question = this.questions[i].questions[j].title;
          QApair.tips = this.questions[i].questions[j].questionContent;
          QApair.response = this.questionResponse[i][j];
          tempArr.push(QApair);
        }
        output.push(tempArr);
      }
      return output;
    }
  },
  methods: {
    updateNumber: function(count, total) {
      this.totalQ = total;
      this.correctCount = count;
    },
    reorderArray: function(input) {
      for (let i = 0; i < input.length; i++) {
        let pointer = 0;
        for (let j = 0; j < input[i].length; j++) {
          if (input[i][pointer].response == "yes") {
            input[i].push(input[i].splice(pointer, 1)[0]);
            pointer--;
          }
          pointer++;
        }
      }
      return input;
    },
    findTipsFromMap: function(key) {
      return this.generalTips.get(key);
    },
    exportPdf() {
      var doc = new jsPDF({
        orientation: "landscape"
      });

      var body = [];

      for (let i = 0; i < this.questionResponse.length; i++) {
        for (let j = 0; j < this.questionResponse[i].length; j++) {
          let QApair = {};
          QApair.question = this.questions[i].questions[j].title;
          QApair.tips = this.questions[i].questions[j].questionContent;
          QApair.response = this.questionResponse[i][j];
          if (QApair.response == "yes") {
            body.push({
              question: QApair.question,
              tips: QApair.tips.yes,
              response: QApair.response
            });
          } else {
            body.push({
              question: QApair.question,
              tips: QApair.tips.no,
              response: QApair.response
            });
          }
        }
      }

      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + "/" + dd + "/" + yyyy;

      doc.setFontSize(12);
      doc.text(
        this.testType == "employer"
          ? "Assessment type: Employer"
          : "Assessment type: Customer Service" + " Assessment",
        10,
        10
      );
      doc.text("Date completed: " + today, 10, 15);

      doc.setFontType("bold");
      doc.setFontSize(16);
      doc.text(
        "Here's your results: You got " +
          this.correctCount +
          "/" +
          this.totalQ +
          " right",
        10,
        25
      );

      doc.setFontType("normal");
      doc.setFontSize(12);
      doc.text("Congratulations-you completed the assessment test!", 10, 35);
      doc.text(
        this.testType == "employer"
          ? "Taking the time to complete this assessment shows your commitment to being an age-friendly employer."
          : "Taking the time to complete this assessment shows your commitment to providing age-friendly customer service.",
        10,
        40
      );

      doc.autoTable({
        body: body,
        columns: [
          { header: "Response", dataKey: "response" },
          { header: "Question", dataKey: "question" },
          { header: "Feedback", dataKey: "tips" }
        ],
        columnStyles: {
          response: { cellWidth: 5 },
          question: { cellWidth: 40 },
          tips: { cellWidth: 40 }
        },
        theme: "grid",
        margin: { top: 45, left: 10 },
        headStyles: { fillColor: "#155777" }
      });
      doc.save(
        this.testType == "employer"
          ? "Employer" + "_Results.pdf"
          : "Customer_Service" + "_Results.pdf"
      );
    }
  },
  mounted: function() {
    this.reorderArray(this.combinedQuestionAndResponse);
  }
};
</script>
<style scoped>
.result-container {
  overflow: scroll;
}
.top-bar {
  padding-top: 50px;
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo-bar {
  display: flex;
  align-items: center;
  color: #155777;
  font-family: "DDINRegular";
}
.logo-image {
  height: 80px;
}
.score-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
}
.tabs {
  width: 90%;
  margin: auto;
}
.font-change-icon {
  width: 50px;
  height: 50px;
}
.logo-text {
  padding-left: 10px;
}
.left-section {
  padding-left: 100px;
  padding-right: 50px;
}

.score-circle {
  padding-right: 100px;
  font-weight: bold;
}

.text-area {
  font-family: "DDINRegular";
}
.text-area h1 {
  font-size: 36px;
  display: block;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.top-bar-mobile {
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.font-change-icon-mobile {
  width: 40px;
  height: 40px;
}
</style>
