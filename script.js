
"use strict";

/* =========================
   مدیریت دوره‌ها
========================= */

function showCourse(course) {
  const courses = document.getElementById("courses");
  const htmlLessons = document.getElementById("html-lessons");
  const cssLessons = document.getElementById("css-lessons");
  const comingSoon = document.getElementById("coming-soon");

  const comingTitle = document.getElementById("coming-title");
  const comingDescription = document.getElementById("coming-description");

  // ابتدا تمام بخش‌های دوره را مخفی کن.
  if (courses) courses.hidden = true;
  if (htmlLessons) htmlLessons.hidden = true;
  if (cssLessons) cssLessons.hidden = true;
  if (comingSoon) comingSoon.hidden = true;

  let target = courses;

  if (course === "html" && htmlLessons) {
    htmlLessons.hidden = false;
    target = htmlLessons;
  } else if (course === "css" && cssLessons) {
    cssLessons.hidden = false;
    target = cssLessons;
  } else if (
    (course === "javascript" || course === "django") &&
    comingSoon
  ) {
    comingSoon.hidden = false;
    target = comingSoon;

    if (comingTitle && comingDescription) {
      if (course === "javascript") {
        comingTitle.textContent = "دوره JavaScript";
        comingDescription.textContent =
          "در این مسیر با متغیرها، شرط‌ها، حلقه‌ها، توابع و تعامل با صفحات وب آشنا می‌شوی.";
      } else {
        comingTitle.textContent = "دوره Python و Django";
        comingDescription.textContent =
          "در این مسیر با Python و ساخت وب‌سایت‌های پویا با Django آشنا می‌شوی.";
      }
    }
  } else {
    if (courses) courses.hidden = false;
    target = courses;
  }

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

// تابع برای دکمه‌های onclick در HTML
window.showCourse = showCourse;


/* =========================
   اجرای محیط تمرین
========================= */

document.addEventListener("DOMContentLoaded", function () {
  const htmlInput = document.getElementById("htmlCode");
  const cssInput = document.getElementById("cssCode");
  const preview = document.getElementById("preview");
  const runButton = document.getElementById("runCode");
  const resetButton = document.getElementById("resetCode");
  const previewStatus = document.querySelector(".preview-status");

  const initialHTML = htmlInput ? htmlInput.value : "";
  const initialCSS = cssInput ? cssInput.value : "";

  function runCode() {
    if (!htmlInput || !cssInput || !preview) return;

    const htmlCode = htmlInput.value;
    const cssCode = cssInput.value;

    const output = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body {
  font-family: Tahoma, sans-serif;
  line-height: 1.9;
  padding: 16px;
  color: #172033;
}
${cssCode}
</style>
</head>
<body>
${htmlCode}
</body>
</html>`;

    preview.srcdoc = output;

    if (previewStatus) {
      previewStatus.textContent = "کد اجرا شد.";
    }
  }

  if (runButton) {
    runButton.addEventListener("click", runCode);
  }

  if (resetButton) {
    resetButton.addEventListener("click", function () {
      if (htmlInput) htmlInput.value = initialHTML;
      if (cssInput) cssInput.value = initialCSS;

      runCode();

      if (previewStatus) {
        previewStatus.textContent = "کد به حالت اولیه برگشت.";
      }
    });
  }

  // نمایش نمونه اولیه
  if (htmlInput && cssInput && preview) {
    runCode();

    if (previewStatus) {
      previewStatus.textContent = "آماده اجرا";
    }
  }


  /* =========================
     آزمون HTML
  ========================= */

  const quizForm = document.getElementById("quizForm");
  const quizResult = document.getElementById("quizResult");
  const resetQuizButton = document.getElementById("resetQuiz");

  const answers = {
    q1: "b",
    q2: "c",
    q3: "a"
  };

  if (quizForm && quizResult) {
    quizForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let score = 0;
      let unanswered = 0;
      const total = Object.keys(answers).length;

      Object.keys(answers).forEach(function (question) {
        const selected = quizForm.querySelector(
          `input[name="${question}"]:checked`
        );

        if (!selected) {
          unanswered++;
        } else if (selected.value === answers[question]) {
          score++;
        }
      });

      quizResult.hidden = false;

      if (unanswered > 0) {
        quizResult.textContent =
          `هنوز به همه سؤال‌ها پاسخ نداده‌ای. پاسخ درست: ${score} از ${total}.`;
        return;
      }

      quizResult.textContent =
        `نتیجه آزمون: ${score} از ${total} پاسخ درست.`;

      if (score === total) {
        quizResult.textContent += " تمام پاسخ‌ها درست هستند.";
      } else {
        quizResult.textContent += " پاسخ‌های اشتباه را مرور کن و دوباره تلاش کن.";
      }
    });
  }

  if (resetQuizButton && quizForm && quizResult) {
    resetQuizButton.addEventListener("click", function () {
      quizForm.reset();
      quizResult.hidden = true;
      quizResult.textContent = "";
    });
  }


  /* =========================
     دکمه‌های بازگشت
  ========================= */

  document.querySelectorAll("[data-back-to-courses]").forEach(function (button) {
    button.addEventListener("click", function () {
      showCourse("all");
    });
  });


  /* =========================
     سال جاری در پابرگ
  ========================= */

  const yearElement = document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
