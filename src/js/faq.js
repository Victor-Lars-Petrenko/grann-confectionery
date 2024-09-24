const acc=document.querySelectorAll('.faq__accordion')
acc.forEach(button => {  
    button.addEventListener('click', ()=>onClickButton(button));
  })

function onClickButton(button){  
    button.classList.toggle('faq__active');
    const content = button.nextElementSibling;

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
    }

}