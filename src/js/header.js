const menuBtn = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const closeButton = document.getElementById('close-button');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

function updateMenu() {
  const menuList = document.querySelector('.menu-list');

  menuList.innerHTML = '';

  if (window.innerWidth >= 1024) {
    menuList.innerHTML = `

    <div class="menu-tablet-block">
        <li><a class="menu-list-item" href="./catalog-page.html">Каталог</a></li>
      <li><a class="menu-list-item" href="#about">Про мене</a></li>
      </div>
       <div class="menu-tablet-block">
      <li><a class="menu-list-item" href="#delivery">Доставка</a></li>
      <li><a class="menu-list-item" href="#contacts">Контакти</a></li>
      </div>

        `;
  } else {
    menuList.innerHTML = `
      <li><a class="menu-list-item" href="#">Бестселлери</a></li>
      <li><a class="menu-list-item" href="#">Каталог</a></li>
      <li><a class="menu-list-item" href="#">Доставка</a></li>
      <li><a class="menu-list-item" href="#">Про мене</a></li>
      `;
  }
}

updateMenu();

window.addEventListener('resize', updateMenu);

// function updateHeader() {
//   const headerNav = document.querySelector('.header-nav');

//   if (window.innerWidth >= 1024) {
//     headerNav.innerHTML = `

//  <ul class="menu-list">
//         <li><a class="menu-list-item" href="#">Бестселлери</a></li>
//         <li><a class="menu-list-item" href="#">Каталог</a></li>
//         <li><a class="menu-list-item" href="#">Доставка</a></li>
//         <li><a class="menu-list-item" href="#">Про мене</a></li>
//       </ul>

// <button class="cart-button" type="button" id="cart-button">
//       <svg class="header-cart">
//         <use href="/assets/images/icons.svg#icon-cart"></use>
//       </svg>
//     </button>

//         `;
//   } else {
//     headerNav.innerHTML = `
//          <button class="menu-button" type="button" id="menu-button">
//       <svg class="burger">
//         <use href="/assets/images/icons.svg#icon-burger"></use>
//       </svg>
//     </button>

//     <button class="cart-button" type="button" id="cart-button">
//       <svg class="header-cart">
//         <use href="/assets/images/icons.svg#icon-cart"></use>
//       </svg>
//     </button>

//     <nav class="menu" id="menu">
//       <button class="close-button" type="button" id="close-button">
//         <svg class="close-icon">
//           <use href="/assets/images/icons.svg#icon-close"></use>
//         </svg>
//       </button>

//       <ul class="menu-list">
//         <li><a class="menu-list-item" href="#">Бестселлери</a></li>
//         <li><a class="menu-list-item" href="#">Каталог</a></li>
//         <li><a class="menu-list-item" href="#">Доставка</a></li>
//         <li><a class="menu-list-item" href="#">Про мене</a></li>
//       </ul>
//       <div class="menu-pics">
//         <p class="menu-text">from Grann with love</p>
//         <picture>
//           <source
//             srcset="
//               ../assets/images/header/mobile-menu-cake@1x.png 1x,
//               ../assets/images/header/mobile-menu-cake@2x.png 2x
//             "
//           />
//           <img
//             src="../assets/images/header/mobile-menu-cake@1x.png"
//             alt="cake"
//             width="206"
//             height="216"
//           />
//         </picture>
//       </div>
//     </nav>
//     `;
//   }
// }

// updateHeader();
// window.addEventListener('resize', updateHeader);
