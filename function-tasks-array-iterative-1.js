const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  people.forEach(p => console.log(`${p.name} ${p.surname} - ${p.sex}, ${p.age},${p.income}, ${p.married}, ${p.hasCar}`));
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
{
  people.forEach(p => console.log(`${p.name}-${p.surname}`));
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  people.forEach(p => console.log(p.name, p.surname, p.married));
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  const result = people.map(p => {
    return {
      sex: p.sex,
      income: p.income
    };
  });
  // const result = people.map(p => ({ sex: p.sex, income: p.income }));
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  const result = people.map(p => ({
    name: p.name,
    surname: p.surname,
    sex: p.sex,
  }));
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
    // Eilutėmis
    {
      people
        .filter(({ sex }) => sex === 'male')
        .forEach(({ name }) => console.log(name));
    }
    // Vienoje eilutėje
    {
      const result = people
        .filter(({ sex }) => sex === 'male')
        .map(({ name }) => name);
      console.log(...result)
    }
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  people
    .filter(({ sex }) => sex === 'female')
    .forEach(({ name }) => console.log(name));
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  people
    .filter(({ hasCar }) => hasCar)
    .forEach(({ name, surname }) => console.log(name, surname));
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  people
  .filter(({ married }) => married)
  .forEach((p) => console.log(p));
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
   {
    const drivers = {
      male: people.filter(p => p.hasCar && p.sex === 'male').length,
      female: people.filter(p => p.hasCar && p.sex === 'female').length,
    }
    console.log(drivers);
  }
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  const result = people.map(p => {
    const person = { ...p };
    person.salary = person.income;
    delete person.income;
    return person;
  });
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  const result = people.map(p => {
    const person = { ...p };
    delete person.sex;
    delete person.name;
    delete person.surname;
    return person;
  });
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  const result = people.map(p => {
    const person = { ...p };
    person.fullname = person.name + ' ' + person.surname;
    delete person.name;
    delete person.surname;
    return person;
  });
  console.table(result);
}
console.groupEnd();

