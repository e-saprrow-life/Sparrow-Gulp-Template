    function sendFormToMail(formId) {
        // console.log('Начинаю обработку формы')
        event.preventDefault();
        let form = document.querySelector('#' + formId);
        if (form.querySelector('input[name="url"]')) form.querySelector('input[name="url"]').value = window.location.href;

        let errors = validate(form);
        let formData = new FormData(form); // .values() array 
            formData.append('formID', formId);

        // Добавляем файлы 
        // let fileInput = form.querySelector('input[type="file"]');
        // console.log(fileInput.value);
        
        // for (let val of formData.values()) {
        //     console.log(val)
        // }
        sendForm();

        async function sendForm() {
            if (errors === 0 && !form.querySelector("input[name='robot']").checked) {
                form.classList.add('loading');
                let response = await fetch('/export/mailer/index.php', {
                    method: 'POST',
                    body: formData,
                })
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    console.log(data.message)
                    console.log(data.msg)
                    form.classList.remove('loading');
                    window.location.href = form.querySelector("input[name='success']").value; 
                })
                .catch(function (error) {
                    console.log('error', error)
                    form.classList.remove('loading');
                })
            } else {
                console.log('Имеются незаполненные поля')
            }
        }

        function validate(form) {
            let errorClass = '_error';  // Класс ошибки для формы и интпута в котором ошибка
            let errorsCount = 0;        // Счетчик колличества ошибок в форме. Возвращаем
            let required = form.querySelectorAll('*[data-rq]'); // Поля формы, которые нужно проверять
            
            for (let i = 0; i < required.length; i++) {
                const input = required[i];
                removeInputError(input);
                if (input.type == 'text' && input.value.length < 2) {
                    addInputError(input);
                    errorsCount++;
                }
                else if (input.type == 'email') {
                    if (testEmail(input)) {
                        addInputError(input);
                        errorsCount++;
                    }
                } else if (input.type == 'tel' && input.value.length < 10) {
                    addInputError(input);
                    errorsCount++;
                }
            }
    
            // Добавляю классы ошибки
            function addInputError(input) {
                input.parentElement.classList.add(errorClass);
                input.classList.add(errorClass);
            }
    
            // Удаляю классы ошибки
            function removeInputError(input) {
                input.parentElement.classList.remove(errorClass);
                input.classList.remove(errorClass);
            }
    
            // Тест эл.почты
            function testEmail(input) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
            }
            return errorsCount;
        }
        // return false;
    }
    window.sendFormToMail = sendFormToMail;