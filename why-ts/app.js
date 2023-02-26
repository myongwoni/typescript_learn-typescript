// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} city
 * @property {string} street
 */

/**
 * @typedef {object} User
 * @property {string} username
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fatchUser() {
  return axios.get(url);
}

fatchUser().then(function (response) {
  response.address.city;
})

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      address.innerText = user[0].address.city;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
