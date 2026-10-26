```javascript
/* =========================================
   WEBLAB — APPLICATION
   HTML / CSS / JavaScript Learning Hub
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       1. COURSE DATA
    ===================================== */

    const courses = {

        html: {
            title: "آموزش HTML",
            description: "یادگیری ساختار صفحات وب، از مفاهیم پایه تا عناصر معنایی",
            eyebrow: "HTML LEARNING PATH",
            icon: "5",
            lessons: [

                {
                    id: "html-1",
                    chapter: "فصل اول: آشنایی با HTML",
                    title: "HTML چیست؟",
                    category: "HTML BASICS",
                    duration: "۵ دقیقه مطالعه",
                    lead: "با زبان اصلی ساختار صفحات وب آشنا شو و اولین قدم را در توسعه وب بردار.",

                    body: `
                        <h2>HTML به چه معناست؟</h2>

                        <p>
                            HTML مخفف <strong>HyperText Markup Language</strong>
                            است. این زبان برای تعریف ساختار و محتوای صفحات وب استفاده می‌شود.
                        </p>

                        <p>
                            وقتی یک صفحه وب را باز می‌کنی، بخش‌هایی مثل عنوان،
                            پاراگراف، تصویر، لینک و فرم را مشاهده می‌کنی.
                            HTML مشخص می‌کند هرکدام از این عناصر چه هستند و
                            چگونه در ساختار صفحه قرار می‌گیرند.
                        </p>

                        <h2>HTML چه کاری انجام می‌دهد؟</h2>

                        <p>به زبان ساده، سه فناوری اصلی در توسعه فرانت‌اند نقش‌های متفاوتی دارند:</p>

                        <ul>
                            <li><strong>HTML:</strong> ساختار و محتوای صفحه را مشخص می‌کند.</li>
                            <li><strong>CSS:</strong> ظاهر و چیدمان عناصر را طراحی می‌کند.</li>
                            <li><strong>JavaScript:</strong> رفتار و تعاملات صفحه را ایجاد می‌کند.</li>
                        </ul>

                        <h2>اولین کد HTML</h2>

                        <p>کد زیر یک عنوان و یک پاراگراف در صفحه ایجاد می‌کند:</p>

                        <pre><code>&lt;h1&gt;سلام دنیا&lt;/h1&gt;
&lt;p&gt;این اولین صفحه وب من است.&lt;/p&gt;</code></pre>

                        <h2>تگ چیست؟</h2>

                        <p>
                            عناصر HTML معمولاً با تگ شروع و پایان تعریف می‌شوند.
                            برای مثال، <code>&lt;p&gt;</code> شروع یک پاراگراف
                            و <code>&lt;/p&gt;</code> پایان آن را مشخص می‌کند.
                        </p>

                        <p>
                            بعضی عناصر مانند تصویر، تگ پایانی جداگانه ندارند.
                        </p>
                    `,

                    takeaway: "HTML زبان برنامه‌نویسی نیست؛ بلکه یک زبان نشانه‌گذاری برای تعریف ساختار محتوای صفحات وب است.",

                    exercise: "یک عنوان با متن «به وب‌سایت من خوش آمدید» و یک پاراگراف با متن دلخواه خودت بساز.",

                    html: `<h1>سلام دنیا!</h1>
<p>به اولین صفحه وب من خوش آمدید.</p>
<h2>من در حال یادگیری HTML هستم.</h2>`,

                    css: `body {
    font-family: Tahoma, sans-serif;
    direction: rtl;
    padding: 25px;
    background: #f5f7ff;
    color: #24304a;
}

h1 {
    color: #4263eb;
}

p {
    line-height: 2;
}`,

                    js: `console.log("Hello World!");`
                },


                {
                    id: "html-2",
                    chapter: "فصل اول: آشنایی با HTML",
                    title: "ساختار یک سند HTML",
                    category: "HTML STRUCTURE",
                    duration: "۷ دقیقه مطالعه",
                    lead: "یاد بگیر یک صفحه وب استاندارد از چه بخش‌هایی تشکیل شده است.",

                    body: `
                        <h2>ساختار استاندارد HTML</h2>

                        <p>
                            هر صفحه HTML معمولاً از یک ساختار مشخص پیروی می‌کند.
                            این ساختار به مرورگر کمک می‌کند محتوای صفحه را درست تفسیر کند.
                        </p>

                        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="fa" dir="rtl"&gt;

&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;صفحه من&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;h1&gt;سلام دنیا&lt;/h1&gt;
    &lt;p&gt;اولین صفحه من&lt;/p&gt;
&lt;/body&gt;

&lt;/html&gt;</code></pre>

                        <h2>بخش‌های اصلی</h2>

                        <ul>
                            <li><strong>DOCTYPE:</strong> نوع سند را به مرورگر معرفی می‌کند.</li>
                            <li><strong>html:</strong> عنصر ریشه سند است.</li>
                            <li><strong>head:</strong> اطلاعات و تنظیمات صفحه را نگهداری می‌کند.</li>
                            <li><strong>meta:</strong> اطلاعاتی مانند کدگذاری کاراکترها را تعریف می‌کند.</li>
                            <li><strong>title:</strong> عنوان صفحه در تب مرورگر است.</li>
                            <li><strong>body:</strong> محتوای قابل مشاهده صفحه را در خود دارد.</li>
                        </ul>

                        <h2>تفاوت Head و Body</h2>

                        <p>
                            اطلاعات داخل <code>head</code> معمولاً مستقیماً
                            به شکل محتوای صفحه نمایش داده نمی‌شوند.
                            اما عناصر داخل <code>body</code> محتوای اصلی صفحه هستند.
                        </p>

                        <p>
                            ویژگی <code>lang="fa"</code> زبان سند را فارسی
                            و <code>dir="rtl"</code> جهت نوشتار را راست‌به‌چپ مشخص می‌کند.
                        </p>
                    `,

                    takeaway: "هر سند HTML باید ساختار مشخصی داشته باشد. بخش Head برای اطلاعات سند و بخش Body برای محتوای صفحه است.",

                    exercise: "یک سند HTML بساز که عنوان تب مرورگر آن «وب‌سایت من» باشد و در صفحه یک عنوان و دو پاراگراف نمایش دهد.",

                    html: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>وب‌سایت من</title>
</head>
<body>
    <h1>به وب‌سایت من خوش آمدید</h1>
    <p>این اولین پاراگراف من است.</p>
    <p>من در حال یادگیری HTML هستم.</p>
</body>
</html>`,

                    css: `body {
    font-family: Tahoma, sans-serif;
    padding: 25px;
    line-height: 2;
    background: #ffffff;
    color: #26334d;
}

h1 {
    color: #4263eb;
}`,

                    js: `console.log("HTML Document Structure");`
                },


                {
                    id: "html-3",
                    chapter: "فصل دوم: عناصر HTML",
                    title: "عنوان‌ها و پاراگراف‌ها",
                    category: "HTML ELEMENTS",
                    duration: "۶ دقیقه مطالعه",
                    lead: "با عناصر متنی و نحوه سازمان‌دهی محتوای صفحات آشنا شو.",

                    body: `
                        <h2>عنوان‌ها در HTML</h2>

                        <p>
                            برای تعریف عنوان‌ها در HTML از تگ‌های
                            <code>h1</code> تا <code>h6</code> استفاده می‌کنیم.
                        </p>

                        <pre><code>&lt;h1&gt;عنوان اصلی&lt;/h1&gt;
&lt;h2&gt;عنوان بخش&lt;/h2&gt;
&lt;h3&gt;عنوان زیرمجموعه&lt;/h3&gt;</code></pre>

                        <p>
                            این تگ‌ها فقط برای بزرگ کردن متن نیستند؛
                            بلکه سلسله‌مراتب معنایی محتوا را هم مشخص می‌کنند.
                        </p>

                        <h2>پاراگراف</h2>

                        <p>
                            برای تعریف پاراگراف از تگ <code>p</code> استفاده می‌شود.
                        </p>

                        <pre><code>&lt;p&gt;
این یک پاراگراف در صفحه وب است.
&lt;/p&gt;</code></pre>

                        <h2>اهمیت سلسله‌مراتب</h2>

                        <ul>
                            <li>عنوان اصلی صفحه را با h1 مشخص کن.</li>
                            <li>برای بخش‌های اصلی از h2 استفاده کن.</li>
                            <li>برای زیرمجموعه‌ها از h3 و سطوح پایین‌تر استفاده کن.</li>
                        </ul>
                    `,

                    takeaway: "عنوان‌ها فقط ابزار ظاهری نیستند؛ آن‌ها ساختار و سلسله‌مراتب معنایی محتوای صفحه را مشخص می‌کنند.",

                    exercise: "یک مقاله کوتاه با یک عنوان اصلی، دو عنوان فرعی و حداقل سه پاراگراف ایجاد کن.",

                    html: `<h1>آشنایی با دنیای وب</h1>

<h2>اینترنت چیست؟</h2>
<p>اینترنت شبکه‌ای از شبکه‌های به‌هم‌پیوسته است.</p>

<h2>وب چیست؟</h2>
<p>وب یکی از خدماتی است که روی اینترنت ارائه می‌شود.</p>

<h3>مرورگر چیست؟</h3>
<p>مرورگر نرم‌افزاری برای مشاهده صفحات وب است.</p>`,

                    css: `body {
    font-family: Tahoma, sans-serif;
    direction: rtl;
    padding: 25px;
    line-height: 2;
}

h1 {
    color: #4263eb;
}

h2 {
    color: #334155;
    margin-top: 25px;
}

p {
    color: #64748b;
}`,

                    js: `console.log("Headings and Paragraphs");`
                }

            ]
        },


        css: {
            title: "آموزش CSS",
            description: "یادگیری طراحی صفحات وب، رنگ‌ها، چیدمان و طراحی واکنش‌گرا",
            eyebrow: "CSS LEARNING PATH",
            icon: "3",
            lessons: [

                {
                    id: "css-1",
                    chapter: "فصل اول: آشنایی با CSS",
                    title: "CSS چیست؟",
                    category: "CSS BASICS",
                    duration: "۵ دقیقه مطالعه",
                    lead: "با زبان طراحی صفحات وب و نقش آن در تجربه کاربری آشنا شو.",

                    body: `
                        <h2>CSS به چه معناست؟</h2>

                        <p>
                            CSS مخفف <strong>Cascading Style Sheets</strong>
                            است و برای تعیین ظاهر و چیدمان عناصر HTML استفاده می‌شود.
                        </p>

                        <p>
                            HTML ساختار صفحه را مشخص می‌کند و CSS تعیین می‌کند
                            این ساختار چگونه دیده شود.
                        </p>

                        <h2>یک مثال ساده</h2>

                        <p>فرض کن در HTML یک عنوان داریم:</p>

                        <pre><code>&lt;h1&gt;سلام دنیا&lt;/h1&gt;</code></pre>

                        <p>با CSS می‌توانیم رنگ و اندازه آن را تغییر بدهیم:</p>

                        <pre><code>h1 {
    color: blue;
    font-size: 32px;
}</code></pre>

                        <h2>روش‌های اتصال CSS</h2>

                        <ul>
                            <li><strong>Inline:</strong> نوشتن CSS داخل ویژگی style عنصر.</li>
                            <li><strong>Internal:</strong> نوشتن CSS داخل تگ style در سند HTML.</li>
                            <li><strong>External:</strong> استفاده از فایل مستقل CSS.</li>
                        </ul>

                        <p>
                            استفاده از فایل External در پروژه‌های واقعی معمولاً
                            باعث مدیریت و نگهداری بهتر کدها می‌شود.
                        </p>
                    `,

                    takeaway: "CSS مسئول ظاهر، رنگ، اندازه، فاصله‌ها و چیدمان عناصر HTML است.",

                    exercise: "رنگ عنوان را آبی کن، اندازه آن را افزایش بده و پس‌زمینه صفحه را تغییر بده.",

                    html: `<h1>یادگیری CSS</h1>
<p>با CSS می‌توانیم صفحات وب را زیباتر کنیم.</p>
<button>شروع یادگیری</button>`,

                    css: `body {
    font-family: Tahoma, sans-serif;
    direction: rtl;
    padding: 30px;
    background: #f1f5ff;
    text-align: center;
}

h1 {
    color: #4263eb;
    font-size: 32px;
}

p {
    color: #64748b;
    line-height: 2;
}

button {
    background: #4263eb;
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 10px;
    cursor: pointer;
}`,

                    js: `console.log("Welcome to CSS!");`
                },


                {
                    id: "css-2",
                    chapter: "فصل اول: آشنایی با CSS",
                    title: "Selector و انتخابگرها",
                    category: "CSS SELECTORS",
                    duration: "۷ دقیقه مطالعه",
                    lead: "یاد بگیر چطور عناصر HTML را برای اعمال استایل انتخاب کنی.",

                    body: `
                        <h2>Selector چیست؟</h2>

                        <p>
                            انتخابگرها مشخص می‌کنند کدام عناصر HTML باید
                            استایل‌های تعریف‌شده در CSS را دریافت کنند.
                        </p>

                        <h2>انتخابگر عنصر</h2>

                        <pre><code>p {
    color: blue;
}</code></pre>

                        <p>این قانون تمام عناصر پاراگراف را انتخاب می‌کند.</p>

                        <h2>انتخابگر Class</h2>

                        <p>
                            برای انتخاب عناصر دارای یک کلاس مشخص،
                            از نقطه قبل از نام کلاس استفاده می‌کنیم.
                        </p>

                        <pre><code>.card {
    background: white;
    padding: 20px;
}</code></pre>

                        <h2>انتخابگر ID</h2>

                        <p>
                            برای انتخاب یک عنصر با شناسه مشخص از علامت #
                            استفاده می‌کنیم.
                        </p>

                        <pre><code>#main-title {
    color: red;
}</code></pre>

                        <h2>مقایسه انتخابگرها</h2>

                        <ul>
                            <li>Element: انتخاب بر اساس نام تگ</li>
                            <li>Class: انتخاب بر اساس کلاس</li>
                            <li>ID: انتخاب بر اساس شناسه</li>
                        </ul>
                    `,

                    takeaway: "از Class برای گروه‌بندی و استایل‌دهی عناصر مشابه و از ID برای شناسایی یک عنصر مشخص استفاده می‌شود.",

                    exercise: "سه کارت ایجاد کن و با استفاده از Class رنگ و فاصله آن‌ها را تغییر بده.",

                    html: `<h1 id="main-title">انتخابگرهای CSS</h1>

<div class="card">
    <h2>کارت اول</h2>
    <p>این یک نمونه است.</p>
</div>

<div class="card">
    <h2>کارت دوم</h2>
    <p>این هم یک نمونه دیگر است.</p>
</div>`,

                    css: `body {
    font-family: Tahoma, sans-serif;
    direction: rtl;
    padding: 20px;
    background: #f8fafc;
}

#main-title {
    color: #4263eb;
}

.card {
    background: white;
    padding: 15px;
    margin: 12px 0;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
}

.card h2 {
    font-size: 16px;
    color: #334155;
}`,

                    js: `console.log("CSS Selectors");`
                },


                {
                    id: "css-3",
                    chapter: "فصل دوم: مدل جعبه‌ای",
                    title: "Box Model چیست؟",
                    category: "CSS BOX MODEL",
                    duration: "۸ دقیقه مطالعه",
                    lead: "درک کن هر عنصر HTML چگونه فضا اشغال می‌کند و ابعاد آن چگونه محاسبه می‌شود.",

                    body: `
                        <h2>مدل جعبه‌ای چیست؟</h2>

                        <p>
                            در CSS هر عنصر به‌صورت یک جعبه در نظر گرفته می‌شود.
                            این جعبه از چهار بخش اصلی تشکیل شده است.
                        </p>

                        <ul>
                            <li><strong>Content:</strong> محتوای اصلی عنصر</li>
                            <li><strong>Padding:</strong> فاصله داخلی محتوا تا مرز عنصر</li>
                            <li><strong>Border:</strong> حاشیه یا مرز عنصر</li>
                            <li><strong>Margin:</strong> فاصله خارجی عنصر با عناصر دیگر</li>
                        </ul>

                        <h2>مثال</h2>

                        <pre><code>.box {
    width: 200px;
    padding: 20px;
    border: 5px solid blue;
    margin: 15px;
}</code></pre>

                        <p>
                            با تنظیم <code>box-sizing: border-box</code>
                            می‌توانیم عرض و ارتفاع تعریف‌شده را شامل
                            Padding و Border در نظر بگیریم.
                        </p>

                        <pre><code>* {
    box-sizing: border-box;
}</code></pre>
                    `,

                    takeaway: "Padding فضای داخلی، Border مرز عنصر و Margin فاصله بیرونی آن است.",

                    exercise: "یک کارت بساز و مقدار Padding، Margin و Border آن را تغییر بده. تفاوت‌ها را در خروجی مشاهده کن.",

                    html: `<div class="box">
    <h2>Box Model</h2>
    <p>این یک جعبه آزمایشی است.</p>
</div>`,

                    css: `* {
    box-sizing: border-box;
}

body {
    font-family: Tahoma, sans-serif;
    direction: rtl;
    padding: 20px;
    background: #f1f5ff;
}

.box {
    background: white;
    width: 100%;
    padding: 25px;
    border: 4px solid #4263eb;
    margin: 15px 0;
    border-radius: 12px;
}

h2 {
    color: #4263eb;
}

p {
    color: #64748b;
}`,

                    js: `console.log("CSS Box Model");`
                }

            ]
        },


        javascript: {
            title: "آموزش JavaScript",
            description: "یادگیری منطق برنامه‌نویسی، متغیرها، توابع و تعامل با صفحات وب",
            eyebrow: "JAVASCRIPT LEARNING PATH",
            icon: "JS",
            lessons: [

                {
                    id: "js-1",
                    chapter: "فصل اول: آشنایی با JavaScript",
                    title: "JavaScript چیست؟",
                    category: "JAVASCRIPT BASICS",
                    duration: "۶ دقیقه مطالعه",
                    lead: "با زبان برنامه‌نویسی اصلی تعاملات وب آشنا شو.",

                    body: `
                        <h2>JavaScript چیست؟</h2>

                        <p>
                            JavaScript یک زبان برنامه‌نویسی است که به صفحات وب
                            امکان می‌دهد رفتارهای پویا و تعاملی داشته باشند.
                        </p>

                        <p>
                            برای مثال، باز شدن منو، بررسی فرم‌ها،
                            تغییر محتوای صفحه و تعامل با کاربر می‌تواند
                            با JavaScript پیاده‌سازی شود.
                        </p>

                        <h2>اولین دستور JavaScript</h2>

                        <pre><code>console.log("Hello World");</code></pre>

                        <p>
                            این دستور یک پیام را در Console مرورگر نمایش می‌دهد.
                        </p>

                        <h2>JavaScript چه کاربردهایی دارد؟</h2>

                        <ul>
                            <li>تعامل با عناصر صفحه</li>
                            <li>اعتبارسنجی فرم‌ها</li>
                            <li>ساخت منوها و اسلایدرها</li>
                            <li>ارتباط با APIها</li>
                            <li>ساخت برنامه‌های تحت وب</li>
                        </ul>

                        <h2>یک مثال تعاملی</h2>

                        <p>
                            در مثال زیر با کلیک روی دکمه، متن صفحه تغییر می‌کند.
                        </p>
                    `,

                    takeaway: "JavaScript به صفحات وب قابلیت اجرا و تعامل می‌دهد و می‌تواند محتوای HTML را در زمان اجرا تغییر دهد.",

                    exercise: "یک دکمه بساز که با کلیک روی آن متن یک پاراگراف تغییر کند.",

                    html: `<h2 id="message">سلام! به دنیای JavaScript خوش آمدی.</h2>
<button id="changeBtn">تغییر متن</button>`,

                    css: `body {
    font-family: Tahoma, sans-serif;
    direction: rtl;
    text-align: center;
    padding: 30px;
    background: #fff9e5;
}

h2 {
    color: #7b6500;
    font-size: 18px;
    line-height: 2;
}

button {
    background: #e5b91b;
    color: #302600;
    border: none;
    border-radius: 10px;
    padding: 12px 22px;
    cursor: pointer;
    font-weight: bold;
}`,

                    js: `const button = document.getElementById("changeBtn");

button.addEventListener("click", function() {
    document.getElementById("message").textContent =
        "آفرین! اولین تعامل JavaScript را ساختی.";
});`
                },


                {
                    id: "js-2",
                    chapter: "فصل اول: آشنایی با JavaScript",
                    title: "متغیرها و انواع داده",
                    category: "VARIABLES & DATA TYPES",
                    duration: "۸ دقیقه مطالعه",
                    lead: "یاد بگیر چطور اطلاعات را در برنامه ذخیره و مدیریت کنی.",

                    body: `
                        <h2>متغیر چیست؟</h2>

                        <p>
                            متغیر فضایی نام‌گذاری‌شده برای نگهداری داده‌ها
                            در برنامه است.
                        </p>

                        <p>
                            در JavaScript برای تعریف متغیر معمولاً
                            از <code>let</code> و <code>const</code> استفاده می‌کنیم.
                        </p>

                        <pre><code>let name = "Ali";
let age = 25;

const country = "Iran";</code></pre>

                        <h2>تفاوت let و const</h2>

                        <ul>
                            <li><strong>let:</strong> مقدار متغیر را می‌توان دوباره تغییر داد.</li>
                            <li><strong>const:</strong> نمی‌توان متغیر را دوباره مقداردهی کرد.</li>
                        </ul>

                        <h2>انواع داده‌ها</h2>

                        <ul>
                            <li><strong>String:</strong> متن</li>
                            <li><strong>Number:</strong> عدد</li>
                            <li><strong>Boolean:</strong> درست یا نادرست</li>
                            <li><strong>Undefined:</strong> مقدار تعریف‌نشده</li>
                            <li><strong>Null:</strong> نبود عمدی مقدار</li>
                            <li><strong>Object:</strong> مجموعه‌ای از ویژگی‌ها و مقادیر</li>
                        </ul>

                        <h2>مثال</h2>

                        <pre><code>let score = 18;
let student = "Sara";
let isActive = true;

console.log(score);
console.log(student);
console.log(isActive);</code></pre>
                    `,

                    takeaway: "از let برای متغیرهای قابل تغییر و از const برای متغیرهایی استفاده کن که قرار نیست دوباره مقداردهی شوند.",

                    exercise: "نام، سن و وضعیت دانشجویی خودت را در سه متغیر ذخیره کن و آن‌ها را در Console نمایش بده.",

                    html: `<h2>آزمایش متغیرها</h2>
<p>دکمه را بزن تا اطلاعات را مشاهده کنی.</p>
<button id="showInfo">نمایش اطلاعات</button>
<p id="result"></p>`,

                    css: `body {
    font-family: Tahoma, sans-serif;
    direction: rtl;
    padding: 25px;
    background: #f8fafc;
    text-align: center;
}

button {
    padding: 12px 20px;
    background: #4263eb;
    color: white;
    border: none;
    border-radius: 9px;
    cursor: pointer;
}

#result {
    line-height: 2;
    color: #334155;
}`,

                    js: `let name = "Ali";
let age = 25;
const isStudent = true;

document.getElementById("showInfo")
.addEventListener("click", function() {

    document.getElementById("result").textContent =
        "نام: " + name +
        " | سن: " + age +
        " | دانشجو: " + isStudent;

});`
                },


                {
                    id: "js-3",
                    chapter: "فصل دوم: منطق برنامه‌نویسی",
                    title: "شرط‌ها و تصمیم‌گیری",
                    category: "CONDITIONALS",
                    duration: "۷ دقیقه مطالعه",
                    lead: "با استفاده از شرط‌ها، به برنامه یاد بده در موقعیت‌های مختلف تصمیم بگیرد.",

                    body: `
                        <h2>شرط چیست؟</h2>

                        <p>
                            در برنامه‌نویسی همیشه لازم است بر اساس شرایط
                            مختلف رفتارهای متفاوتی داشته باشیم.
                            برای این کار از ساختارهای شرطی استفاده می‌کنیم.
                        </p>

                        <h2>ساختار if</h2>

                        <pre><code>let age = 20;

if (age >= 18) {
    console.log("بزرگسال");
}</code></pre>

                        <h2>ساختار if و else</h2>

                        <pre><code>let score = 15;

if (score >= 10) {
    console.log("قبول");
} else {
    console.log("مردود");
}</code></pre>

                        <h2>عملگرهای مقایسه</h2>

                        <ul>
                            <li><code>===</code> برابر از نظر مقدار و نوع</li>
                            <li><code>!==</code> نابرابر از نظر مقدار یا نوع</li>
                            <li><code>&gt;</code> بزرگ‌تر</li>
                            <li><code>&lt;</code> کوچک‌تر</li>
                            <li><code>&gt;=</code> بزرگ‌تر یا مساوی</li>
                            <li><code>&lt;=</code> کوچک‌تر یا مساوی</li>
                        </ul>

                        <p>
                            در JavaScript معمولاً استفاده از
                            <code>===</code> به‌جای <code>==</code>
                            انتخاب دقیق‌تری است؛ زیرا نوع داده را هم مقایسه می‌کند.
                        </p>
                    `,

                    takeaway: "ساختارهای شرطی به برنامه اجازه می‌دهند بر اساس درست یا نادرست بودن یک شرط، مسیر اجرای متفاوتی انتخاب کند.",

                    exercise: "برنامه‌ای بساز که نمره کاربر را دریافت کند و مشخص کند قبول شده یا مردود است.",

                    html: `<h2>بررسی نمره دانشجو</h2>

<input id="score" type="number" placeholder="نمره از ۲۰">

<button id="checkScore">بررسی نتیجه</button>

<p id="result"></p>`,

                    css: `body {
    font-family: Tahoma, sans-serif;
    direction: rtl;
    text-align: center;
    padding: 25px;
    background: #f8fafc;
}

input {
    display: block;
    margin: 15px auto;
    padding: 12px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    max-width: 220px;
}

button {
    padding: 11px 20px;
    background: #4263eb;
    color: white;
    border: none;
    border-radius: 9px;
    cursor: pointer;
}

#result {
    font-weight: bold;
    margin-top: 20px;
}`,

                    js: `document.getElementById("checkScore")
.addEventListener("click", function() {

    const score = Number(
        document.getElementById("score").value
    );

    const result = document.getElementById("result");

    if (score < 0 || score > 20 || document.getElementById("score").value === "") {
        result.textContent = "لطفاً نمره معتبر وارد کن.";
    } else if (score >= 10) {
        result.textContent = "تبریک! قبول شدی.";
        result.style.color = "green";
    } else {
        result.textContent = "این بار مردود شدی. دوباره تلاش کن.";
        result.style.color = "red";
    }

});`
                }

            ]
        }

    };


    /* =====================================
       2. APPLICATION STATE
    ===================================== */

    let currentCourse = null;
    let currentLessonIndex = 0;
    let currentEditor = "html";

    let debounceTimer = null;

    const STORAGE_KEY = "weblab-progress-v1";

    let completedLessons = [];

    try {
        const saved = JSON.parse(
            localStorage.getItem(STORAGE_KEY) || "[]"
        );

        if (Array.isArray(saved)) {
            completedLessons = saved.filter(
                item => typeof item === "string"
            );
        }
    } catch (error) {
        completedLessons = [];
    }


    /* =====================================
       3. DOM REFERENCES
    ===================================== */

    const $ = id => document.getElementById(id);

    const pages = {
        home: $("homePage"),
        course: $("coursePage"),
        lesson: $("lessonPage"),
        about: $("aboutPage")
    };

    const courseGrid = $("courseGrid");
    const lessonList = $("lessonList");

    const lessonTitle = $("lessonTitle");
    const lessonLead = $("lessonLead");
    const lessonBody = $("lessonBody");

    const htmlEditor = $("htmlEditor");
    const cssEditor = $("cssEditor");
    const jsEditor = $("jsEditor");

    const previewFrame = $("previewFrame");


    /* =====================================
       4. HELPERS
    ===================================== */

    function toPersianNumber(value) {
        return String(value).replace(/\d/g, digit =>
            "۰۱۲۳۴۵۶۷۸۹"[digit]
        );
    }

    function getCurrentCourse() {
        return courses[currentCourse];
    }

    function getCurrentLesson() {
        const course = getCurrentCourse();

        return course
            ? course.lessons[currentLessonIndex]
            : null;
    }

    function saveProgress() {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(completedLessons)
            );
        } catch (error) {
            console.warn("Progress could not be saved.", error);
        }
    }

    function markLessonCompleted(lessonId) {
        if (!completedLessons.includes(lessonId)) {
            completedLessons.push(lessonId);
            saveProgress();
        }

        updateProgress();
        renderLessonList();
    }

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        })[char]);
    }


    /* =====================================
       5. PAGE NAVIGATION
    ===================================== */

    function showPage(pageName) {

        Object.values(pages).forEach(page => {
            page.classList.remove("active");
        });

        if (!pages[pageName]) return;

        pages[pageName].classList.add("active");

        document.querySelectorAll(".nav-link").forEach(link => {
            link.classList.toggle(
                "active",
                link.dataset.page === pageName
            );
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        const nav = document.querySelector(".main-nav");

        if (nav) nav.classList.remove("open");
    }


    /* =====================================
       6. HOME PAGE
    ===================================== */

    function updateCourseCounts() {

        document.querySelectorAll("[data-count]").forEach(element => {

            const courseId = element.dataset.count;
            const course = courses[courseId];

            if (course) {
                element.textContent =
                    `${toPersianNumber(course.lessons.length)} درس آموزشی`;
            }

        });

    }


    /* =====================================
       7. SEARCH
    ===================================== */

    const searchInput = $("searchInput");

    function searchCourses() {

        const query = searchInput.value.trim().toLowerCase();

        let visibleCount = 0;

        document.querySelectorAll(".course-card").forEach(card => {

            const courseId = card.dataset.course;
            const course = courses[courseId];

            const searchable = [
                course.title,
                course.description,
                ...course.lessons.map(lesson =>
                    lesson.title + " " +
                    lesson.category + " " +
                    lesson.chapter
                )
            ].join(" ").toLowerCase();

            const matches = searchable.includes(query);

            card.classList.toggle("hidden", !matches);

            if (matches) visibleCount++;

        });

        let emptyMessage = document.querySelector(".search-empty");

        if (visibleCount === 0 && query !== "") {

            if (!emptyMessage) {

                emptyMessage = document.createElement("div");

                emptyMessage.className = "search-empty";

                emptyMessage.innerHTML = `
                    <strong>نتیجه‌ای پیدا نشد!</strong>
                    عبارت دیگری را امتحان کن.
                `;

                courseGrid.appendChild(emptyMessage);
            }

        } else if (emptyMessage) {
            emptyMessage.remove();
        }

    }

    searchInput.addEventListener("input", searchCourses);


    /* =====================================
       8. OPEN COURSE
    ===================================== */

    function openCourse(courseId) {

        if (!courses[courseId]) return;

        currentCourse = courseId;
        currentLessonIndex = 0;

        const course = getCurrentCourse();

        $("courseTitle").textContent = course.title;

        $("courseDescription").textContent =
            course.description;

        $("courseEyebrow").textContent =
            course.eyebrow;

        $("courseIntroIcon").textContent =
            course.icon;

        $("sidebarLessonCount").textContent =
            `${toPersianNumber(course.lessons.length)} درس`;

        $("courseIntroIcon").className =
            "course-intro-icon " + courseId + "-course-icon";

        renderLessonList();
        updateProgress();

        showPage("course");

        openLesson(0);
    }


    /* =====================================
       9. RENDER LESSON LIST
    ===================================== */

    function renderLessonList() {

        if (!currentCourse) return;

        const course = getCurrentCourse();

        let html = "";
        let lastChapter = "";

        course.lessons.forEach((lesson, index) => {

            if (lesson.chapter !== lastChapter) {

                lastChapter = lesson.chapter;

                html += `
                    <div class="lesson-group">
                        <div class="lesson-group-title">
                            ${escapeHTML(lastChapter)}
                        </div>
                `;
            }

            const active = index === currentLessonIndex;
            const completed = completedLessons.includes(lesson.id);

            html += `
                <button
                    class="lesson-item
                        ${active ? "active" : ""}
                        ${completed ? "completed" : ""}"
                    data-lesson-index="${index}"
                    type="button"
                >

                    <span class="lesson-index">
                        ${completed ? "✓" : toPersianNumber(index + 1)}
                    </span>

                    <span class="lesson-name">
                        ${escapeHTML(lesson.title)}
                    </span>

                </button>
            `;

            const nextLesson = course.lessons[index + 1];

            if (!nextLesson || nextLesson.chapter !== lastChapter) {
                html += "</div>";
            }

        });

        lessonList.innerHTML = html;

        lessonList.querySelectorAll("[data-lesson-index]")
            .forEach(button => {

                button.addEventListener("click", () => {

                    openLesson(
                        Number(button.dataset.lessonIndex)
                    );

                });

            });

    }


    /* =====================================
       10. OPEN LESSON
    ===================================== */

    function openLesson(index) {

        const course = getCurrentCourse();

        if (!course || index < 0 || index >= course.lessons.length) {
            return;
        }

        currentLessonIndex = index;

        const lesson = getCurrentLesson();

        $("lessonBreadcrumb").textContent =
            `${course.title} / ${lesson.title}`;

        $("lessonTitle").textContent = lesson.title;

        $("lessonLead").textContent = lesson.lead;

        $("lessonCategory").textContent = lesson.category;

        $("lessonDuration").textContent = lesson.duration;

        $("lessonBody").innerHTML = lesson.body;

        $("keyTakeawayText").textContent = lesson.takeaway;

        $("exerciseText").textContent = lesson.exercise;

        $("lessonPage").dataset.lessonId = lesson.id;

        // Load the lesson's starter code.
        htmlEditor.value = lesson.html || "";
        cssEditor.value = lesson.css || "";
        jsEditor.value = lesson.js || "";

        // Start with HTML editor visible.
        switchEditor("html");

        // Generate initial preview.
        runCode();

        renderLessonList();
        updateProgress();
        updateLessonNavigation();

        showPage("lesson");
    }


    /* =====================================
       11. LESSON PROGRESS
    ===================================== */

    function updateProgress() {

        if (!currentCourse) return;

        const lessons = getCurrentCourse().lessons;

        const completed = lessons.filter(lesson =>
            completedLessons.includes(lesson.id)
        ).length;

        const percentage = Math.round(
            (completed / lessons.length) * 100
        );

        $("progressPercent").textContent =
            `${toPersianNumber(percentage)}٪`;

        $("progressFill").style.width =
            `${percentage}%`;

    }


    /* =====================================
       12. PREVIOUS / NEXT LESSON
    ===================================== */

    function updateLessonNavigation() {

        const course = getCurrentCourse();

        $("previousLessonBtn").disabled =
            currentLessonIndex === 0;

        $("nextLessonBtn").disabled =
            currentLessonIndex === course.lessons.length - 1;

    }

    $("previousLessonBtn").addEventListener("click", () => {

        if (currentLessonIndex > 0) {
            openLesson(currentLessonIndex - 1);
        }

    });

    $("nextLessonBtn").addEventListener("click", () => {

        const course = getCurrentCourse();

        if (currentLessonIndex < course.lessons.length - 1) {

            markLessonCompleted(getCurrentLesson().id);

            openLesson(currentLessonIndex + 1);

        } else {

            markLessonCompleted(getCurrentLesson().id);

            alert("آفرین! این مسیر آموزشی را به پایان رساندی.");

        }

    });


    /* =====================================
       13. EDITOR TABS
    ===================================== */

    function switchEditor(editorName) {

        currentEditor = editorName;

        document.querySelectorAll(".editor-tab").forEach(tab => {

            tab.classList.toggle(
                "active",
                tab.dataset.editor === editorName
            );

        });

        document.querySelectorAll(".editor-panel").forEach(panel => {

            panel.classList.toggle(
                "active",
                panel.dataset.panel === editorName
            );

        });

        const names = {
            html: "HTML",
            css: "CSS",
            js: "JavaScript"
        };

        $("editorLanguage").textContent =
            names[editorName];

    }

    document.querySelectorAll(".editor-tab").forEach(tab => {

        tab.addEventListener("click", () => {
            switchEditor(tab.dataset.editor);
        });

    });


    /* =====================================
       14. LIVE CODE EXECUTION
    ===================================== */

    function runCode() {

        const html = htmlEditor.value;
        const css = cssEditor.value;
        const js = jsEditor.value;

        /*
         * Escape the HTML closing-tag sequence inside
         * JavaScript strings embedded in the iframe.
         */

        const safeCSS = JSON.stringify(css)
            .replace(/</g, "\\u003c");

        const safeJS = JSON.stringify(js)
            .replace(/</g, "\\u003c");

        /*
         * CSS and JS are inserted using textContent.
         * This avoids injecting user code directly
         * into style/script HTML source.
         */

        const documentContent = `
<!DOCTYPE html>
<html lang="fa" dir="rtl">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <style>
        body {
            font-family: Tahoma, Arial, sans-serif;
            padding: 18px;
            margin: 0;
            line-height: 1.8;
            color: #26334d;
        }

        * {
            box-sizing: border-box;
        }

        img {
            max-width: 100%;
        }
    </style>

</head>

<body>

    ${html}

    <script>

        const customStyle = document.createElement("style");

        customStyle.textContent = ${safeCSS};

        document.head.appendChild(customStyle);


        // Capture runtime errors inside the preview.

        window.addEventListener("error", function(event) {

            parent.postMessage({
                type: "weblab-error",
                message: event.message
            }, "*");

        });


        // Execute user JavaScript.

        try {

            const userScript = document.createElement("script");

            userScript.textContent = ${safeJS};

            document.body.appendChild(userScript);

            parent.postMessage({
                type: "weblab-success"
            }, "*");

        } catch (error) {

            parent.postMessage({
                type: "weblab-error",
                message: error.message
            }, "*");

        }

    <\/script>

</body>

</html>
        `;

        previewFrame.srcdoc = documentContent;

    }


    /* =====================================
       15. AUTO RUN
    ===================================== */

    function scheduleRun() {

        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(() => {
            runCode();
        }, 650);

    }

    [htmlEditor, cssEditor, jsEditor].forEach(editor => {

        editor.addEventListener("input", scheduleRun);

        // Basic Tab indentation in the textarea.

        editor.addEventListener("keydown", event => {

            if (event.key === "Tab") {

                event.preventDefault();

                const start = editor.selectionStart;
                const end = editor.selectionEnd;

                editor.setRangeText(
                    "  ",
                    start,
                    end,
                    "end"
                );

                scheduleRun();

            }

            // Ctrl/Cmd + Enter runs the code.

            if (
                event.key === "Enter" &&
                (event.ctrlKey || event.metaKey)
            ) {

                event.preventDefault();
                runCode();

            }

        });

    });


    /* =====================================
       16. RUN BUTTON
    ===================================== */

    $("runCodeBtn").addEventListener("click", () => {

        runCode();

        const button = $("runCodeBtn");

        const original = button.innerHTML;

        button.innerHTML = "✓ اجرا شد";

        setTimeout(() => {
            button.innerHTML = original;
        }, 1200);

    });


    /* =====================================
       17. RESET CODE
    ===================================== */

    function resetCode() {

        const lesson = getCurrentLesson();

        if (!lesson) return;

        const confirmed = confirm(
            "تمام تغییرات کد پاک شده و کد اولیه درس جایگزین شود؟"
        );

        if (!confirmed) return;

        htmlEditor.value = lesson.html || "";
        cssEditor.value = lesson.css || "";
        jsEditor.value = lesson.js || "";

        runCode();

    }

    $("resetCodeBtn").addEventListener("click", resetCode);

    $("resetPlaygroundBtn").addEventListener("click", resetCode);


    /* =====================================
       18. COPY CODE
    ===================================== */

    async function copyCode() {

        const editors = {
            html: htmlEditor,
            css: cssEditor,
            js: jsEditor
        };

        const text = editors[currentEditor].value;

        try {

            await navigator.clipboard.writeText(text);

        } catch (error) {

            editors[currentEditor].select();

            const copied = document.execCommand("copy");

            if (!copied) {
                alert("کپی کد امکان‌پذیر نبود.");
                return;
            }

        }

        const button = $("copyCodeBtn");

        button.textContent = "✓";

        setTimeout(() => {
            button.textContent = "⧉";
        }, 1000);

    }

    $("copyCodeBtn").addEventListener("click", copyCode);


    /* =====================================
       19. PREVIEW FULLSCREEN
    ===================================== */

    $("fullscreenPreviewBtn").addEventListener("click", async () => {

        const preview = $("previewFrame");

        try {

            if (!document.fullscreenElement) {

                await preview.requestFullscreen();

            } else {

                await document.exitFullscreen();

            }

        } catch (error) {

            alert("تمام‌صفحه در این مرورگر پشتیبانی نمی‌شود.");

        }

    });


    /* =====================================
       20. IFRAME MESSAGE HANDLING
    ===================================== */

    window.addEventListener("message", event => {

        // Accept messages only from our preview iframe.
        if (event.source !== previewFrame.contentWindow) return;

        if (event.data?.type === "weblab-error") {

            console.warn(
                "Preview JavaScript Error:",
                event.data.message
            );

        }

    });


    /* =====================================
       21. HOME NAVIGATION
    ===================================== */

    function goHome() {

        currentCourse = null;

        showPage("home");

    }

    $("homeLogo").addEventListener("click", event => {
        event.preventDefault();
        goHome();
    });

    $("footerLogo").addEventListener("click", event => {
        event.preventDefault();
        goHome();
    });

    $("startLearningBtn").addEventListener("click", () => {

        $("courses").scrollIntoView({
            behavior: "smooth"
        });

    });

    $("backToHome").addEventListener("click", goHome);

    $("backToCourse").addEventListener("click", () => {

        renderLessonList();
        updateProgress();

        showPage("course");

    });


    /* =====================================
       22. COURSE CARD EVENTS
    ===================================== */

    document.querySelectorAll("[data-open-course]").forEach(button => {

        button.addEventListener("click", () => {

            openCourse(button.dataset.openCourse);

        });

    });

    document.querySelectorAll(".course-card").forEach(card => {

        card.addEventListener("click", event => {

            if (event.target.closest("button")) return;

            openCourse(card.dataset.course);

        });

    });


    /* =====================================
       23. NAVIGATION LINKS
    ===================================== */

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const page = link.dataset.page;

            if (page === "courses") {

                goHome();

                setTimeout(() => {

                    $("courses").scrollIntoView({
                        behavior: "smooth"
                    });

                }, 100);

            } else {

                showPage(page);

            }

        });

    });


    /* =====================================
       24. MOBILE MENU
    ===================================== */

    $("mobileMenuBtn").addEventListener("click", () => {

        document.querySelector(".main-nav")
            .classList.toggle("open");

    });


    /* =====================================
       25. INITIALIZATION
    ===================================== */

    function initializeApp() {

        updateCourseCounts();

        showPage("home");

        console.log(
            "WebLab initialized successfully."
        );

    }

    initializeApp();

});
```
