let cislo = Number(prompt('Zadej:'));
let soucet = 0;
while (cislo != 0) {
  soucet = soucet + cislo;
  cislo = Number (prompt('zadej:'));
  console.log('naakumulovany soucet:' + soucet);
}