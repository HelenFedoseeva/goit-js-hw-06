const formRef = document.querySelector('.login-form')


formRef.addEventListener('submit', onSubmitHandler)

function onSubmitHandler(event) { 
    event.preventDefault();
    
    const {   elements: { email, password } 
   }  = event.target;
    if (email.value === '' || password.value === '') { 
        alert ('Enter your data, please')
    }

    const data = {};
    data.email = email.value;
    data.password = password.value;

    event.target.reset();

    console.log(data)

}