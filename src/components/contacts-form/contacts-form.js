const component = document.querySelector('.contacts-form')
if (component) {
  component.addEventListener('submit', (e) => {
    e.preventDefault()
    alert('submit')
  })
}