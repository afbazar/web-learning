"use strict";

const COURSE_DATA = {
    html: {
        id: "html",
        title: "آموزش HTML",
        level: "مقدماتی",
        lessonCount: 18,
        description: "ساختار صفحات وب، تگ‌ها، فرم‌ها و پروژه‌های عملی را یاد بگیر.",
        lessons: [{
                title: "آشنایی با HTML",
                goal: "درک نقش HTML در ساخت صفحات وب",
                intro: "HTML زبان نشانه‌گذاری برای ساختار دادن به محتواست. با تگ‌ها مشخص می‌کنیم هر بخش از صفحه چه معنایی دارد.",
                code: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <title>صفحه من</title>
  </head>
  <body>
    <h1>سلام دنیا</h1>
    <p>اولین صفحه من</p>
  </body>
</html>`,
                explanation: "DOCTYPE اعلام می‌کند فایل HTML5 است. head اطلاعات متادیتا را نگه می‌دارد. body محتوای اصلی صفحه است.",
                result: "وقتی فایل را در مرورگر باز کنی، عنوان و متن صفحه نمایش داده می‌شود.",
                exercise: "یک صفحه HTML ساده بساز که در آن یک عنوان و یک پاراگراف درباره خودت باشد.",
                solution: "از تگ <h1> برای عنوان و <p> برای پاراگراف استفاده کن.",
                quiz: [
                    { q: "HTML برای چیست؟", options: ["طراحی رنگ‌ها", "ساختار محتوای صفحه", "پردازش داده‌ها"], answer: 1 },
                    { q: "کدام تگ برای پاراگراف استفاده می‌شود؟", options: ["<p>", "<img>", "<div>"], answer: 0 }
                ]
            },
            {
                title: "ساختار سند HTML",
                goal: "آشنایی با بخش‌های اصلی سند HTML",
                intro: "هر صفحه HTML از عناصر پایه‌ای مانند head، body و metadata تشکیل می‌شود.",
                code: `<html>
  <head>
    <meta charset="UTF-8" />
    <title>عنوان صفحه</title>
  </head>
  <body>
    <h2>سلام</h2>
  </body>
</html>`,
                explanation: "head برای تنظیمات صفحه و body برای نمایش محتوای اصلی استفاده می‌شود.",
                result: "صفحه به‌درستی بارگذاری می‌شود و عنوان تب مرورگر نمایش داده می‌شود.",
                exercise: "در head عنوان صفحه را تغییر بده و یک h2 اضافه کن.",
                solution: "در <title> متن دلخواه را بنویس و در body یک h2 با محتوای مناسب اضافه کن.",
                quiz: [
                    { q: "کدام بخش برای عنوان صفحه استفاده می‌شود؟", options: ["body", "head", "main"], answer: 1 },
                    { q: "محتوای اصلی صفحه در کجا قرار می‌گیرد؟", options: ["body", "meta", "title"], answer: 0 }
                ]
            },
            {
                title: "تگ‌ها و عناصر",
                goal: "درک تفاوت تگ باز و بسته",
                intro: "تگ‌ها بلوک‌های اصلی ساختار صفحه هستند و اجزای مختلف را تعریف می‌کنند.",
                code: `<h1>عنوان اصلی</h1>
<p>این یک پاراگراف است.</p>
<strong>متن مهم</strong>`,
                explanation: "تگ باز و بسته همراه هم یک عنصر را می‌سازند. strong متن را پررنگ می‌کند.",
                result: "عنوان و متن به‌صورت صحیح در صفحه دیده می‌شوند.",
                exercise: "یک متن پررنگ و یک پاراگراف اضافه کن.",
                solution: "از <strong> یا <b> برای تاکید روی متن استفاده کن.",
                quiz: [
                    { q: "تگ باز و بسته به چه معنی است؟", options: ["یک تگ قبل و بعد از محتوا", "فقط برای عکس", "برای فرم"], answer: 0 },
                    { q: "کدام تگ برای تاکید روی متن مناسب است؟", options: ["<strong>", "<img>", "<ul>"], answer: 0 }
                ]
            },
            {
                title: "عنوان‌ها و پاراگراف‌ها",
                goal: "استفاده درست از سرفصل‌ها و متن‌ها",
                intro: "برای ساختار دهی محتوای متنی از h1 تا h6 و برای متن‌های عادی از p استفاده می‌کنیم.",
                code: `<h1>عنوان اصلی</h1>
<h2>زیرعنوان</h2>
<p>این متن اصلی صفحه است.</p>`,
                explanation: "h1 مهم‌ترین عنوان و h2 عنوان فرعی است. p برای متنی که در یک بلوک قرار می‌گیرد استفاده می‌شود.",
                result: "ساختار محتوایی صفحه واضح و خوانا می‌شود.",
                exercise: "سه عنوان مختلف با سطوح متفاوت بساز.",
                solution: "از h1، h2 و h3 استفاده کن و برای هر کدام یک متن وارد کن.",
                quiz: [
                    { q: "کدام تگ برای عنوان اصلی مناسب‌تر است؟", options: ["h1", "h3", "p"], answer: 0 },
                    { q: "برای متن عادی از کدام تگ استفاده می‌شود؟", options: ["p", "a", "img"], answer: 0 }
                ]
            },
            {
                title: "لینک‌ها",
                goal: "ایجاد پیوند بین صفحات و منابع",
                intro: "تگ a برای ساخت لینک استفاده می‌شود و href آدرس مقصد را مشخص می‌کند.",
                code: `<a href="https://example.com">بازدید از مثال</a>
<a href="#about">رفتن به بخش درباره ما</a>`,
                explanation: "href آدرس مقصد است و اگر #... باشد به بخش داخل همان صفحه می‌رود.",
                result: "کاربر با کلیک روی لینک، به صفحه یا بخش موردنظر منتقل می‌شود.",
                exercise: "یک لینک به صفحه اصلی یا یک سایت دیگر بساز.",
                solution: "مثلاً <a href=\"https://example.com\">سایت نمونه</a> را اضافه کن.",
                quiz: [
                    { q: "برای ساخت لینک از کدام تگ استفاده می‌شود؟", options: ["<a>", "<img>", "<strong>"], answer: 0 },
                    { q: "href چه کاری انجام می‌دهد؟", options: ["آدرس مقصد را مشخص می‌کند", "رنگ متن را تغییر می‌دهد", "تگ را مخفی می‌کند"], answer: 0 }
                ]
            },
            {
                title: "تصاویر و ویژگی alt",
                goal: "اضافه کردن تصویر و درک نقش alt",
                intro: "img برای نمایش تصویر است و alt متن جایگزین برای افرادی است که تصویر را نمی‌بینند.",
                code: `<img src="https://example.com/image.jpg" alt="درباره برنامه‌نویسی" width="300" />`,
                explanation: "src مسیر تصویر و alt توضیحی کوتاه برای دسترس‌پذیری است.",
                result: "تصویر در صفحه نمایش داده می‌شود و برای کاربران کم‌ بینا هم قابل فهم است.",
                exercise: "یک تصویر با متن alt مناسب اضافه کن.",
                solution: "در img src را با مسیر تصویر و alt را با توضیح مناسب پر کن.",
                quiz: [
                    { q: "ویژگی alt برای چیست؟", options: ["توضیح متن جایگزین تصویر", "تغییر رنگ", "افزودن لینک"], answer: 0 },
                    { q: "کدام تگ برای تصویر استفاده می‌شود؟", options: ["<img>", "<picture>", "<video>"], answer: 0 }
                ]
            }
        ]
    },
    css: {
        id: "css",
        title: "آموزش CSS",
        level: "مقدماتی",
        lessonCount: 24,
        description: "رنگ، فاصله، چیدمان و واکنش‌گرا کردن صفحات را با CSS یاد بگیر.",
        lessons: [{
                title: "آشنایی با CSS",
                goal: "درک نقش CSS در زیباتر کردن صفحه",
                intro: "CSS برای تنظیم ظاهر عناصر HTML استفاده می‌شود مثل رنگ، اندازه و فاصله.",
                code: `p {
  color: blue;
  font-size: 18px;
}`,
                explanation: "p انتخاب‌کننده‌ای است که همه پاراگراف‌ها را انتخاب می‌کند. color و font-size ویژگی‌ها هستند.",
                result: "تمام پاراگراف‌ها با رنگ آبی و اندازه ۱۸ پیکسل نمایش داده می‌شوند.",
                exercise: "یک قانون CSS بنویس که رنگ h1 را قرمز کند.",
                solution: "h1 { color: red; }",
                quiz: [
                    { q: "CSS برای چه چیزی استفاده می‌شود؟", options: ["ساختار صفحه", "ظاهر و استایل صفحه", "داده‌ها"], answer: 1 },
                    { q: "در CSS نام انتخاب‌کننده چیست؟", options: ["h1", "color", "font-size"], answer: 0 }
                ]
            },
            {
                title: "روش‌های اتصال CSS",
                goal: "یادگیری سه روش اصلی اعمال استایل",
                intro: "CSS را می‌توان داخل HTML، در تگ style یا در فایل جداگانه اعمال کرد. فایل جداگانه بهتر است.",
                code: `<link rel="stylesheet" href="style.css">`,
                explanation: "این خط، فایل CSS را به صفحه متصل می‌کند و سبک‌های آن را اعمال می‌کند.",
                result: "استایل‌های صفحه از فایل style.css لود می‌شوند.",
                exercise: "یک فایل CSS به یک صفحه HTML وصل کن.",
                solution: "در head از <link rel=\"stylesheet\" href=\"style.css\"> استفاده کن.",
                quiz: [
                    { q: "بهترین روش برای اتصال CSS چیست؟", options: ["فایل جداگانه", "فقط inline", "فقط style"], answer: 0 },
                    { q: "تگ مورد استفاده برای اتصال فایل CSS چیست؟", options: ["<link>", "<script>", "<img>"], answer: 0 }
                ]
            }
        ]
    },
    javascript: {
        id: "javascript",
        title: "آموزش JavaScript",
        level: "پیشرفته",
        lessonCount: 30,
        description: "با منطق برنامه‌نویسی، DOM، رویدادها و ابزارهای واقعی وب کار را شروع کن.",
        lessons: [{
                title: "JavaScript چیست؟",
                goal: "درک اهمیت JavaScript در وب",
                intro: "JavaScript زبان برنامه‌نویسی صفحه است که به تعامل، اعتبارسنجی و تغییر محتوا کمک می‌کند.",
                code: `console.log("سلام از JavaScript");`,
                explanation: "این دستور پیام را در کنسول مرورگر نمایش می‌دهد.",
                result: "با اجرای کد، پیامی در ابزار توسعه مرورگر دیده می‌شود.",
                exercise: "یک پیام خوشامدگویی در console بنویس.",
                solution: "console.log(\"سلام دنیا\");",
                quiz: [
                    { q: "JavaScript برای چه کاری استفاده می‌شود؟", options: ["ساختار HTML", "تغییر رفتار صفحه", "تنظیم فونت"], answer: 1 },
                    { q: "کدام دستور پیام را چاپ می‌کند؟", options: ["console.log()", "document.write()", "alert()"], answer: 0 }
                ]
            },
            {
                title: "متغیرها",
                goal: "ذخیره‌سازی داده در متغیر",
                intro: "متغیرها برای نگه‌داری مقادیر مانند متن و عدد در برنامه استفاده می‌شوند.",
                code: `const name = "رضا";
let age = 25;`,
                explanation: "const مقدار ثابت دارد و let مقدار قابل تغییر است.",
                result: "داده‌ها در حافظه برنامه نگهداری می‌شوند و بعداً می‌توان از آن‌ها استفاده کرد.",
                exercise: "دو متغیر برای نام و سن تعریف کن.",
                solution: "const name = \"سارا\"; let age = 20;",
                quiz: [
                    { q: "const برای چیست؟", options: ["مقدار ثابت", "تغییرپذیر", "تگ HTML"], answer: 0 },
                    { q: "let چه تفاوتی دارد؟", options: ["قابل تغییر است", "فقط برای رشته", "هیچ تفاوتی ندارد"], answer: 0 }
                ]
            }
        ]
    }
};

const QUIZ_DATA = {
    html: {
        title: "آزمون HTML",
        questions: [{
                q: "HTML برای چه کاری استفاده می‌شود؟",
                options: ["طراحی رنگ و فاصله‌ها", "تعریف ساختار محتوای صفحه", "مدیریت پایگاه داده"],
                answer: 1
            },
            {
                q: "کدام تگ برای ایجاد لینک استفاده می‌شود؟",
                options: ["<linktext>", "<href>", "<a>"],
                answer: 2
            },
            {
                q: "کدام ویژگی متن جایگزین تصویر را مشخص می‌کند؟",
                options: ["alt", "href", "srcset"],
                answer: 0
            }
        ]
    },
    css: {
        title: "آزمون CSS",
        questions: [{
                q: "CSS برای چه چیزی به‌کار می‌رود؟",
                options: ["ساختار صفحه", "ظاهر و استایل صفحه", "بازیابی داده"],
                answer: 1
            },
            {
                q: "روش درست اتصال CSS به HTML چیست؟",
                options: ["<script src=\"style.css\">", "<link rel=\"stylesheet\" href=\"style.css\">", "<css>"],
                answer: 1
            },
            {
                q: "کدام گزینه انتخاب‌کننده مناسب برای تگ h1 است؟",
                options: [".h1", "#h1", "h1"],
                answer: 2
            }
        ]
    },
    javascript: {
        title: "آزمون JavaScript",
        questions: [{
                q: "برای ذخیره مقدار ثابت از کدام کلمه کلیدی استفاده می‌شود؟",
                options: ["let", "const", "var"],
                answer: 1
            },
            {
                q: "برای چاپ پیام در کنسول از کدام دستور استفاده می‌شود؟",
                options: ["console.log()", "print()", "document.write()"],
                answer: 0
            },
            {
                q: "کدام گزینه صحیح برای شرط if است؟",
                options: ["if (x) { }", "when (x) { }", "loop (x) { }"],
                answer: 0
            }
        ]
    }
};

const STORAGE_KEY = "web-learning-progress-v1";

function safeParseJSON(rawValue) {
    try {
        return JSON.parse(rawValue);
    } catch (error) {
        return null;
    }
}

function getProgressState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        const parsed = safeParseJSON(saved || "null");
        if (!parsed || typeof parsed !== "object") {
            return {
                completedLessons: {},
                lastCourse: "html",
                lastLesson: null,
                bestScores: {}
            };
        }

        return {
            completedLessons: parsed.completedLessons || {},
            lastCourse: parsed.lastCourse || "html",
            lastLesson: parsed.lastLesson || null,
            bestScores: parsed.bestScores || {}
        };
    } catch (error) {
        return {
            completedLessons: {},
            lastCourse: "html",
            lastLesson: null,
            bestScores: {}
        };
    }
}

function saveProgressState(state) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
        console.warn("ذخیره‌سازی پیشرفت با خطا مواجه شد:", error);
    }
}

function formatCourseCard(course) {
    return `
    <article class="course-card ${course.id}-card">
      <div class="course-icon">${course.id === "html" ? "&lt;/&gt;" : course.id === "css" ? "#" : "JS"}</div>
      <span class="course-level">${course.level}</span>
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <div class="course-meta">
        <span>${course.lessonCount} درس</span>
        <span>همراه تمرین</span>
      </div>
      <button class="btn ${course.id === "html" || course.id === "css" ? "btn-primary" : "btn-outline"}" type="button" data-course="${course.id}">
        ${course.id === "html" || course.id === "css" ? "شروع دوره" : "معرفی دوره"}
      </button>
    </article>
  `;
}

function renderCourses() {
    const courseGrid = document.getElementById("courseGrid");
    if (!courseGrid) return;

    const courses = Object.values(COURSE_DATA);
    courseGrid.innerHTML = courses.map(formatCourseCard).join("");

    courseGrid.querySelectorAll("[data-course]").forEach((button) => {
        button.addEventListener("click", () => {
            const courseKey = button.getAttribute("data-course");
            showCourse(courseKey);
        });
    });
}

function renderLessonList(courseKey) {
    const course = COURSE_DATA[courseKey];
    if (!course) return "";

    const state = getProgressState();
    const completed = state.completedLessons[courseKey] || [];

    return course.lessons
        .map((lesson, index) => {
            const checked = completed.includes(index) ? "checked" : "";
            return `
        <article class="lesson-card" data-lesson-index="${index}">
          <span class="lesson-number">درس ${index + 1}</span>
          <h3>${lesson.title}</h3>
          <p>${lesson.intro}</p>
          <div class="lesson-meta">
            <span>هدف: ${lesson.goal}</span>
          </div>
          <pre><code>${escapeHtml(lesson.code)}</code></pre>
          <div class="lesson-breakdown">
            <p><strong>توضیح:</strong> ${lesson.explanation}</p>
            <p><strong>نتیجه مورد انتظار:</strong> ${lesson.result}</p>
            <p><strong>تمرین:</strong> ${lesson.exercise}</p>
            <p><strong>راهنمای حل:</strong> ${lesson.solution}</p>
          </div>
          <label class="lesson-check">
            <input type="checkbox" data-complete-lesson="${courseKey}" data-lesson-index="${index}" ${checked} />
            تکمیل شد
          </label>
        </article>
      `;
        })
        .join("");
}

function renderCourseDetail(courseKey) {
    const detail = document.getElementById("courseDetailContent");
    const course = COURSE_DATA[courseKey];
    if (!detail || !course) return;

    detail.innerHTML = `
    <div class="course-header">
      <span class="eyebrow">${course.level}</span>
      <h2>${course.title}</h2>
      <p>${course.description}</p>
    </div>
    <div class="lesson-list">
      ${renderLessonList(courseKey)}
    </div>
    <div class="course-footer">
      <button class="btn btn-primary" type="button" data-quiz-course="${courseKey}">رفتن به آزمون</button>
    </div>
  `;

    const courseDetailSection = document.getElementById("courseDetail");
    if (courseDetailSection) courseDetailSection.hidden = false;

    const lessonCheckboxes = detail.querySelectorAll("[data-complete-lesson]");
    lessonCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            const selectedCourse = checkbox.getAttribute("data-complete-lesson");
            const lessonIndex = Number(checkbox.getAttribute("data-lesson-index"));
            updateLessonProgress(selectedCourse, lessonIndex, checkbox.checked);
        });
    });

    const quizButton = detail.querySelector("[data-quiz-course]");
    if (quizButton) {
        quizButton.addEventListener("click", () => {
            renderQuiz(courseKey);
            document.getElementById("quiz") ? .scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }
}

function updateLessonProgress(courseKey, lessonIndex, isCompleted) {
    const state = getProgressState();
    const completedList = state.completedLessons[courseKey] || [];
    const list = new Set(completedList);

    if (isCompleted) {
        list.add(lessonIndex);
    } else {
        list.delete(lessonIndex);
    }

    state.completedLessons[courseKey] = [...list].sort((a, b) => a - b);
    state.lastCourse = courseKey;
    state.lastLesson = lessonIndex;
    saveProgressState(state);
}

function showCourse(courseKey) {
    const coursesSection = document.getElementById("courses");
    const detailSection = document.getElementById("courseDetail");
    const practiceSection = document.getElementById("practice");
    const quizSection = document.getElementById("quiz");

    if (coursesSection) coursesSection.hidden = false;
    if (detailSection) detailSection.hidden = true;
    if (practiceSection) practiceSection.hidden = false;
    if (quizSection) quizSection.hidden = false;

    if (!courseKey || courseKey === "all") {
        window.location.hash = "courses";
        if (document.getElementById("courseDetailContent")) {
            document.getElementById("courseDetailContent").innerHTML = "";
        }
        return;
    }

    if (COURSE_DATA[courseKey]) {
        renderCourseDetail(courseKey);
        const detailSectionVisible = document.getElementById("courseDetail");
        if (detailSectionVisible) detailSectionVisible.hidden = false;
        if (coursesSection) coursesSection.hidden = false;
        window.location.hash = `#courseDetail`;
        document.getElementById("courseDetail") ? .scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        window.location.hash = "courses";
    }
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function renderQuiz(courseKey) {
    const quizPanel = document.getElementById("quizPanel");
    if (!quizPanel || !QUIZ_DATA[courseKey]) return;

    const quiz = QUIZ_DATA[courseKey];
    const progress = getProgressState();
    const bestScore = progress.bestScores[courseKey] || 0;

    quizPanel.innerHTML = `
    <div class="quiz-box">
      <div class="quiz-header">
        <h3>${quiz.title}</h3>
        <span>بهترین نمره: ${bestScore}/${quiz.questions.length}</span>
      </div>
      <form id="courseQuizForm" data-course-quiz="${courseKey}">
        ${quiz.questions
          .map(
            (item, index) => `
              <fieldset class="quiz-question">
                <legend>${index + 1}. ${item.q}</legend>
                ${item.options
                  .map(
                    (option, optionIndex) => `
                      <label>
                        <input type="radio" name="q${index}" value="${optionIndex}" required />
                        ${option}
                      </label>
                    `
                  )
                  .join("")}
              </fieldset>
            `
          )
          .join("")}
        <div class="editor-actions">
          <button class="btn btn-primary" type="submit">بررسی پاسخ‌ها</button>
          <button class="btn btn-outline" type="button" id="resetQuizButton">شروع دوباره</button>
        </div>
        <p id="quizResult" class="quiz-result" role="status" aria-live="polite" hidden></p>
      </form>
    </div>
  `;

  const form = document.getElementById("courseQuizForm");
  const resultBox = document.getElementById("quizResult");
  const resetButton = document.getElementById("resetQuizButton");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const questions = quiz.questions;
    let correctCount = 0;

    questions.forEach((item, index) => {
      const selected = form.querySelector(`input[name="q${index}"]:checked`);
      if (selected && Number(selected.value) === item.answer) {
        correctCount += 1;
      }
    });

    const percentage = Math.round((correctCount / questions.length) * 100);
    const state = getProgressState();
    const previousBest = state.bestScores[courseKey] || 0;
    state.bestScores[courseKey] = Math.max(previousBest, correctCount);
    saveProgressState(state);

    if (resultBox) {
      resultBox.hidden = false;
      resultBox.textContent = `نتیجه: ${correctCount} از ${questions.length} پاسخ درست. (${percentage}%)`;
    }

    const messageContainer = document.createElement("p");
    messageContainer.className = "quiz-summary";
    messageContainer.textContent = correctCount === questions.length
      ? "عالی! همه پاسخ‌ها درست هستند."
      : "به تمرین و مرور درس‌ها ادامه بده.";

    const existingSummary = form.querySelector(".quiz-summary");
    if (existingSummary) existingSummary.remove();
    resultBox?.after(messageContainer);

    const scoreText = document.querySelector(".quiz-header span");
    if (scoreText) scoreText.textContent = `بهترین نمره: ${Math.max(previousBest, correctCount)}/${questions.length}`;
  });

  resetButton?.addEventListener("click", () => {
    form.reset();
    const result = document.getElementById("quizResult");
    if (result) {
      result.hidden = true;
      result.textContent = "";
    }
    const summary = form.querySelector(".quiz-summary");
    if (summary) summary.remove();
  });
}

function initPracticeArea() {
  const htmlInput = document.getElementById("htmlCode");
  const cssInput = document.getElementById("cssCode");
  const preview = document.getElementById("preview");
  const runButton = document.getElementById("runCode");
  const resetButton = document.getElementById("resetCode");
  const previewStatus = document.querySelector(".preview-status");

  if (!htmlInput || !cssInput || !preview) return;

  const initialHTML = htmlInput.value;
  const initialCSS = cssInput.value;

  function runCode() {
    const htmlCode = htmlInput.value;
    const cssCode = cssInput.value;
    const safePreview = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        font-family: "Vazirmatn", Tahoma, Arial, sans-serif;
        line-height: 1.9;
        padding: 16px;
        color: #172033;
        background: #fff;
      }
      ${cssCode}
    </style>
  </head>
  <body>
    ${htmlCode}
  </body>
</html>`;

    preview.srcdoc = safePreview;
    if (previewStatus) previewStatus.textContent = "کد اجرا شد.";
  }

  runButton?.addEventListener("click", runCode);
  resetButton?.addEventListener("click", () => {
    htmlInput.value = initialHTML;
    cssInput.value = initialCSS;
    runCode();
    if (previewStatus) previewStatus.textContent = "کد به حالت اولیه برگشت.";
  });

  runCode();
}

function initTheme() {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("web-learning-theme");

  if (!themeToggle) return;

  if (savedTheme === "dark") {
    root.classList.add("dark-theme");
    themeToggle.textContent = "حالت روشن";
  }

  themeToggle.addEventListener("click", () => {
    root.classList.toggle("dark-theme");
    const isDark = root.classList.contains("dark-theme");
    localStorage.setItem("web-learning-theme", isDark ? "dark" : "light");
    themeToggle.textContent = isDark ? "حالت روشن" : "حالت تاریک";
  });
}

function initBackButtons() {
  document.querySelectorAll("[data-back-to-courses]").forEach((button) => {
    button.addEventListener("click", () => {
      showCourse("all");
    });
  });

  document.querySelectorAll("[data-course]").forEach((button) => {
    if (button.matches(".btn-secondary")) {
      button.addEventListener("click", () => {
        const courseKey = button.getAttribute("data-course");
        if (courseKey) showCourse(courseKey);
      });
    }
  });
}

function initYear() {
  const yearElement = document.getElementById("currentYear");
  if (yearElement) yearElement.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderCourses();
  initPracticeArea();
  renderQuiz("html");
  initTheme();
  initBackButtons();
  initYear();

  const defaultState = getProgressState();
  if (defaultState.lastCourse && COURSE_DATA[defaultState.lastCourse]) {
    showCourse(defaultState.lastCourse);
  }
});
