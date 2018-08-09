
$(document).ready(function(){
   
    // Variables usuario
    
    var nombre = "";
    var id= "";
    var name="";
    var usuario="";
    var password="";
    var edad ="";
    var apellidoP ="";
    var apellidoM="";
    var domicilio ="";
    
    // Variables Producto
    
    var articulo ="";
    var idpro="";
    var modelo="";
    var cod_barra="";
    var imei1="";
    var imei2="";
    var precio_uni="";
    var costo_adqui="";
    var porcentaje_impu="";
    var ganancia="";
    var precio_mayo="";
    var precio_public="";
    var precio_medio="";
    
    // Variables Clientes
    
    var idclient= "";
    var cliente ="";
    var rfcC ="";
    var apellidoPC = "";
    var apellidoMC ="";
    var correoC ="";
    var telefonoC ="";
    var domicilioC ="";
    
    // Variables Sucursal
    
    var idsucu ="";
    var sucursalNombre ="";
    var ciudadSucursal="";
    var telefonoSucursal= "";
    var domiciliSucursal ="";
    var responsableSucursal ="";
    
    
    
    //llamo a la funcion hideAll (mas info abajo)
    hideAll();
    
    //Codigo que hace que el menu sea funcional, anade la clase active al elemento que fue seleccionado y se la quita a los demas. Tambien hace visible la ventana que fue seleccionada OJO el id y la clase del elemento del menu y el div del formulario tiene que ser el mismo
    
    $(".menu ul li").on("click", function(){
        hideAll();
        var id = $(this).attr("id");
        $("."+id).fadeIn();
        $(".menu ul li").removeClass("active");
        $(this).addClass("active"); 
        $(".modal, .modal-background, .modal-delete, modal-modificar").fadeOut(); 
    });
    
    //click sobre registrar
    $(".boton-registrar").on("click", function(){
        //modal que queremos abrir
        $(".modal-usuario").fadeIn();
        $(".modal-background").fadeIn();
    });
    
    $(".registrar-productos").on("click", function(){
        $(".modal-producto").fadeIn();
        $(".modal-background").fadeIn();
    });
    
     $(".registrar-inventario").on("click", function(){
        $(".modal-inventario").fadeIn();
        $(".modal-background").fadeIn();
    });
    
    $(".registrar-clientes").on("click", function(){
        $(".modal-clientes").fadeIn();
        $(".modal-background").fadeIn();
    
    });
    
     $(".registrar-sucursal").on("click", function(){
        $(".modal-sucursal").fadeIn();
        $(".modal-background").fadeIn();
    });
    
    //cerrar modal
    $(".cerrar-modal").on("click", function(){
       $(".modal, .modal-background").fadeOut(); 
    });
    
    
//Funcion para seleccionar tabla
    $('table  tr').click(function(e){
        
        $("table  tr").removeClass("seleccionado");
        $(this).addClass("seleccionado");
        
        id= $(this).find("td:eq(0)").text();
        idpro= $(this).find("td:eq(0)").text();
        idclient= $(this).find("td:eq(0)").text();
        idsucu= $(this).find("td:eq(0)").text();
        
        // Datos Usuario, toma el dato que se encuentra posicionado en la  columna 1 de la tabla e imprime el vator en el modal
        nombre = $(this).find("td:eq(1)").text();
        $(".nombre").text(nombre + "?");
        
        //Datos producto
        articulo = $(this).find("td:eq(1)").text();
        $(".articulo").text(articulo + "?");
       
        //Datos Cliente
        cliente = $(this).find("td:eq(1)").text();
        $(".client").text(articulo + "?");
        
         //Datos Sucursal
        sucursal = $(this).find("td:eq(1)").text();
        $(".sucursalNombre").text(sucursalNombre + "?");
        
        
    });
    
    //Funcion modal para botón eliminar
    
    $('.boton-eliminar').click(function(e){
        $(".idI").val(id);
        $(".idP").val(idpro);
        $(".idC").val(idclient);
        $(".idS").val(idsucu);
        $(".modal-eliminar").fadeIn();
        $(".modal-background").fadeIn();
                                     
    });
    
  
    
    $('.boton-modificar').click(function(e){
        
        //Valores para modificar Usuario
        
        id= $(".seleccionado").find("td:eq(0)").text();
        name= $(".seleccionado").find("td:eq(1)").text();
        usuario= $(".seleccionado").find("td:eq(2)").text();
        password= $(".seleccionado").find("td:eq(3)").text();
        edad= $(".seleccionado").find("td:eq(4)").text();
        apellidoP= $(".seleccionado").find("td:eq(5)").text();
        apellidoM= $(".seleccionado").find("td:eq(6)").text();
        domicilio= $(".seleccionado").find("td:eq(7)").text();
        
        $(".idI").val(id);
        $(".user").val(usuario);
        $(".password").val(password);
        $(".name").val(name);
        $(".apellidoP").val(apellidoP);
        $(".apellidoM").val(apellidoM);
        $(".edad").val(edad);
        $(".domicilio").val(domicilio);
        
        
        //Valores para modificar Producto, toma los datos dependiendo de la comulma posicionada para posteriormente mostrarlos en su respectivo input (Se consideran los valores dependiendo del nombre asignado al elemento class )
        
        
        idpro= $(".seleccionado").find("td:eq(0)").text();
        articulo= $(".seleccionado").find("td:eq(1)").text();
        modelo= $(".seleccionado").find("td:eq(2)").text();
        cod_barra= $(".seleccionado").find("td:eq(3)").text();
        imei1= $(".seleccionado").find("td:eq(4)").text();
        imei2= $(".seleccionado").find("td:eq(5)").text();
        precio_uni= $(".seleccionado").find("td:eq(6)").text();
        costo_adqui= $(".seleccionado").find("td:eq(7)").text();
        porcentaje_impu= $(".seleccionado").find("td:eq(8)").text();
        ganancia= $(".seleccionado").find("td:eq(9)").text();
        precio_mayo= $(".seleccionado").find("td:eq(10)").text();
        precio_public= $(".seleccionado").find("td:eq(11)").text();
        precio_medio= $(".seleccionado").find("td:eq(12)").text();
        
        
        $(".idP").val(idpro);
        $(".articulo").val(articulo);
        $(".modelo").val(modelo);
        $(".cod_barra").val(cod_barra);
        $(".imei1").val(imei1);
        $(".imei2").val(imei2);
        $(".precio_uni").val(precio_uni);
        $(".precio_adqui").val(costo_adqui);
        $(".porcentaje_imp").val(porcentaje_impu);
        $(".ganancia").val(ganancia);
        $(".precio_mayoreo").val(precio_mayo);
        $(".precio_public").val(precio_public);
        $(".precio_medio").val(precio_medio);
        
        //Valores para modificar Cliente
        
        idclient = $(".seleccionado").find("td:eq(0)").text();
        cliente= $(".seleccionado").find("td:eq(1)").text();
        rfcC= $(".seleccionado").find("td:eq(2)").text();
        apellidoPC= $(".seleccionado").find("td:eq(3)").text();
        apellidoMC= $(".seleccionado").find("td:eq(4)").text();
        correoC= $(".seleccionado").find("td:eq(5)").text();
        telefonoC= $(".seleccionado").find("td:eq(6)").text();
        domicilioC= $(".seleccionado").find("td:eq(7)").text();
        
   
        $(".idC").val(idclient);
        $(".nombreC").val(cliente);
        $(".rfcC").val(rfcC);
        $(".apellidoPC").val(apellidoPC);
        $(".apellidoMC").val(apellidoMC);
        $(".emailC").val(correoC);
        $(".telefonoC").val(telefonoC);
        $(".domicilioC").val(domicilioC);
             
        
         //Valores para modificar Sucursal
        
        idsucu = $(".seleccionado").find("td:eq(0)").text();
        sucursalNombre= $(".seleccionado").find("td:eq(1)").text();
        ciudadSucursal= $(".seleccionado").find("td:eq(2)").text();
        telefonoSucursal= $(".seleccionado").find("td:eq(3)").text();
        domiciliSucursal= $(".seleccionado").find("td:eq(4)").text();
        responsableSucursal= $(".seleccionado").find("td:eq(5)").text();
        
       
        $(".idS").val(idsucu);
        $(".sucursalNombre").val(sucursalNombre);
        $(".sucursalCiudad").val(ciudadSucursal);
        $(".sucursalTelefono").val(telefonoSucursal);
        $(".sucursalDomicilio").val(domiciliSucursal);
        $(".sucursal_Responsable").val(responsableSucursal);
        
               
        $(".modal-modificar").fadeIn();
        $(".modal-background").fadeIn();
                                     
    });
    
});


//funcion que esconde todas las ventanas
function hideAll(){
    $(".usuarios").hide();
    $(".productos").hide();
    $(".clientes").hide();
    $(".sucursal").hide();
    $(".inventario").hide();
}
