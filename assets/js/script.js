document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        let formValido = true;

        const nome = document.getElementById('name');
        const erroNome = document.getElementById('txtNome');
        if (nome.value.trim().length < 3) {
            erroNome.textContent = 'O nome deve ter no mínimo 3 caracteres';
            nome.classList.add('invalid');
            nome.classList.remove('valid');
            formValido = false;
        } else {
            erroNome.textContent = '';
            nome.classList.add('valid');
            nome.classList.remove('invalid');
        }

        const email = document.getElementById('email');
        const erroEmail = document.getElementById('txtEmail');
        if (!emailRegex.test(email.value.trim())) {
            erroEmail.textContent = 'Digite um email válido (ex: usuario@provedor.com)';
            email.classList.add('invalid');
            email.classList.remove('valid');
            formValido = false;
        } else {
            erroEmail.textContent = '';
            email.classList.add('valid');
            email.classList.remove('invalid');
        }

        const assunto = document.getElementById('subject');
        const erroAssunto = document.getElementById('txtSubject');
        if (assunto.value.trim().length < 5) {
            erroAssunto.textContent = 'O assunto deve ter no mínimo 5 caracteres';
            assunto.classList.add('invalid');
            assunto.classList.remove('valid');
            formValido = false;
        } else {
            erroAssunto.textContent = '';
            assunto.classList.add('valid');
            assunto.classList.remove('invalid');
        }

        if (formValido) {
            alert('Formulário Enviado com Sucesso!');
            formulario.reset();
            document.querySelectorAll('.form-group input').forEach(input => {
                input.classList.remove('valid', 'invalid');
            });
        }
    });
});