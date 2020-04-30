let massiv = [];
//Максимум и минимум включаются. Взято с сайта MOZ
        function random(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; 
        }

//Функция задаёт i-тое кол-во значений в диапазоне 1-20 в массиве A 
        function randomMassiv (A) {
            var i = 10;
            for(let j = 0; j < i; j++) {
                var value = random(1, 100);
                A.push(value);
                console.log(value);
            }
        }
        randomMassiv(massiv);
        