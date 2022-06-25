let array = new Map();

array.set("Имя", "Артем"); 
array.set('Возраст', "78"); 
array.set('Хобби', "Cat");

for (let [key, value] of array) {
    console.log(`Ключ — ${key}, значение — ${value}`);
}
