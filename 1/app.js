var name = prompt('Введите свое имя');
var lastName = prompt('Введите свою фамилию');
var n1 = prompt('Введите свой возвраст');

if(n1 < 18){
    console.log('Привет,', name);
}
else if(n1 >= 18 && n1 < 50){
    console.log('Здравстуйте,', name);
}
else if(n1 >= 50 && n1 < 80){
    console.log('Добро пожаловать,', name + lastName);
}
else{
    console.error('Упс, произошла ошибка')};