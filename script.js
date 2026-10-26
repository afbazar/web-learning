"use strict";

/* =========================
   COURSE DATA
========================= */

const courses = {
  html: {
    id: "html",
    title: "HTML",
    fullTitle: "HTML؛ ساختار صفحات وب",
    description: "یاد بگیر چطور ساختار صفحات وب را طراحی کنی و محتوای وب را با عناصر استاندارد سازمان‌دهی کنی.",
    shortDescription: "از ساختار اولیه صفحه تا فرم‌ها، لینک‌ها و عناصر معنایی وب.",
    icon: "5",
    color: "#ff9878",
    level: "مقدماتی",
    duration: "۲ ساعت",
    lessons: [
      {
        title: "HTML چیست و چگونه کار می‌کند؟",
        category: "HTML FUNDAMENTALS",
        duration: "۱۰ دقیقه",
        lead: "برای ساخت وب‌سایت، ابتدا باید زبان ساختار صفحات وب را بشناسی. HTML نقطه شروع این مسیر است.",
        body: `
          <h2>HTML چیست؟</h2>
          <p>HTML مخفف HyperText Markup Language است. از HTML برای تعریف ساختار و معنای محتوای یک صفحه وب استفاده می‌کنیم.</p>
          <p>HTML یک زبان نشانه‌گذاری است، نه زبان برنامه‌نویسی. یعنی به مرورگر می‌گوید هر بخش از محتوا چه نقشی دارد؛ مثلاً عنوان، پاراگراف، تصویر یا لینک.</p>
          <h2>یک سند HTML از چه بخش‌هایی تشکیل می‌شود؟</h2>
          <pre>&lt;!DOCTYPE html&gt;
&lt;html lang="fa"&gt;
  &lt;head&gt;
    &lt;title&gt;صفحه من&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;سلام دنیا&lt;/h1&gt;
    &lt;p&gt;اولین صفحه وب من&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
          <h2>نقش تگ‌ها</h2>
          <p>بیشتر عناصر HTML با یک تگ شروع و با یک تگ پایان مشخص می‌شوند. برای مثال <code>&lt;p&gt;</code> آغاز یک پاراگراف و <code>&lt;/p&gt;</code> پایان آن است.</p>
          <ul>
            <li><code>head</code>: اطلاعات و تنظیمات سند</li>
            <li><code>body</code>: محتوای قابل مشاهده صفحه</li>
            <li><code>h1</code>: عنوان اصلی</li>
            <li><code>p</code>: پاراگراف</li>
          </ul>
        `,
        takeaway: "HTML ساختار و معنای محتوا را مشخص می‌کند؛ ظاهر و رفتار صفحه مسئولیت اصلی HTML نیست.",
        exercise: "در ویرایشگر، عنوان صفحه را به «دانشجوی فناوری» تغییر بده و یک پاراگراف درباره رشته تحصیلی خودت اضافه کن.",
        code: {
          html: `<main>
  <h1>سلام، دنیای وب!</h1>
  <p>من در حال یادگیری HTML هستم.</p>
  <button>شروع یادگیری</button>
</main>`,
          css: `body {
  font-family: Arial, sans-serif;
  background: #f0f4ff;
  padding: 30px;
}
main {
  max-width: 450px;
  margin: 40px auto;
  padding: 30px;
  background: white;
  border-radius: 16px;
  text-align: center;
}
h1 { color: #3155bd; }
button {
  background: #3155bd;
  color: white;
  border: 0;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
}`,
          js: `document.querySelector("button")
  .addEventListener("click", function() {
    alert("به دنیای وب خوش آمدی!");
  });`
        }
      },
      {
        title: "تگ‌ها، عناصر و ویژگی‌ها",
        category: "HTML ELEMENTS",
        duration: "۱۲ دقیقه",
        lead: "برای ساخت صفحات کاربردی باید تفاوت تگ، عنصر و ویژگی را بشناسی.",
        body: `
          <h2>تگ و عنصر چه تفاوتی دارند؟</h2>
          <p>تگ، نشانه‌ای است که در کد می‌نویسیم. عنصر HTML معمولاً شامل تگ آغازین، محتوا و تگ پایانی است.</p>
          <pre>&lt;a href="https://example.com"&gt;
  مشاهده سایت
&lt;/a&gt;</pre>
          <h2>ویژگی‌ها (Attributes)</h2>
          <p>ویژگی‌ها اطلاعات بیشتری درباره یک عنصر ارائه می‌کنند. در مثال بالا، <code>href</code> مقصد لینک را مشخص می‌کند.</p>
          <h3>چند ویژگی پرکاربرد</h3>
          <ul>
            <li><code>id</code>: شناسه یکتای یک عنصر</li>
            <li><code>class</code>: دسته‌بندی عناصر برای استایل‌دهی</li>
            <li><code>href</code>: مقصد لینک</li>
            <li><code>src</code>: مسیر منبع تصویر یا فایل</li>
            <li><code>alt</code>: متن جایگزین تصویر</li>
          </ul>
          <h2>عناصر تو در تو</h2>
          <p>می‌توان عناصر HTML را داخل یکدیگر قرار داد؛ اما باید ساختار تو در تو به‌درستی بسته شود.</p>
        `,
        takeaway: "ویژگی‌ها رفتار یا مشخصات عنصر را توصیف می‌کنند و در تگ آغازین قرار می‌گیرند.",
        exercise: "یک لینک با مقصد دلخواه بساز و ویژگی title را به آن اضافه کن.",
        code: {
          html: `<section class="profile">
  <h1>پروفایل دانشجو</h1>
  <p>یادگیری فناوری، یک مسیر مستمر است.</p>
  <a href="https://developer.mozilla.org"
     title="مرجع آموزش وب">
    مرجع آموزش وب
  </a>
</section>`,
          css: `body {
  font-family: Arial, sans-serif;
  padding: 30px;
  background: #eef2ff;
}
.profile {
  background: white;
  padding: 25px;
  border-radius: 14px;
}
a { color: #3155bd; }`,
          js: `console.log("HTML Elements");`
        }
      },
      {
        title: "لینک‌ها، تصاویر و فهرست‌ها",
        category: "HTML CONTENT",
        duration: "۱۵ دقیقه",
        lead: "در این درس با سه ابزار مهم برای نمایش محتوا در صفحات وب آشنا می‌شوی.",
        body: `
          <h2>لینک‌ها</h2>
          <p>عنصر <code>a</code> برای ایجاد پیوند به صفحات دیگر یا بخش‌های مختلف یک صفحه استفاده می‌شود.</p>
          <pre>&lt;a href="https://example.com"&gt;ورود به سایت&lt;/a&gt;</pre>
          <h2>تصاویر</h2>
          <p>برای نمایش تصویر از عنصر <code>img</code> استفاده می‌کنیم. این عنصر تگ پایانی ندارد.</p>
          <pre>&lt;img src="photo.jpg" alt="توضیح تصویر"&gt;</pre>
          <h2>فهرست‌ها</h2>
          <p>فهرست نامرتب با <code>ul</code> و فهرست مرتب با <code>ol</code> ساخته می‌شود. هر مورد فهرست در عنصر <code>li</code> قرار می‌گیرد.</p>
          <pre>&lt;ul&gt;
  &lt;li&gt;HTML&lt;/li&gt;
  &lt;li&gt;CSS&lt;/li&gt;
  &lt;li&gt;JavaScript&lt;/li&gt;
&lt;/ul&gt;</pre>
        `,
        takeaway: "برای ساخت محتوای قابل فهم و دسترس‌پذیر، متن جایگزین تصویر و ساختار صحیح فهرست‌ها را فراموش نکن.",
        exercise: "یک فهرست از سه مهارت مورد علاقه‌ات بساز و یک لینک به منبع آموزشی اضافه کن.",
        code: {
          html: `<h2>مهارت‌های مورد علاقه من</h2>
<ul>
  <li>طراحی وب</li>
  <li>تحلیل داده</li>
  <li>هوش مصنوعی</li>
</ul>
<a href="https://developer.mozilla.org">
  مطالعه بیشتر
</a>`,
          css: `body {
  font-family: Arial, sans-serif;
  padding: 30px;
  background: #f3f5fb;
  color: #202b45;
}
li { margin: 12px 0; }
a { color: #3155bd; }`,
          js: `console.log("Content elements loaded");`
        }
      }
    ]
  },

  css: {
    id: "css",
    title: "CSS",
    fullTitle: "CSS؛ طراحی و زیباسازی وب",
    description: "با اصول طراحی رابط کاربری، رنگ‌ها، چیدمان، فاصله‌گذاری و طراحی واکنش‌گرا آشنا شو.",
    shortDescription: "از انتخاب رنگ و فونت تا طراحی صفحات واکنش‌گرا.",
    icon: "✳",
    color: "#7f9cff",
    level: "مقدماتی",
    duration: "۲ ساعت",
    lessons: [
      {
        title: "CSS چیست و چگونه کار می‌کند؟",
        category: "CSS FUNDAMENTALS",
        duration: "۱۰ دقیقه",
        lead: "HTML ساختار صفحه را می‌سازد و CSS ظاهر آن را شکل می‌دهد.",
        body: `
          <h2>CSS چیست؟</h2>
          <p>CSS مخفف Cascading Style Sheets است. با استفاده از آن می‌توانیم رنگ، اندازه، فونت، فاصله و چیدمان عناصر HTML را کنترل کنیم.</p>
          <h2>ساختار یک قانون CSS</h2>
          <pre>h1 {
  color: blue;
  font-size: 32px;
}</pre>
          <p>در این مثال، <code>h1</code> انتخابگر است و دو ویژگی رنگ و اندازه فونت برای آن تعریف شده‌اند.</p>
          <h2>سه روش استفاده از CSS</h2>
          <ul>
            <li>Inline: داخل ویژگی style عنصر</li>
            <li>Internal: داخل تگ style در سند HTML</li>
            <li>External: در فایل جداگانه CSS</li>
          </ul>
          <p>در پروژه‌های واقعی، معمولاً فایل خارجی به دلیل نظم و نگهداری بهتر انتخاب مناسبی است.</p>
        `,
        takeaway: "CSS ظاهر و چیدمان عناصر HTML را کنترل می‌کند و بهتر است در فایل جداگانه نگهداری شود.",
        exercise: "رنگ عنوان را تغییر بده و اندازه فونت آن را به ۳۶ پیکسل برسان.",
        code: {
          html: `<div class="card">
  <span class="tag">MY FIRST DESIGN</span>
  <h1>طراحی با CSS</h1>
  <p>ظاهر وب را خودت بساز.</p>
</div>`,
          css: `body {
  background: #111827;
  font-family: Arial, sans-serif;
  padding: 30px;
}
.card {
  background: #202d46;
  padding: 30px;
  border-radius: 18px;
  color: white;
  max-width: 350px;
  margin: 30px auto;
}
.tag { color: #70d7e9; font-size: 11px; }
h1 { font-size: 32px; }
p { color: #aab8d1; }`,
          js: `console.log("Welcome to CSS");`
        }
      },
      {
        title: "رنگ، فونت و مدل جعبه‌ای",
        category: "CSS STYLING",
        duration: "۱۵ دقیقه",
        lead: "برای کنترل دقیق ظاهر، باید مدل جعبه‌ای و ویژگی‌های بصری را بشناسی.",
        body: `
          <h2>مدل جعبه‌ای (Box Model)</h2>
          <p>هر عنصر در CSS مانند یک جعبه در نظر گرفته می‌شود. این جعبه از محتوا، فاصله داخلی، کادر و فاصله خارجی تشکیل شده است.</p>
          <ul>
            <li><code>content</code>: محتوای عنصر</li>
            <li><code>padding</code>: فاصله داخلی</li>
            <li><code>border</code>: کادر عنصر</li>
            <li><code>margin</code>: فاصله خارجی</li>
          </ul>
          <h2>رنگ و فونت</h2>
          <p>برای رنگ می‌توان از نام رنگ، HEX، RGB و HSL استفاده کرد. برای فونت نیز ویژگی <code>font-family</code> به کار می‌رود.</p>
          <h2>نمونه</h2>
          <pre>.box {
  background: #eef2ff;
  padding: 20px;
  border: 1px solid #ccd5ef;
  margin: 15px;
  border-radius: 12px;
}</pre>
        `,
        takeaway: "مدل Box Model برای فهم اندازه واقعی عناصر و فاصله میان آن‌ها ضروری است.",
        exercise: "padding و margin کارت را تغییر بده و تفاوت آن‌ها را در خروجی مشاهده کن.",
        code: {
          html: `<div class="box">
  <h2>Box Model</h2>
  <p>هر عنصر یک جعبه است.</p>
</div>`,
          css: `body {
  background: #e9edfa;
  font-family: Arial, sans-serif;
}
.box {
  background: white;
  color: #202b45;
  padding: 35px;
  border: 3px solid #7791ef;
  margin: 35px;
  border-radius: 16px;
}
h2 { color: #3155bd; }`,
          js: `console.log("Box Model");`
        }
      },
      {
        title: "Flexbox و طراحی واکنش‌گرا",
        category: "CSS LAYOUT",
        duration: "۲۰ دقیقه",
        lead: "چیدمان مناسب، یکی از مهم‌ترین مهارت‌های طراحی رابط کاربری است.",
        body: `
          <h2>Flexbox چیست؟</h2>
          <p>Flexbox یک روش چیدمان در CSS است که برای مرتب‌سازی عناصر در یک محور اصلی و محور متقاطع کاربرد دارد.</p>
          <pre>.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}</pre>
          <h2>چند ویژگی پرکاربرد</h2>
          <ul>
            <li><code>justify-content</code>: توزیع عناصر در محور اصلی</li>
            <li><code>align-items</code>: تراز عناصر در محور متقاطع</li>
            <li><code>gap</code>: فاصله میان عناصر</li>
            <li><code>flex-wrap</code>: امکان رفتن عناصر به سطر بعد</li>
          </ul>
          <h2>طراحی واکنش‌گرا</h2>
          <p>با Media Query می‌توانیم ظاهر صفحه را متناسب با اندازه نمایشگر تغییر دهیم.</p>
          <pre>@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}</pre>
        `,
        takeaway: "Flexbox برای چیدمان‌های یک‌بعدی بسیار کاربردی است و Media Query به سازگاری صفحه با نمایشگرهای مختلف کمک می‌کند.",
        exercise: "سه کارت بساز. آن‌ها را در دسکتاپ کنار هم و در موبایل زیر هم نمایش بده.",
        code: {
          html: `<div class="container">
  <div class="box">HTML</div>
  <div class="box">CSS</div>
  <div class="box">JS</div>
</div>`,
          css: `body {
  font-family: Arial, sans-serif;
  background: #111827;
  padding: 25px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.box {
  background: #304879;
  color: white;
  padding: 30px;
  border-radius: 12px;
  flex: 1;
  min-width: 90px;
  text-align: center;
}
@media(max-width: 500px) {
  .container { flex-direction: column; }
  .box { width: 100%; }
}`,
          js: `console.log("Responsive layout");`
        }
      }
    ]
  },

  javascript: {
    id: "javascript",
    title: "JavaScript",
    fullTitle: "JavaScript؛ منطق و تعامل در وب",
    description: "با متغیرها، توابع، شرط‌ها، رویدادها و تعامل با عناصر صفحه آشنا شو.",
    shortDescription: "از اولین متغیرها تا ساخت تعامل‌های واقعی در صفحات وب.",
    icon: "JS",
    color: "#f2d36e",
    level: "مقدماتی",
    duration: "۳ ساعت",
    lessons: [
      {
        title: "JavaScript چیست؟",
        category: "JS FUNDAMENTALS",
        duration: "۱۲ دقیقه",
        lead: "JavaScript به صفحات وب امکان می‌دهد به رویدادها واکنش نشان دهند و رفتارهای پویا داشته باشند.",
        body: `
          <h2>JavaScript چه کاری انجام می‌دهد؟</h2>
          <p>HTML ساختار را تعریف می‌کند، CSS ظاهر را می‌سازد و JavaScript رفتار و تعامل را مدیریت می‌کند.</p>
          <h2>اولین دستور</h2>
          <pre>console.log("Hello World");</pre>
          <p>دستور <code>console.log()</code> برای نمایش اطلاعات در کنسول مرورگر استفاده می‌شود.</p>
          <h2>اجرای JavaScript در صفحه</h2>
          <p>می‌توان کد را در فایل جداگانه با پسوند <code>.js</code> نوشت و با تگ script به HTML متصل کرد.</p>
        `,
        takeaway: "JavaScript رفتار و منطق تعاملی صفحات وب را کنترل می‌کند.",
        exercise: "در ویرایشگر، متن داخل console.log را تغییر بده و نتیجه را در کنسول مشاهده کن.",
        code: {
          html: `<div class="box">
  <h2>اولین کد من</h2>
  <p id="message">هنوز دکمه را نزده‌ای.</p>
  <button id="btn">کلیک کن</button>
</div>`,
          css: `body {
  font-family: Arial, sans-serif;
  background: #eef2ff;
  padding: 30px;
}
.box {
  background: white;
  max-width: 350px;
  margin: auto;
  padding: 25px;
  border-radius: 15px;
  text-align: center;
}
button {
  background: #3155bd;
  color: white;
  border: 0;
  padding: 12px 20px;
  border-radius: 8px;
}`,
          js: `document.getElementById("btn")
  .addEventListener("click", function() {
    document.getElementById("message").textContent =
      "آفرین! اولین تعامل را ساختی.";
  });`
        }
      },
      {
        title: "متغیرها و انواع داده",
        category: "JS VARIABLES",
        duration: "۱۵ دقیقه",
        lead: "متغیرها به ما اجازه می‌دهند داده‌ها را در برنامه ذخیره و مدیریت کنیم.",
        body: `
          <h2>متغیر چیست؟</h2>
          <p>متغیر یک نام برای دسترسی به مقداری از داده است. در JavaScript معمولاً از <code>let</code> و <code>const</code> استفاده می‌کنیم.</p>
          <pre>let age = 25;
const name = "Sara";
let isStudent = true;</pre>
          <h2>تفاوت let و const</h2>
          <p>با <code>let</code> می‌توان مقدار متغیر را دوباره تغییر داد؛ اما متغیری که با <code>const</code> تعریف شده، دوباره مقداردهی نمی‌شود.</p>
          <h2>انواع داده رایج</h2>
          <ul>
            <li>String: متن</li>
            <li>Number: عدد</li>
            <li>Boolean: درست یا نادرست</li>
            <li>Array: مجموعه‌ای از مقادیر</li>
            <li>Object: مجموعه‌ای از ویژگی‌ها و مقادیر</li>
          </ul>
        `,
        takeaway: "از const برای مقادیری که قرار نیست دوباره مقداردهی شوند و از let برای متغیرهای قابل تغییر استفاده کن.",
        exercise: "نام، سن و رشته تحصیلی خودت را در سه متغیر ذخیره کن و آن‌ها را نمایش بده.",
        code: {
          html: `<div class="box">
  <h2>اطلاعات دانشجو</h2>
  <p id="result"></p>
</div>`,
          css: `body { font-family: Arial; background: #f1f3fa; padding: 25px; }
.box { background: white; padding: 25px; border-radius: 15px; max-width: 350px; margin: auto; }`,
          js: `const student = {
  name: "Sara",
  age: 22,
  field: "Information Science"
};

document.getElementById("result").textContent =
  student.name + " / " + student.age + " / " + student.field;`
        }
      },
      {
        title: "شرط‌ها، توابع و رویدادها",
        category: "JS LOGIC",
        duration: "۲۰ دقیقه",
        lead: "با شرط‌ها و توابع می‌توانی تصمیم‌گیری و رفتارهای قابل استفاده مجدد بسازی.",
        body: `
          <h2>ساختار شرطی</h2>
          <p>با دستور <code>if</code> می‌توانیم اجرای برنامه را به برقرار بودن یک شرط وابسته کنیم.</p>
          <pre>let score = 18;

if (score >= 10) {
  console.log("قبول");
} else {
  console.log("نیاز به تلاش بیشتر");
}</pre>
          <h2>تابع چیست؟</h2>
          <p>تابع مجموعه‌ای از دستورهاست که می‌توان آن را در بخش‌های مختلف برنامه فراخوانی کرد.</p>
          <pre>function greet(name) {
  return "سلام " + name;
}

console.log(greet("علی"));</pre>
          <h2>رویدادها</h2>
          <p>رویدادهایی مانند کلیک، تایپ یا ارسال فرم می‌توانند باعث اجرای کد JavaScript شوند.</p>
          <pre>button.addEventListener("click", function() {
  alert("کلیک شد!");
});</pre>
        `,
        takeaway: "شرط‌ها برای تصمیم‌گیری، توابع برای سازمان‌دهی کد و رویدادها برای ایجاد تعامل استفاده می‌شوند.",
        exercise: "یک دکمه بساز که با هر بار کلیک، عدد نمایش‌داده‌شده در صفحه را یک واحد افزایش دهد.",
        code: {
          html: `<div class="counter">
  <h2>شمارنده کلیک</h2>
  <strong id="count">0</strong>
  <button id="increase">افزایش عدد</button>
</div>`,
          css: `body {
  font-family: Arial;
  background: #111827;
  padding: 30px;
}
.counter {
  background: #202d46;
  color: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  max-width: 300px;
  margin: auto;
}
strong {
  display: block;
  font-size: 48px;
  color: #f2d36e;
  margin: 15px;
}
button {
  border: 0;
  background: #6485ff;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
}`,
          js: `let count = 0;

function increaseCount() {
  count++;
  document.getElementById("count").textContent = count;
}

document.getElementById("increase")
  .addEventListener("click", increaseCount);`
        }
      }
    ]
  }
};



/* CURRICULUM EXTENSION: complete lesson data bundled in this file */
function addCurriculum(courseId, lessons) {
  courses[courseId].lessons.push(...lessons.map((lesson, index) => ({
    ...lesson, category: lesson.category || courseId.toUpperCase(),
    duration: lesson.duration || "۱۵ دقیقه"
  })));
}
addCurriculum("html", [{"title":"ساختار معنایی HTML","category":"HTML PRACTICE","lead":"عناصر header، nav، main، section، article، aside و footer نقش محتوای صفحه را مشخص می‌کنند. از عنصر معنایی بر اساس مفهوم استفاده کن، نه ظاهر پیش‌فرض آن.","body":"<h2>ساختار معنایی HTML</h2><p>عناصر header، nav، main، section، article، aside و footer نقش محتوای صفحه را مشخص می‌کنند. از عنصر معنایی بر اساس مفهوم استفاده کن، نه ظاهر پیش‌فرض آن.</p><h3>نمونه کد</h3><pre>&lt;header&gt;&lt;h1&gt;مجله وب&lt;/h1&gt;&lt;/header&gt;&lt;nav&gt;&lt;a href='#main'&gt;مقاله&lt;/a&gt;&lt;/nav&gt;&lt;main id='main'&gt;&lt;article&gt;&lt;h2&gt;آینده وب&lt;/h2&gt;&lt;p&gt;وب بستری برای تجربه‌های دیجیتال است.&lt;/p&gt;&lt;/article&gt;&lt;/main&gt;&lt;footer&gt;پایان صفحه&lt;/footer&gt;</pre>","takeaway":"عناصر header، nav، main، section، article، aside و footer نقش محتوای صفحه را مشخص می‌کنند.","exercise":"یک صفحه مقاله با سربرگ، منو، محتوای اصلی و پاورقی بساز.","code":{"html":"<header><h1>مجله وب</h1></header><nav><a href='#main'>مقاله</a></nav><main id='main'><article><h2>آینده وب</h2><p>وب بستری برای تجربه‌های دیجیتال است.</p></article></main><footer>پایان صفحه</footer>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}},{"title":"جدول‌ها و داده‌ها","category":"HTML PRACTICE","lead":"table ظرف جدول، tr ردیف، th سلول عنوان و td سلول داده است. برای عنوان از caption و برای گروه‌بندی از thead و tbody استفاده کن. جدول را برای داده‌های سطری و ستونی به کار ببر، نه چیدمان صفحه.","body":"<h2>جدول‌ها و داده‌ها</h2><p>table ظرف جدول، tr ردیف، th سلول عنوان و td سلول داده است. برای عنوان از caption و برای گروه‌بندی از thead و tbody استفاده کن. جدول را برای داده‌های سطری و ستونی به کار ببر، نه چیدمان صفحه.</p><h3>نمونه کد</h3><pre>&lt;table&gt;&lt;caption&gt;نمرات کلاس&lt;/caption&gt;&lt;thead&gt;&lt;tr&gt;&lt;th&gt;نام&lt;/th&gt;&lt;th&gt;نمره&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;سارا&lt;/td&gt;&lt;td&gt;۱۸&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;علی&lt;/td&gt;&lt;td&gt;۱۶&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;مینا&lt;/td&gt;&lt;td&gt;۱۹&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;</pre>","takeaway":"table ظرف جدول، tr ردیف، th سلول عنوان و td سلول داده است.","exercise":"جدولی با نام سه دانشجو و نمره آن‌ها بساز.","code":{"html":"<table><caption>نمرات کلاس</caption><thead><tr><th>نام</th><th>نمره</th></tr></thead><tbody><tr><td>سارا</td><td>۱۸</td></tr><tr><td>علی</td><td>۱۶</td></tr><tr><td>مینا</td><td>۱۹</td></tr></tbody></table>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}},{"title":"فرم‌ها و ورودی‌ها","category":"HTML PRACTICE","lead":"form ظرف ورودی‌هاست. label را با for به id ورودی وصل کن. از type مناسب مانند email، password، number و date استفاده کن. ویژگی required اعتبارسنجی اولیه مرورگر را فعال می‌کند.","body":"<h2>فرم‌ها و ورودی‌ها</h2><p>form ظرف ورودی‌هاست. label را با for به id ورودی وصل کن. از type مناسب مانند email، password، number و date استفاده کن. ویژگی required اعتبارسنجی اولیه مرورگر را فعال می‌کند.</p><h3>نمونه کد</h3><pre>&lt;form&gt;&lt;label for='name'&gt;نام&lt;/label&gt;&lt;input id='name' name='name' required&gt;&lt;label for='email'&gt;ایمیل&lt;/label&gt;&lt;input id='email' type='email' required&gt;&lt;label for='pass'&gt;رمز&lt;/label&gt;&lt;input id='pass' type='password' minlength='8'&gt;&lt;button&gt;ثبت‌نام&lt;/button&gt;&lt;/form&gt;</pre>","takeaway":"form ظرف ورودی‌هاست.","exercise":"فرم ثبت‌نام با نام، ایمیل و رمز عبور بساز.","code":{"html":"<form><label for='name'>نام</label><input id='name' name='name' required><label for='email'>ایمیل</label><input id='email' type='email' required><label for='pass'>رمز</label><input id='pass' type='password' minlength='8'><button>ثبت‌نام</button></form>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}},{"title":"رسانه در HTML","category":"HTML PRACTICE","lead":"از video و audio برای رسانه بومی استفاده می‌شود. controls کنترل پخش را نشان می‌دهد و source منبع فایل را مشخص می‌کند. برای زیرنویس از track استفاده کن و برای محتوای خارجی iframe را با دقت به کار ببر.","body":"<h2>رسانه در HTML</h2><p>از video و audio برای رسانه بومی استفاده می‌شود. controls کنترل پخش را نشان می‌دهد و source منبع فایل را مشخص می‌کند. برای زیرنویس از track استفاده کن و برای محتوای خارجی iframe را با دقت به کار ببر.</p><h3>نمونه کد</h3><pre>&lt;video controls width='100%'&gt;&lt;source src='sample.mp4' type='video/mp4'&gt;مرورگر شما از ویدئو پشتیبانی نمی‌کند.&lt;/video&gt;</pre>","takeaway":"از video و audio برای رسانه بومی استفاده می‌شود.","exercise":"یک ویدئو با کنترل پخش و یک متن جایگزین برای مرورگر ناسازگار تعریف کن.","code":{"html":"<video controls width='100%'><source src='sample.mp4' type='video/mp4'>مرورگر شما از ویدئو پشتیبانی نمی‌کند.</video>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}},{"title":"دسترس‌پذیری و ساختار پروژه","category":"HTML PRACTICE","lead":"برای تصاویر معنادار alt بنویس، ترتیب عنوان‌ها را رعایت کن، ورودی‌ها را برچسب‌گذاری کن و امکان استفاده با صفحه‌کلید را حفظ کن. فایل‌های CSS و JS را جدا و با مسیر درست متصل کن؛ GitHub Pages به بزرگی و کوچکی حروف حساس است.","body":"<h2>دسترس‌پذیری و ساختار پروژه</h2><p>برای تصاویر معنادار alt بنویس، ترتیب عنوان‌ها را رعایت کن، ورودی‌ها را برچسب‌گذاری کن و امکان استفاده با صفحه‌کلید را حفظ کن. فایل‌های CSS و JS را جدا و با مسیر درست متصل کن؛ GitHub Pages به بزرگی و کوچکی حروف حساس است.</p><h3>نمونه کد</h3><pre>&lt;article&gt;&lt;img src='book.jpg' alt='جلد کتاب آموزش وب'&gt;&lt;h2&gt;آموزش وب&lt;/h2&gt;&lt;p&gt;شروع یادگیری طراحی وب.&lt;/p&gt;&lt;a href='#details'&gt;مشاهده جزئیات دوره&lt;/a&gt;&lt;/article&gt;</pre>","takeaway":"برای تصاویر معنادار alt بنویس، ترتیب عنوان‌ها را رعایت کن، ورودی‌ها را برچسب‌گذاری کن و امکان استفاده با صفحه‌کلید را حفظ کن.","exercise":"یک کارت محتوا با تصویر دارای alt، عنوان و لینک توصیفی بساز.","code":{"html":"<article><img src='book.jpg' alt='جلد کتاب آموزش وب'><h2>آموزش وب</h2><p>شروع یادگیری طراحی وب.</p><a href='#details'>مشاهده جزئیات دوره</a></article>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}}]);
addCurriculum("css", [{"title":"انتخابگرها و Specificity","category":"CSS PRACTICE","lead":"انتخابگر تگ مانند p، کلاس مانند .card و شناسه مانند #header عناصر را هدف می‌گیرند. انتخابگرهای ترکیبی مثل .card p فقط پاراگراف‌های داخل کارت را انتخاب می‌کنند. شناسه معمولاً از کلاس اختصاصی‌تر است؛ از !important بی‌دلیل استفاده نکن.","body":"<h2>انتخابگرها و Specificity</h2><p>انتخابگر تگ مانند p، کلاس مانند .card و شناسه مانند #header عناصر را هدف می‌گیرند. انتخابگرهای ترکیبی مثل .card p فقط پاراگراف‌های داخل کارت را انتخاب می‌کنند. شناسه معمولاً از کلاس اختصاصی‌تر است؛ از !important بی‌دلیل استفاده نکن.</p><h3>نمونه کد</h3><pre>&lt;article class='card'&gt;&lt;h2&gt;عنوان کارت&lt;/h2&gt;&lt;p&gt;متن توضیحی&lt;/p&gt;&lt;/article&gt;</pre>","takeaway":"انتخابگر تگ مانند p، کلاس مانند .","exercise":"برای کارت، عنوان و پاراگراف استایل‌های جداگانه تعریف کن.","code":{"html":"<article class='card'><h2>عنوان کارت</h2><p>متن توضیحی</p></article>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}},{"title":"واحدها و اندازه‌گذاری","category":"CSS PRACTICE","lead":"px واحد ثابت، rem وابسته به اندازه فونت ریشه، em وابسته به زمینه عنصر و درصد وابسته به والد است. clamp(min, preferred, max) اندازه منعطف با حداقل و حداکثر می‌سازد. برای عرض محتوا از max-width استفاده کن.","body":"<h2>واحدها و اندازه‌گذاری</h2><p>px واحد ثابت، rem وابسته به اندازه فونت ریشه، em وابسته به زمینه عنصر و درصد وابسته به والد است. clamp(min, preferred, max) اندازه منعطف با حداقل و حداکثر می‌سازد. برای عرض محتوا از max-width استفاده کن.</p><h3>نمونه کد</h3><pre>&lt;main&gt;&lt;h1&gt;طراحی واکنش‌گرا&lt;/h1&gt;&lt;p&gt;اندازه‌ها با نمایشگر سازگار می‌شوند.&lt;/p&gt;&lt;/main&gt;</pre>","takeaway":"px واحد ثابت، rem وابسته به اندازه فونت ریشه، em وابسته به زمینه عنصر و درصد وابسته به والد است.","exercise":"عنوانی با clamp و کارت با عرض حداکثر ۶۰۰ پیکسل بساز.","code":{"html":"<main><h1>طراحی واکنش‌گرا</h1><p>اندازه‌ها با نمایشگر سازگار می‌شوند.</p></main>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}},{"title":"پس‌زمینه، کادر و سایه","category":"CSS PRACTICE","lead":"background رنگ یا تصویر پس‌زمینه را تعیین می‌کند. border کادر، border-radius گوشه‌ها و box-shadow سایه را می‌سازند. سایه باید به تفکیک لایه‌ها کمک کند و نه اینکه همه صفحه را شلوغ کند.","body":"<h2>پس‌زمینه، کادر و سایه</h2><p>background رنگ یا تصویر پس‌زمینه را تعیین می‌کند. border کادر، border-radius گوشه‌ها و box-shadow سایه را می‌سازند. سایه باید به تفکیک لایه‌ها کمک کند و نه اینکه همه صفحه را شلوغ کند.</p><h3>نمونه کد</h3><pre>&lt;div class='panel'&gt;&lt;h2&gt;کارت آموزشی&lt;/h2&gt;&lt;p&gt;طراحی ساده و خوانا&lt;/p&gt;&lt;/div&gt;</pre>","takeaway":"background رنگ یا تصویر پس‌زمینه را تعیین می‌کند.","exercise":"یک کارت سفید با کادر آبی و سایه ملایم طراحی کن.","code":{"html":"<div class='panel'><h2>کارت آموزشی</h2><p>طراحی ساده و خوانا</p></div>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}},{"title":"CSS Grid","category":"CSS PRACTICE","lead":"Grid برای چیدمان دوبعدی ردیف و ستون مناسب است. با display:grid و grid-template-columns ستون‌ها را تعریف می‌کنیم. واحد fr سهم فضای آزاد و gap فاصله خانه‌ها را مشخص می‌کند. auto-fit و minmax شبکه منعطف می‌سازند.","body":"<h2>CSS Grid</h2><p>Grid برای چیدمان دوبعدی ردیف و ستون مناسب است. با display:grid و grid-template-columns ستون‌ها را تعریف می‌کنیم. واحد fr سهم فضای آزاد و gap فاصله خانه‌ها را مشخص می‌کند. auto-fit و minmax شبکه منعطف می‌سازند.</p><h3>نمونه کد</h3><pre>&lt;div class='grid'&gt;&lt;div&gt;HTML&lt;/div&gt;&lt;div&gt;CSS&lt;/div&gt;&lt;div&gt;JavaScript&lt;/div&gt;&lt;div&gt;طراحی وب&lt;/div&gt;&lt;/div&gt;</pre>","takeaway":"Grid برای چیدمان دوبعدی ردیف و ستون مناسب است.","exercise":"چهار کارت بساز که با عرض صفحه تعداد ستون‌ها تغییر کند.","code":{"html":"<div class='grid'><div>HTML</div><div>CSS</div><div>JavaScript</div><div>طراحی وب</div></div>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}},{"title":"Position و لایه‌بندی","category":"CSS PRACTICE","lead":"static حالت عادی، relative مرجع جابه‌جایی، absolute موقعیت‌گیری نسبت به نزدیک‌ترین والد موقعیت‌دار، fixed نسبت به viewport و sticky حالت چسبنده است. z-index ترتیب لایه‌ها را در زمینه لایه‌بندی کنترل می‌کند.","body":"<h2>Position و لایه‌بندی</h2><p>static حالت عادی، relative مرجع جابه‌جایی، absolute موقعیت‌گیری نسبت به نزدیک‌ترین والد موقعیت‌دار، fixed نسبت به viewport و sticky حالت چسبنده است. z-index ترتیب لایه‌ها را در زمینه لایه‌بندی کنترل می‌کند.</p><h3>نمونه کد</h3><pre>&lt;article class='card'&gt;&lt;span class='badge'&gt;جدید&lt;/span&gt;&lt;h2&gt;دوره طراحی وب&lt;/h2&gt;&lt;p&gt;محتوای آموزشی&lt;/p&gt;&lt;/article&gt;</pre>","takeaway":"static حالت عادی، relative مرجع جابه‌جایی، absolute موقعیت‌گیری نسبت به نزدیک‌ترین والد موقعیت‌دار، fixed نسبت به viewport و sticky حالت چسبنده است.","exercise":"یک برچسب جدید را در گوشه کارت قرار بده.","code":{"html":"<article class='card'><span class='badge'>جدید</span><h2>دوره طراحی وب</h2><p>محتوای آموزشی</p></article>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}},{"title":"حالت‌ها و انیمیشن","category":"CSS PRACTICE","lead":"شبه‌کلاس‌هایی مثل hover و focus وضعیت عنصر را هدف می‌گیرند. شبه‌عنصرهای before و after برای تزئین‌اند. transition تغییرات را نرم می‌کند و prefers-reduced-motion به کاربرانی که کاهش حرکت می‌خواهند احترام می‌گذارد.","body":"<h2>حالت‌ها و انیمیشن</h2><p>شبه‌کلاس‌هایی مثل hover و focus وضعیت عنصر را هدف می‌گیرند. شبه‌عنصرهای before و after برای تزئین‌اند. transition تغییرات را نرم می‌کند و prefers-reduced-motion به کاربرانی که کاهش حرکت می‌خواهند احترام می‌گذارد.</p><h3>نمونه کد</h3><pre>&lt;button&gt;روی من برو یا با Tab انتخابم کن&lt;/button&gt;</pre>","takeaway":"شبه‌کلاس‌هایی مثل hover و focus وضعیت عنصر را هدف می‌گیرند.","exercise":"برای دکمه حالت hover و focus-visible بساز.","code":{"html":"<button>روی من برو یا با Tab انتخابم کن</button>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}},{"title":"پروژه طراحی کارت‌های دوره","category":"CSS PRACTICE","lead":"در پروژه نهایی Grid یا Flexbox، فاصله‌گذاری، رنگ، کنتراست، حالت تعاملی و media query را ترکیب کن. ابتدا ساختار HTML و سپس استایل را بساز. صفحه را در موبایل و دسکتاپ آزمایش کن.","body":"<h2>پروژه طراحی کارت‌های دوره</h2><p>در پروژه نهایی Grid یا Flexbox، فاصله‌گذاری، رنگ، کنتراست، حالت تعاملی و media query را ترکیب کن. ابتدا ساختار HTML و سپس استایل را بساز. صفحه را در موبایل و دسکتاپ آزمایش کن.</p><h3>نمونه کد</h3><pre>&lt;main class='courses'&gt;&lt;article&gt;&lt;h2&gt;HTML&lt;/h2&gt;&lt;p&gt;ساختار وب&lt;/p&gt;&lt;/article&gt;&lt;article&gt;&lt;h2&gt;CSS&lt;/h2&gt;&lt;p&gt;طراحی وب&lt;/p&gt;&lt;/article&gt;&lt;article&gt;&lt;h2&gt;JavaScript&lt;/h2&gt;&lt;p&gt;تعامل وب&lt;/p&gt;&lt;/article&gt;&lt;/main&gt;</pre>","takeaway":"در پروژه نهایی Grid یا Flexbox، فاصله‌گذاری، رنگ، کنتراست، حالت تعاملی و media query را ترکیب کن.","exercise":"سه کارت HTML، CSS و JavaScript بساز و واکنش‌گرایی آن‌ها را بررسی کن.","code":{"html":"<main class='courses'><article><h2>HTML</h2><p>ساختار وب</p></article><article><h2>CSS</h2><p>طراحی وب</p></article><article><h2>JavaScript</h2><p>تعامل وب</p></article></main>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}}]);
addCurriculum("javascript", [{"title":"عملگرها و تبدیل نوع","category":"JAVASCRIPT PRACTICE","lead":"عملگرهای ریاضی + - * / و مقایسه === !== > < و منطقی && || ! برای محاسبه و تصمیم‌گیری استفاده می‌شوند. برای تبدیل رشته به عدد از Number استفاده کن؛ ورودی فرم معمولاً رشته است.","body":"<h2>عملگرها و تبدیل نوع</h2><p>عملگرهای ریاضی + - * / و مقایسه === !== > < و منطقی && || ! برای محاسبه و تصمیم‌گیری استفاده می‌شوند. برای تبدیل رشته به عدد از Number استفاده کن؛ ورودی فرم معمولاً رشته است.</p><h3>نمونه کد</h3><pre>&lt;input id='a' type='number' value='12'&gt;&lt;input id='b' type='number' value='8'&gt;&lt;button id='sum'&gt;محاسبه&lt;/button&gt;&lt;p id='result'&gt;&lt;/p&gt;</pre>","takeaway":"عملگرهای ریاضی + - * / و مقایسه === !== > < و منطقی && || ! برای محاسبه و تصمیم‌گیری استفاده می‌شوند.","exercise":"دو عدد را از input بگیر و مجموع را نمایش بده.","code":{"html":"<input id='a' type='number' value='12'><input id='b' type='number' value='8'><button id='sum'>محاسبه</button><p id='result'></p>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}},{"title":"حلقه‌ها","category":"JAVASCRIPT PRACTICE","lead":"for برای تعداد تکرار مشخص، while برای تکرار وابسته به شرط و for...of برای پیمایش مقادیر iterable مناسب است. شرط پایان را دقیق بنویس تا حلقه بی‌نهایت ایجاد نشود.","body":"<h2>حلقه‌ها</h2><p>for برای تعداد تکرار مشخص، while برای تکرار وابسته به شرط و for...of برای پیمایش مقادیر iterable مناسب است. شرط پایان را دقیق بنویس تا حلقه بی‌نهایت ایجاد نشود.</p><h3>نمونه کد</h3><pre>&lt;ul id='numbers'&gt;&lt;/ul&gt;</pre>","takeaway":"for برای تعداد تکرار مشخص، while برای تکرار وابسته به شرط و for.","exercise":"اعداد ۱ تا ۱۰ را در فهرست نشان بده و زوج‌ها را مشخص کن.","code":{"html":"<ul id='numbers'></ul>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}},{"title":"آرایه‌ها و متدها","category":"JAVASCRIPT PRACTICE","lead":"آرایه مجموعه‌ای مرتب از مقادیر است. push می‌افزاید، pop حذف می‌کند، map تبدیل می‌کند، filter پالایش می‌کند، find اولین مورد مطابق شرط را می‌یابد و includes وجود مقدار را بررسی می‌کند.","body":"<h2>آرایه‌ها و متدها</h2><p>آرایه مجموعه‌ای مرتب از مقادیر است. push می‌افزاید، pop حذف می‌کند، map تبدیل می‌کند، filter پالایش می‌کند، find اولین مورد مطابق شرط را می‌یابد و includes وجود مقدار را بررسی می‌کند.</p><h3>نمونه کد</h3><pre>&lt;ul id='result'&gt;&lt;/ul&gt;</pre>","takeaway":"آرایه مجموعه‌ای مرتب از مقادیر است.","exercise":"از آرایه نمره‌ها فقط مقادیر بالاتر از ۱۵ را نمایش بده.","code":{"html":"<ul id='result'></ul>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}},{"title":"آبجکت‌ها","category":"JAVASCRIPT PRACTICE","lead":"آبجکت داده‌های مرتبط را در ویژگی و مقدار نگه می‌دارد. به ویژگی با نقطه یا براکت دسترسی پیدا می‌کنیم. آرایه‌ای از آبجکت‌ها برای مجموعه کاربران، محصولات و دوره‌ها مناسب است.","body":"<h2>آبجکت‌ها</h2><p>آبجکت داده‌های مرتبط را در ویژگی و مقدار نگه می‌دارد. به ویژگی با نقطه یا براکت دسترسی پیدا می‌کنیم. آرایه‌ای از آبجکت‌ها برای مجموعه کاربران، محصولات و دوره‌ها مناسب است.</p><h3>نمونه کد</h3><pre>&lt;div id='books'&gt;&lt;/div&gt;</pre>","takeaway":"آبجکت داده‌های مرتبط را در ویژگی و مقدار نگه می‌دارد.","exercise":"سه کتاب را با عنوان و نویسنده در آرایه‌ای از آبجکت‌ها نگهداری و نمایش بده.","code":{"html":"<div id='books'></div>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}},{"title":"توابع و مقدار بازگشتی","category":"JAVASCRIPT PRACTICE","lead":"تابع مجموعه‌ای از دستورها با ورودی‌های اختیاری و خروجی مشخص است. پارامترها ورودی‌اند و return نتیجه را برمی‌گرداند. توابع پیکانی شکل کوتاه‌تری برای تعریف تابع هستند.","body":"<h2>توابع و مقدار بازگشتی</h2><p>تابع مجموعه‌ای از دستورها با ورودی‌های اختیاری و خروجی مشخص است. پارامترها ورودی‌اند و return نتیجه را برمی‌گرداند. توابع پیکانی شکل کوتاه‌تری برای تعریف تابع هستند.</p><h3>نمونه کد</h3><pre>&lt;input id='price' type='number' value='120'&gt;&lt;input id='qty' type='number' value='3'&gt;&lt;button id='calc'&gt;محاسبه&lt;/button&gt;&lt;p id='out'&gt;&lt;/p&gt;</pre>","takeaway":"تابع مجموعه‌ای از دستورها با ورودی‌های اختیاری و خروجی مشخص است.","exercise":"تابعی بنویس که قیمت و تعداد را بگیرد و مبلغ را برگرداند.","code":{"html":"<input id='price' type='number' value='120'><input id='qty' type='number' value='3'><button id='calc'>محاسبه</button><p id='out'></p>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}},{"title":"DOM و تغییر صفحه","category":"JAVASCRIPT PRACTICE","lead":"DOM نمایش درختی HTML است. querySelector عنصر را انتخاب می‌کند، textContent متن را تغییر می‌دهد، classList کلاس‌ها را مدیریت می‌کند و createElement عنصر تازه می‌سازد. برای متن کاربر از textContent استفاده کن، نه innerHTML.","body":"<h2>DOM و تغییر صفحه</h2><p>DOM نمایش درختی HTML است. querySelector عنصر را انتخاب می‌کند، textContent متن را تغییر می‌دهد، classList کلاس‌ها را مدیریت می‌کند و createElement عنصر تازه می‌سازد. برای متن کاربر از textContent استفاده کن، نه innerHTML.</p><h3>نمونه کد</h3><pre>&lt;button id='add'&gt;افزودن&lt;/button&gt;&lt;ul id='list'&gt;&lt;li&gt;HTML&lt;/li&gt;&lt;/ul&gt;</pre>","takeaway":"DOM نمایش درختی HTML است.","exercise":"با کلیک دکمه یک مورد تازه به فهرست اضافه کن.","code":{"html":"<button id='add'>افزودن</button><ul id='list'><li>HTML</li></ul>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}},{"title":"رویدادها و فرم‌ها","category":"JAVASCRIPT PRACTICE","lead":"addEventListener برای شنیدن رویدادهایی مثل click، input، change و submit استفاده می‌شود. در submit فرم با preventDefault می‌توان رفتار پیش‌فرض را متوقف کرد. ورودی‌ها را بررسی کن و پیام خطای روشن نشان بده.","body":"<h2>رویدادها و فرم‌ها</h2><p>addEventListener برای شنیدن رویدادهایی مثل click، input، change و submit استفاده می‌شود. در submit فرم با preventDefault می‌توان رفتار پیش‌فرض را متوقف کرد. ورودی‌ها را بررسی کن و پیام خطای روشن نشان بده.</p><h3>نمونه کد</h3><pre>&lt;form id='form'&gt;&lt;input id='name' placeholder='نام'&gt;&lt;input id='email' type='email' placeholder='ایمیل'&gt;&lt;button&gt;ثبت&lt;/button&gt;&lt;/form&gt;&lt;p id='msg'&gt;&lt;/p&gt;</pre>","takeaway":"addEventListener برای شنیدن رویدادهایی مثل click، input، change و submit استفاده می‌شود.","exercise":"فرمی بساز که نام و ایمیل خالی را نپذیرد.","code":{"html":"<form id='form'><input id='name' placeholder='نام'><input id='email' type='email' placeholder='ایمیل'><button>ثبت</button></form><p id='msg'></p>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}},{"title":"JSON و localStorage","category":"JAVASCRIPT PRACTICE","lead":"JSON.stringify آبجکت را به رشته و JSON.parse رشته را به داده تبدیل می‌کند. localStorage داده را در مرورگر همان کاربر نگه می‌دارد و فقط رشته ذخیره می‌کند. برای داده حساس یا همگام‌سازی بین کاربران مناسب نیست.","body":"<h2>JSON و localStorage</h2><p>JSON.stringify آبجکت را به رشته و JSON.parse رشته را به داده تبدیل می‌کند. localStorage داده را در مرورگر همان کاربر نگه می‌دارد و فقط رشته ذخیره می‌کند. برای داده حساس یا همگام‌سازی بین کاربران مناسب نیست.</p><h3>نمونه کد</h3><pre>&lt;input id='name' placeholder='نام'&gt;&lt;button id='save'&gt;ذخیره&lt;/button&gt;&lt;p id='welcome'&gt;&lt;/p&gt;</pre>","takeaway":"JSON.","exercise":"نام کاربر را ذخیره کن و پس از بارگذاری مجدد نشان بده.","code":{"html":"<input id='name' placeholder='نام'><button id='save'>ذخیره</button><p id='welcome'></p>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}},{"title":"پروژه نهایی؛ فهرست کارها","category":"JAVASCRIPT PRACTICE","lead":"در پروژه پایانی فرم، آرایه، آبجکت، DOM، رویداد و localStorage را ترکیب کن. افزودن، انجام‌شده کردن، حذف و ذخیره‌سازی را پیاده کن. برای نمایش ورودی کاربر از createElement و textContent استفاده کن.","body":"<h2>پروژه نهایی؛ فهرست کارها</h2><p>در پروژه پایانی فرم، آرایه، آبجکت، DOM، رویداد و localStorage را ترکیب کن. افزودن، انجام‌شده کردن، حذف و ذخیره‌سازی را پیاده کن. برای نمایش ورودی کاربر از createElement و textContent استفاده کن.</p><h3>نمونه کد</h3><pre>&lt;form id='form'&gt;&lt;input id='task' placeholder='کار جدید'&gt;&lt;button&gt;افزودن&lt;/button&gt;&lt;/form&gt;&lt;ul id='tasks'&gt;&lt;/ul&gt;</pre>","takeaway":"در پروژه پایانی فرم، آرایه، آبجکت، DOM، رویداد و localStorage را ترکیب کن.","exercise":"فهرست کارها را بساز و فیلتر همه، انجام‌شده و باقی‌مانده را اضافه کن.","code":{"html":"<form id='form'><input id='task' placeholder='کار جدید'><button>افزودن</button></form><ul id='tasks'></ul>","css":"body{font-family:Arial,sans-serif;direction:rtl;padding:24px;color:#17345b;background:#f5f8ff}h2{color:#2563eb}article,.panel,.card{padding:20px;border:1px solid #dbeafe;border-radius:14px;background:white}button{padding:10px 16px;background:#2563eb;color:white;border:0;border-radius:8px}label,input{display:block;margin:8px 0;padding:8px}.grid,.courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.grid div,.courses article{padding:20px;background:#eaf2ff;border-radius:10px}.card{position:relative}.badge{position:absolute;top:8px;right:8px;background:#2563eb;color:white;padding:5px;border-radius:8px}","js":"console.log('تمرین را اجرا کن');"}}]);

/* =========================
   STATE & HELPERS
========================= */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const STORAGE_KEY = "techlab_progress_v1";

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

let progress = loadProgress();
let currentCourse = null;
let currentLessonIndex = 0;
let activeEditor = "html";
let initialCode = null;
let runTimer = null;

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.warn("Progress could not be saved.", error);
  }
}

function getCompleted(courseId) {
  return Array.isArray(progress[courseId]) ? progress[courseId] : [];
}

function isCompleted(courseId, index) {
  return getCompleted(courseId).includes(index);
}

function completeLesson(courseId, index) {
  const completed = getCompleted(courseId);
  if (!completed.includes(index)) {
    progress[courseId] = [...completed, index];
    saveProgress();
  }
}

function toPersianNumber(value) {
  return Number(value).toLocaleString("fa-IR");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}


/* =========================
   NAVIGATION
========================= */

const pages = {
  home: $("#homePage"),
  course: $("#coursePage"),
  lesson: $("#lessonPage"),
  about: $("#aboutPage")
};

function showPage(pageName) {
  Object.values(pages).forEach(page => page.classList.remove("active"));
  pages[pageName].classList.add("active");

  $$(".nav-link").forEach(link => link.classList.remove("active"));

  if (pageName === "home") {
    $('.nav-link[data-home]')?.classList.add("active");
  } else if (pageName === "about") {
    $('.nav-link[data-about]')?.classList.add("active");
  } else if (pageName === "course" || pageName === "lesson") {
    $('.nav-link[data-courses]')?.classList.add("active");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  $(".main-nav").classList.remove("open");
}

function navigate(hash) {
  window.location.hash = hash;
}

function openHome() {
  showPage("home");
  history.replaceState(null, "", window.location.pathname + window.location.search);
}

$$("[data-home]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    openHome();
  });
});

$$("[data-courses]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    showPage("home");
    history.replaceState(null, "", "#courses");
    setTimeout(() => $("#courses").scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  });
});

$$("[data-about]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    showPage("about");
  });
});

$("#mobileMenu").addEventListener("click", () => {
  $(".main-nav").classList.toggle("open");
});


/* =========================
   HOME & COURSE RENDERING
========================= */

function renderCourses() {
  const grid = $("#courseGrid");
  grid.innerHTML = Object.values(courses).map(course => {
    const completed = getCompleted(course.id).length;
    const percent = Math.round(completed / course.lessons.length * 100);

    return `
      <article class="course-card" style="--card-color:${course.color}">
        <div class="course-card-top">
          <div class="course-icon">${escapeHTML(course.icon)}</div>
          <span class="level-tag">${escapeHTML(course.level)}</span>
        </div>
        <h3>${escapeHTML(course.title)}</h3>
        <p>${escapeHTML(course.shortDescription)}</p>
        <div class="course-card-meta">
          <span>▤ ${toPersianNumber(course.lessons.length)} درس</span>
          <span>◷ ${escapeHTML(course.duration)}</span>
        </div>
        <div class="course-card-footer">
          <span class="course-progress">${toPersianNumber(percent)}٪ تکمیل شده</span>
          <a href="#course-${course.id}" data-open-course="${course.id}">مشاهده دوره ←</a>
        </div>
      </article>
    `;
  }).join("");

  $$("[data-open-course]").forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      openCourse(button.dataset.openCourse);
    });
  });
}

function openCourse(courseId) {
  const course = courses[courseId];
  if (!course) return;

  currentCourse = course;
  const completed = getCompleted(courseId);
  const percent = Math.round(completed.length / course.lessons.length * 100);

  $("#courseHero").style.setProperty("--course-color", course.color);
  $("#courseHero").innerHTML = `
    <div class="course-icon">${escapeHTML(course.icon)}</div>
    <div class="section-kicker">LEARNING PATH / ${escapeHTML(course.id.toUpperCase())}</div>
    <h1>${escapeHTML(course.fullTitle)}</h1>
    <p>${escapeHTML(course.description)}</p>
    <div class="course-hero-meta">
      <span>◷ ${escapeHTML(course.duration)}</span>
      <span>▤ ${toPersianNumber(course.lessons.length)} درس</span>
      <span>◎ ${escapeHTML(course.level)}</span>
      <span>✓ ${toPersianNumber(percent)}٪ تکمیل شده</span>
    </div>
  `;

  $("#courseLessonCount").textContent =
    `${toPersianNumber(course.lessons.length)} درس آموزشی`;

  $("#courseLessonList").innerHTML = course.lessons.map((lesson, index) => `
    <div class="course-lesson-item" data-lesson-index="${index}">
      <div class="lesson-number">${toPersianNumber(index + 1)}</div>
      <div class="lesson-item-info">
        <strong>${escapeHTML(lesson.title)}</strong>
        <small>${escapeHTML(lesson.duration)} · ${escapeHTML(lesson.category)}</small>
      </div>
      <span class="lesson-item-check">${isCompleted(courseId,index) ? "✓" : "›"}</span>
    </div>
  `).join("");

  $$(".course-lesson-item").forEach(item => {
    item.addEventListener("click", () => {
      openLesson(courseId, Number(item.dataset.lessonIndex));
    });
  });

  showPage("course");
  history.replaceState(null, "", `#course-${courseId}`);
}


/* =========================
   LESSON VIEW
========================= */

function openLesson(courseId, lessonIndex) {
  const course = courses[courseId];
  if (!course || !course.lessons[lessonIndex]) return;

  currentCourse = course;
  currentLessonIndex = lessonIndex;
  const lesson = course.lessons[lessonIndex];

  $("#sidebarCourseName").textContent = course.title;
  $("#lessonCourseLink").textContent = course.title;
  $("#lessonCourseLink").onclick = event => {
    event.preventDefault();
    openCourse(courseId);
  };

  $("#lessonBreadcrumb").textContent = lesson.title;
  $("#lessonCategory").textContent = lesson.category;
  $("#lessonDuration").textContent = lesson.duration;
  $("#lessonTitle").textContent = lesson.title;
  $("#lessonLead").textContent = lesson.lead;
  $("#lessonBody").innerHTML = lesson.body;
  $("#keyTakeawayText").textContent = lesson.takeaway;
  $("#exerciseText").textContent = lesson.exercise;

  renderSidebar();
  loadEditor(lesson.code);
  updateLessonNavigation();

  showPage("lesson");
  history.replaceState(null, "", `#lesson-${courseId}-${lessonIndex + 1}`);
}

function renderSidebar() {
  const course = currentCourse;
  const completed = getCompleted(course.id);
  const percent = Math.round(completed.length / course.lessons.length * 100);

  $("#progressPercent").textContent = `${toPersianNumber(percent)}٪`;
  $("#progressFill").style.width = `${percent}%`;

  $("#sidebarLessonList").innerHTML = course.lessons.map((lesson, index) => {
    const active = index === currentLessonIndex;
    const done = completed.includes(index);

    return `
      <button class="sidebar-lesson ${active ? "active" : ""} ${done ? "done" : ""}"
        data-sidebar-index="${index}">
        <span class="sidebar-num">${done ? "✓" : toPersianNumber(index + 1)}</span>
        <span>${escapeHTML(lesson.title)}</span>
      </button>
    `;
  }).join("");

  $$(".sidebar-lesson").forEach(button => {
    button.addEventListener("click", () => {
      openLesson(course.id, Number(button.dataset.sidebarIndex));
    });
  });
}

function updateLessonNavigation() {
  const previous = $("#previousLessonBtn");
  const next = $("#nextLessonBtn");

  previous.disabled = currentLessonIndex === 0;
  previous.style.opacity = previous.disabled ? ".4" : "1";

  next.textContent =
    currentLessonIndex === currentCourse.lessons.length - 1
      ? "پایان دوره ✓"
      : "درس بعدی ←";
}

$("#previousLessonBtn").addEventListener("click", () => {
  if (currentLessonIndex > 0) {
    openLesson(currentCourse.id, currentLessonIndex - 1);
  }
});

$("#nextLessonBtn").addEventListener("click", () => {
  completeLesson(currentCourse.id, currentLessonIndex);
  renderSidebar();

  if (currentLessonIndex < currentCourse.lessons.length - 1) {
    openLesson(currentCourse.id, currentLessonIndex + 1);
  } else {
    openCourse(currentCourse.id);
  }

  renderCourses();
});

$("#backToCourse").addEventListener("click", () => {
  if (currentCourse) openCourse(currentCourse.id);
});


/* =========================
   CODE EDITOR
========================= */

const editorElements = {
  html: $("#htmlEditor"),
  css: $("#cssEditor"),
  js: $("#jsEditor")
};

function loadEditor(code) {
  initialCode = { ...code };

  Object.keys(editorElements).forEach(key => {
    editorElements[key].value = code[key] || "";
  });

  setActiveEditor("html");
  runCode();
}

function setActiveEditor(language) {
  activeEditor = language;

  $$(".editor-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.editor === language);
  });

  Object.keys(editorElements).forEach(key => {
    editorElements[key].classList.toggle("active", key === language);
  });

  $("#editorLanguage").textContent = language.toUpperCase();
}

$$(".editor-tab").forEach(tab => {
  tab.addEventListener("click", () => setActiveEditor(tab.dataset.editor));
});


/* =========================
   SAFE PREVIEW
========================= */

function buildPreviewDocument() {
  const html = editorElements.html.value;
  const css = editorElements.css.value;
  const js = editorElements.js.value;

  // User code runs inside a sandboxed iframe.
  // Do not add allow-same-origin to the iframe sandbox.
  const safeCss = css.replace(/<\/style/gi, "<\\/style");
  const safeJs = js.replace(/<\/script/gi, "<\\/script");

  return `<!DOCTYPE html>
<html lang="fa">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* { box-sizing: border-box; }
body { margin: 0; padding: 16px; font-family: Arial, sans-serif; }
${safeCss}
</style>
</head>
<body>
${html}
<script>
window.addEventListener("error", function(event) {
  parent.postMessage({
    type: "TECHLAB_PREVIEW_ERROR",
    message: event.message || "خطای اجرای کد"
  }, "*");
});
try {
  ${safeJs}
} catch (error) {
  parent.postMessage({
    type: "TECHLAB_PREVIEW_ERROR",
    message: error.message
  }, "*");
}
<\/script>
</body>
</html>`;
}

function runCode() {
  const frame = $("#previewFrame");
  frame.srcdoc = buildPreviewDocument();
  $("#runStatus").textContent = "کد اجرا شد";
}

function scheduleRun() {
  clearTimeout(runTimer);
  $("#runStatus").textContent = "در حال آماده‌سازی...";
  runTimer = setTimeout(runCode, 650);
}

Object.values(editorElements).forEach(editor => {
  editor.addEventListener("input", scheduleRun);
});

$("#runCodeBtn").addEventListener("click", () => {
  clearTimeout(runTimer);
  runCode();
});

$("#resetCodeBtn").addEventListener("click", () => {
  if (!initialCode) return;
  editorElements[activeEditor].value = initialCode[activeEditor] || "";
  runCode();
});

$("#resetPlaygroundBtn").addEventListener("click", () => {
  if (!initialCode) return;

  Object.keys(editorElements).forEach(key => {
    editorElements[key].value = initialCode[key] || "";
  });

  setActiveEditor("html");
  runCode();
});

$("#copyCodeBtn").addEventListener("click", async () => {
  const text = editorElements[activeEditor].value;

  try {
    await navigator.clipboard.writeText(text);
    $("#runStatus").textContent = "کد کپی شد ✓";
  } catch {
    editorElements[activeEditor].select();
    try {
      document.execCommand("copy");
      $("#runStatus").textContent = "کد کپی شد ✓";
    } catch {
      $("#runStatus").textContent = "کپی خودکار در دسترس نیست";
    }
  }
});

$("#fullscreenPreviewBtn").addEventListener("click", () => {
  const frame = $("#previewFrame");

  if (frame.requestFullscreen) {
    frame.requestFullscreen().catch(() => {
      $("#runStatus").textContent = "تمام‌صفحه در این مرورگر پشتیبانی نشد";
    });
  }
});

window.addEventListener("message", event => {
  if (event.source !== $("#previewFrame").contentWindow) return;

  if (event.data?.type === "TECHLAB_PREVIEW_ERROR") {
    $("#runStatus").textContent =
      "خطای کد: " + String(event.data.message).slice(0, 100);
  }
});


/* =========================
   INITIALIZE
========================= */

function initialize() {
  renderCourses();

  const hash = window.location.hash;

  if (hash === "#courses") {
    showPage("home");
    requestAnimationFrame(() => $("#courses").scrollIntoView({ block: "start" }));
    return;
  }
  if (hash === "#about") {
    showPage("about");
    return;
  }

  if (hash.startsWith("#course-")) {
    const courseId = hash.replace("#course-", "");
    if (courses[courseId]) {
      openCourse(courseId);
      return;
    }
  }

  if (hash.startsWith("#lesson-")) {
    const parts = hash.replace("#lesson-", "").split("-");
    const courseId = parts[0];
    const lessonIndex = Number(parts[1]) - 1;

    if (courses[courseId] && Number.isInteger(lessonIndex)) {
      openLesson(courseId, lessonIndex);
      return;
    }
  }

  showPage("home");
}

window.addEventListener("hashchange", () => {
  const hash = window.location.hash;
  if (hash === "#courses") {
    showPage("home");
    $("#courses").scrollIntoView({ behavior: "smooth", block: "start" });
  } else if (hash === "#about") {
    showPage("about");
  } else if (hash === "" || hash === "#") {
    showPage("home");
  }
});

initialize();
```
