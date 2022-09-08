import { queryOferta } from "./models/post.js";

const observerdatos = new MutationObserver(()=>{ 

        const charge = () => {

        const clientSelectID = localStorage.getItem("clientSelectID");
        Boolean(clientSelectID) && (() => {
            queryOferta(clientSelectID).then(t => cargaDataOferta(t.data())).catch(e => console.log(e))
        })()
        
        const cargaDataOferta = (data) => {
            
            const d = document,
            fecha = new Date(),        
            year = fecha.getFullYear();
            let day = fecha.getDate(),
            month = fecha.getMonth()+1,
            monthletra = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"].indexOf(month-1);
            day < 10 && (() => day=`0${day}`)();
            let DateVig="";
            // month < 10 && (() => month=`0${month}`)();
            

            // const DateVig = `${day_} / ${month_} / ${year_}`;
            const head = `<div></div>
            <div >
                <table style="width: 70% !important; margin-left: 15%; margin-right: 15%;">
                    <tr>
                    <td  class="centrar_t" style="padding: 5px; "><div class="logoPDF"></div></td>
                    <td  class="centrar_t " style="padding: 5px;" >OFERTA COMERCIAL DE CERTIFICACION</td>
                    <td class="centrar_t" style="padding: 5px;" >GV-FC 02 v:8 <br>fecha de vigencia: <br>${DateVig}</td>
                    </tr>
                    </table>
                
                </div>
            <div>
                <p></p>
                <p></p>
                </div>`,
            footer = `<div class="iconosPdf"></div>`;

            const pdf1 = `<div id="pg1 " style="margin-left: 10% ; margin-right: 10%;">
            <head>${head}
                
            </head>
            <main>
                <div class="letra1pdf" >
                    <p id="fecha"><b>Bogotá, ${day} de ${monthletra} del ${year} </b></p> 
                    <br><br>
                    <p>Señores:</p>
                    <p>${data.ClienteOF}</p>
                    <p id="repLegal"></p>
                    <p>Representante Legal</p>
                    <p id="ciudad"></p>
                    <br>
                    <p>Respetados Señores,</p>
                    <br>
                    <p>En atención a su solicitud de certificación de producto, presentamos la siguiente oferta comercial formal donde establecemos tarifas, alcance y metodologías para el servicio de certificación.</p>
                </div>
                <div class="margnees_elem">
                    <table style="width: 70% !important; margin-left: 15%; margin-right: 15%;">
                    <tr>
                    <td  class="centrar_t letras_blanco_fAzul" style="padding: 5px; ">OFERTA COMERCIAL N°</td>
                    <td  class="centrar_t " style="padding: 5px; position: relative;">    <p id ="noOferta" class="subrayado"> e5-dw-1384-2022 </p></td>
                    </tr>
                    </table>
                </div>
                <div class="margnees_elem" >
                    <h1 class="letra_titulos_pdf1" >1. ALCANCE DE LA CERTIFICACIÓN</h1>    
                    <h2 class="letra_subtitulospdf">1.1 Esquema de certificación</h2>
                </div>
                <table>
            
                    <tr>
                        <td class="centrar_t letras_blanco_fAzul">Esquema de certificación</td>
                        <td class="centrar_t" id="esquema"> esquema</td>
                    </tr>
                    <tr>
                        <td class=" letras_blanco_fAzul centrar_t">Vigencia</td>
                        <td class=" centrar_t" id="vigencia"> vig</td>
                    </tr>
                    <tr>
                        <td class=" letras_blanco_fAzul centrar_t">Seguimientos</td>
                        <td class="centrar_t" id="seguimientos"> seg</td>
                    </tr>
                </table>
                <div class="margnees_elem">
                    <h2 class="letra_subtitulospdf">1.2 Empresa solicitante de los servicios de certificación (Empresa pagadora de los servicios)</h2>
                </div>
                <table>
                    <tr>
                        <td class="letras_blanco_fAzul centrar_t" colspan="4">DATOS DE LA EMPRESA SOLICITANTE DEL SERVICIO DE CERTIFICACIÓN</td>
                    </tr>
                    <tr>
                        <td class="letras_tabla2 " style="padding: 10px;">Nombre de la compañía
                            (Como aparece
                            registrada)</td>
                        <td class="letras_tabla3" id="datos_nombreCliente"></td>
                        <td class="letras_tabla2">Número de NIT:</td>
                        <td class="letras_tabla3" style="align-items: center;" id="datos_nit"></td>
                    </tr>
                    <tr>
                        <td class="letras_tabla2" style="padding: 10px;">Representante Legal</td>
                        <td class="letras_tabla3" style="align-items: center;" id="datos_repLegal"></td>
                        <td class="letras_tabla2" style="padding: 10px;">Identificación:</td>
                        <td class="letras_tabla3" style="align-items: center;" id="datos_identificacion"></td>
                    </tr>
                    <tr>
                        <td class="letras_tabla2" style="padding: 10px;">Dirección comercial: </td>
                        <td class="letras_tabla3" style="align-items: center;" id="datos_direccion"></td>
                        <td class="letras_tabla2" style="padding: 10px;">Web: </td>
                        <td class="letras_tabla3" style="align-items: center;" id="datos_web"></td>
                    </tr>
                    <tr>
                        <td class="letras_tabla2" style="padding: 10px;">Ciudad/Depto.:</td>
                        <td class="letras_tabla3" style="align-items: center;" id="datos_ciudad"></td>
                        <td class="letras_tabla2" style="padding: 10px;">Tel:</td>
                        <td class="letras_tabla3" style="align-items: center;" id="datos_tel"></td>
                    </tr>
                    <tr>
                        <td class="letras_tabla2" style="padding: 10px;">Nombre del
                            responsable: </td>
                        <td class="letras_tabla3" style="align-items: center;" id="datos_nombreResponsable"></td>
                        <td class="letras_tabla2" style="padding: 10px;">Mail:</td>
                        <td class="letras_tabla3" style="align-items: center;" id="datos_mail"></td>
                    </tr>
                    <tr>
                        <td class="letras_tabla2" style="padding: 10px;" >Cargo:</td>
                        <td class="letras_tabla3" style="align-items: center;" id="datos_cargo"></td>
                        <td class="letras_tabla2" style="padding: 10px;" >Tel/Cel. (Móvil):</td>
                        <td class="letras_tabla3" style="align-items: center;" id="datos_contacto"></td>
                    </tr>
                </table>
            </main>
            <footer>
                <div >${footer}
                    
                </div>
                <p>1</p>
                <div></div>
            </footer>
        </div>`,
            pdf2 = `<div id="pg2" style="margin-left: 10% ; margin-right: 10%;">
            <head>
            ${head}
            </head>
            <main>
                <div class="margnees_elem">
                <h2 class="letra_subtitulospdf">1.3 Empresa Titular del certificado de conformidad</h2>  
                </div>
                <table>
                <tr>
                    <td class="letras_blanco_fAzul centrar_t" colspan="4">DATOS DE LA EMPRESA TITULAR DEL CERTIFICADO DE CONFORMIDAD</td>
                </tr>
                <tr>
                    <td class="letras_tabla2 " style="padding: 10px;">Nombre de la compañía
                        (Como aparece
                        registrada)</td>
                    <td class="letras_tabla3" id="datos_nombreCliente"></td>
                    <td class="letras_tabla2">Número de NIT:</td>
                    <td class="letras_tabla3" style="align-items: center;" id="datos_nit"></td>
                </tr>
                <tr>
                    <td class="letras_tabla2" style="padding: 10px;">Representante Legal</td>
                    <td class="letras_tabla3" style="align-items: center;" id="datos_repLegal"></td>
                    <td class="letras_tabla2" style="padding: 10px;">Identificación:</td>
                    <td class="letras_tabla3" style="align-items: center;" id="datos_identificacion"></td>
                </tr>
                <tr>
                    <td class="letras_tabla2" style="padding: 10px;">Dirección comercial: </td>
                    <td class="letras_tabla3" style="align-items: center;" id="datos_direccion"></td>
                    <td class="letras_tabla2" style="padding: 10px;">Web: </td>
                    <td class="letras_tabla3" style="align-items: center;" id="datos_web"></td>
                </tr>
                <tr>
                    <td class="letras_tabla2" style="padding: 10px;">Ciudad/Depto.:</td>
                    <td class="letras_tabla3" style="align-items: center;" id="datos_ciudad"></td>
                    <td class="letras_tabla2" style="padding: 10px;">Tel:</td>
                    <td class="letras_tabla3" style="align-items: center;" id="datos_tel"></td>
                </tr>
                <tr>
                    <td class="letras_tabla2" style="padding: 10px;">Nombre del
                        responsable: </td>
                    <td class="letras_tabla3" style="align-items: center;" id="datos_nombreResponsable"></td>
                    <td class="letras_tabla2" style="padding: 10px;">Mail:</td>
                    <td class="letras_tabla3" style="align-items: center;" id="datos_mail"></td>
                </tr>
                <tr>
                    <td class="letras_tabla2" style="padding: 10px;" >Cargo:</td>
                    <td class="letras_tabla3" style="align-items: center;" id="datos_cargo"></td>
                    <td class="letras_tabla2" style="padding: 10px;" >Tel/Cel. (Móvil):</td>
                    <td class="letras_tabla3" style="align-items: center;" id="datos_contacto"></td>
                </tr>
            </table>
            <div class="margnees_elem">
                <h2 class="letra_subtitulospdf">1.4 Información de compañía fabricante</h2>
                </div>
                <table border="1">
                    <tr>
                        <th class="letras_blanco_fAzul centrar_t"  colspan="4">INFORMACION DE LA COMPAÑÍA FABRICANTE</th>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;" >Nombre de la Compañía
                            Fabricante: </td>
                        <td colspan="3" id="nombreFabrica"></td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;"  >Dirección de la planta/s en
                            donde se fabrica el producto:</td>
                        <td colspan="3" id="direccionFabrica"></td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;" >Contacto:</td>
                        <td id="nombreresponsableFabrica"></td>
                        <td class= "letras_tabla2" style="padding: 10px; >País:</td>
                        <td id="paisFabrica"></td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;" >Teléfono:</td>
                        <td id="telFabrica"></td>
                        <td class= "letras_tabla2" style="padding: 10px;" >Ciudad:</td>
                        <td id="ciudadFabrica"></td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;"  >Mail:</td>
                        <td colspan="3" id="mailFabrica"></td>
                    </tr>
                </table>
                <div>
                <h2 class="letra_subtitulospdf margnees_elem">1.5 Información de Productos a evaluar y Referencial técnico aplicable:</h2> 
                <p class="letra1pdf">La información específica de los productos a certificar se encuentra detallada en el formato <b>GV-FC-01 Solicitud
                    de servicios de certificación.</b> 
                    </p>
                </div>
                <table>
                    <tr>
                        <th class="letras_blanco_fAzul  centrar_t">INFORMACION GENERAL DE PRODUCTOS A
                            CERTIFICAR</th>
                        <th class="letras_blanco_fAzul centrar_t">RESOLUCIÓN APLICABLE</th>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;" >UTENSILIOS DE CERAMICA EN CONTACTO CON
                            ALIMENTOS</td>
                        <td class= "letras_tabla2" style="padding: 10px;" >Resolución n° 1440 del 20 de septiembre del 2021 del
                            Ministerio de salud y protección social</td>
                    </tr>
                </table>
            </main>
            <footer>
                <div >${footer}
                    
                </div>
                <p>2</p>
                <div></div>
            </footer>
            </div>`,
            pdf3 = `<div id="pg3" style="margin-left: 10% ; margin-right: 10%;">
            <head>
            ${head}
            </head>
            <main>
                <div class="margnees_elem">
                    <h1 class="letra_subtitulospdf ">2. PLAN DE EVALUACIÓN</h1> 
                </div>
                <table border="1">
                    <tr>
                        <th class="letras_blanco_fAzul  centrar_t">ACTIVIDAD</th ><th class="letras_blanco_fAzul  centrar_t">OBSERVACIÓN</th>
                    </tr>
                    <tr>
                        <th class="letras_blanco_fAzul  centrar_t" colspan="2">SELECCIÓN</th>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;" >Toma de muestras:</td><td> Aplica. Se llevará a cabo toma de muestras en las
                                                        instalaciones del fabricante.</td>
                    </tr>
                    <tr>
                        <th class="letras_blanco_fAzul  centrar_t" colspan="2">DETERMINACIÓN</th>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;" >Ejecución de ensayos:</td><td> plica. Se ejecutarán ensayos de laboratorio de
                                                            acuerdo a la siguiente clasificación de familias
                                                            FAMILIA N° 1 - CONCAVO PEQUEÑO
                                                            Determinación de Plomo y Cadmio. ISO 6486-1
                                                            FAMILIA N° 2 - CONCAVO GRANDE
                                                            Determinación de Plomo y Cadmio. ISO 6486-1
                                                            FAMILIA N° 3 - ALMACENAMIENTO
                                                            Determinación de Plomo y Cadmio. ISO 6486-1
                                                            FAMILIA N° 4 - ARTICULOS DE COCCION
                                                            Determinación de Plomo y Cadmio. ISO 8391-1</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;" >Reconocimiento de tests reports:</td>
                        <td> No Aplica</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;" >Inspección de la producción FPE (Aplicable para esquemas 4):</td>
                        <td> No Aplica</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;" >Inspección de la producción FPE (Aplicable para esquemas 3):</td>
                        <td> No Aplica</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;" >Reconocimiento de informe de inspección de la producción FPE
                            (Aplicable para esquema 4):</td>
                        <td> No Aplica</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;" >Reconocimiento de informe de inspección de la producción FPE
                            (Aplicable para esquema 3):</td>
                        <td> No Aplica</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;" >Reconocimiento de informe de auditoría FQSA (Aplicable para
                            esquema 5):</td>
                        <td> No Aplica</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;" >Auditoría del sistema de Gestión de la calidad del fabricante
                            FQSA (Aplicable para esquema 5):</td>
                        <td> No Aplica</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;" >Reconocimiento de ISO 9001 Versión 2015 del fabricante:</td>
                        <td> Aplica. Se reconocerá el certificado ISO 9001
                            versión 2015 del fabricante Chaozhou Xincheng
                            Ceramics Co., Ltd.:</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;" >Reconocimiento de certificado ISO 22000 versión 2018 / FSSC
                            22000 u otro sistema de gestión de inocuidad de alimentos
                            (Aplicable para esquema 3):</td>
                        <td> No Aplica</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;" >Informe de Evaluación de la conformidad de acuerdo con los
                            resultados obtenidos:</td>
                        <td> Aplica</td>
                    </tr>
                    <tr>
                        <td class="letras_blanco_fAzul  centrar_t" colspan="2">REVISIÓN</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;" >Revisión de expediente correspondiente al proceso de
                            certificación.:</td>
                        <td> Aplica. Acta de revisión y decisión GV-FT-09.</td>
                    </tr>
                    <tr>
                        <td class="letras_blanco_fAzul  centrar_t" colspan="2">ATESTACIÓN</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;" >Decisión sobre la certificación:</td>
                        <td> Aplica. Acta de revisión y decisión GV-FT-09.</td>
                    </tr>
                    <tr>
                        <td class="letras_blanco_fAzul  centrar_t" colspan="2">VIGILANCIA</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;" >Visita a fabrica:</td>
                        <td> Aplica.</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" style="padding: 10px;" >Ensayos:</td>
                        <td> Aplica.</td>
                    </tr>
                </table>
            </main>
            <footer>
                <div >${footer}
                    
                </div>
                <p>3</p>
                <div></div>
            </footer>
            </div>`,
            pdf4 = `<div id="pg4" style="margin-left: 10% ; margin-right: 10%;">
            <head>
            ${head}
            </head>
            <main>
                <div>
                    <p class="letra1pdf margnees_elem" >
                        Nota: Los ensayos y actividades cotizadas son de acuerdo a la información entregada con la solicitud y están
            sujetos a cambios una vez el proceso de evaluación inicie. En el caso que la información; actividades o ensayos
            no estén completos, se procede a realizar una nueva cotización para ejecutar las actividades o ensayos
            pendientes mediante el formato GV-FC-05 Ofertas comerciales para actividades complementarias.
                    </p>
                    <h2 class="letra_subtitulospdf margnees_elem" >2.1 Evaluación de Riesgo</h2>
                    <p class="letra1pdf" >Dentro de la evaluación realizada a nuestro cliente y al esquema elegido para la certificación detallada en la
                        presente oferta comercial, se determina la siguiente calificación de riesgo:</p>
                </div>
                <table class= "margnees_elem">
                    <tr>
                        <th class="letras_blanco_fAzul centrar_t">Esquema de certificación</th><th class="letras_blanco_fAzul centrar_t">Calificación</th>
                    </tr>
                    <tr>
                        <td class="centrar_t">Esquema 5</td><td class="centrar_t">4.6</td>
                    </tr>
                </table>
                <div>
                    <h1 class= "letra_titulos_pdf1 margnees_elem ">3. PRESUPUESTO ECONOMICO PARA EL OTORGAMIENTO DE LA CERTIFICACION</h1>
                    <h2 class="letra_subtitulospdf margnees_elem">3.1 Presupuesto para el otorgamiento.</h2>
                </div>
                <table border="1" class= "margnees_elem">
                    <tr>
                        <th class="letras_blanco_fAzul centrar_t" colspan="4">3.1 PRESUPUESTO PARA EL OTORGAMIENTO</th>
                    </tr>
                    <tr>
                        <th class="letras_blanco_fAzul">CANTIDAD</th><th class="letras_blanco_fAzul" >DESCRIPCIÓN / ACTIVIDAD</th><th class="letras_blanco_fAzul" >PRECIO UNIT</th><th class="letras_blanco_fAzul">PRECIO TOTAL</th>
                    </tr>
                    <tr>
                        <td class="cant letras_tabla2">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default" id="menos" type="button">-</button> 
                            </span> 
                            <input type="number" style="width:50px;text-align: center;" id="contador" class="form-control" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default" id="mas" type="button">+</button> 
                            </span> 
                        </td>
                        <td class="letras_tabla2">
                            Certificación Esquema 5
                        </td>
                        <td class="p_unit letras_tabla2">
                            <input type="number" style="width:50px;text-align: center;" id="contador" class="form-control" value="1">
                        </td>
                        <td class="p_total"></td>
                    </tr>
                    <tr>
                        <td class="cant letras_tabla2"></td>
                        <td class="letras_tabla2" >Ensayos de Laboratorio
                            FAMILIA N° 1 CONCAVO PEQUEÑO</td>
                        <td class="p_unit letras_tabla2"></td>
                        <td class="p_total"></td>
                    </tr>
                    <tr>
                        <td class="cant letras_tabla2"></td>
                        <td class="letras_tabla2">Ensayos de Laboratorio
                            FAMILIA N° 2 CONCAVO GRANDE</td>
                        <td class="p_unit letras_tabla2"></td>
                        <td class="p_total letras_tabla2"></td>
                    </tr>
                    <tr>
                    <td class="cant"></td>
                    <td class="letras_tabla2" >Ensayos de Laboratorio
                        FAMILIA N° 2 CONCAVO GRANDE</td>
                    <td class="p_unit letras_tabla2"></td>
                    <td class="p_total letras_tabla2"></td>
                    </tr>
                    <tr>
                    <td class="cant letras_tabla2"></td>
                    <td class="letras_tabla2" >Ensayos de Laboratorio
                        FAMILIA N° 2 CONCAVO GRANDE</td>
                    <td class="p_unit letras_tabla2"></td>
                    <td class="p_total letras_tabla2"></td>
                    </tr>
                    <tr>
                        <td colspan="2">Nota: El Laboratorio seleccionado para el Presupuesto es: CTT </td>
                        <td> SUB-TOTAL SIN
                            IVA </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3">I.V.A</td>
                        <td id="iva"></td>
                    </tr>
                    <tr>
                        <td colspan="3">TOTAL</td>
                        <td id="total"></td>
                    </tr>
                </table>
                <div>
                    <h3 class="letra_subtitulospdf margnees_elem">3.1.1 Cancelaciones anticipadas:</h3>
                    <p class="letra1pdf" ><li class="letra1pdf">Se cargará un 50% del valor del certificado en caso de que el cliente solicite una cancelación anticipada
                        de los servicios de certificación.</li></p>
                </div>
            </main>
            <footer>
                <div >${footer}
                    
                </div>
                <p>4</p>
                <div></div>
            </footer>
            </div>`,
            pdf5 = `<div id="pg5" style="margin-left: 10% ; margin-right: 10%;">
            <head>
            ${head}
            </head>
            <main>
                <div>
                    <li class="letra1pdf margnees_elem">
                        Se cargará un 100% en el evento que los ensayos y las auditorías ya hayan sido ejecutadas y el cliente
            solicite cancelación anticipada.
                    </li>
                    <h2 class="letra_subtitulospdf margnees_elem">
                        3.2 TIEMPOS DE EJECUCIÓN PARA EL OTORGAMIENTO
                    </h2>
                </div>
                <table class="margnees_elem">
                    <tr>
                        <th class="letras_blanco_fAzul centrar_t" >Actividad</th><th class="letras_blanco_fAzul centrar_t">Tiempo estimado (días hábiles)</th>
                    </tr>
                    <tr>
                        <td>Ejecución de ensayos</td><td>10 días</td>
                    </tr>
                    <tr>
                        <td>Aceptación de ensayos</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>Auditoria en fabrica</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>Evaluación de resultados</td>
                        <td>3 dìas</td>
                    </tr>
                    <tr>
                        <td>Revisión y decisión</td>
                        <td>2 días</td>
                    </tr>
                    <tr>
                        <td>Total (días hábiles)</td>
                        <td>15 días</td>
                    </tr>
                </table>
                <div>
                    <h2 class="letra_subtitulospdf margnees_elem">3.3 PRESUPUESTO ECONOMICO PARA LAS ACTIVIDADES DE VIGILANCIA:</h2>
                </div>
                <table border="1" class= "margnees_elem">
                    <tr>
                        <th COLSPAN="4" class="letras_blanco_fAzul centrar_t " >3.3 PRESUPUESTO PARA EL OTORGAMIENTO</th>
                    </tr>
                    <tr>
                        <th class="letras_blanco_fAzul centrar_t" >CANTIDAD</th><th class="letras_blanco_fAzul centrar_t" >DESCRIPCIÓN / ACTIVIDAD</th><th class="letras_blanco_fAzul centrar_t" >PRECIO UNIT</th><th class="letras_blanco_fAzul centrar_t" >PRECIO TOTAL</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>certificacion esquema5</td>
                        <td>80000000</td>
                        <td>80000000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>ensayos</td>
                        <td>80000000</td>
                        <td>80000000</td>
                    </tr>
                    <tr>
                    <td colspan= "2"> Nota: El Laboratorio seleccionado para el Presupuesto es:
                    Pendiente de definir</td>
                    <td>SUB-TOTAL SIN
                    IVA</td>
                    <td>80000000</td>
                </tr>
                <tr>
                <td colspan="3" class="centrar_t">I.V.A</td>
                <td id="iva"></td>
            </tr>
            <tr>
                <td colspan="3" class="centrar_t">TOTAL</td>
                <td id="total"></td>
            </tr>
                </table>

                <div>
                    <p class="letra1pdf margnees_elem"><b>
                        *El presupuesto presentado es un estimado del costo de las actividades, este puede variar si los
            laboratorios contratados actualizan tarifas
                    </b></p>
                    <p class="letra1pdf><b>
                        GRUPO VTEK S.A.S
                    </b>
                informará y alertará al cliente con 3 meses de anticipación para la ejecución de las
            actividades de seguimiento. El cliente es responsable de la ejecución de estas actividades de manera anticipada
            con el objetivo de mantener su certificado de conformidad vigente.
                    </p>
                    <h1 letra_titulos_pdf1>
                        4. CONDICIONES COMERCIALES DEL SERVICIO DE CERTIFICACIÓN
                    </h1>
                    <p class="letra1pdf><b>
                        60 días para el pago de los servicios de certificación.
                    </b></p>
                    <p class="letra1pdf>
                    Favor consignar al GRUPO VTEK S.A.S., NIT 901.293.797-6   
                    </p>
                    <p class="letra1pdf><b>
                    Cuenta de Ahorros del Banco de Bogotá  
                    </b>N°012668570. No somos objeto de retención de la Fuente Ley
            1429 de 29de Dic. 2010, Art. 4 - Parágrafo 2. ACTIVIDAD ECONOMICA CIIU: 7120 / IVA REGIMEN COMUN.
                    </p>
                </div>
            </main>
            <footer>
                <div >${footer}
                    
                </div>
                <p>5</p>
                <div></div>
            </footer>
            </div>`,
            pdf6 = `<div id="pg6" style="margin-left: 10% ; margin-right: 10%;">
            <head>
            ${head}
            </head>
            <main>
                <div>
                    <p class="letra1pdf">
                        <b>
                            Cuenta de Ahorros Bancolombia
                        </b>N°207-000003-54. No somos objeto de retención de la Fuente Ley 1429
            de 29de Dic. 2010, Art. 4 - Parágrafo 2. ACTIVIDAD ECONOMICA CIIU: 7120 / IVA REGIMEN COMUN.
                    </p>
                    <h1 class="letra_titulos_pdf1 margnees_elem">
                        5. TÉRMINOS Y CONDICIONES
                    </h1>
                    <p class="letra1pdf">
                        Los términos y condiciones del esquema de certificación acordado, se encuentran descritos en el documento
                        del 
                        <b>
                            GV-MC-01 "Términos y condiciones GRUPO VTEK S.A.S”
                        </b>, detallados aquí 
                        <a href="">
            TERMINOS Y
            CONDICIONES DE GRUPO VTEK.
                        </a>   
                    </p>
                    <p class="letra1pdf">
                        El cliente se comprometerá a dar cumplimiento a lo estipulado en dicho documento. De igual manera 
                        <b>
            GRUPO
            VTEK S.A.S
                        </b>tiene a disposición del público en la página web 
                        <a href=""> www.grupovtek.com                        
                        </a>
                    </p>
                    <h1 class="letra_titulos_pdf1 margnees_elem">
                    6. RESPONSABILIDADES 
                    </h1>
                    <h2 class="letra_subtitulospdf margnees_elem">
                        6.1. Responsabilidades DE GRUPO VTEK S.A.S 
                    </h2>
                    <p class="letra1pdf">Las obligaciones vigentes en Colombia, para los Organismos de Evaluación de la conformidad descritas en la
            Ley 1480 de 2011, Decreto 1595 de 2015, Resolución 41713 de 2014, las cuales son:</p>
                    <p class="letra1pdf">El organismo de evaluación de la conformidad: Sera responsable frente a los consumidores cuando por el
            servicio de evaluación de la de la conformidad respecto de un producto sujeto a reglamento técnico cuando
            haya obrado con dolo o culpa grave.</p>
                    <p class="letra1pdf">El evaluado será responsable cual haya modificado los elementos, procesos, sistemas o demás condiciones
            evaluadas y exista nexo causal entre dichas variaciones y el daño ocasionado.</p>
                    <p class="letra1pdf">Sera responsable por el proceso de evaluación de la conformidad cumpla con los requisitos de los reglamentos
            técnicos indicados en el contrato.</p>
                    <p class="letra1pdf">Revisar y validar que las etiquetas de los productos objeto de la evaluación de la conformidad se incluya el
            alcance de la evaluación, el nombre de GRUPO VTEK S.A.S, el nombre del ONAC. Así como los demás
            requisitos de etiquetado que contenga el reglamento técnico aplicable a los productos objeto de la evaluación.</p>
                    <p class="letra1pdf">Subir al sistema SICERCO los certificados de conformidad emitidos en el proceso de evaluación de la
            conformidad, bajo el marco del presente acuerdo. Resoluciones 61971 de 2014 y Resolución 41713 del 1 de
            julio de 2014 de la Superintendencia de Industria y Comercio.</p>
                    <p class="letra1pdf">Cumplir con todas las obligaciones contendías en el Artículo 2.2.1.7.8.3. Del Decreto No. 1595 de 2015 Emitido
            por el Ministerio de Comercio, Industria y Turismo.</p>
                    <p class="letra1pdf">Cumplir con toda la normatividad vigente sobre las obligaciones y responsabilidades de las entidades de
            evaluación de la conformidad en Colombia.</p>
                </div>
            </main>
            <footer>
                <div >${footer}
                    
                </div>
                <p>6</p>
                <div></div>
            </footer>
            </div>`,
            pdf7 = `<div id="pg7" style="margin-left: 10% ; margin-right: 10%;">
            <head>
            ${head}
            </head>
            <main>
                <div>
                    <h1 class= "letra_subtitulospdf margnees_elem">6.2 Responsabilidades de PANAMERICANA (cliente)</h1>
                    <p class= "letra1pdf">PANAMERICANA como importador de productos sujetos a reglamentos técnicos serán responsables por el
                        cumplimiento de la totalidad de los requisitos exigidos por los reglamentos técnicos o las condiciones técnicas,
                        independientemente que haya sido certificadas, sin perjuicio de la responsabilidad de los organismos de
                        certificación que evaluaron dichos productos, de acuerdo con el tipo de certificación emitida.</p>
                    <p class= "letra1pdf">Lo anterior se establece según el artículo 2.2.1.7.17.2 Responsabilidad de productores e importadores del
            DECRETO 1595 del 2015.</p>
                    <p class= "letra1pdf">Adicional, el cliente debe de realizar las actividades complementarias de verificación (si aplica), de no
            ser así, inmediatamente se hará retiro de la certificación en caso de ser otorgada.</p>
                    <h1 class= "letra_titulos_pdf1 margnees_elem">
                    7. ACEPTACIÓN DE LA OFERTA COMERCIAL Y TERMINOS Y CONDICIONES  
                    </h1>
                    <p class= "letra1pdf">Manifestamos conocer y aceptar la información suministrada por GRUPO VTEK S.A.S, hemos revisado y
            comprendido los términos y condiciones establecidos en el GV-MC-01 “términos y condiciones” y la presente
            oferta comercial de certificación, de igual manera autorizamos los costos cotizados y los laboratorios aquí
            indicados y asociados al proceso de certificación. Mediante la firma de la presente oferta comercial se da
            aceptación a todos los términos y condiciones descritos en este documento y sus anexos, el esquema de
            certificación, los requisitos del reglamento y demás condiciones descritas en los procedimientos asociados
            disponibles en la página web de <b>GRUPO VTEK S.A.S.</b>
            <b>GRUPO VTEK S.A.S </b>garantiza el tratamiento de la información y de los documentos obtenidos en las
            actividades desarrolladas de manera estrictamente confidencial, y solo la utilizará con fines relacionados con el
            proceso de certificación.</p>
            <p class= "letra1pdf margnees_elem">En constancia de lo anterior, firma el representante del cliente y de GRUPO VTEK S.A.S</p>
                </div>
                <table border="">
                    <tr>
                        <th colspan="2" class="letras_blanco_fAzul centrar_t">Representante del cliente</th>
                        <th colspan="2" class="letras_blanco_fAzul centrar_t">Representante de GRUPO VTEK S.A.S</th>

                    </tr>
                    <tr>
                        <td class="letras_tabla2 centrar_t">Nombre </td>
                        <td class="letras_tabla2 centrar_t">Carlos Alberto Franco Rios </td>
                        <td class="letras_tabla2 centrar_t">Nombre</td>
                        <td class="letras_tabla2 centrar_t">Diana Ostos</td>
                    </tr>
                    <tr>
                        <td class="letras_tabla2 centrar_t">FECHA</td>
                        <td class="letras_tabla2 centrar_t"></td>
                        <td class="letras_tabla2 centrar_t">FECHA</td>
                        <td class="letras_tabla2 centrar_t"></td>
                    </tr>
                    <tr>
                        <td class="letras_tabla2 centrar_t">FIRMA</td>
                        <td ></td>
                        <td class="letras_tabla2 centrar_t">FIRMA</td>
                        <td ></td>
                    </tr>
                </table>
            </main>
            <footer>
                <div >${footer}
                    
                </div>
                <p>7</p>
                <div></div>
            </footer>
            </div>`;
            const setPgActual = () => {
                try {
                    const loc = location.hash;
                    const subs = loc.slice(loc.length - 4);
                    const pga = eval(subs);
                    d.getElementById("pgpdf").innerHTML = pga;
                } catch (e){}
            }
            window.addEventListener('hashchange',setPgActual);
            d.getElementById("pgpdf").innerHTML = pdf1;
            const navegacion = () => {
                const location_ = ["#/comercial/createpdf1",
                    "#/comercial/createpdf2",
                    "#/comercial/createpdf3",
                    "#/comercial/createpdf4",
                    "#/comercial/createpdf5",
                    "#/comercial/createpdf6",
                    "#/comercial/createpdf7",
                    "#/comercial/createoffer"];
                const navButtons = d.querySelectorAll("nav > button");
                navButtons.forEach((e,i) => {
                    e.addEventListener("click",() => {
                            location.hash = location_[i];
                    })
                })
                d.getElementById("btnDPDF").addEventListener("click",() => {
                    //
                })
            }
            navegacion();
            console.log('#/comercial/plantillapdf')      

        }
        
        }
    
        location.hash == '#/comercial/createpdf1' && charge();
    })
    const parent = document.getElementById('root');
    observerdatos.observe(parent,{childList:true})