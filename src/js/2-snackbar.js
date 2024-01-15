import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = form.delay.value;
  const state = form.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(value => {
      iziToast.show({
        message: `${value}`,
        backgroundColor: '#59A10D',
        messageColor: '#fff',
        position: 'topCenter',
      });
    })
    .catch(error => {
      iziToast.show({
        message: `${error}`,
        backgroundColor: '#EF4040',
        messageColor: '#fff',
        position: 'topCenter',
      });
    });
});
