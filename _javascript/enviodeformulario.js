    const $form = document.querySelector('#dados');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '5527997864266';
$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let forro = document.querySelector('#cforro').value
        let velcro = document.querySelector('#cvelcro').value
        let adesivo1 = document.querySelector('#cade1').value +',%0A'+ document.querySelector('#cade2').value
        let solado = document.querySelector('#cssol').checked
        if(document.querySelector('#cssol').checked == true)
        {
            solado = document.querySelector('#cssol').value
        }
        if(document.querySelector('#cssol').checked == false)
        {
            solado = document.querySelector('#ccsol').value
        }
        let observacao = document.querySelector('#cmsg').value
        let nome = document.querySelector('#cnome').value

        let message = 'send?phone=' + phone + '&text=-Formulario de Personalização-%0A *Nome: %0A' + nome + '%0A *Forro: %0A' + forro + '%0A *Velcro: %0A' + velcro + '%0A *Adesivo: %0A' + adesivo1 + '%0A *Solado: %0A' + solado + '%0A *Observaçao: %0A' + observacao +''

        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 4000);
});