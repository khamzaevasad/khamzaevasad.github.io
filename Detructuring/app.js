// JS  destructuring

const [olma, gilos, ...boshqalar] = ['olma', 'gilos', 'uzum', 'nok'];
// console.log(olma, gilos, boshqalar);

// rest operatori => destructuringda qolgan ma'lumotni birlashtirib beradi

const { name: ism, ...others } = {
  name: 'Asadbek',
  age: 25,
  job: 'Developer',
};
console.log(ism, others);
