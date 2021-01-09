const smallCups = document.querySelectorAll('.cup-small');
const percentage = document.getElementById('percentage');
const liters = document.querySelector('.liters');
const remained = document.getElementById('remained');

function updateBigcup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${(totalCups - fullCups) / 4}L`;
  }
}

function highlightCups(idx) {
  if (
    smallCups[idx].nextElementSibling &&
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }

  smallCups.forEach((cup, index) => {
    if (index <= idx) {
      cup.classList.add('full');
    } else if (idx === 7) {
      smallCups[idx].classList.remove('full');
    } else {
      cup.classList.remove('full');
    }
  });

  // update big cup
  updateBigcup();
}

smallCups.forEach((smallCup, idx) => {
  smallCup.addEventListener('click', () => highlightCups(idx));
});
