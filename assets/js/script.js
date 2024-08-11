$(".headerCarousel").owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$(".commentCarousel").owlCarousel({
  loop: true,
  center: true,
  nav: true,
  dots: false,
  
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 1.5,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 1.80,
    },
  },
});
$(".blogCarousel").owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  margin:50,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    900: {
      items: 2,
    },
    992: {
      items: 2,
    },
    1400: {
      items: 3,
    },
  },
});
$(".homeProductCarousel").owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  margin:25,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 1,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});
$(".dtealCarousel").owlCarousel({
  loop: true,
  center: true,
  nav: true,
  dots: false,
  items: 1,
});
// Tüm dropdown'ları seç
const selectDropdowns = document.querySelectorAll(".selectDropdown");

// Her dropdown için aynı işlemleri uygula
selectDropdowns.forEach((selectDropdown) => {
  const select = selectDropdown.querySelector(".select");
  const caret = selectDropdown.querySelector(".caret");
  const menu = selectDropdown.querySelector(".menu");
  const options = selectDropdown.querySelectorAll(".menu li");
  const selected = selectDropdown.querySelector(".selected");

  // Dropdown tıklanınca
  select.addEventListener("click", () => {
    // Önce tüm menüleri kapat
    selectDropdowns.forEach((dropdown) => {
      const dropdownMenu = dropdown.querySelector(".menu");
      const dropdownCaret = dropdown.querySelector(".caret");
      dropdownMenu.classList.remove("menu-open");
      dropdownCaret.classList.remove("caret-rotate");
    });

    // Sonra tıklanan menüyü aç
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  // Seçeneklerden biri seçildiğinde
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.classList.remove("placeholder");
      selected.innerText = option.innerText;
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => option.classList.remove("actives"));
      option.classList.add("actives");
    });
  });
});

function selectDropdown() {
  const menuButton = document.querySelector(
    ".institutionalMenu div:first-child button"
  );
  const menuTarget = document.querySelector(".institutionalMenu ul");

  menuButton.addEventListener("click", () => {
    menuTarget.classList.toggle("menu-open");
  });
}
function fancy() {
  Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options for a specific gallery
  });
  Fancybox.bind('[data-fancybox="video"]', {
    // Your custom options for a specific gallery
  });
}
const menu = document.querySelectorAll(".menuTarget");
const menuActive = document.querySelector(".mobilMenu");
for (var i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", () => {
    menuActive.classList.toggle("menuShow");
  });
}
const dropHoverMenu = document.querySelector(".headerDropMenu");
const dropHoverMenuTarget = document.querySelector(".productLink");
const headerSearch = document.querySelector(".headerSearch");
const activeMenu = document.querySelector(".acitveMenu");


dropHoverMenu.addEventListener("mouseover", () => {
  dropHoverMenuTarget.classList.add("productLinkHover");
});
dropHoverMenu.addEventListener("mouseleave", () => {
  dropHoverMenuTarget.classList.remove("productLinkHover");
});
activeMenu.addEventListener("mouseover", () => {
  headerSearch.classList.add("buttonHover");
});
activeMenu.addEventListener("mouseleave", () => {
  headerSearch.classList.remove("buttonHover");
});

// pagination

const pagination = () => {
  const paginationLinks = document.querySelectorAll(".pagination > a");
  const prevButton = document.querySelector(".pag-prev");
  const nextButton = document.querySelector(".pag-next");
  let currentPageIndex = 0; // İlk sayfa indeksi

  // Önceki butonun tıklanma durumu
  prevButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (currentPageIndex > 0) {
      paginationLinks[currentPageIndex].classList.remove("page-link--current");
      currentPageIndex--;
      paginationLinks[currentPageIndex].classList.add("page-link--current");
    }
  });

  // Sonraki butonun tıklanma durumu
  nextButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (currentPageIndex < paginationLinks.length - 2) {
      paginationLinks[currentPageIndex].classList.remove("page-link--current");
      currentPageIndex++;
      paginationLinks[currentPageIndex].classList.add("page-link--current");
    }
  });

  // Sayfa numarası linklerinin tıklanma durumu
  for (let i = 0; i < paginationLinks.length; i++) {
    paginationLinks[i].addEventListener("click", function (event) {
      event.preventDefault();
      for (let j = 0; j < paginationLinks.length; j++) {
        paginationLinks[j].classList.remove("page-link--current");
      }
      currentPageIndex = i;
      paginationLinks[currentPageIndex].classList.add("page-link--current");
    });
  }
  const lastIndex = paginationLinks.length - 1;
  const secondToLastIndex = paginationLinks.length - 2;

  // Son iki öğeyi al
  const diziRead = paginationLinks[secondToLastIndex];
  const diziWrite = paginationLinks[lastIndex];

  // diziWrite'in içeriğini diziRead'in içeriğiyle değiştir
  diziWrite.innerHTML = diziRead.innerHTML;
};

const toggleProperties = () => {
  const menuTarget1 = document.querySelector("#toggleTarget1");
  const menuTarget2 = document.querySelector("#toggleTarget2");
  const menu1 = document.querySelector("#toggle1");
  const menu2 = document.querySelector("#toggle2");
  menuTarget1.addEventListener("click", () => {
    menuTarget1.classList.add("clrBlue");
    menuTarget2.classList.remove("clrBlue");
    menu1.classList.add("active");
    menu2.classList.remove("active");
  });
  menuTarget2.addEventListener("click", () => {
    menuTarget1.classList.remove("clrBlue");
    menuTarget2.classList.add("clrBlue");
    menu1.classList.remove("active");
    menu2.classList.add("active");
  });
};
