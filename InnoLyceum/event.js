document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.has-submenu').forEach(item => {
    const submenu = item.querySelector('.submenu');

    item.addEventListener('mouseenter', () => {
      submenu.classList.add('visible');
    });
    item.addEventListener('mouseleave', () => {
      submenu.classList.remove('visible');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.has-submenu').forEach(item => {
    const submenu = item.querySelector('.submenu_up');

    item.addEventListener('mouseenter', () => {
      submenu.classList.add('visible');
    });
    item.addEventListener('mouseleave', () => {
      submenu.classList.remove('visible');
    });
  });
});
