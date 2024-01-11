const referencesItems = document.querySelectorAll('.reference__item .item__title')

const accordionToggle = (e) => {
  e.currentTarget.classList.toggle('active')
  const item = e.currentTarget.nextElementSibling
  if (e.currentTarget.classList.contains('active')) {
    item.style.maxHeight = item.scrollHeight + 'px'
  } else {
    item.style.maxHeight = 0
  }
}

referencesItems.forEach(r => {
  r.addEventListener('click', accordionToggle)
})