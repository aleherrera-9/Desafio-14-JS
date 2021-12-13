
let newArray = [];
let orderList = [];
$(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then(promesa => promesa.json())
        .then(datos => {
            let all = Object.entries(datos.results);
            all.forEach(item => {
                newArray.push(item[1].name);
            })
            showCoquemones(newArray)
            $('#order').on('click', () => {
                $('#text').append('<p class="text-uppercase fs-3 text-center"> Ordenando</p>');
                $('#newTr').empty();
                $('#thnew').empty();
                $('#delay').append(`<div class="progress text-center">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 80%;"></div>
              </div>`);
              $('#text').slideDown("slow"); 
                sortPokemon(newArray)
                setTimeout(function () {
                    $(`#text`).toggle("slow");
                    $(`#text`).empty();
                    showCoquemones(newArray);
                    $('#delay').empty();
                }, 1000)
    
            })
            
        })
        .catch(error => console.log(error));

})
function sortPokemon(list) {
    list.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a == b) {
            return 0;
        }
        return 1;
    })
    console.log(list);
}
function showCoquemones(list) {
    $('#newTr').append(` <table class="table table-hover text-uppercase">
    <thead>
      <tr class="text-center">
        <th scope="col">ID</th>
        <th scope="col">Nombre</th>
      </tr>
    </thead>
    <tbody id="thnew">
     
    </tbody>
  </table>`)
    let indice = 1;
    for (item of list) {
        $('#thnew').append(`<tr class="table-info text-center text-uppercase" >
            <td>${indice}</td>
            <td>${item}</td>
          </tr>`)
        indice++;
    }
}
