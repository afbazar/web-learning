
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const htmlInput = document.getElementById("htmlCode");
  const cssInput = document.getElementById("cssCode");
  const preview = document.getElementById("preview");
  const runButton = document.getElementById("runCode");
  const resetButton = document.getElementById("resetCode");
  const status = document.querySelector(".preview-status");

  const initialHTML = htmlInput ? htmlInput.value : "";
  const initialCSS = cssInput ? cssInput.value : "";

  function runCode() {
    if (!htmlInput || !cssInput || !preview) {
      console.error("عناصر محیط تمرین پیدا نشدند.");
      if (status) status.textContent = "خطا: عناصر تمرین پیدا نشدند";
      return;
    }

    const html = htmlInput.value;
    const css = cssInput.value;

    const page = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vazirmatn@33.0.3/Vazirmatn-font-face.min.css">
<style>
body {
  font-family: "Vazirmatn", Tahoma, sans-serif;
  padding: 20px;
  line-height: 1.8;
}
${css}
</style>
</head>
<body>
${html}
</body>
</html>`;

    preview.srcdoc = page;

    if (status) {
      status.textContent = "در حال اجرا...";
    }

    preview.onload = function () {
      if (status) status.textContent = "اجرا شد";
    };
  }

  if (runButton) {
    runButton.addEventListener("click", runCode);
  } else {
    console.error("دکمه runCode در HTML پیدا نشد.");
  }

  if (resetButton) {
    resetButton.addEventListener("click", function () {
      htmlInput.value = initialHTML;
      cssInput.value = initialCSS;
      runCode();
    });
  }

  if (htmlInput && cssInput && preview) {
    runCode();
  }

  // منوی موبایل
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      const open = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // سال جاری
  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();

  // آزمون
  const quiz = document.getElementById("quizForm");
  const result = document.getElementById("quizResult");
  const resetQuiz = document.getElementById("resetQuiz");

  if (quiz && result) {
    quiz.addEventListener("submit", function (event) {
      event.preventDefault();

      const answers = { q1: "b", q2: "c", q3: "a" };
      let score = 0;

      Object.keys(answers).forEach(function (question) {
        const selected = quiz.querySelector(
          'input[name="' + question + '"]:checked'
        );

        if (selected && selected.value === answers[question]) {
          score++;
        }
      });

      result.hidden = false;
      result.textContent =
        "نتیجه: " + score + " از 3 پاسخ صحیح. " +
        (score === 3
          ? "همه پاسخ‌ها درست هستند."
          : "درس‌ها را مرور کن و دوباره تلاش کن.");
    });
  }

  if (resetQuiz && quiz && result) {
    resetQuiz.addEventListener("click", function () {
      quiz.reset();
      result.hidden = true;
      result.textContent = "";
    });
  }
});
