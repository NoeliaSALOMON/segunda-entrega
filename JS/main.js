function comenzarControlador() {
    class Cuentas {
        constructor(){
            this.boletas = []
        }
         agregarBoletas(nombreServicio, valorServicio){
            this.boletas.push({id:this.generarId(),nombreServicio,valor:precioServicio});
            console.log("Agregaste un servicio");
          }
    
          eliminarBoletas(id){
              this.boletas = this.boleta.filter(item => item.id != id);
              console.log("sacaste un servicio");
          }
    
          totalBoletas(){
           return this.boletas.length;
          }
    
          sumaTotal(){
              let total = 0;
              this.boletas.forEach(item => {
                  total += item.valor;
              });
              return total;
          }
    
          generarId() {
              let max = 0;
    
              this.boletas.forEach(item => {
                  if(item.id > max) {
                      max = item.id;
                  }
              });
              return max + 1;
          }
    
          listarBoletas(){
              let contenido = "Servicios agregados:\n";
              this.boletas.forEach(item => {
                  contenido += "${item.id} - ${item.nombre} $${item.valor}\n"
              });
              return contenido;
          }
      }
    
    let nombre = "";
    let valor = "";
    const Cuentas = new Cuentas();
    
    while (nombre.toLocaleUpperCase() != "FINALIZAR!!") {
      nombre = prompt ("Ingrese el Nombre del Servicio:(escriba exit para finalizar)");
      precio = parseFloat(prompt("Ingrese el Valor del Servicio:"))
      Cuentas.agregarBoletas(nombre,valor);
    }
    alert(Cuentas.listarBoletas()) 
    }
    
    let btnAceptar = document.getElementById("btnAceptar");
    btnAceptar.onclick = comenzarControlador;