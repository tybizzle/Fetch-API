document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// // Get local text file
// function getText() {
//   fetch('test.txt')
//     .then(function(res) {
//       return res.text()
//     })
//     .then(function(data) {
//       console.log(data);
//       document.getElementById('output').innerHTML = data;
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// }

// Get local text file Using Arrow Function
function getText() {
  fetch('test.txt')
    .then(res => res.text())
    .then(data => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

// // Get local JSON data
// function getJson() {
//   fetch('posts.json')
//     .then(function(res) {
//       return res.json()
//     })
//     .then(function(data) {
//       console.log(data);
//       let output = '';
//       data.forEach(function(post) {
//         output += `<li>${post.title}</li>`;
//       });
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// }

// Get local JSON data Using Arrow Function
function getJson() {
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(post => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

// Get From External API
// function getExternal() {
//   fetch('https://api.github.com/users')
//     .then(function(res) {
//       return res.json(); 
//     })
//     .then(function(data) {
//       console.log(data);
//       let output = '';
//       data.forEach(function(user) {
//         output += `<li>${user.login}</li>`
//       });
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// }

// Get From External API Using Arrow Function
function getExternal() {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(user => output += `<li>${user.login}</li>`);
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}