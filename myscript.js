/* eslint-disable max-len, no-undef */

'use strict';

const filters = ['Vegetarian', 'Vegan']; // These correspond to data-content tag on span.tooltip - Current valid options are 'Vegetarian', 'Vegan', 'Gluten Free', 'Paleo', 'Dairy Free', 'Spicy'

const filterMenu = () => {
  // Should probably walk the tree and filter out options that don't meet all filter criteria, but filtering in ones that match works for now.
  const menuItems = document.querySelectorAll('div.medium-4');
  if (!menuItems || menuItems.length === 0) {
    setTimeout(filterMenu, 1 * 1000);
    return;
  }
  menuItems.forEach((element) => { element.style.display = 'none'; });
  filters.forEach((filter) => {
    document.querySelectorAll(`span[data-content=${filter}]`)
      .forEach((node) => {
        node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'block';
      });
  });
};

filterMenu();
