const modalList = document.querySelectorAll('.modal')

if (modalList.length) {
  const showModal = (name) => {
    const modal = document.querySelector(`.modal-${name}`)
    if (!modal) {
      console.error(`Модальное окно ${name} не найдено`)
      return
    }
    document.body.style.overflow = 'hidden'
    modal.style.display = 'flex'
    setTimeout(() => {
      modal.classList.add('modal--show')
    }, 50)
  }

  const closeModal = (modal) => {
    modal.classList.remove('modal--show')
    setTimeout(() => {
      document.body.style.overflow = ''
      modal.style.display = ''
    }, 300)
  }

  modalList.forEach((modal) => {
    const closeBtn = modal.querySelector('.modal__close')
    closeBtn.addEventListener('click', () => closeModal(modal))

    modal.addEventListener('click', (evt) => {
      if (!evt.target.closest('.modal__window')) {
        closeModal(modal)
      }
    })
  })

  const triggerList = document.querySelectorAll('*[data-modal]')
  if (triggerList.length) {
    triggerList.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        showModal(trigger.dataset.modal)
      })
    })
  }
}