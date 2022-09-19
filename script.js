const adviceID = document.querySelector('#advice-id');
const adviceQuote = document.querySelector('#advice-text');
const randomButton = document.querySelector("#random-advice-button");

async function fetchQuote() {
  let data;
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    data = await response.json();
  } catch(err) {
    console.log(err);
    data = {};
  }

  adviceID.innerHTML = data.slip.id;
  adviceQuote.innerHTML = `"${data.slip.advice}"`;

  // console.log(data.slip);
  return data;
}

fetchQuote();

// Event Listener
randomButton.addEventListener("click", fetchQuote);