/*
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (e) {
    console.log("ERROR", e);
  }
};

getStarWarsPerson(5);
getStarWarsPerson(10);
*/

//DOM 조작 추가
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');


const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement('LI');
  newLI.append(jokeText);
  jokes.append(newLI);
}

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    //console.log(res.data.joke);
    return res.data.joke;

  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY";
  }
};

button.addEventListener('click', addNewJoke);

//API 요청에 제한이 있을수도 있으니 과도한 요청을 일부로 보낼 경우 제한이 걸릴 수 있다.