<template>
  <div class="invite">
    <div class="content">
      <div class="tables">
        <div class="link">
          <div class="header">دعوت از دوستان</div>
          <div class="body">
            <div class="row">
              <div class="title">لینک</div>
              <div class="code">
                <input id="link" class="value" v-model="link" />
                <div @click="copyText('link')" class="copy">کپی</div>
              </div>
            </div>
            <div class="row">
              <div class="title">کد دعوت</div>
              <div class="code">
                <input id="code" class="value" v-model="code" />
                <div @click="copyText('code')" class="copy">کپی</div>
              </div>
            </div>
          </div>
        </div>
        <div class="status">
          <div class="header">وضعیت شما</div>
          <div class="body">
            <div class="count">
              <div class="title">تعداد دوستان:</div>
              <div class="value"></div>
            </div>
            <div class="benefits">
              <div class="title">سود فعلی:</div>
              <div class="value"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="guide">
        <div class="title">راهنما</div>

        <div class="body">
          هر فردی که با استفاده از کد دعوت و یا لینک دعوت شما ثبت نام نماید 20%
          درصد از کارمزد ریالی که آي تی ارز از هر معامله آن فرد دریافت می کند به
          شما تعلق می گیرد. هم چنین فرد دعوت شده می تواند دو معامله با کارمزد
          صفر انجام دهد و دو پله هم کارمزد معاملاتی شخص کاهش پیدا می کند.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      link: "https://firebex.com/invite/odjpjdznvl",
      code: "odjpjdznvl",
    };
  },
  methods: {
    copyText: (val) => {
      let copiedText = document.getElementById(val);
      copiedText.select();
      document.execCommand("copy");
    },
  },
};
</script>
<style scoped>
.invite {
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
.content {
  background: #f9f9f9;
  box-shadow: 0px 4px 10px rgba(56, 56, 56, 0.23);
  border-radius: 8px;
  width: 100%;
  padding: 10px;
}
.tables {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
}
.link,
.status {
  width: 49%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.link .header,
.status .header {
  background: #25505d;
  border-radius: 5px 5px 0px 0px;
  width: 100%;
  text-align: right;
  padding: 5px 10px;
  color: #efe2f8;
}
.link .body,
.status .body {
  background: #efe2f8;
  border-radius: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 212px;
  padding: 30px 20px;
}
.row {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.row .code {
  display: flex;
  align-items: flex-start;
}
.code .value {
  border: 1px solid #d2d2d2;
  box-sizing: border-box;
  border-radius: 0px 4px 4px 0px;
  height: 36px;
  min-width: 253px;
  width: fit-content;
  text-align: left;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.copy {
  background: #8aa2b0;
  border-radius: 4px 0px 0px 4px;
  width: 80px;
  height: 36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.guide {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: right;
  width: 80%;
  margin: auto;
  margin-top: 20px;
  font-size: 18px;
  line-height: 28px;
  padding: 60px 0;
}

@media screen and (max-width: 768px) {
  .invite {
    padding: 15px 20px 60px 20px;
  }
  .tables {
    flex-direction: column;
  }
  .link,
  .status {
    width: 100%;
  }
  .row .code {
    width: 100%;
  }
  .code .value {
    min-width: 150px;
    max-width: 150px;
    width: 150px;
    overflow-x: scroll;
  }
}
</style>