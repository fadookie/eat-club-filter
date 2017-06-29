document.addEventListener("DOMContentLoaded", () => { 
  const checkboxes = document.querySelectorAll('input[name="filter"]');

  checkboxes.forEach((checkbox) => {
    checkbox.onchange = () => {
      console.log('checkboxes', checkboxes);
      console.log('checkbox', checkbox);
    };
  });
});
