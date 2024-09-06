const regalosNavidad = {
  plays: 2,
  moto: 2,
  casa: 4,
  finca: 6,
};

for (compras in regalosNavidad) {
  console.log(compras);
}

for (compras in regalosNavidad) {
  console.log(`${compras}: ${regalosNavidad[compras]}`);
}
