const navigationMount = document.querySelector("[data-site-nav]");

if (navigationMount) {
  navigationMount.innerHTML = `
    <div class="nav">
      <a class="logo" href="index.html" aria-label="Nnamdi Azikiwe University home">
        <img src="../images/logo.png" alt="Nnamdi Azikiwe University">
      </a>
      <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="site-navigation">
        <span></span><span></span><span></span>
      </button>
      <nav class="site-navigation" id="site-navigation" aria-label="Main navigation">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="admission.html">Admission Information</a></li>
        
          <li><a href="new.html">News</a></li>
          <li><a href="signup.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  `;

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  navigationMount.querySelectorAll(".site-navigation a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });

  const menuButton = navigationMount.querySelector(".menu-toggle");
  const siteNavigation = navigationMount.querySelector(".site-navigation");
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    siteNavigation.classList.remove("is-open");
  };

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    siteNavigation.classList.toggle("is-open", !isExpanded);
  });

  siteNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}
