
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // سال جاری در پایین سایت
  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // منوی موبایل
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "بستن منو" : "باز کردن منو"
      );

      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "باز کردن منو");
        menuToggle.textContent = "☰";
      });
    });
  }

  // محیط تمرین HTML و CSS
  const htmlCode = document.getElementById("htmlCode");
  const cssCode = document.getElementById("cssCode");
  const preview = document.getElementById("preview");
  const runButton = document.getElementById("runCode");
  const resetButton = document.getElementById("resetCode");
  const previewStatus = document.querySelector(".preview-status");

  const initialHTML = htmlCode ? htmlCode.value : "";
  const initialCSS = cssCode ? cssCode.value : "";

  function runCode() {
    if (!htmlCode || !cssCode || !preview) return;

    const html = htmlCode.value;
    const css = cssCode.value;

    // جلوگیری از شکستن تگ style اصلی پیش‌نمایش
    // با تبدیل علامت‌های < و > در CSS ورودی
    const safeCSS = css
      .replace(/</g, "\\3C ")
      .replace(/>/g, "\\3E ");

    const output = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>${safeCSS}</style>
</head>
<body>${html}</body>
</html>`;

    preview.srcdoc = output;

    if (previewStatus) {
      previewStatus.textContent = "اجرا شد";
    }
  }

  if (runButton) {
    runButton.addEventListener("click", runCode);
  }

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      if (htmlCode) htmlCode.value = initialHTML;
      if (cssCode) cssCode.value = initialCSS;

      runCode();
    });
  }

  if (htmlCode && cssCode && preview) {
    runCode();
  }

  // آزمون HTML
  const quizForm = document.getElementById("quizForm");
  const quizResult = document.getElementById("quizResult");
  const resetQuiz = document.getElementById("resetQuiz");

  const answers = {
    q1: "b",
    q2: "c",
    q3: "a"
  };

  if (quizForm && quizResult) {
    quizForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let score = 0;
      const total = Object.keys(answers).length;

      for (const [question, correctAnswer] of Object.entries(answers)) {
        const selected = quizForm.querySelector(
          `input[name="${question}"]:checked`
        );

        if (selected && selected.value === correctAnswer) {
          score++;
        }
      }

      quizResult.hidden = false;
      quizResult.textContent =
        `نتیجه شما: ${score} از ${total} پاسخ صحیح. ` +
        (score === total
          ? "عالی! همه پاسخ‌ها درست هستند."
          : "پاسخ‌ها را مرور کن و دوباره تلاش کن.");

      quizResult.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    });
  }

  if (resetQuiz && quizForm && quizResult) {
    resetQuiz.addEventListener("click", () => {
      quizForm.reset();
      quizResult.hidden = true;
      quizResult.textContent = "";
    });
  }
});
