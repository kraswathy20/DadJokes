
const jokes = document.querySelector('#jokes')
const btn = document.querySelector('button')



const dadjokes = async () => {
    const config = {headers :{Accept : 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    
    const newLi = document.createElement('li')
    newLi.innerText = res.data.joke
    jokes.append(newLi)
   
}

btn.addEventListener('click',dadjokes);