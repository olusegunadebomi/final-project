let faq = document.getElementsByClassName("faq-box-contents");

for (let i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");
    let faqAnswer = this.nextElementSibling;

    if (faqAnswer.style.display === "block") {
      faqAnswer.style.display = "none";
    } else {
      faqAnswer.style.display = "block";
    }
  });

}