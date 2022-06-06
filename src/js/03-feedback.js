import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
};
const FORM_STORAGE_KEY = 'feedback-form-state';
const formData = {};

populateFormInput();

refs.form.addEventListener('submit', handleSubmit);
refs.form.addEventListener('input', throttle(addFormInput, 500));

function handleSubmit(event) {
    event.preventDefault();
    const {email, message} = event.currentTarget.elements;
    if (email.value === '' || message.value === '') {
        alert('Заполните все поля');
        return;
    }
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(FORM_STORAGE_KEY);
};

function addFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
};

function populateFormInput() {
    const formStringValue = localStorage.getItem(FORM_STORAGE_KEY);
    
    if (formStringValue) {
        const formObjectValue = JSON.parse(formStringValue);
        for (const key in formObjectValue) {
            formData[key] = formObjectValue[key];
        }
        refs.form.elements.email.value = formData.email ? formData['email'] : '';
        refs.form.elements.message.value = formData.message ? formData['message'] : '';
    }
}