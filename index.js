// const segment1 = 100;
// const segment2 = 8;
// const segment3 = 12;

// let tmp = segment1;

// console.log ('Подсчет наибольшего отрезка из трех');

// if(segment2 > tmp) {
//     tmp = segment2;
// } 
// if(segment3>tmp) { 
//     tmp= segment3
// }

//  console.log ('Длина наибольшего сегмента =', tmp);


                                                                              // if else example


// const t = 35;
// console.log ('Рекомендации в зависимости от температуры.');
// console.log ('Сейчас на улице:', t, 'градусов Цельсия');
// if  (t<-30) {
//     console.log ('Оставайтесь дома');
// } else if ( t<= -10) {
//     console.log ('Сегодня холодно');
// }else if (t<=5) {
//     console.log ('Не холодно');
// }else if (t<=15) {
//     console.log ('Тепло');
// }else if (t<=25) {
//     console.log ('Очень тепло');
// }else if (t<35) {
//     console.log ('Жарко') ;
// }
// else  {
//     console.log ('Пекло');
// }



                                                                                  // switch example

// const role = 'admin'; //manager, user
const role = 'manager';
// const role = 'user';

switch (role) {
    case 'admin':
        console.log ({
            role: 'admin',
            drink: 'beer'
        })
        break;
case 'manager':
    console.log ({
        role: 'manager',
        drink: 'juice'
    })
    break;

case 'user':
    console.log ({
        role: 'user',
        drink: 'water'

})
default : console.log ('dont know');
}

