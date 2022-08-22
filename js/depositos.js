let saldoCajaAhorro = 150000;
//Codigo que captura el boton que confirma la operacion
const captura = document.getElementById("depositos-submit");
//Codigo que captura el boton que modifica la operacion 
const clean = document.getElementById("limpiar-campo");
//Codigo que captura el campo donde el usuario debe ingresar la cantidad de dinerao que desea depsositar
let inputDepositos = document.getElementById("depositos-input");
//Funcion que captura la informacion brindada por el usuario y la convierte en un objeto
captura.onclick = () => {
  // Constructor del objeto depositos;
  class Operacion {
    constructor(fecha, hora, operacion, monto, saldo) {
      this.fecha = fecha;
      this.hora = hora;
      this.operacion = operacion;
      this.monto = monto;
      this.saldo = saldo;
    }
  }
  //Codigo que utiliza el constructor Depositos para crear un nuevo objeto que contiene los datos de la operacion realizada
  nuevoDeposito = new Operacion(
    capturarDiaDeposito(),
    capturarHoraDeposito(),
    nombrarOperacion(),
    numeroADinero(),
    convertirSaldoADinero()
  );
  //Llamada a las funciones declaradas 
  confirmarOperacion();
  modificarOpcion();
  agregarTexto();
  modificarOpcion();
}
//Funcion que captura la fecha en que se realiza la operación
capturarDiaDeposito = () => new Date().toLocaleDateString();
//Funcion que captura la hora en que se realiza la operacion
capturarHoraDeposito = () => new Date().toLocaleTimeString();
//Codigo que informa el tipo de operacion
nombrarOperacion = () => "Depósito";
//Funcion que captura la informacion sobre la operacion provista por el usuari
depositar = () => inputDepositos.value;
//Funcion que parsea el numero ingresado por el usuario
parsearDineroDepositado = () => parseInt(depositar());
//Codigo que actualiza el saldo de la caja de ahorro simulada
actualizarSaldoCajaAhorro = () => {
  saldoCajaAhorro = parsearDineroDepositado() + saldoCajaAhorro;
  return saldoCajaAhorro;
}
//Funcion que convierte a pesos el dato parseado
numeroADinero = () => numeroAPesos(depositar());
//Codigo que convierte a pesos el saldo simulado
convertirSaldoADinero = () => numeroAPesos(actualizarSaldoCajaAhorro());
//Funcion que coinvierte un numero al formato de pesos argentinos
numeroAPesos = (dinero) => {
  return (dinero = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(dinero));
}
//Funcion que devuelve al usuario la confirmacion de su operacion 
const text = document.querySelector(".text");
confirmarOperacion = () => {
  text.innerHTML = "";
  text.innerText = `
  Operacion realizada con exito. Su saldo es: ${nuevoDeposito.saldo}
  `;
}
// Funcion que limpia el campo input en caso de que el usuario quiera modificar el importe a depositar
clean.onclick = () => {
  inputDepositos.value = "";
 }
//Funcion que modifica el HTML al momento de devolver la operacion solicitada por el usuario
function agregarTexto() {
  //Codigo que agrega texto al html
  let textoAgregado = document.querySelector(".agregar-texto");
  textoAgregado.innerText = "Desea realizar otra operacion?";
}
//Funcion que modifica el HTML al momento de devolver la operacion solicitada por el usuario
function modificarOpcion() {
  //Codigo que cambia texto del html
  let opcionModificada = document.querySelector(".opcion-modificada");
  opcionModificada.innerHTML = "";
  opcionModificada.innerHTML =
    "<p>Si</p> <a href='../cajero/cajero.html'> <div class='btn-derecha' id='btn-saldo'></div></a></li>";
  //Codigo que cambia texto del html
  let opcionModificadaDos = document.querySelector(".opcion-modificada-dos");
  opcionModificadaDos.innerHTML = "";
  opcionModificadaDos.innerHTML =
    '<p>No</p> <a href="../salir/salir.html" class="link"> <div class="btn-derecha"></div></a>';
}
