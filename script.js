let age = 0

document.getElementById('button').addEventListener('click', getRating)

function getRating () {
  age = document.getElementById('input').value
  age = parseInt(age)

  if (age >= 18) {
    document.getElementById('answer').innerHTML = 'You can watch: Rated G, PG, PG-13, R and NC-17.'
  } else if (age === 17) {
    document.getElementById('answer').innerHTML = 'You can watch Rated G, PG, PG-13 and R.'
  } else if (age >= 13) {
    document.getElementById('answer').innerHTML = 'You can watch: Rated G, PG, PG-13 and R (with an adult) movies.'
  } else if (age === 12) {
    document.getElementById('answer').innerHTML = 'You can watch Rated G and PG movies.'
  } else if (age < 12) {
    document.getElementById('answer').innerHTML = 'You can only watch Rated G movies!'
  }
}
