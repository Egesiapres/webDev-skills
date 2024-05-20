const url = 'https://dog.ceo/api/breeds/list/all';

const options = {
  method: 'GET',
};

const fetchData = async () => {
  try {
    const response = await fetch(url, options);

    const data = await response.json();

    console.log(data.message);
  } catch (err) {
    console.error(err);
  }
};

fetchData();