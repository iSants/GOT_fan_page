document.addEventListener('DOMContentLoaded', () => {

  // ===== ABOUT TABS =====
  const aboutButtons = document.querySelectorAll('.about__tab__button');
  const aboutTabs = document.querySelectorAll('.about__content');

  aboutButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.tabButton;

      aboutButtons.forEach(b => b.classList.remove('about__tab__button--is--active'));
      aboutTabs.forEach(tab => tab.classList.remove('about__content--is--active'));

      button.classList.add('about__tab__button--is--active');
      document
        .querySelector(`[data-tab-id="${target}"]`)
        .classList.add('about__content--is--active');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {

  // ===== HOUSES TABS =====
  const houseButtons = document.querySelectorAll('.houses__tab__button');
  const houseTabs = document.querySelectorAll('.houses__content');
  const housesSection = document.querySelector('.houses');

  houseButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.tabButton;

      houseButtons.forEach(b => b.classList.remove('houses__tab__button--is--active'));
      houseTabs.forEach(tab => tab.classList.remove('houses__content--is--active'));

      housesSection.classList.remove(
        'houses--stark',
        'houses--lannister',
        'houses--targaryen'
      );

      button.classList.add('houses__tab__button--is--active');
      document
        .querySelector(`[data-tab-id="${target}"]`)
        .classList.add('houses__content--is--active');

      housesSection.classList.add(`houses--${target}`);
    });
  });
});
