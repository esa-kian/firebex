<template>
  <div class="faq">
    <div class="main">
      <div class="guide">
        <h1>راهنما</h1>
        <div class="content">
          {{ guide }}
        </div>
      </div>
      <div class="faqs">
        <h1>سوالات متداول:</h1>
        <div class="box">
          <div
            class="message-block"
            v-for="(message, index) in messages"
            :key="index"
          >
            <div @click.prevent="toggle(index)" class="message-header">
              <h3>{{ message.question }}</h3>
              <a
                :style="{
                  transform: [showmessage[index] ? 'rotate(-45deg)' : ''],
                }"
                >&nbsp;</a
              >
            </div>
            <div
              class="message-description"
              :style="{
                maxHeight: showmessage[index]
                  ? messageheight[index] + 'px'
                  : '',
              }"
            >
              <p>{{ message.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    for (let i = 0; i < this.messages.length; i++) {
      this.showmessage[i] = false;
    }
  },
  methods: {
    toggle(e) {
      this.messageheight[e] =
        document.getElementsByClassName("message-description")[e].firstChild
          .clientHeight + 20;
      this.showmessage[e] = !this.showmessage[e];
      this.$forceUpdate();
    },
  },
  data() {
    return {
      guide:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.ایپسوم متن  و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
      messages: [
        {
          question: "سوال در مورد بازار معاملاتی",
          answer:
            "در این صورت می توان امید داشت که تمام  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو",
        },
        {
          question: "سوال در مورد بازار معاملاتی",
          answer:
            "در این صورت می توان امید داشت که تمام  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو",
        },
        {
          question: "سوال در مورد بازار معاملاتی",
          answer:
            "در این صورت می توان امید داشت که تمام  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو",
        },
        {
          question: "سوال در مورد بازار معاملاتی",
          answer:
            "در این صورت می توان امید داشت که تمام  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو",
        },
        {
          question: "سوال در مورد بازار معاملاتی",
          answer:
            "در این صورت می توان امید داشت که تمام  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو",
        },
        {
          question: "سوال در مورد بازار معاملاتی",
          answer:
            "در این صورت می توان امید داشت که تمام  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو",
        },
      ],
      showmessage: [],
      messageheight: [],
    };
  },
};
</script>
<style scoped>
.faq {
  min-height: 80vh;
  height: fit-content;
  padding: 60px 0 0 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fdfdfd;
  background: #efe2f8;
  padding: 80px 60px;
  font-size: 0.8em;
  transition: 0.3s ease;
}
.main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-radius: 5px;
  background-image: url("../../assets/home/banner.png"),
    linear-gradient(
      180deg,
      rgba(6, 31, 97, 0.6) 0%,
      rgba(22, 47, 54, 0.6) 99.45%
    );
  background-blend-mode: saturation;
  padding: 10px;
  background-attachment: fixed;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
}
h1 {
  font-size: 30px;
  color: #fdfdfd;
}
.guide {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: right;
}
.faqs {
  width: 47%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: right;
}
.main-box {
  display: inline-block;
  background-color: transparent;
  text-align: center;
  margin-top: 30px;
  padding: 0 10px;
  box-sizing: border-box;
  width: 100%;
  max-width: 1180px;
}

h2 {
  font-family: IRANSans-Bold, sans-serif;
  font-size: 21px;
  margin-bottom: 50px;
  margin-top: 20px;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2b3957;
  text-align: right;
  box-shadow: 0 2px 12px 15px rgba(0, 0, 0, 0.02);
  /* padding: 15px; */
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  font-size: 14px;
  font-family: IRANSans-Bold, sans-serif;
  padding: 0 10px;
}

.message-block {
  margin: 5px;
  display: block;
  flex-direction: column;
  align-items: center;
  background-color: #2b3957;
  text-align: right;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  font-size: 14px;
}

.message-block:hover {
  background-color: var(--hover-light);
}

.message-header {
  position: relative;
  display: flex;
  height: 61px;
  vertical-align: center;
  align-items: center;
  cursor: pointer;
}

.message-header h3 {
  font-family: IRANSans, sans-serif;
  display: inline-block;
  font-size: 14px;
  width: 33%;
}

.message-header a {
  position: absolute;
  left: 0;
  width: 13px;
  height: 13px;
  display: inline-block;
  border-left: #ebebeb solid 4px;
  border-radius: 1px;
  border-bottom: #ebebeb solid 4px;
  transform: rotate(45deg);
  transition: 0.25s;
}

.message-description {
  font-size: 18px;
  overflow: hidden;
  transition: 0.4s ease-out;
  -webkit-transition: 0.4s ease-out;
  -moz-transition: 0.4s ease-out;
  max-height: 0;
  padding: 0 15px;
}
.message-description > p {
  margin-bottom: 10px;
  font-weight: 300;
  font-size: 14px;
}
@media screen and (max-width: 768px) {
  .faq {
    height: fit-content;
    padding: 15px 10px;
  }
  .main {
    flex-direction: column;
    background-size: cover;
  }
  .guide {
    width: 100%;
  }
  .faqs {
    width: 100%;
  }
}
</style>