function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'Argentina';
    console.log(name, age, country);
}

newUser();
newUser('David', 15,'Colombia');

function newAdmin(name = 'Oscar', age = 28 , country = 'Argentina'){
    console.log(name, age, country);
}
newAdmin();
newAdmin('Ana','15','Argentina'); //

function newAdmin(name = 'Oscar', age  , country = 'Argentina'){
    console.log(name, age, country);
}
newAdmin();//en este lo rompimos y tira undefined en age, 
newAdmin('Ana','argenti','Argentina'); //en este tira argenti en age por que no definimos como Number