function createTable() {
  const localScore = JSON.parse(localStorage.getItem('scoreArray'));
  if (localScore !== null) {
    localScore.forEach((element, index) => {
      const tdElement = document.getElementById(index);
      if (!tdElement) {
        const table = document.querySelector('table');
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.innerHTML = `${element.user}: ${element.score}`;
        td.id = index;
        tr.appendChild(td);
        table.appendChild(tr);
      }
    });
  }
}

function saveTolocal(data) {
  localStorage.setItem('scoreArray', JSON.stringify(data));
  createTable();
}

async function getData() {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/: TNMia0u1XCDnnCiYu2ki/scores')
    .then((response) => response.json())
    .then((data) => saveTolocal(data.result));
}

async function addScore(user, score) {
  const data = { user, score };
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/: TNMia0u1XCDnnCiYu2ki/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export { addScore, getData, createTable };