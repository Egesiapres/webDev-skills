const body = document.querySelector('body');

function Table(cols, rows) {
  this.cols = cols;
  this.rows = rows;

  const table = document.createElement('table');

  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const tr = document.createElement('tr');
  table.appendChild(thead);
  table.appendChild(tbody);
  thead.appendChild(tr);

  cols.forEach(col => {
    const th = document.createElement('th');
    th.textContent = col;

    tr.appendChild(th);
  });

  rows.forEach(row => {
    const tr = document.createElement('tr');

    Object.values(row).forEach(value => {
      const td = document.createElement('td');
      td.textContent = value;

      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  body.appendChild(table);
}

const citiesCols = ['City', 'Province', 'Region', 'Country', 'Residents'];

const citiesRows = [
  {
    city: 'Montirone',
    province: 'Brescia',
    region: 'Lombardy',
    country: 'Italy',
    residents: 5131,
  },
  {
    city: 'Milan',
    province: 'Milan',
    region: 'Lombardy',
    country: 'Italy',
    residents: '1.352 milions',
  },
  {
    city: 'Tarragona',
    province: 'Tarragona',
    region: 'Catalunya',
    country: 'Spain',
    residents: 132299,
  },
  {
    city: 'Barcelona',
    province: 'Barcelona',
    region: 'Catalunya',
    country: 'Spain',
    residents: '1.62 milions',
  },
];

const familyCols = ['Name', 'Surname', 'Age', 'Role'];

const familyRows = [
  {
    name: 'Umberto',
    surname: 'Pasinetti',
    age: 26,
    role: 'Son',
  },
  {
    name: 'Giovanni',
    surname: 'Pasinetti',
    age: 56,
    role: 'Father',
  },
  {
    name: 'Mariarosa',
    surname: 'Tirelli',
    age: 56,
    role: 'Mother',
  },
  {
    name: 'Emma',
    surname: 'Franchino',
    age: 22,
    role: "Son's girlfriend",
  },
];

new Table(citiesCols, citiesRows);

new Table(familyCols, familyRows);
