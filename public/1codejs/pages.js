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
    admin_default = `<div>Nombre del administrador</div>`,
    cliente_default = `<div>Cliente</div>`,
    scliente_default = `<div>Servicio al cliente</div>`,
    comercial_default   = `<div>Comercial</div>`,
    admin_infooffer = '',
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
    admin_createuser = '',
    logout = `<button id="SignOff">cerrar sesion</button>`, 
    cliente_offer = '',
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
    scliente_infooffers = '',
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