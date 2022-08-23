//Variable que recupera la informacion del local storage
let saldoCajaOperable = localStorage.getItem("saldo");
//Funcion que convierte el dato recuperado del localstorage a numero
const convertirStorageANumero = () => parseFloat(saldoCajaOperable);
//Variable que almacena el dato convertido a numero
let saldoOperable = convertirStorageANumero();





  //Funcion que coinvierte un numero al formato de pesos argentinos
  numeroAPesos = (dinero) => {
    return (dinero = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(dinero));
  }
  //Codigo que dispara un alerta que confirma la operación
  const confirmar = () => {
    Swal.fire({
      icon: 'success',
      title: `Operación realizada con éxito. Su saldo es ${numeroAPesos(saldoCajaAhorro)}`,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
      showClass: {
        popup: 'animate__animated animate__fadeIn'
      }
    }).then(function(){
      window.location.href = "opcion-transferencias.html";
  });
  }
  //Codigo que establece un contador que permite armar el condicional
  let contadorClicks = 0  ;
  //Funcion que alterna las llamadas a las funciones sobre el mismo boton html
  capturarValor.addEventListener('click', function() {
    if (contadorClicks == 0) {
      //Llamada a la funcion que selecciona la cuenta a la cual se desea transferir dinero
      seleccionarCuenta(inputTransferencia.value);
      //Codigo que agrega una unidad al contador
      contadorClicks = 1;
      console.log(contadorClicks);
    }else if (contadorClicks == 1) {
      //Llamada al alert que confirma la operacion
      confirmar();
    }
  });
  
  