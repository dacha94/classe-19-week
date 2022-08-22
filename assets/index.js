// практическое задание 19 недели. 
//1 Создайте класс Работник, который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.

class Worker {
    constructor (name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary (){
        return `You salary is ${this.rate*this.days} €` ;
    }
}

let worker = new Worker ('Ivan', 'Ivanov', 10, 31);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());


// const mySalaries = [2500, 5000, 7800]

// const sumOfSalaries = mySalaries.reduce((acc, salary) => {
//     return acc + salary
// }, 0)

// console.log(sumOfSalaries); true


// второе задание в файле oprosnik

// третье в единорожьем калькуляторе. 

//четвертое задание. класс validator проверяющий строки
//стандартная версия 
class Validator {

    isEmail(str){
        let email = str.match(/^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,2})$/);
        return email === null ? false : true;
    }

    isDomain(str){
        let domain = str.match(/^(?:[a-zA-Z0-9]+(?:\-*[a-zA-Z0-9])*\.)+[a-zA-Z0-9]{2,63}$/);
        return domain === null ? false : true;
    }

    isDate(str){
        let date = str.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/);
        return date === null ? false : true;
    }

    isPhone(str){
        let phone = str.match(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/);
        return phone === null ? false : true;
    }
}

let validator = new Validator ();

console.log(validator.isEmail('dieday94@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('6.07.2020'));
console.log(validator.isPhone('+7(910)123-45-67'));

//статика
class ValidatorStatic {

    static isEmail(str){
        let email = str.match(/^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,2})$/);
        return email === null ? false : true;
    }

    static isDomain(str){
        let domain = str.match(/^(?:[a-zA-Z0-9]+(?:\-*[a-zA-Z0-9])*\.)+[a-zA-Z0-9]{2,63}$/);
        return domain === null ? false : true;
    } 

    static isDate(str){
        let date = str.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/);
        return date === null ? false : true;
    }

    static isPhone(str){
        let phone = str.match(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/);
        return phone === null ? false : true;
    }
}


console.log(ValidatorStatic.isEmail('alena@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('16.07.2020'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));





// теория из урока 
// let cat = {
//   name: 'Барсик', 
//   age: 3,
//   weight: 5.5,
//   happiness: 3

//   feedCat() {
//     this.happiness = this.happiness + 5;
//   }
// }
// feedCat();

// конструкторы и классы
// class Animal {
//   constructor (name, type){
//   this.name = name;
//   this.type = type;
//   }
//   showInfo(){
//     console.log('Это ' + this.type);
//   }
// }
// let animal1 = new Animal('Снежок', 'кот');
// let animal2 = new Animal('Шарик', 'пьёс');

// вопрос №4 что выведет код 
// function bike() { 
//   console.log(this.name)
// }
// var name = "ninja"
// var obj1 = {name: "pomidor", bike: bike}
// var obj2 = {name: "site", bike: bike}

// bike()
// obj1.bike()
// obj2.bike()

// class Person {
//   constructor(name) {
//     this.name = name 
//   }
// }
// const member = new Person("John")
// console.log(typeof member)

// const person = {
//   name: "Valera", 
//   age: 23
// }
// let city = person.city
// city = "Amsterdam"

// console.log(person)



// тренировка 

// const user1 = {
//     id: 1,
//     name: 'Elon',
//     lastName: 'Musk'
//   }
//   const getName = (user) => {

//     console.log(user.name, !user.name, !!user.name)
//     if (Boolean(user.name)) {
//         const gst = document.getElementById('guest');
//         gst.textContent = `Привет, ${user.name}`
//     }
//     }
    
//     getName(user1);
//   // 1.2 Для пользовтелей без имени оставить запись "Привет, Гость!"

    
//     const user2 = {
//     id: 2
    
//     }
//     getName(user2)

//   // 2.1 Вывести массив отелей с рейтинга от 8 и выше
//   // в формате "Название отеля" - "рейтинг"
//   const hotels = [
//     {
//       id: 1,
//       name: 'AZIMUT',
//       raiting: 6,
//     },
//     {
//       id: 2,
//       name: 'Турист',
//       raiting: 3,
//     },
//     {
//       id: 3,
//       name: 'Жемчужина',
//       raiting: 4,
//     },
//      {
//       id: 4,
//       name: 'City Park',
//       raiting: 8,
//     },
//     {
//       id: 5,
//       name: 'Wellness & SPA',
//       raiting: 9,
//     },
//     {
//       id: 6,
//       name: 'New',
//     }
//   ]

//   const htls = hotels.filter((item)=>'raiting' in item && item.raiting >=8 ТОЖЕ МОЖН 
// const htls = hotels.filter((item)=> {
//     return 'raiting' in item && item.raiting >=8
// }) 

// const len = document.querySelector('.hotels span')
//     len.textContent = htls.length

// console.log(htls.length);
  // 2.2 Вывести список рекомендуемых отелей на экран в виде одной строки
  
  // 2.3 Создать функцию, которая будет фильтровать список отелей
  // в зависимости от рейтинга
  
  // 2.4 Доработать функцию так, чтобы отели без рейтинга всегда попадали в итоговый список. Для таких отелей вместо рейтинга выводить - отсутствует
  
  // 3. Написать функцию, которая будет вычислять длину отрезка
