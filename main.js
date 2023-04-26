
var email = document.querySelector(".email");
var password = document.querySelector(".password");
var logIn = document.querySelector(".logIn");


var db = openDatabase('mydb', '1.0', 'My database', 2 * 1024 * 1024);

logIn.addEventListener("click",()=>{
  var emailValue = email.value;
  var passwordValue = password.value;
  db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS user1 (id INTEGER PRIMARY KEY, email TEXT, password TEXT)');
    tx.executeSql('INSERT INTO user1 (email, password) VALUES (?, ?)', [`${emailValue}`, `${passwordValue}`]);

  });

  db.transaction(function(tx) {
  tx.executeSql('SELECT * FROM user1', [], function(tx, result) {
      for (var i = 0; i < result.rows.length; i++) {
      console.log(result.rows.item(i));
      }
  });
  });
});
