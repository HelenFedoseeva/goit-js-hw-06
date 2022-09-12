const formRef = document.querySelector('.login-form')


formRef.addEventListener('submit', onSubmitHandler)

function onSubmitHandler(event) { 
    event.preventDefault();
    // console.log(event.target.elements.password.value)
    const {   elements: { email, password } 
   }  = event.target;
    if (email.value === '' || password.value === '') { 
        alert ('Enter your data, please')
    }

    const data = {};
    data.email = email.value;
    data.password = password.value

}