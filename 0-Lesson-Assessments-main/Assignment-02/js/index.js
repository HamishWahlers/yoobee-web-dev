'use strict'

console.log('JS running')

//form validation logic goes here

//pesudeo code:

//Get reference to the html elements

//name
const nameInput = document.querySelector('#name')

//email
const emailInput = document.querySelector('#email')

//message
const messageInput = document.querySelector('#message')

//submit button
const submitButton = document.querySelector('#submit')

//name error
const nameError = document.querySelector('#nameError')

//email error
const emailError = document.querySelector('#emailError')

//message error
const messageError = document.querySelector('#messageError')

//add an event listener to the submit button
submitButton.addEventListener('click', handleSubmitButton)

//when the user presses the button, validate the inputs

function handleSubmitButton(event) {
  event.preventDefault()
  console.log(nameInput.value)
  console.log(emailInput.value)
  console.log(messageInput.value)

  if (nameInput.value == '') {
    nameError.textContent = 'Please enter your name'
    nameError.style.display = 'block'
  } else if (nameInput.value.length < 2 || nameInput.value.length > 40) {
    nameError.textContent = 'Please enter a name between 2 and 40 characters long'
    nameError.style.display = 'block'
  } else {
    nameError.textContent = ''
    nameError.style.display = ''
  }

  if (emailInput.value == '') {
    emailError.textContent = 'Please enter your email'
    emailError.style.display = 'block'
  } else if (emailInput.value.length < 2 || emailInput.value.length > 40) {
    emailError.textContent =
      'Please enter an email address between 2 and 40 characters long'
    emailError.style.display = 'block'
  } else {
    emailError.textContent = ''
    emailError.style.display = ''
  }

  if (messageInput.value.length < 2 || messageInput.value.length > 200) {
    messageError.textContent = 'Please ensure your message is between 2 and 200 characters long before submitting'
    messageError.style.display = 'block'
  } else {
    messageError.textContent = ''
    messageError.style.display = ''
  }

  if (nameError.textContent == '' && emailError.textContent == '' && messageError.textContent == '') {
    console.log('success!')
  }
}

//if not valid, show errors
//if valid, console.log('success)
// <p>Task: to build an html contact form validation showing three error messages. One for 'name', another for 'email', and last, 'message'. You are to test for empty value inputs and range values (between 2-40) for the name and email characters and (2-200) characters for the message.<p>
// <p>Lesson 11 introduces and has an example of a form validation process</p>
