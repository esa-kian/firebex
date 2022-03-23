<template>
  <div class="about">
    <div class="main">
      <div class="content">
        <h1>درباره ما</h1>
        <p>
          {{ about }}
        </p>
      </div>
      <div class="statistics">
        <h1>اعتماد کاربران</h1>
        <div class="detail">
          <div class="total">
            <span class="title">تعداد کل معاملات</span>
            <span class="value">{{ total }}</span>
          </div>
          <div class="transactions">
            <span class="title">ارزش معاملات</span>
            <span class="value">{{ transactions }}</span>
          </div>
          <div class="users">
            <span class="title">تعداد کاربران</span>
            <span class="value">{{ users }}</span>
          </div>
        </div>
      </div>
      <div class="team">
        <h1>معرفی تیم پشتیبانی</h1>
        <div class="members">
          <div class="member" v-for="member in team" :key="member.id">
            <div class="avatar"></div>
            <div class="info">
              <div class="name">{{ member.name }}</div>
              <div class="position">{{ member.position }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      about:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری",
      users: "237,234",
      transactions: "983,245,515",
      total: "95,425",
      team: [
        {
          id: 1,
          name: "یحیی صالحی",
          position: "مدیر سایت",
        },
        {
          id: 2,
          name: "رضا نعمتی",
          position: "پشتیبان",
        },
        {
          id: 3,
          name: "یحیی صالحی",
          position: "مدیر سایت",
        },
        {
          id: 4,
          name: "رضا نعمتی",
          position: "پشتیبان",
        },
        {
          id: 5,
          name: "یحیی صالحی",
          position: "مدیر سایت",
        },
        {
          id: 6,
          name: "رضا نعمتی",
          position: "پشتیبان",
        },
        {
          id: 7,
          name: "یحیی صالحی",
          position: "مدیر سایت",
        },
        {
          id: 8,
          name: "رضا نعمتی",
          position: "پشتیبان",
        },
      ],
    };
  },
};
</script>
<style scoped>
.about {
  min-height: 80vh;
  height: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fdfdfd;
  background: #efe2f8;
  padding: 80px 60px;
  font-size: 0.8em;
}
.main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-image: url("../../assets/home/banner.png"),
    linear-gradient(
      180deg,
      rgba(6, 31, 97, 0.6) 0%,
      rgba(22, 47, 54, 0.6) 99.45%
    );
  background-blend-mode: saturation;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
}
.content {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: right;
}
.statistics {
  width: 30%;
  height: 390px;
}
.statistics .detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: flex-start;
  gap: 10px;
}

.total,
.transactions,
.users {
  width: 260px;
  height: 6rem;
  background-color: #2b3957;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  font-size: 20px;
}
.team {
  width: 30%;
}
.members {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.member {
  width: 48%;
  display: flex;
  margin: 20px 0;
}
.avatar {
  background-image: url("../../assets/home/avatar.jpeg");
  background-position: center;
  background-size: cover;
  width: 60px;
  height: 60px;
  margin: auto 10px;
  border-radius: 50%;
}
@media screen and (max-width: 768px) {
  .about {
    height: fit-content;
    padding: 15px 10px;
  }
  .main {
    flex-direction: column;
  }
  .statistics {
    height: 500px;
  }
  .statistics .detail {
    height: 400px;
  }
  .content,
  .team,
  .statistics {
    width: 100%;
  }
}
</style>