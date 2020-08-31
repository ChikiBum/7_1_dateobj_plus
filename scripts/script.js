"use strict";

const wrapper = document.querySelector('.wrapper');
      

     const getDateTime = () => {
          const  date = new Date(),
            hours = date.getHours(),
            day = date.getDay(), 
            dayEn = date.toLocaleTimeString('en'),
            dateNow = date.getTime(),
            dateNewYear = new Date('31 december 2020').getTime(),
            timeRemainigHours = Math.floor((dateNewYear - dateNow) / 1000 / 60 / 60),
            timeRemainig = Math.floor(timeRemainigHours / 24),
            DayOfWeek = ['Понелельник', 'Втроник', 'Среда', 'Четверг', 
            'Пятница', 'Суббота', 'Воскресенье'];

            let timeOfDay = '';
              

           if (hours >= 8 && hours <=13){
            timeOfDay = 'Доброе утро';
            } else if (hours > 13 && hours <=17){
            timeOfDay = 'Добрый день';  
            } else if (hours > 17 && hours <=23){
            timeOfDay = 'Добрый вечер';     
            } else if (hours > 23 && hours < 8){
            timeOfDay = 'Доброй ночи';    
            }

          const div = document.createElement('div');
          div.innerHTML=`${timeOfDay}!</br>
Сегодня: ${DayOfWeek[day]} !</br>
Текущее время: ${dayEn} </br>
До нового года осталось ${timeRemainig} дней </br>
          `
            
          wrapper.append(div);
      }
      

      getDateTime()
