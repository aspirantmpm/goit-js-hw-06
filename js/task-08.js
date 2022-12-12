
const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const male = formElements.email.value;
  const password = formElements.password.value;

  if (!male || !password) {
    alert('Attention, all fields must be filled!');
  } else {
    const result = {
      email: male,
      password: password,
    };
    console.log(result);
    event.currentTarget.reset();
  }
}