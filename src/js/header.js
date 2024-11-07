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
