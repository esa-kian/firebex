<template>
  <div class="notifications">
    <h1>پیام ها</h1>
    <div class="main-box">
      <div class="box">
        <div class="tab">
          <div
            @click.prevent="switchTab(true)"
            :class="[!active ? 'tab-content' : 'tab-content-active']"
          >
            خوانده نشده
          </div>
          <div
            @click.prevent="switchTab(false)"
            :class="[active ? 'tab-content' : 'tab-content-active']"
          >
            خوانده شده
          </div>
        </div>
        <div class="box1">
          <div class="box2">
            <div
              class="message-block"
              v-for="(message, index) in messages"
              :key="index"
            >
              <div @click.prevent="toggle(index)" class="message-header">
                <h3>
                  {{
                    message.question +
                    " - " +
                    momentj().locale("fa").format("HH:mm:ss jYYYY/jMM/jDD")
                  }}
                </h3>
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
  </div>
</template>
<script>
import momentj from "jalali-moment";

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
    switchTab(val) {
      if (val) {
        this.active = true;
      } else {
        this.active = false;
      }
    },
  },
  data() {
    return {
      active: true,
      momentj: momentj,
      messages: [
        {
          question: "ورود ناموفق",
          answer:
            ".کاربری در تاریخ 3 خرداد ماه 1399 ساعت 10 و 46 دقیقه و 24 ثانیه با اطلاعات کاربری شما وارد سامانه شد، لطفا اگر احساس می کنید این ورود توسط شما نبوده است ، نسبت به تعویض رمز عبور خود در اولین فرصت اقدام نمایید.",
        },
        {
          question: "ورود موفق",
          answer:
            ".کاربری در تاریخ 3 خرداد ماه 1399 ساعت 10 و 46 دقیقه و 24 ثانیه با اطلاعات کاربری شما وارد سامانه شد، لطفا اگر احساس می کنید این ورود توسط شما نبوده است ، نسبت به تعویض رمز عبور خود در اولین فرصت اقدام نمایید.",
        },
        {
          question: "اصلاحات",
          answer:
            ".کاربری در تاریخ 3 خرداد ماه 1399 ساعت 10 و 46 دقیقه و 24 ثانیه با اطلاعات کاربری شما وارد سامانه شد، لطفا اگر احساس می کنید این ورود توسط شما نبوده است ، نسبت به تعویض رمز عبور خود در اولین فرصت اقدام نمایید.",
        },
        {
          question: "بروزرسانی جدید فایربکس",
          answer:
            ".کاربری در تاریخ 3 خرداد ماه 1399 ساعت 10 و 46 دقیقه و 24 ثانیه با اطلاعات کاربری شما وارد سامانه شد، لطفا اگر احساس می کنید این ورود توسط شما نبوده است ، نسبت به تعویض رمز عبور خود در اولین فرصت اقدام نمایید.",
        },
      ],
      showmessage: [],
      messageheight: [],
    };
  },
};
</script>
<style scoped>
.notifications {
  background-color: #efe2f8;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 160px 10px 20px;
}
h1 {
  margin: 0;
  font-size: 24px;
  line-height: 37px;
  text-align: right;
  color: #133453;
}
.main-box {
  display: inline-block;
  background-color: transparent;
  text-align: right;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 1180px;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: transparent;
  text-align: right;
  padding: 10px 0px;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  font-size: 14px;
  font-family: IRANSans-Bold, sans-serif;
}

.tab {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #dedede;
  text-align: center;
  width: 100%;
  max-width: 260px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}

.tab-content {
  height: 30px;
  font-family: IRANSans, sans-serif;
  width: 50%;
  cursor: pointer;
  text-align: center;
  box-shadow: inset -2px -2px 7px rgba(54, 51, 51, 0.25);
  color: #959595;
  align-items: center;
  transition: 0.3s ease;
}

.tab-content-active {
  height: 30px;
  font-family: IRANSans-Bold, sans-serif;
  width: 50%;
  border-bottom: 3px #fe9400 solid;
  cursor: pointer;
  text-align: center;
  background-color: #efefef;

  align-items: center;
  transition: 0.3s ease;
}

.box1 {
  flex-direction: column;
  border-radius: 8px 0 8px 8px;
  background-color: #efefef;
  width: 100%;
}

.tab-content img {
  filter: grayscale(90%);
  margin: auto 10px;
}

.tab-content-active img {
  margin: auto 10px;
}

.box2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #efefef;
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
  background-color: transparent;
  text-align: right;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  border: 1px solid transparent;
  font-size: 14px;
  border: 1px solid #bdbdbd;
}

.message-block:hover {
  border: 1px solid #fe9400;
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
  width: 53%;
}

.message-header a {
  position: absolute;
  left: 0;
  width: 13px;
  height: 13px;
  display: inline-block;
  border-left: #04192d solid 4px;
  border-radius: 1px;
  border-bottom: #04192d solid 4px;
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
  .notifications {
    padding: 15px 20px 60px 20px;
  }
}
</style>