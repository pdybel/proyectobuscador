//variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");


// contenedor para los resultados
const resultado = document.querySelector("#resultado");


const max = new Date().getFullYear();
const min = max - 10;

//genero un objeto con la busqueda

const datosBusqueda = {

    marca: " ",
    year: " ",
    minimo: " ",
    maximo: " ",
    puertas: " ",
    transmision: " ",
    color: " ",

}

//eventos
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(autos);  // muestra los autos al cargar

    llenarSelect();  // Llena las opciones de años
})    

// Event para los select de busqueda

marca.addEventListener("change", (e) => {

    datosBusqueda.marca = e.target.value;
    
    filtrarAuto();
})
year.addEventListener("change", (e) => {
    datosBusqueda.year = parseInt( e.target.value ); //para convertirlo a entero

    filtrarAuto();
})

minimo.addEventListener("change", (e) => {

    datosBusqueda.minimo = e.target.value;
    filtrarAuto();

})

maximo.addEventListener("change", (e) => {

    datosBusqueda.maximo = e.target.value;
    filtrarAuto();

})

puertas.addEventListener("change", (e) => {

    datosBusqueda.puertas = e.target.value

})

transmision.addEventListener("change", (e) => {

    datosBusqueda.transmision = e.target.value
})
color.addEventListener("change", (e) => {

    datosBusqueda.color = e.target.value
    
})

//Funciones

function mostrarAutos(autos) {
    
    limpiarHTML(); //elimina el html previo
    
    
    autos.forEach ( auto => {
        const {marca, modelo, year, puertas, transmision, precio, color } = auto;

        const autoHTML = document.createElement("p");

        autoHTML.textContent = `
        ${marca} ${modelo}  - ${year}  - ${puertas}  Puertas - Transmisión: ${transmision} - Precio
        ${precio} - Color: ${color}        
        `;
        //insertar en el HTML
        resultado.appendChild(autoHTML)
    })
}

//limpiar html

function limpiarHTML() {  // mientras que haya algo lo elimina
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }


}

function llenarSelect() {
    for( let i = max; i >= min; i-- ) {
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);  //agrega las opciones de año al select
    }
}

// funcion que filtra en base a la busqueda en este caso por marca

function filtrarAuto(){
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo );  // autos = (variable de la base de datos)
    //console.log(resultado);
    
    mostrarAutos(resultado);
}

function filtrarMarca(auto) {
    const {marca} = datosBusqueda;
    if(marca) {
        return auto.marca === marca
    }
    return auto;
}

function filtrarYear(auto) {
    const {year} = datosBusqueda;
    if(year) {
        return auto.year === year
    }
    return auto;
}

function filtrarMinimo(auto) {
    const {minimo} = datosBusqueda;
    if(minimo) {
        return auto.precio >= minimo
    }
    return auto;

}

function filtrarMaximo(auto) {
    const {maximo} = datosBusqueda;
    if(maximo) {
        return auto.precio <= maximo
    }
    return auto;
}
//////////////////////////////////////////////