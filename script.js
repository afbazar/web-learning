
document.addEventListener("DOMContentLoaded", () => {
  console.log("آکادمی کدنویسی آماده است.");

  document.querySelectorAll(".course a").forEach((link) => {
    link.addEventListener("click", () => {
      console.log("مسیر یادگیری انتخاب شد:", link.textContent.trim());
    });
  });
});
