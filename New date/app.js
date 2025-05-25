// date

const now = new Date();

const today = now.getDate(); // bugungi kun
const month = now.getMonth(); //xozirgi oy 0-11gacha raqam qaytariladi
const year = now.getFullYear(); // xozirgi yil

console.log(`${today}-${month + 1}-${year}`);

// time

const hour = now.getHours(); // Hour
const minute = now.getMinutes(); //Minute
const second = now.getSeconds(); //Seconds

console.log(`${hour}:${minute}:${second}`);
