const postContainer = document.getElementById("post-container");

const dogData = [
    { imgPath: '../public/0.jpg', name: 'Buddy', age: '9 ปี', personality: 'ขี้เล่น', color: 'น้ำตาล', breed: 'ลาบราดอร์', other: 'ถูกทิ้ง' },
    { imgPath: '../public/1.jpg', name: 'Max', age: '7 ปี', personality: 'อ่อนโยน', color: 'ดำ', breed: 'เยอรมันเชพเพิร์ด', other: 'ติดเจ้าของ' },
    { imgPath: '../public/2.jpg', name: 'Lucy', age: '4 ปี', personality: 'สดใส', color: 'ขาว', breed: 'บีเกิ้ล', other: 'กลัวคน' },
    { imgPath: '../public/3.png', name: 'Charlie', age: '1 ปี', personality: 'สงบ', color: 'ทอง', breed: 'โกลเด้นรีทรีฟเวอร์', other: 'ว่ายน้ำไม่เก่ง' }
];


const rand = (n) => Math.floor(Math.random() * n);

const createCard = (imgPath, name, age, personality, color, breed, other) => {
    const card = document.createElement('div');
    card.classList.add("box", "dog-box");

    const imgElement = document.createElement('img');
    imgElement.src = imgPath;
    imgElement.width = 100;
    const nameElement = document.createElement('p');
    nameElement.textContent = "name : " + name;
    const ageElement = document.createElement('p');
    ageElement.textContent = "age: " + age;
    const personalityElement = document.createElement('p');
    personalityElement.textContent = "personality: " + personality;
    const colorElement = document.createElement('p');
    colorElement.textContent = "color: " + color;
    const breedElement = document.createElement('p');
    breedElement.textContent = "breed: " + breed;
    const otherElement = document.createElement('p');
    otherElement.textContent = "other: " + other;

    card.append(imgElement, nameElement, ageElement, personalityElement, colorElement, breedElement, otherElement);
    return card;
}

const createDogCards = () => {
    setInterval(() => {
        let length = 10;
        if (!window.location.href.startsWith('http://localhost')) {
            length = 100;
        }
        for (let i = 0; i < length; i++) {
            const dog = dogData[rand(dogData.length)];
            postContainer.appendChild(createCard(
                dog.imgPath,
                dog.name,
                dog.age,
                dog.personality,
                dog.color,
                dog.breed,
                dog.other
            ));
        }
    }, 1000)
}

createDogCards();
