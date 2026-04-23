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

  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card_progress");

    cards.forEach(card => {
      const dataBlock = card.querySelector(".how_much_gathered");
      const progressBar = card.querySelector(".gathered_underscore_fill");

      const gathered = parseInt(dataBlock.dataset.gathered, 10);
      const goal = parseInt(dataBlock.dataset.goal, 10);

      if (goal > 0) {
        const percent = Math.min(100, Math.round((gathered / goal) * 100));
        progressBar.style.width = percent + "%";
      }
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".choose_variant_gathered");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const card = button.closest(".sponsorship-card");
      const title = card.querySelector(".sponsorship-card-content_title")?.innerText.trim();
      const goal = card.querySelector(".goal_gathered")?.innerText.trim();

      const variantText = document.querySelector(".paragraph_chosen_variant");
      const goalText = document.querySelector(".goal_number_chosen");

      if (variantText && goalText) {
        variantText.textContent = `Выбран вариант: ${title}`;
        goalText.textContent = goal;
      }

      const formSection = document.getElementById("sponsorship-form");
      formSection.scrollIntoView({ behavior: "smooth" });
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


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form_for_sponsorship");
  const modal = document.getElementById("successModal");
  const variantText = document.querySelector(".paragraph_chosen_variant");
  const goalText = document.querySelector(".goal_number_chosen");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    modal.style.display = "block";
        variantText.textContent = "Выбран вариант:";
    goalText.textContent = "Цель:";
    form.reset();
  });
});
