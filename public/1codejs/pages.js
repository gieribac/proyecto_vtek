const 
    index=`<div class="fondo1"></div>
        <div class="fondo2"></div>
        <div class="logo"> </div>
        <div id="formulario">
            <div>
                <h5 class="letrab">inicio de sesión</h5>
            </div>
            <div class="input-group mb-3">
                <input type="text" id="correo" class="form-control inputsr" placeholder="usuario" aria-label="usuario" aria-describedby="basic-addon1" style="
                margin-bottom: 7px; margin-top: 7px;">
            </div>
            <input type="text" id="contrasena" class="form-control inputsr" placeholder="contraseñas" aria-label="contraseña" aria-describedby="basic-addon1" style="margin-bottom: 7px">
            <div class="botones">
                <div>
                    <button id="login" type="button" class="btn btningresar1"> <h6 class="letrabtn">ingresar</h6></button>
                </div>
            </div>
        </div>
        </div>
        </div>`,
    tcoordinador_default = `<div>Técnico Coordinador</div>`,
    dtecnico_default = `<div>Director Técnico</div>`,
    experto_default = `<div>Experto</div>`,
    admin_default =`<div class="d-flex align-items-stretch flex-column">
    <div id="menu"></div>
      <div class="row-cols-lg-4 col-md-4 col-sm-6 col-xs-12 ">
          <div class="infousuario ">
              <div class="persona-color2"></div>
              <h4 class="letrausuario">Nombre usuario</h4>
          </div>
      </div>
      <div class="cols-lg-4  col--6 col-xs-12   margenusu">
          <div class="input-group p-3">
              <div class="inputsdivi">
                  <input type="text" class="form-control inputsr sombra" placeholder="Direccíon" aria-label="usuario" id="direccionU"  disabled></div>
              <div class="inputsdivi"> <input type="text" class="form-control inputsr sombra" placeholder="Ciudad" aria-label="usuario" id="ciudadU" disabled></div>
          </div>
          <div class="input-group p-3">
              <div class="inputsdivi">
                  <input type="text" class="form-control inputsr sombra" placeholder="nombre responsable" aria-label="usuario" id="nombreU" disabled></div>
              <div class="inputsdivi">
                  <input type="text" class="form-control inputsr sombra" placeholder="cargo" aria-label="usuario" id="cargoU" disabled></div>
          </div>
          <div class="input-group p-3">
              <div class="inputsdivi">
                  <input type="text" class="form-control inputsr sombra" placeholder="tipo de identificacion" aria-label="usuario" id="tipoIDu" disabled></div>
              <div class="inputsdivi">
                  <input type="text" class="form-control inputsr sombra" placeholder="identificacíon" aria-label="usuario" id="IDu" disabled></div>
          </div>

          <div class="input-group p-3 ">
              <div class="inputsdivi ">
                  <input type="text " class="form-control inputsr sombra" id="numeroContactoU" placeholder="numero de contácto " aria-label="usuario " disabled></div>
              <div class="inputsdivi "> <input type="text " id="NumeroClientesU" class="form-control inputsr sombra " placeholder="Numero de cliente" aria-label="usuario " disabled></div>
          </div>
          <div>
              <button type="button " class="btn btnguardar2 " id="editarinfoU"> <h6 class="letrabtng "> Editar</h6></button>
          </div>





      </div>
  </div>`,
    cliente_default = `<div>Cliente</div>`,
    scliente_default = `<div>Servicio al cliente</div>`,
    comercial_default   = `<div>Comercial</div>`,
    admin_infooffer = `<div class="d-flex align-items-stretch flex-column">
    <div id="menu"></div>
      <div class="row-cols-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div class="infopagina">
            <div class="persona-color"></div>
            <h4 class="letrainfo">Clientes</h4>
          </div>
      </div>
      <div class="col-lg-9 ">
        <div> </div>
        <div class="columnas-clasi4 alinear_ofertas"><h6 class="letra-columna">oferta</h6></div>
        <div class="columnas-clasi4 alinear_ofertas2"><h6 class="letra-columna">cliente</h6></div>
        <div class="columnas-clasi4 alinear_ofertas2"><h6 class="letra-columna">Producto</h6></div>
        <div class="columnas-clasi4 alinear_ofertas2"><h6 class="letra-columna">Estado</h6></div>         
          <div class="columnas-clasi3 alinear_ofertas2"><h6 class="letra-columna">Formalizar</h6></div>
      </div>
      <div class="col-lg-10 " style="margin-top: 20px;">
          <div class="recuadro margenr1 margenofertas sombra" style="margin-left:40px;" id="cliente">
            <div class="p-3" ><h6 >oferta # 3</h6></div>
          </div>
          <div class="recuadro margenr sombra" id="legal">
            <div class="p-3" ><h6 > cliente0 # 3</h6></div>
          </div>
          <div class="recuadro margenr sombra" id="nit">
            <div class="p-3" ><h6 >8305556512</h6></div>
          </div>
          <div class="recuadro margenr sombra" id="ncontacto">
            <div class="p-3" ><h6 >8305556512</h6></div>
          </div>
          <div class="recuadro margenr sombra" id="ncontacto">
              <div class="p-3" ><h6 ><div class="pendiente_formalizar"> pendiente</div> </h6></div>
              <div class="p-3" ><h6 ><div class="listo_formalizar"> listo</div></h6></div>
            </div>
      </div>
      </div>`,
    admin_infooffers = '',
    admin_infoclients = ` <div>
    <div class="d-flex align-items-stretch flex-column">
      <div id="menu"></div>
        <div class="row-cols-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div class="infopagina">
              <div class="persona-color"></div>
              <h4 class="letrainfo">Clientes</h4>
            </div>
        </div>
        <div class="col-lg-9 ">
          <div> </div>
          <div class="columnas-clasi2 alinear"><h6 class="letra-columna">Nombre compañia</h6></div>
          <div class="columnas-clasi2 alinear"><h6 class="letra-columna">Representante legal</h6></div>
          <div class="columnas-clasi2 alinear"><h6 class="letra-columna">NIT</h6></div>
            <div class="columnas-clasi alinear"><h6 class="letra-columna">Número de contacto</h6></div>
        </div>
        <div class="col-lg-9 " style="margin-top: 20px;">
           <div class="i-azul centrarF "> 
            <div class="recuadro margenr1 sombra" id="cliente">
              <div class="p-3" ><h6 >cliente</h6></div>
                        </div>
            <div class="recuadro margenr sombra" id="legal">
              <div class="p-3" ><h6 > rep.LEGAL # 3</h6></div>         
            </div>
            <div class="recuadro margenr sombra" id="nit">
              <div class="p-3" ><h6 >8305556512</h6></div>            
            </div>
            <div class="recuadro margenr2 sombra" id="ncontacto">
              <div class="p-3" ><h6 >8305556512</h6></div>            
            </div>
          </div>
        </div>
        </div>`,
    admin_createuser = ` <div class="d-flex align-items-stretch flex-column">
    <div id="menu"></div>
        <div class="row-cols-lg-4 col-md-4 col-sm-6 col-xs-12 ">
            <div class="infopagina">
              <h4 class="letrainfo">crear usuario</h4>          
            </div>
        </div>
        <form id="formcreateuser">
        <fieldset>
        <div class="cols-lg-4  col--6 col-xs-12   margenusu">
        
            <div class="input-group p-3">
                <div class="inputsdivi" id="nombre">
                    <input required="" type="text" class="form-control inputsr sombra imputs_tamano " placeholder="Nombre de responsable " aria-label="usuario" id="nombreF">
                  <i class="formulario__validacion-estado fas fa-times-circle"></i>
                  </div>              
                  <p class="nombreFme formulario__input-error">Admite letras, espacios y tildes. Máximo 50 caracteres </p>
                <div class="inputsdivi  "> <input required="" type="Email" class="form-control inputsr sombra imputs_tamano"  placeholder="Correo" aria-label="usuario" id="correoF">
                  <i class="formulario__validacion-estado fas fa-times-circle"></i>
                </div>
                <p class="correoFme formulario__input-error">Escriba un correo válido</p>
            </div>
            <div class="input-group p-3">
                <div class="inputsdivi ">
                    <input required="" type="text" class="form-control inputsr sombra imputs_tamano " placeholder="nombre de usuario" aria-label="usuario" id="usuarioF">
                    <i class="formulario__validacion-estado fas fa-times-circle"></i>
                  </div>
                  <p class="usuarioFme formulario__input-error"> Letras, números, guión y guión bajo. Máximo 16 caracteres</p>
                <div class="inputsdivi ">
                    <input required="" type="tel" class="form-control inputsr sombra imputs_tamano " placeholder="Numero de contacto" aria-label="usuario" id="numeroF">
                    <i class="formulario__validacion-estado fas fa-times-circle"></i>
                  </div>
                  <p class="numeroFme formulario__input-error">El número de contacto debe tener de 7 a 14 dígitos</p>
            </div>
            <div class=" input-group p-3 " style="margin-bottom: -30px;">
              <div>
                <select required="" class="form-select dropdown1 sombra" aria-label="Default select example" id="tipoIDF">
                  <option selected>Seleccionar Opción</option>
                  <option value="1">Tarjeta de Identidad</option>
                  <option value="2">Cédula</option>
                  <option value="3">Cédula de Extranjeria </option>
                </select>
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
              </div>
              <p class="tipoIDFme formulario__input-error">Seleccione tipo de Identificación</p>
                <div class="inputsdivi">
                    <div> <input required="" type="number" class="form-control inputsr sombra  imputs_tamano " id="identificacionF" placeholder="Identificacion " aria-label="usuario ">                      <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                      <p class="identificacionFme formulario__input-error">De 6 a 10 dígitos</p>
                      </div>
                </div>
            <div class="input-group p-3 ">
                <div class="inputsdivi  ">
                    <input required="" type="password" class="form-control inputsr sombra imputs_tamano " id="contrasenaF" placeholder="Contraseña " aria-label="usuario ">
                    <i class="formulario__validacion-estado fas fa-times-circle"></i>
                  </div>
                  <p class="contrasenaFme formulario__input-error">La contraseña debe tener 6 caracteres y como mínimo un dígito, una letra minúscula y una mayúscula</p>
                <div class="inputsdivi  "> <input required="" type="password" id="recontrasenaF" class="form-control inputsr sombra imputs_tamano " placeholder="rectificar contraseña " aria-label="usuario ">
                  <i class="formulario__validacion-estado fas fa-times-circle"></i>
                </div>
                <p class="recontrasenaFme formulario__input-error">Repita la contraseña</p>
            </div>
            <div class="dropdown show p-3 ">
              <div >
                <select class="form-select dropdown2 sombra " aria-label="Default select example" id="cargocliF">
                  <option selected>Seleccionar Opción</option>
                  <option value="admin">Administrador</option>
                  <option value="cliente">Cliente</option>
                  <option value="comercial">Comercial</option>
                  <option value="dtecnico">Director Técnico</option>
                  <option value="experto">Experto</option>
                  <option value="scliente">Servicio al Cliente</option>
                  <option value="tcoordinador">Técnico Coordinador</option>
                </select>
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
              </div>
                <p class="cargocliFme formulario__input-error">Seleccione el Cargo</p>
            </div>
            <div class="formulario__mensaje" id="formulario__mensaje">
            <i class="formulario"></i>
            </div>
                <div class="naranjasinb">
                <h6 class="letracargo">cargo</h6> </div>
            <div>
              <div class="avisopSave"></div>
                <button type="submit" class="btn btnguardar " id="saveF"> <h6 class="letrabtng ">Guardar</h6></button>
            </div>
        </fieldset>
      </form>
    </div>`,
    logout = `<button id="SignOff">cerrar sesion</button>`, 
    cliente_offer = `<div class="d-flex align-items-stretch flex-column">
    <div id="menu"></div>

    
      <div class="row-cols-lg-4 col-md-4 col-sm-6 col-xs-12">

          <div class="infopagina">
            <div class="persona-color"></div>

            <h4 class="letrainfo">Clientes</h4>
            

          </div>
      </div>
      <div class="col-lg-9 ">
        <div> </div>

        <div class="columnas-clasi2 alinear"><h6 class="letra-columna">Usuarios</h6></div>

          
          <div class="columnas-clasi alinear"><h6 class="letra-columna">Número de contacto</h6></div>


      </div>
      <div class="col-lg-9 " style="margin-top: 20px;">
         <div class="i-azul "> 


          <div class="moverH">
          
         


          <div class="recuadro margenr1 sombra "style="margin-top: 30px" id="cliente">
              <div class="check-color-c p-3" ></div>
            <div><h6 class="letra_IDC centrarF" >ID cliente</h6></div>
            <div ><h6 class="letra_IDR centrarF">Fabrica aseguradora</h6></div>
            


          </div>
          <div class="recuadro margenr sombra" style="margin-top: 30px" id="descargar">
              <div class="descargarC p-3" ></div>
            <div><h6 class="letra_descarga">Descargar <br> certificados</h6></div>
            


          </div>
          <div class="recuadro margenr sombra"  style="margin-top: 30px" id="info_ofertas">
            <div class="p-3" ><h6 >propuesta #1  <a href="#"> ver info. de ofertas</a></h6></div>
            <div class="p-3" ><h6 >propuesta #1  <a href="#"> ver info. de ofertas</a></h6></div>
            <div class="p-3" ><h6 >propuesta #1  <a href="#"> ver info. de ofertas</a></h6></div>
            <div class="p-3" ><h6 >propuesta #1  <a href="#"> ver info. de ofertas</a></h6></div>
            


          </div>

          <div>
              <button type="button" class="btn btncontactarC"> <h6 class="letrabtn"> ingresar</h6></button>


          </div>
          </div>

          
        




        </div>
        


      </div>
      





      </div>`,
    comercial_infoclientes = '',
    comercial_infocerts = '', 
    comercial_infooffers = '',
    comercial_editcliente = '',
    comercial_createcliente = '',
    comercial_createfactorie = '',
    comercial_infoofer = '',
    dtecnico_planeval = '',
    dtecnico_infoclient = '',
    dtecnico_infoprocesos = '',
    experto_createoffer = '',
    experto_createeval = '',
    experto_paleval = '',
    experto_infocliente = '',
    scliente_infooffers = `<div class="d-flex align-items-stretch flex-column">
    <div id="menu"></div>

    
      <div class="row-cols-lg-4 col-md-4 col-sm-6 col-xs-12">

          <div class="infopagina">
            <div class="persona-color"></div>

            <h4 class="letrainfo">Clientes</h4>
            

          </div>
      </div>
      <div class="col-lg-9 ">
        <div> </div>

        <div class="columnas-clasi2 alinear"><h6 class="letra-columna">Usuarios</h6></div>

          
          <div class="columnas-clasi alinear"><h6 class="letra-columna">Número de contacto</h6></div>


      </div>
      <div class="col-lg-9 " style="margin-top: 20px;">
         <div class="i-azul "> 


          <div class="moverH">
          
         


          <div class="recuadro margenr1 sombra "style="margin-top: 30px" id="cliente">
              <div class="check-color-c p-3" ></div>
            <div><h6 class="letra_IDC centrarF" >ID cliente</h6></div>
            <div ><h6 class="letra_IDR centrarF">Fabrica aseguradora</h6></div>
            


          </div>
          <div class="recuadro margenr sombra" style="margin-top: 30px" id="descargar">
              <div class="descargarC p-3" ></div>
            <div><h6 class="letra_descarga">Descargar <br> certificados</h6></div>
            


          </div>
          <div class="recuadro margenr sombra"  style="margin-top: 30px" id="info_ofertas">
            <div class="p-3" ><h6 >propuesta #1  <a href="#"> ver info. de ofertas</a></h6></div>
            <div class="p-3" ><h6 >propuesta #1  <a href="#"> ver info. de ofertas</a></h6></div>
            <div class="p-3" ><h6 >propuesta #1  <a href="#"> ver info. de ofertas</a></h6></div>
            <div class="p-3" ><h6 >propuesta #1  <a href="#"> ver info. de ofertas</a></h6></div>
            


          </div>

          <div>
              <button type="button" class="btn btncontactarC"> <h6 class="letrabtn"> ingresar</h6></button>


          </div>
          </div>

          
        




        </div>
        


      </div>
      





      </div>`,
    scliente_infooffer = '',
    scliente_certcliente = '',
    scliente_usuariocliente = '',
    scliente_infoclientes = '',
    tcoordinador_createasignacion = '',
    tcoordinador_asignacion = '';

export {index,
    admin_default, admin_infooffer, admin_infooffers, admin_infoclients, admin_createuser, logout, 
    cliente_default, cliente_offer, 
    comercial_default, comercial_infoclientes, comercial_infocerts, comercial_infooffers, comercial_editcliente, 
    comercial_createcliente, comercial_createfactorie, comercial_infoofer,
    dtecnico_default, dtecnico_planeval, dtecnico_infoclient, dtecnico_infoprocesos,
    experto_default, experto_createoffer, experto_createeval, experto_paleval, experto_infocliente,
    scliente_default, scliente_infooffers, scliente_infooffer, scliente_certcliente, scliente_usuariocliente, scliente_infoclientes,
    tcoordinador_default, tcoordinador_createasignacion, tcoordinador_asignacion
} 