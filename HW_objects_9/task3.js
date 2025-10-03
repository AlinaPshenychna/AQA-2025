const car1 = {
  brand: "Mercedec",
  model: "Benz",
  year: "2025",
};

const car2 = {
  brand: "Fiat",
  model: "Doblo",
  owner: "2000",
};

const car3 = { ...car1, ...car2 };
console.log(car3);
