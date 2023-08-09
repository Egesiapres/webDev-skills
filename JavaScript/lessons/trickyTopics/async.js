console.log('------ %c3: Async', 'font-weight: bold');

const btn = document.getElementById('print-cat-fact');

const url = 'https://catfact.ninja/fact';
const options = {
  method: 'GET',
};

const fetchData = async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener('click', fetchData);
