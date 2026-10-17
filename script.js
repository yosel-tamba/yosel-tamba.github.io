/* Bootstrap 6 ships as an ES module only, so it cannot be loaded with a
   plain <script src>. We pull it in with a dynamic import instead. That lets
   this file stay a classic script, which means everything keeps working even
   when index.html is opened straight from disk (file://). */
const bootstrapReady = import("bootstrap").catch((error) => {
  console.error("Bootstrap bundle failed to load.", error);
  return null;
});

/* =========================================================
   1. NAVBAR: solid background on scroll
   ========================================================= */
const nav = document.getElementById("mainNav");
const onScrollNav = () => nav.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScrollNav, { passive: true });
onScrollNav();

/* =========================================================
   2. AUTO-UPDATE FOOTER YEAR
   ========================================================= */
document.getElementById("year").textContent = new Date().getFullYear();

/* =========================================================
   3. SMOOTH SCROLL + AUTO-CLOSE MOBILE MENU (Drawer)
   ========================================================= */
const navDrawer = document.getElementById("navMenu");
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", async (e) => {
    const targetId = link.getAttribute("href");
    if (targetId.length < 2) return; // ignore href="#"
    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    const offset = 76; // navbar height
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });

    // Close the mobile drawer if it is open
    if (navDrawer && navDrawer.open) {
      const bootstrap = await bootstrapReady;
      if (bootstrap) {
        bootstrap.Drawer.getOrCreateInstance(navDrawer).hide();
      }
    }
  });
});

/* =========================================================
   4. ACTIVE NAV LINK BASED ON THE VISIBLE SECTION
   ========================================================= */
const sections = document.querySelectorAll("section[id], header[id]");
const navLinks = document.querySelectorAll(".navbar .nav-link");
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute("id");
      navLinks.forEach((l) =>
        l.classList.toggle("active", l.getAttribute("href") === "#" + id),
      );
    });
  },
  { rootMargin: "-45% 0px -50% 0px" },
);
sections.forEach((s) => spy.observe(s));

/* =========================================================
   5. SCROLL REVEAL ANIMATION
   ========================================================= */
const revealer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => revealer.observe(el));
