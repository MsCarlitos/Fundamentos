let person = {
    name: 'Melissa',
    age: 30,
    isActive: true,
    hobbies: ['soccer', 'baseball'],
    toString(){
        let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
        console.log( objectString )
    }
}

let car = {
    doors: 5,
    brand: 'Honda',
    color: 'White',
    year: 2025,
    gearBox: 'Manual'
}

let smartTv = {
    sizeInches: 90,
    brand: 'Samsung',
    year: 2015,
    type: 'LED'
}

let youtubeVideo = {
    length: 3600,
    author: 'Carlos Mendoza',
    comments:[ 'buen video', 'megusto mucho', 'el peor video'],
    likes: 1500,
    dislikes:100
}

console.log(car);
console.log(smartTv);
console.log(youtubeVideo);