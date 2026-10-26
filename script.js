```javascript
"use strict";

/* =========================
   انتخاب دوره و نمایش درس‌ها
========================= */

function showCourse(course) {
  const courses = document.getElementById("courses");
  const htmlLessons = document.getElementById("html-lessons");
  const cssLessons = document.getElementById("css-lessons");
  const comingSoon = document.getElementById("coming-soon");

  const comingTitle = document.getElementById("coming-title");
  const comingDescription = document.getElementById("coming-description");

  if (!courses || !htmlLessons || !cssLessons) {
    return;
  }

  // ابتدا تمام صفحات دوره را مخفی می‌کنیم.
  courses.hidden = true;
  htmlLessons.hidden = true;
  cssLessons.hidden = true;

  if (comingSoon) {
    comingSoon.hidden = true;
  }

  let target = courses;

  if (course === "html") {
    htmlLessons.hidden = false;
    target = htmlLessons;
  } else if (course === "css") {
    cssLessons.hidden = false;
    target = cssLessons;
  } else if (course === "javascript" || course === "django") {
    if (comingSoon) {
      comingSoon.hidden = false;
      target = comingSoon;

      if (course === "javascript") {
        comingTitle.textContent = "دوره JavaScript";
        comingDescription.textContent =
          "درس‌های JavaScript در مرحله بعدی به آکادمی اضافه می‌شوند.";
      } else {
        comingTitle.textContent = "دوره Python و Django";
        comingDescription.textContent =
          "برای ساخت برنامه‌های Django به یک محیط پشتیبان سمت سرور نیاز داریم.";
      }
    } else {
      courses.hidden = false;
      target = courses;
    }
  } else {
    // بازگشت به فهرست دوره‌ها
    courses.hidden = false;
    target = courses;
  }

  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

/* =========================
   محیط اجرای HTML و CSS
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
    if (!htmlInput || !cssInput || !preview) {
      return;
    }

    const htmlCode = htmlInput.value;
    const cssCode = cssInput.value;

    const output = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vazirmatn@33.0.3/Vazirmatn-font-face.min.css">
<style>
body {
  font-family: "Vazirmatn", Tahoma, sans-serif;
  line-height: 1.9;
  padding: 16px;
  color: #1e293b;
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
      previewStatus.textContent = "کد اجرا شد";
    }
  }

  if (runButton) {
    runButton.addEventListener("click", runCode);
  }

  if (resetButton) {
    resetButton.addEventListener("click", function () {
      if (htmlInput) {
        htmlInput.value = initialHTML;
      }

      if (cssInput) {
        cssInput.value = initialCSS;
      }

      runCode();

      if (previewStatus) {
        previewStatus.textContent = "کد بازنشانی شد";
      }
    });
  }

  // اجرای اولیه نمونه کد
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
          `به همه سؤال‌ها پاسخ نداده‌ای. پاسخ درست فعلی: ${score} از 3.`;
      } else {
        quizResult.textContent =
          `نتیجه آزمون: ${score} از 3 پاسخ درست.`;

        if (score === 3) {
          quizResult.textContent += " همه پاسخ‌ها درست هستند.";
        } else {
          quizResult.textContent += " پاسخ‌ها را مرور کن و دوباره تلاش کن.";
        }
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
     سال جاری در صورت وجود
  ========================= */

  const yearElement = document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
```
