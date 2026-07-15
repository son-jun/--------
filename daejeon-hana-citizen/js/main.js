/* 대전하나시티즌 (팬/포트폴리오용) - 공통 스크립트 */

document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".site-header");

  // 스크롤 시 헤더를 솔리드(흰 배경)로 전환
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add("solid");
    } else {
      header.classList.remove("solid");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // 서브페이지는 히어로가 짧으므로 항상 솔리드 여지를 두되, 최상단에선 투명 유지
  // (히어로가 있는 페이지는 위 로직만으로 충분)

  // 모바일 메뉴 열기/닫기
  var toggle = document.querySelector(".nav-toggle");
  var mobileMenu = document.querySelector(".mobile-menu");
  var closeBtn = document.querySelector(".mobile-menu .close");

  function openMenu() {
    if (mobileMenu) {
      mobileMenu.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  }
  function closeMenu() {
    if (mobileMenu) {
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  if (toggle) toggle.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }

  // 선수단 포지션 필터 (squad.html 전용)
  var filterBtns = document.querySelectorAll(".filter-bar button");
  var players = document.querySelectorAll(".squad-grid .player");

  if (filterBtns.length && players.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var pos = btn.getAttribute("data-filter");
        filterBtns.forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
        players.forEach(function (p) {
          if (pos === "all" || p.getAttribute("data-pos") === pos) {
            p.classList.remove("hidden");
          } else {
            p.classList.add("hidden");
          }
        });
      });
    });
  }
});
