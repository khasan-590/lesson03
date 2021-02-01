"use strict";



let  money = +prompt("Ваш месячный доход?", 1000) ,  //“Доход за месяц”
  income = 'Курьер', // Дополнительный доход.
  addExpenses =  prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
  deposit = confirm("Есть ли у вас депозит в банке?"), //любое булево значение,
  expenses1 = prompt('Введите обязательную статью расходов?'),
  amount1 = +prompt('Во сколько это обойдется?'),
  expenses2 = prompt('Введите обязательную статью расходов?'),
  amount2 = +prompt('Во сколько это обойдется?'),
  mission = 50000, //любое число(Какую сумму хотите накопить)
  period = 6, //число от 1 до 12(месяцев)
  budgetMonth = money - (amount1 + amount2),
  budgetDay = budgetMonth / 30;

  
  console.log(typeof money);
  console.log(typeof income);
  console.log(addExpenses.length , addExpenses.toLowerCase() , addExpenses.split(', ') );
  console.log( deposit);
  console.log( mission + ' доллар, за ' + period  + ' месяцев');
  // console.log(budgetDay + " $");
  console.log("Бюджет " + budgetMonth + " за месяц");
  console.log('Цель будет достигнута за ' + Math.ceil(mission / budgetMonth) + "  месяцев(ца)");
  console.log('Цель за день ' + Math.floor(budgetDay) + ' $');


  if (budgetDay >= 1200) {
    console.log("У вас высокий уровень дохода");
  } else if (budgetDay > 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода');
  } else if (budgetDay <=600 && budgetDay  > 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay  < 0){
    console.log('Что то пошло не так');
  }