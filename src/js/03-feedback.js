import throttle from 'lodash.throttle';
const form = document.querySelector('form.feedback-form');

if (JSON.parse(localStorage.getItem("feedback-form-state"))) {
  form.email.value = JSON.parse(localStorage.getItem("feedback-form-state")).email;
  form.message.value = JSON.parse(localStorage.getItem("feedback-form-state")).message;
}


form.addEventListener('input', throttle(infoKeep, 500));


function infoKeep(event) {
  const { email, message } = form.elements;

  const data = {
    email: email.value,
    message: message.value
  };

  localStorage.setItem("feedback-form-state", JSON.stringify(data));

  
  
  

}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  localStorage.clear();
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(formData);

  form.reset();
});