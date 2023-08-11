let myStars = []


fetch ('https://swapi.dev/api/people') 
   .then (res => res.json())
   .then (data => {
    console.log(data.results);

    let markup = ''

// data.results.forEach(user=> 

let stars = data.results


for(let index = 0; index < stars.length; index++){

    let user = stars[index]
    // console.log(user)

   let markupcontent = `<div class="content">
                <div class= "property">
                    <img src="./images/${user.name}.jpeg" alt="star"><br>
                    <ul class="list">
                    <l1 onclick='showDetails(${index})' class='btn' id='${index}'>${user.name}</l1>
                    <div class='contain' id=${user.name}>
                    <p>Gender: ${user.gender}</p>
                    <p>Age:${user.height}</p>
                    </div>
                   
                    </ul>
                </div>
            </div>
    `
    markup += markupcontent
   }


    let content = document.querySelector('.content')
    content.innerHTML = markup;

    myStars = stars
    })


    function showDetails(index){

       

        let details = document.getElementById(`${myStars[index].name}`)

        console.log(details)

        // details.style.display = 'unset'
       

    }
  