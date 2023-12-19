var names = [
  'Yaakov',
  'John',
  'Jen',
  'Jason',
  'Paul',
  'Frank',
  'Larry',
  'Paula',
  'Laura',
  'Jim'
];

function speak(name) {
  if (name.startsWith('J')) {
    console.log('Good Bye ' + name);
  } else {
    console.log('Hello ' + name);
  }
}

for (let i = 0; i < names.length; i++) {
  speak(names[i]);
}
