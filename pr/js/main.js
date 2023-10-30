1
let e = document.querySelector('#e1');
let e1 = document.querySelector('#e');
e.addEventListener('blur', function() { 
  let e2 = e.value;
  e1.textContent += ' ' + e2;
  console.log(e1.textContent);
});

2
document.querySelector('#e').addEventListener('click', function() {
    let i1 = parseInt(document.querySelector('#i1').value);
    let i2 = parseInt(document.querySelector('#i2').value);
    let i3 = parseInt(document.querySelector('#i3').value);
    let sum = (isNaN(i1) ? 0 : i1) + (isNaN(i2) ? 0 : i2) + (isNaN(i3) ? 0 : i3);
    let result = document.querySelector('#result');
    result.textContent = `${sum}`;
    console.log(`${sum}`);
});

3
document.getElementById('e').addEventListener('blur', function() {
  let input = this.value;
  let sum = 0;
  if (!isNaN(input)) {
      let input1 = input.toString();
      for (let i = 0; i < input1.length; i++) {
          sum += parseInt(input1[i]);
      }
  }
  console.log(`Сумма цифр числа: ${sum}`);
});

4
document.getElementById('e').addEventListener('blur', function() {
  let input = this.value;
  let number = input.split(',').map(Number);
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
      sum += number[i];
  }
  let average = number.length > 0 ? sum / number.length : 0;
  console.log(`Среднее арифметическое: ${average}`);
});

5
document.getElementById('e').addEventListener('blur', function() {
  let e = this.value.split(' ');
  if (e.length >= 3) {
      document.getElementById('e1').value = e[0];
      document.getElementById('e2').value = e[1];
      document.getElementById('e3').value = e[2];
  } else {
      alert('Введите ФИО полностью');
  }
});

6
document.querySelector('#e').addEventListener('blur', function() {
  let e = this.value.split(' ');
  if (e.length >= 3) {
      let e1 = capitalizeFirstLetter(e[0]);
      let e2 = capitalizeFirstLetter(e[1]);
      let e3 = capitalizeFirstLetter(e[2]);
      this.value = `${e1} ${e2} ${e3}`;
  } else {
      alert('Введите ФИО полностью');
  }
});
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

7
document.querySelector('#e').addEventListener('blur', function() {
  let text = this.value;
  let words = text.split(' ');
  let wordCount = words.filter(word => word !== '').length;
  console.log(`Количество слов: ${wordCount}`);
});

8
document.querySelector('#e').addEventListener('blur', function() {
    let e = this.value;
    let e1 = e.split('.');
    if (e1.length === 3) {
        let e2 = `${e1[2]}-${e1[1]}-${e1[0]}`;
        this.value = e2;
    } else {
        alert('Введите дату');
    }
});

9
document.querySelector('#e').addEventListener('blur', function() {
    let word = this.value.toLowerCase();
    let e = word.split('').reverse().join('');
    if (word === e) {
        console.log(`Слово "${word}" читается с начала и с конца одинаково`);
    } else {
        console.log(`Слово "${word}" не читается с начала и с конца одинаково`);
    }
});

10
document.querySelector('#e').addEventListener('blur', function() {
    let number = this.value;
    if (String(number).includes('3')) {
        console.log(`Число ${number} содержит цифру 3.`);
    } else {
        console.log(`Число ${number} не содержит цифру 3.`);
    }
});

11
document.querySelector('#e').addEventListener('click', function() {
    let e = document.querySelectorAll('p');
    e.forEach(function(paragraph, index) {
        paragraph.textContent += ` (номер ${index + 1})`;
    });
});

12
document.getElementById('e').addEventListener('click', function() {
    let links = document.querySelectorAll('a');

    links.forEach(function(link) {
        let href = link.getAttribute('href');
        link.textContent += ` (${href})`;
    });
});

13
document.getElementById('e').addEventListener('click', function() {
   let links = document.querySelectorAll('a');
    links.forEach(function(link) {
        let href = link.getAttribute('href');
        if (href.startsWith('http://')) {
            link.textContent += '→ ';
        }
    });
});


14
document.querySelectorAll('.number').forEach(function(paragraph) {
    let number = parseInt(paragraph.textContent);
    let square = Math.pow(number, 2);
    paragraph.textContent = square;
});

15
document.getElementById('e').addEventListener('blur', function() {
    let e = this.value;
    let e1 = e.split('.');
    if (e1.length === 3) {
        let day = parseInt(e1[0]);
        let month = parseInt(e1[1]) - 1;
        let year = parseInt(e1[2]);
        let daysWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
        let dateOb = new Date(year, month, day);
        let dayWeek = daysWeek[dateOb.getDay()];
        console.log(`День недели: ${dayWeek}`);
    } else {
        alert('Введите дату в формате дд.мм.гггг');
    }
});

16
let input = document.getElementById('e');
let incr = document.getElementById('incr');
let decr = document.getElementById('decr');
increment.addEventListener('click', function() {
    let e = parseInt(input.value);
    input.value = e + 1;
});
decr.addEventListener('click', function() {
    let e = parseInt(input.value);
    if (e > 0) {
        input.value = e - 1;
    }
});

17
let click = 0;
document.querySelectorAll('p').forEach(function(paragraph) {
    paragraph.addEventListener('click', function() {
        click++;
        document.getElementById('e').value = click;
    });
});

18
document.querySelectorAll('.text-div').forEach(function(div) {
    let text = div.textContent;
    if (text.length > 10) {
        let trimmedText = text.slice(0, 10) + '...';
        div.textContent = trimmedText;
    }
});

19
document.getElementById('e1').addEventListener('click', function() {
    let random = generateRandomString(8);
    document.getElementById('e').value = random;
});
function generateRandomString(length) {
    let characters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}


20
document.getElementById('e1').addEventListener('click', function() {
    let input = document.getElementById('e');
    let input1 = input.value;   
    let input2 = input1.split('').sort(function() { return 0.5 - Math.random() }).join('');
    input.value = input2;
});

21
document.getElementById('e').addEventListener('click', function() {
    let inp = document.getElementById('inputTemp').value;
    let fahrenheit = parseFloat(inp);
    if (!isNaN(fahrenheit)) {
        let celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('result').textContent = `Температура в Цельсиях: ${celsius.toFixed(2)} °C`;
    } else {
        document.getElementById('result').textContent = 'Неверно';
    }
});

22
document.getElementById('e').addEventListener('click', function() {
    let input= document.getElementById('int').value;
    let number = parseInt(int);
    if (!isNaN(number) && number >= 0) {
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        document.getElementById('result').textContent = `Факториал числа ${number} равен ${factorial}`;
    } else {
        document.getElementById('result').textContent = 'Введите неотрицательное целое число.';
    }
});

23
document.getElementById('e3').addEventListener('click', function() {
    let a = parseFloat(document.getElementById('e').value);
    let b = parseFloat(document.getElementById('e1').value);
    let c = parseFloat(document.getElementById('e2').value);
    let d = b*b - 4*a*c;
    if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2*a);
        let x2 = (-b - Math.sqrt(d)) / (2*a);
        document.getElementById('result').textContent = `Корни уравнения: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
    } else if (d === 0) {
        let x = -b / (2*a);
        document.getElementById('result').textContent = `У уравнения один корень: x = ${x.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = 'Уравнение не имеет действительных корней.';
    }
});






