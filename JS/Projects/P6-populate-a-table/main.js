const users = [
  {
    id: 'UP',
    name: 'Umberto',
    surname: 'Pasinetti',
    email: 'pasinetti96@gmail.com',
    fiscal_code: 'AAAAAA11A11A111A',
    address: 'Piazza Alessandro Manzoni, 15/O, Montirone, Brescia',
  },
  {
    id: 'NS1',
    name: 'Name1',
    surname: 'Surname1',
    email: 'name1.surname1@gmail.com',
    fiscal_code: 'BBBBBB22B22B222B',
    address: 'Street Prova1, 1, City1, Provincia1',
  },
  {
    id: 'NS2',
    name: 'Name2',
    surname: 'Surname2',
    email: 'name2.surname2@gmail.com',
    fiscal_code: 'CCCCCC33C33C333C',
    address: 'Street Prova2, 2, City2, Provincia2',
  },
];

const table = document.getElementById('table');

const tbody = document.createElement('tbody');
table.appendChild(tbody);

const insertUserInfo = ({
  id,
  name,
  surname,
  email,
  fiscal_code,
  address,
}) => {
  const newTr = document.createElement('tr');

  [id, name, surname, email, fiscal_code, address].forEach(el => {
    const newTd = document.createElement('td');
    newTd.textContent = el;

    newTr.appendChild(newTd);
  })

  tbody.appendChild(newTr);
};

users.forEach(user => insertUserInfo(user));
