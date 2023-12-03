const makeRequest = () => {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://api.adviceslip.com/advice');
  request.send();
  request.onload = () => {
    console.log(request);
    if (request.status === 200) {
      const slip = JSON.parse(request.response).slip;
      updateComponent(slip.id, slip.advice);
    } else {
      console.log(`Error ${request.status}`);
    }
  };
};

const updateComponent = (id, advice) => {
  document.getElementById('id').innerHTML = `ADVICE #${id}`;
  document.getElementById('advice').innerHTML = `❝${advice}❞`;
};

window.addEventListener('load', makeRequest);
document.getElementById('dice').addEventListener('click', makeRequest);
