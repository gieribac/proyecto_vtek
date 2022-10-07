import { queryOferta, queryFabrica, queryCliente} from "./models/post.js";
import { menos, mas } from "./helpers.js";
import { ress } from "./pages.js";

const observerdatos = new MutationObserver(()=>{ 

        const charge = () => {

        const clientSelectID = localStorage.getItem("clientSelectID");
        Boolean(clientSelectID) && (() => {
            queryOferta(clientSelectID).then(t => {  
                const fabrica = t.data().fabricaOF;
                const cliente = t.data().ClienteOF; //cliente titular
                const clienteSol = t.data().ClienteOFSol; //cliente solicitante
                const oferta_ = t.data();
                console.log(t.id);
                queryFabrica(fabrica).then( f => {
                    const fabrica_ = f.data();
                    queryCliente(cliente).then( async c => {
                        const cliente_ = c.data();
                        const clienteSol_ = clienteSol == cliente ? cliente_ : await queryCliente(clienteSol);
                        cargaDataOferta(oferta_, fabrica_, cliente_, clienteSol_);
                    }).then( after => setLogica()).catch( );
                }).catch(e => console.log(e));  
            }).catch(e => console.log(e))
            let promises = [];
            let resp = queryOferta(clientSelectID);
            promises.push(resp);

        })()
        
        const cargaDataOferta = (o,f,ct,cs) => {
            
            const d = document,
            fecha = new Date(),        
            year = fecha.getFullYear();
            let day = fecha.getDate(),
            month = fecha.getMonth()+1,
            monthletra = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][month-1];
            day < 10 && (() => day=`0${day}`)();
            month < 10 && (() => month=`0${month}`)();
            const yearsVig = parseInt(o.vigenciaOF, 10), 
            condicionesPago = parseInt(o.condicionespagoOF, 10),         
            DateVig = `${day} / ${month} / ${year+yearsVig}`,
            producto = o.productoOF.replace(/-/g, "_").replace(/ /g, "_"),
            resolucion = ress[producto];

            
            const head = `<div></div>
            <div>
                <table style="width: 80% !important; margin-left: 2cm;">
                    <tr>
                    <td  class="centrar_t"><div class="logoPDF"></div></td>
                    <td  class="centrar_t " >OFERTA COMERCIAL DE CERTIFICACION</td>
                    <td class="centrar_t" >GV-FC 02 v:8 <br>fecha de vigencia: <br>04/03/2022</td>
                    </tr>
                    </table>
                
                </div>
            <div>
                <p></p>
                <p></p>
                </div>`,
            footer = `<div class="iconosPdf" style= "position: absolute; bottom: 0px"></div>`;

            const pdf1 = `<div id="pg1" class= "tamanopg">
            <head>${head}
            </head>
            <main>
                <div class="letra1pdf" >
                    <p id="fecha"><b>Bogotá, ${day} de ${monthletra} del ${year} </b></p> 
                    <br>
                    <p>Señores:</p>
                    <p>${cs.Nombre_Compania}</p>
                    <p>${f.representante_legal}</p>
                    <p>Representante Legal</p>
                    <p>${cs.Ciudad}</p>
                    <br>
                    <p>Respetados Señores,</p>
                    <br>
                    <p>En atención a su solicitud de certificación de producto, presentamos la siguiente oferta comercial formal donde establecemos tarifas, alcance y metodologías para el servicio de certificación.</p>
                </div>
                <div class="margnees_elem">
                    <table style="width: 16cm;">
                    <tr>
                    <td class="centrar_t letras_blanco_fAzul" style="padding: 5px; ">OFERTA COMERCIAL N°</td>
                    <td class="centrar_t " style="position: relative;"> <p class="subrayado"> ${o.No_oferta}</p>
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
                        <td class="centrar_t letras_tabla2">${o.esquemaOF}</td>
                    </tr>
                    <tr>
                        <td class=" letras_blanco_fAzul centrar_t">Vigencia</td>
                        <td class=" centrar_t letras_tabla2">${yearsVig} AÑOS</td>
                    </tr>
                    <tr>
                        <td class=" letras_blanco_fAzul centrar_t">Seguimientos</td>
                        <td class="centrar_t letras_tabla2">Cada 12 meses</td>
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
                        <td class="letras_tabla2 ">Nombre de la compañía
                            (Como aparece
                            registrada)</td>
                        <td class="letras_tabla3">${cs.Nombre_Compania}</td>
                        <td class="letras_tabla2">Número de NIT:</td>
                        <td class="letras_tabla3" style="align-items: center;">${cs.Nit}</td>
                    </tr>
                    <tr>
                        <td class="letras_tabla2">Representante Legal</td>
                        <td class="letras_tabla3" style="align-items: center;">${cs.Representante_Legal}</td>
                        <td class="letras_tabla2">Identificación:</td>
                        <td class="letras_tabla3" style="align-items: center;">${cs.No_Identificacion}</td>
                    </tr>
                    <tr>
                        <td class="letras_tabla2">Dirección comercial:</td>
                        <td class="letras_tabla3" style="align-items: center;">${cs.Direccion}</td>
                        <td class="letras_tabla2">Web:</td>
                        <td class="letras_tabla3" style="align-items: center;">${cs.Web}</td>
                    </tr>
                    <tr>
                        <td class="letras_tabla2">Ciudad/Depto.:</td>
                        <td class="letras_tabla3" style="align-items: center;">${cs.Ciudad}</td>
                        <td class="letras_tabla2">Tel:</td>
                        <td class="letras_tabla3" style="align-items: center;">${cs.Numero_Contacto}</td>
                    </tr>
                    <tr>
                        <td class="letras_tabla2">Nombre del
                            responsable: </td>
                        <td class="letras_tabla3" style="align-items: center;">${cs.Nombre_Responsable}</td>
                        <td class="letras_tabla2">Mail:</td>
                        <td class="letras_tabla3" style="align-items: center;">${cs.Email}</td>
                    </tr>
                    <tr>
                        <td class="letras_tabla2" >Cargo:</td>
                        <td class="letras_tabla3" style="align-items: center;">${cs.Cargo}</td>
                        <td class="letras_tabla2" >Tel/Cel. (Móvil):</td>
                        <td class="letras_tabla3" style="align-items: center;" id="datos_contacto">${cs.Numero_Contacto}</td>
                    </tr>
                </table>
            </main>
            <footer>
                <div >${footer}
                    
                </div>
                <p class ="letra1pdf" >1</p>
                <div></div>
            </footer>
        </div>`,
            pdf2 = `<div id="pg2" class= "tamanopg">
            <head>
            ${head}
            </head>
            <main>
                <div class="margnees_elem">
                <h2 class="letra_subtitulospdf">1.3 Empresa Titular del certificado de conformidad</h2>  
                </div>
                <table>
                    <tr>
                        <td class="letras_blanco_fAzul centrar_t" colspan="4">DATOS DE LA EMPRESA SOLICITANTE DEL SERVICIO DE CERTIFICACIÓN</td>
                    </tr>
                    <tr>
                        <td class="letras_tabla2 ">Nombre de la compañía
                            (Como aparece
                            registrada)</td>
                        <td class="letras_tabla3">${ct.Nombre_Compania}</td>
                        <td class="letras_tabla2">Número de NIT:</td>
                        <td class="letras_tabla3" style="align-items: center;">${ct.Nit}</td>
                    </tr>
                    <tr>
                        <td class="letras_tabla2">Representante Legal</td>
                        <td class="letras_tabla3" style="align-items: center;">${ct.Representante_Legal}</td>
                        <td class="letras_tabla2">Identificación:</td>
                        <td class="letras_tabla3" style="align-items: center;">${ct.No_Identificacion}</td>
                    </tr>
                    <tr>
                        <td class="letras_tabla2">Dirección comercial:</td>
                        <td class="letras_tabla3" style="align-items: center;">${ct.Direccion}</td>
                        <td class="letras_tabla2">Web:</td>
                        <td class="letras_tabla3" style="align-items: center;">${ct.Web}</td>
                    </tr>
                    <tr>
                        <td class="letras_tabla2">Ciudad/Depto.:</td>
                        <td class="letras_tabla3" style="align-items: center;">${ct.Ciudad}</td>
                        <td class="letras_tabla2">Tel:</td>
                        <td class="letras_tabla3" style="align-items: center;">${ct.Numero_Contacto}</td>
                    </tr>
                    <tr>
                        <td class="letras_tabla2">Nombre del
                            responsable: </td>
                        <td class="letras_tabla3" style="align-items: center;">${ct.Nombre_Responsable}</td>
                        <td class="letras_tabla2">Mail:</td>
                        <td class="letras_tabla3" style="align-items: center;">${ct.Email}</td>
                    </tr>
                    <tr>
                        <td class="letras_tabla2" >Cargo:</td>
                        <td class="letras_tabla3" style="align-items: center;">${ct.Cargo}</td>
                        <td class="letras_tabla2" >Tel/Cel. (Móvil):</td>
                        <td class="letras_tabla3" style="align-items: center;" id="datos_contacto">${ct.Numero_Contacto}</td>
                    </tr>
                </table>
            <div class="margnees_elem">
                <h2 class="letra_subtitulospdf">1.4 Información de compañía fabricante</h2>
                </div>
                <table border="1">
                    <tr>
                        <th class="letras_blanco_fAzul centrar_t"  colspan="6">INFORMACION DE LA COMPAÑÍA FABRICANTE</th>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" >Nombre de la Compañía
                            Fabricante: </td>
                        <td colspan="6" class="letras_tabla2">${f.nombre_compania}</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2"  >Dirección de la planta/s en
                            donde se fabrica el producto:</td>
                        <td colspan="6 "class="letras_tabla2">${f.direccion}</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" >Contacto:</td>
                        <td class="letras_tabla2">${f.contacto}</td>
                        <td class= "letras_tabla2">País:</td>
                        <td class="letras_tabla2">${f.pais}</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" >Teléfono:</td>
                        <td class="letras_tabla2">${f.telefono}</td>
                        <td class= "letras_tabla2" >Ciudad:</td>
                        <td id="ciudadFabrica" class="letras_tabla2">${f.ciudad}</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" >Mail:</td>
                        <td colspan="3" class="letras_tabla2">${f.email}</td>
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
                        <td class= "letras_tabla2" >${o.productoOF}</td>
                        <td class= "letras_tabla2" >${resolucion}</td>
                    </tr>
                </table>
            </main>
            <footer>
                <div >${footer}
                    
                </div>
                <p class ="letra1pdf">2</p>
                <div></div>
            </footer>
            </div>`,
            pdf3 = `<div id="pg3" style="display:none;" class= "tamanopg">
            <head>
            ${head}
            </head>
            <main>
                <div class="margnees_elem">
                    <h1 class="letra_subtitulospdf ">2. PLAN DE EVALUACIÓN</h1> 
                </div>
                <table id="planEval" border="1">
                    <tr>
                        <th class="letras_blanco_fAzul  centrar_t">ACTIVIDAD</th ><th class="letras_blanco_fAzul  centrar_t">OBSERVACIÓN</th>
                    </tr>
                    <tr>
                        <th class="letras_blanco_fAzul  centrar_t" colspan="2">SELECCIÓN</th>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2">Toma de muestras:</td>
                        <td> 
                        <textarea  class="desc form-control altura_textarea letras_tabla2">${o.muestrasOF}</textarea>
                            
                        </td>
                    </tr>
                    <tr>
                        <th class="letras_blanco_fAzul  centrar_t" colspan="2">DETERMINACIÓN</th>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2"  >Ejecución de ensayos:</td>
                        <td>
                        <textarea  class="desc form-control altura_textarea letras_tabla2">${o.ensayosOF}</textarea>
                        
                        </td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2"  >Reconocimiento de tests reports:</td>
                        <td> <select required="" class="form-select dropdown letras_tabla2 dropdown_pdf"  aria-label="Default select example">
                            <option value="Aplica" selected>Aplica</option>
                            <option value="No Aplica">No Aplica</option>                        
                        </select><textarea class="desc form-control altura_textarea letras_tabla2 text_area_drop"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2"  >Inspección de la producción FPE (Aplicable para esquemas 4):</td>
                        <td> <select required="" class="form-select dropdown letras_tabla2 dropdown_pdf"  aria-label="Default select example">
                            <option value="Aplica" selected>Aplica</option>
                            <option value="No Aplica">No Aplica</option>                        
                        </select><textarea class="desc form-control altura_textarea letras_tabla2 text_area_drop"></textarea>                        
                        </select></td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2"  >Inspección de la producción FPE (Aplicable para esquemas 3):</td>
                        <td> <select required="" class="form-select dropdown letras_tabla2 dropdown_pdf"  aria-label="Default select example">
                            <option value="Aplica" selected>Aplica</option>
                            <option value="No Aplica">No Aplica</option>                        
                        </select><textarea class="desc form-control altura_textarea letras_tabla2 text_area_drop"></textarea>                        
                        </select></td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" >Reconocimiento de informe de inspección de la producción FPE
                            (Aplicable para esquema 4):</td>
                        <td><select required="" class="form-select dropdown letras_tabla2 dropdown_pdf"  aria-label="Default select example">
                            <option value="Aplica" selected>Aplica</option>
                            <option value="No Aplica">No Aplica</option>                        
                        </select><textarea class="desc form-control altura_textarea letras_tabla2 text_area_drop"></textarea>                        
                        </select></td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" >Reconocimiento de informe de inspección de la producción FPE
                            (Aplicable para esquema 3):</td>
                        <td><select required="" class="form-select dropdown letras_tabla2 dropdown_pdf"  aria-label="Default select example">
                            <option value="Aplica" selected>Aplica</option>
                            <option value="No Aplica">No Aplica</option>                        
                        </select><textarea class="desc form-control altura_textarea letras_tabla2 text_area_drop"></textarea>                        
                        </select></td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" >Reconocimiento de informe de auditoría FQSA (Aplicable para
                            esquema 5):</td>
                        <td><select required="" class="form-select dropdown letras_tabla2 dropdown_pdf"  aria-label="Default select example">
                            <option value="Aplica" selected>Aplica</option>
                            <option value="No Aplica">No Aplica</option>                        
                        </select><textarea class="desc form-control altura_textarea letras_tabla2 text_area_drop"></textarea>                        
                        </select></td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" >Auditoría del sistema de Gestión de la calidad del fabricante
                            FQSA (Aplicable para esquema 5):</td>
                        <td class= "letras_tabla2"><select required="" class="form-select dropdown letras_tabla2 dropdown_pdf"  aria-label="Default select example">
                            <option value="Aplica" selected>Aplica</option>
                            <option value="No Aplica">No Aplica</option>                        
                        </select><textarea class="desc form-control altura_textarea letras_tabla2 text_area_drop"></textarea>                        
                        </select></td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2"  >Reconocimiento de ISO 9001 Versión 2015 del fabricante:</td>
                        <td class= "letras_tabla2"> <textarea   class="desc form-control altura_textarea letras_tabla2">${o.homologacionOF}</textarea></td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" >Reconocimiento de certificado ISO 22000 versión 2018 / FSSC
                            22000 u otro sistema de gestión de inocuidad de alimentos
                            (Aplicable para esquema 3):</td>
                        <td><select required="" class="form-select dropdown letras_tabla2 letras_tabla2 dropdown_pdf"  aria-label="Default select example">
                            <option value="Aplica" selected>Aplica</option>
                            <option value="No Aplica">No Aplica</option>                        
                        </select><textarea class="desc form-control altura_textarea letras_tabla2 text_area_drop"></textarea>                        
                        </select></td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" >Informe de Evaluación de la conformidad de acuerdo con los
                            resultados obtenidos:</td>
                        <td><select required="" class="form-select dropdown letras_tabla2 letras_tabla2 dropdown_pdf"  aria-label="Default select example">
                            <option value="Aplica" selected>Aplica</option>
                            <option value="No Aplica">No Aplica</option>                        
                        </select><textarea class="desc form-control altura_textarea letras_tabla2 text_area_drop"></textarea>                        
                        </select></td>
                    </tr>
                    <tr>
                        <td class="letras_blanco_fAzul  centrar_t" colspan="2">REVISIÓN</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2" >Revisión de expediente correspondiente al proceso de
                            certificación.:</td>
                        <td class= "letras_tabla2"> Aplica. Acta de revisión y decisión GV-FT-09.</td>
                    </tr>
                    <tr>
                        <td class="letras_blanco_fAzul  centrar_t" colspan="2">ATESTACIÓN</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2"  >Decisión sobre la certificación:</td>
                        <td class= "letras_tabla2"> <textarea   class="desc form-control altura_textarea letras_tabla2"></textarea></td>
                    </tr>
                    <tr>
                        <td class="letras_blanco_fAzul  centrar_t" colspan="2">VIGILANCIA</td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2"  >Visita a fabrica:</td>
                        <td class= "letras_tabla2"> <select required="" class="form-select dropdown sombra letras_tabla2 dropdown_pdf"  aria-label="Default select example">
                            <option value="Aplica" selected>Aplica</option>
                            <option value="No Aplica">No Aplica</option>                        
                        </select><textarea class="desc form-control altura_textarea letras_tabla2 text_area_drop"></textarea>                        
                        </select></td>
                    </tr>
                    <tr>
                        <td class= "letras_tabla2"  >Ensayos:</td>
                        <td class= "letras_tabla2"> <select required="" class="form-select dropdown sombra letras_tabla2 dropdown_pdf"  aria-label="Default select example">
                            <option value="Aplica" selected>Aplica</option>
                            <option value="No Aplica">No Aplica</option>                        
                        </select><textarea class="desc form-control altura_textarea letras_tabla2 text_area_drop"></textarea>                        
                        </select></td>
                    </tr>
                </table>
            </main>
            <footer>
                <div >${footer}
                    
                </div>
                <p class ="letra1pdf">3</p>
                <div></div>
            </footer>
            </div>`,
            pdf4 = `<div id="pg4" class= "tamanopg" >
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
                        <td class="centrar_t">${o.esquemaOF}</td><td class="centrar_t">${ct.Calificacion}</td>
                    </tr>
                </table>
                <div>
                    <h1 class= "letra_titulos_pdf1 margnees_elem ">3. PRESUPUESTO ECONOMICO PARA EL OTORGAMIENTO DE LA CERTIFICACION</h1>
                    <h2 class="letra_subtitulospdf margnees_elem">3.1 Presupuesto para el otorgamiento.</h2>
                </div>
                <table border="1" class= "margnees_elem">
                    <tr>
                        <th class="letras_blanco_fAzul centrar_t" colspan="4">3.1 PRESUPUESTO PARA EL OTORGAMIENTO<button class="ocultar" id="removefilest31">-</button><button class="ocultar" id="addfilest31">+</button></th>
                    </tr>
                    <tr>
                        <th class="letras_blanco_fAzul">CANTIDAD</th><th class="letras_blanco_fAzul" >DESCRIPCIÓN / ACTIVIDAD</th>
                        <th class="letras_blanco_fAzul" >PRECIO UNIT</th><th class="letras_blanco_fAzul">PRECIO TOTAL</th>
                    </tr>
                
                    <tr class="tr31">
                        <td  class="cant letras_tabla2">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default menos mas_menos" type="button">-</button> 
                            </span> 
                            <input style="width:50px;text-align: center;" class="contadorc form-control mas_menos inputpdf" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default mas" type="button">+</button> 
                            </span> 
                        </td>
                        <td class="letras_tabla2">
                            <textarea style="width:50px;text-align: center;"  class="desc form-control altura_textarea letras_trabla4"></textarea>
                        </td>
                        <td class="p_unit letras_tabla2"><p class="mas_menos">$</p> 
                            <input style="width:50px;text-align: center;"  class="contadoru form-control inputpdf2" value="1">
                        </td>
                        <td class="p_total"></td>
                    </tr>
                    <tr class="tr31">
                        <td class="cant letras_tabla2">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default menos mas_menos" type="button">-</button> 
                            </span> 
                            <input style="width:50px;text-align: center;" class="contadorc form-control mas_menos inputpdf" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default mas" type="button">+</button> 
                            </span> 
                        </td>
                        <td class="letras_tabla2">
                            <textarea style="width:50px;text-align: center;"  class="desc form-control altura_textarea letras_trabla4"></textarea>
                        </td>
                        <td class="p_unit letras_tabla2"><p class="mas_menos">$</p> 
                            <input style="width:50px;text-align: center;"  class="contadoru form-control inputpdf2" value="1">
                        </td>
                        <td class="p_total"></td>
                    </tr>
                    <tr class="tr31">
                        <td class="cant letras_tabla2">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default menos mas_menos" type="button">-</button> 
                            </span> 
                            <input style="width:50px;text-align: center;" class="contadorc form-control mas_menos inputpdf" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default mas" type="button">+</button> 
                            </span> 
                        </td>
                        <td class="letras_tabla2">
                            <textarea style="width:50px;text-align: center;"  class="desc form-control altura_textarea letras_trabla4"></textarea>
                        </td>
                        <td class="p_unit letras_tabla2"><p class="mas_menos">$</p>  
                            <input style="width:50px;text-align: center;"  class="contadoru form-control inputpdf2" value="1">
                        </td>
                        <td class="p_total"></td>
                    </tr>
                    <tr class="tr31">
                        <td class="cant letras_tabla2">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default menos mas_menos" type="button">-</button> 
                            </span> 
                            <input style="width:50px;text-align: center;" class="contadorc form-control mas_menos inputpdf" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default mas" type="button">+</button> 
                            </span> 
                        </td>
                        <td class="letras_tabla2">
                            <textarea style="width:50px;text-align: center;"  class="desc form-control altura_textarea letras_trabla4"></textarea>
                        </td>
                        <td class="p_unit letras_tabla2"><p class="mas_menos">$</p>  
                            <input style="width:50px;text-align: center;"  class="contadoru form-control inputpdf2" value="1">
                        </td>
                        <td class="p_total"></td>
                    </tr>
                    <tr class="tr31">
                        <td class="cant letras_tabla2">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default menos mas_menos" type="button">-</button> 
                            </span> 
                            <input style="width:50px;text-align: center;" class="contadorc form-control mas_menos inputpdf" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default mas" type="button">+</button> 
                            </span> 
                        </td>
                        <td class="letras_tabla2">
                            <textarea style="width:50px;text-align: center;"  class="desc form-control altura_textarea letras_trabla4"></textarea>
                        </td>
                        <td class="p_unit letras_tabla2"><p class="mas_menos">$</p>  
                            <input style="width:50px;text-align: center;"  class="contadoru form-control inputpdf2" value="1">
                        </td>
                        <td class="p_total"></td>
                    </tr>
                    <tr class="tr31" style="display:none">
                        <td class="cant letras_tabla2">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default menos mas_menos" type="button">-</button> 
                            </span> 
                            <input style="width:50px;text-align: center;" class="contadorc form-control mas_menos inputpdf" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default mas" type="button">+</button> 
                            </span> 
                        </td>
                        <td class="letras_tabla2">
                            <textarea style="width:50px;text-align: center;"  class="desc form-control altura_textarea letras_trabla4"></textarea>
                        </td>
                        <td class="p_unit letras_tabla2"><p class="mas_menos">$</p>  
                            <input style="width:50px;text-align: center;"  class="contadoru form-control inputpdf2" value="1">
                        </td>
                        <td class="p_total"></td>
                    </tr>
                    <tr class="tr31" style="display:none">
                        <td class="cant letras_tabla2">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default menos mas_menos" type="button">-</button> 
                            </span> 
                            <input style="width:50px;text-align: center;" class="contadorc form-control mas_menos inputpdf" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default mas" type="button">+</button> 
                            </span> 
                        </td>
                        <td class="letras_tabla2">
                            <textarea style="width:50px;text-align: center;"  class="desc form-control altura_textarea letras_trabla4"></textarea>
                        </td>
                        <td class="p_unit letras_tabla2"><p class="mas_menos">$</p>  
                            <input style="width:50px;text-align: center;"  class="contadoru form-control inputpdf2" value="1">
                        </td>
                        <td class="p_total"></td>
                    </tr>
                    <tr class="tr31" style="display:none">
                        <td class="cant letras_tabla2">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default menos mas_menos" type="button">-</button> 
                            </span> 
                            <input style="width:50px;text-align: center;" class="contadorc form-control mas_menos inputpdf" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default mas" type="button">+</button> 
                            </span> 
                        </td>
                        <td class="letras_tabla2">
                            <textarea style="width:50px;text-align: center;"  class="desc form-control altura_textarea letras_trabla4"></textarea>
                        </td>
                        <td class="p_unit letras_tabla2"><p class="mas_menos">$</p>  
                            <input style="width:50px;text-align: center;"  class="contadoru form-control inputpdf2" value="1">
                        </td>
                        <td class="p_total"></td>
                    </tr>
                    <tr class="tr31" style="display:none">
                        <td class="cant letras_tabla2">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default menos mas_menos" type="button">-</button> 
                            </span> 
                            <input style="width:50px;text-align: center;" class="contadorc form-control mas_menos inputpdf" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default mas" type="button">+</button> 
                            </span> 
                        </td>
                        <td class="letras_tabla2">
                            <textarea style="width:50px;text-align: center;"  class="desc form-control altura_textarea letras_trabla4"></textarea>
                        </td>
                        <td class="p_unit letras_tabla2"><p class="mas_menos">$</p>  
                            <input style="width:50px;text-align: center;"  class="contadoru form-control inputpdf2" value="1">
                        </td>
                        <td class="p_total"></td>
                    </tr>
                    <tr class="tr31" style="display:none">
                        <td class="cant letras_tabla2">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default menos mas_menos" type="button">-</button> 
                            </span> 
                            <input style="width:50px;text-align: center;" class="contadorc form-control mas_menos inputpdf" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default mas" type="button">+</button> 
                            </span> 
                        </td>
                        <td class="letras_tabla2">
                            <textarea style="width:50px;text-align: center;"  class="desc form-control altura_textarea letras_trabla4"></textarea>
                        </td>
                        <td class="p_unit letras_tabla2"><p class="mas_menos">$</p>  
                            <input style="width:50px;text-align: center;"  class="contadoru form-control inputpdf2" value="1">
                        </td>
                        <td class="p_total"></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="letras_tabla4">Nota: El Laboratorio seleccionado para el Presupuesto es: CTT </td>
                        <td class="letras_tabla4"> SUB-TOTAL SIN
                            IVA </td>
                        <td id="stsi31"></td>
                    </tr>
                    <tr> 
                        

                        <td colspan="3">I.V.A</td>
                        <td><input style="width:50px;text-align: center;" class="form-control mas_menos inputpdf2" id="table31iva" value="1"> %</td>
                        
                    </tr>
                    <tr>
                  
                        <td colspan="3">TOTAL</td>
                        <td id="table31total"></td>
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
                <p class ="letra1pdf">4</p>
                <div></div>
            </footer>
            </div>`,
            pdf5 = `<div id="pg5" style="display:none" class= "tamanopg">
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
                        <td class=  "letras_tabla2">Ejecución de ensayos</td><td><textarea  class="desc form-control altura_textarea letras_tabla2"></textarea></td>
                    </tr>
                    <tr>
                        <td class=  "letras_tabla2">Aceptación de ensayos</td>
                        <td><textarea class="desc form-control altura_textarea letras_tabla2"></textarea></td>
                    </tr>
                    <tr>
                        <td class=  "letras_tabla2">Auditoria en fabrica</td>
                        <td><textarea  class="desc form-control altura_textarea letras_tabla2"></textarea></td>
                    </tr>
                    <tr>
                        <td class=  "letras_tabla2">Evaluación de resultados</td>
                        <td><textarea  class="desc form-control altura_textarea letras_tabla2"></textarea></td>
                    </tr>
                    <tr>
                        <td class=  "letras_tabla2">Revisión y decisión</td>
                        <td><textarea  class="desc form-control altura_textarea letras_tabla2"></textarea></td>
                    </tr>
                    <tr>
                        <td class=  "letras_tabla2">Total (días hábiles)</td>
                        <td><textarea  class="desc form-control altura_textarea letras_tabla2"></textarea></td>
                    </tr>
                </table>
                <div>
                    <h2 class="letra_subtitulospdf margnees_elem">3.3 PRESUPUESTO ECONOMICO PARA LAS ACTIVIDADES DE VIGILANCIA:</h2>
                </div>
                <table border="1" id="table33" class= "margnees_elem">
                    <tr>
                        <th COLSPAN="4" class="letras_blanco_fAzul centrar_t " >3.3 PRESUPUESTO PARA LA VIGILANCIA
                            <button class="ocultar" id="removefilest33">-</button><button class="ocultar" id="addfilest33">+</button>
                        </th>                       
                    </tr>
                    <tr>
                        <th class="letras_blanco_fAzul centrar_t" >CANTIDAD</th><th class="letras_blanco_fAzul centrar_t" >DESCRIPCIÓN / ACTIVIDAD</th><th class="letras_blanco_fAzul centrar_t" >PRECIO UNIT</th><th class="letras_blanco_fAzul centrar_t" >PRECIO TOTAL</th>
                    </tr>
                    <tr class="tr33">
                        <td>
                            <span class="input-group-btn"> 
                                <button class="btn btn-default menos5 mas_menos" type="button"><p class="letra_masm">-</p></button> 
                            </span> 
                            <input style="width:50px;text-align: center;" class="contadorc5 form-control mas_menos inputpdf" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default mas5 mas_menos" type="button"><p class="letra_masm">+</p></button> 
                            </span>
                        </td>
                        <td>
                            <textarea style="width:50px;text-align: center;"  class="desc form-control letras_tabla4 altura_textarea"></textarea>
                        </td>
                        <td class="p_unit letras_tabla4"> <p class ="mas_menos">$</p> 
                            <input style="width:50px;text-align: center;"  class="contadoru5 form-control inputpdf2" value="1">
                        </td>
                        <td class="p_total5"></td>
                    </tr>
                    <tr class="tr33">
                        <td>
                            <span class="input-group-btn"> 
                                <button class="btn btn-default menos5 mas_menos" type="button"><p class="letra_masm">-</p></button> 
                            </span> 
                            <input style="width:50px;text-align: center;" class="contadorc5 form-control mas_menos inputpdf" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default mas5 mas_menos" type="button"><p class="letra_masm">+</p></button> 
                            </span>
                        </td>
                        <td>
                            <textarea style="width:50px;text-align: center;"  class="desc form-control letras_tabla4 altura_textarea"></textarea>
                        </td>
                        <td class="p_unit letras_tabla4"><p class ="mas_menos">$</p> 
                            <input style="width:50px;text-align: center;"  class="contadoru5 form-control inputpdf2" value="1">
                        </td>
                        <td class="p_total5"></td>
                    </tr>
                    <tr class="tr33">
                        <td>
                            <span class="input-group-btn"> 
                                <button class="btn btn-default menos5 mas_menos" type="button"><p class="letra_masm">-</p></button> 
                            </span> 
                            <input style="width:50px;text-align: center;" class="contadorc5 form-control mas_menos inputpdf" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default mas5 mas_menos" type="button"><p class="letra_masm">+</p></button> 
                            </span>
                        </td>
                        <td>
                            <textarea style="width:50px;text-align: center;"  class="desc form-control letras_tabla4 altura_textarea"></textarea>
                        </td>
                        <td class="p_unit letras_tabla4"><p class ="mas_menos">$</p> 
                            <input style="width:50px;text-align: center;"  class="contadoru5 form-control inputpdf2" value="1">
                        </td>
                        <td class="p_total5"></td>
                    </tr>
                    <tr class="tr33" style="display:none">
                        <td>
                            <span class="input-group-btn"> 
                                <button class="btn btn-default menos5 mas_menos" type="button"><p class="letra_masm">-</p></button> 
                            </span> 
                            <input style="width:50px;text-align: center;" class="contadorc5 form-control mas_menos inputpdf" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default mas5 mas_menos" type="button"><p class="letra_masm">+</p></button> 
                            </span>
                        </td>
                        <td>
                            <textarea style="width:50px;text-align: center;"  class="desc form-control letras_tabla4 altura_textarea"></textarea>
                        </td>
                        <td class="p_unit letras_tabla4"><p class ="mas_menos">$</p> 
                            <input style="width:50px;text-align: center;"  class="contadoru5 form-control inputpdf2" value="1">
                        </td>
                        <td class="p_total5"></td>
                    </tr>
                    <tr class="tr33" style="display:none">
                        <td>
                            <span class="input-group-btn"> 
                                <button class="btn btn-default menos5 mas_menos" type="button"><p class="letra_masm">-</p></button> 
                            </span> 
                            <input style="width:50px;text-align: center;" class="contadorc5 form-control mas_menos inputpdf" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default mas5 mas_menos" type="button"><p class="letra_masm">+</p></button> 
                            </span>
                        </td>
                        <td>
                            <textarea style="width:50px;text-align: center;"  class="desc form-control letras_tabla4 altura_textarea"></textarea>
                        </td>
                        <td class="p_unit letras_tabla4"><p class ="mas_menos">$</p> 
                            <input style="width:50px;text-align: center;"  class="contadoru5 form-control inputpdf2" value="1">
                        </td>
                        <td class="p_total5"></td>
                    </tr>
                    <tr class="tr33" style="display:none">
                        <td>
                            <span class="input-group-btn"> 
                                <button class="btn btn-default menos5 mas_menos" type="button"><p class="letra_masm">-</p></button> 
                            </span> 
                            <input style="width:50px;text-align: center;" class="contadorc5 form-control mas_menos inputpdf" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default mas5 mas_menos" type="button"><p class="letra_masm">+</p></button> 
                            </span>
                        </td>
                        <td>
                            <textarea style="width:50px;text-align: center;"  class="desc form-control letras_tabla4 altura_textarea"></textarea>
                        </td>
                        <td class="p_unit letras_tabla4"><p class ="mas_menos">$</p> 
                            <input style="width:50px;text-align: center;"  class="contadoru5 form-control inputpdf2" value="1">
                        </td>
                        <td class="p_total5"></td>
                    </tr>
                    <tr class="tr33" style="display:none">
                        <td>
                            <span class="input-group-btn"> 
                                <button class="btn btn-default menos5 mas_menos" type="button"><p class="letra_masm">-</p></button> 
                            </span> 
                            <input style="width:50px;text-align: center;" class="contadorc5 form-control mas_menos inputpdf" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default mas5 mas_menos" type="button"><p class="letra_masm">+</p></button> 
                            </span>
                        </td>
                        <td>
                            <textarea style="width:50px;text-align: center;"  class="desc form-control letras_tabla4 altura_textarea altura_textarea"></textarea>
                        </td>
                        <td class="p_unit letras_tabla4"><p class ="mas_menos">$</p> 
                            <input style="width:50px;text-align: center;"  class="contadoru5 form-control inputpdf2" value="1">
                        </td>
                        <td class="p_total5"></td>
                    </tr>
                    <tr class="tr33" style="display:none">
                        <td>
                            <span class="input-group-btn"> 
                                <button class="btn btn-default menos5 mas_menos" type="button"><p class="letra_masm">-</p></button> 
                            </span> 
                            <input style="width:50px;text-align: center;" class="contadorc5 form-control mas_menos inputpdf" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default mas5 mas_menos" type="button"><p class="letra_masm">+</p></button> 
                            </span>
                        </td>
                        <td>
                            <textarea style="width:50px;text-align: center;"  class="desc form-control letras_tabla4 altura_textarea"></textarea>
                        </td>
                        <td class="p_unit letras_tabla4"><p class ="mas_menos">$</p> 
                            <input style="width:50px;text-align: center;"  class="contadoru5 form-control inputpdf2" value="1">
                        </td>
                        <td class="p_total5"></td>
                    </tr>
                    <tr class="tr33" style="display:none">
                        <td>
                            <span class="input-group-btn"> 
                                <button class="btn btn-default menos5 mas_menos" type="button"><p class="letra_masm">-</p></button> 
                            </span> 
                            <input style="width:50px;text-align: center;" class="contadorc5 form-control mas_menos inputpdf" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default mas5 mas_menos" type="button"><p class="letra_masm">+</p></button> 
                            </span>
                        </td>
                        <td>
                            <textarea style="width:50px;text-align: center;"  class="desc form-control letras_tabla4 altura_textarea"></textarea>
                        </td>
                        <td class="p_unit letras_tabla4"><p class ="mas_menos">$</p>  
                            <input style="width:50px;text-align: center;"  class="contadoru5 form-control inputpdf2" value="1">
                        </td>
                        <td class="p_total5"></td>
                    </tr>
                    <tr class="tr33" style="display:none">
                        <td>
                            <span class="input-group-btn"> 
                                <button class="btn btn-default menos5 mas_menos" type="button"><p class="letra_masm">-</p></button> 
                            </span> 
                            <input style="width:50px;text-align: center;" class="contadorc5 form-control mas_menos inputpdf" value="1">
                            <span class="input-group-btn"> 
                                <button class="btn btn-default mas5 mas_menos" type="button"><p class="letra_masm">+</p></button> 
                            </span>
                        </td>
                        <td>
                            <textarea style="width:50px;text-align: center;"  class="desc form-control letras_tabla4 altura_textarea"></textarea>
                        </td>
                        <td class="p_unit letras_tabla4"><p class ="mas_menos">$</p> 
                            <input style="width:50px;text-align: center;"  class="contadoru5 form-control inputpdf2" value="1">
                        </td>
                        <td class="p_total5"></td>
                    </tr>
                    <td colspan= "2" class = "letras_tabla4"> Nota: El Laboratorio seleccionado para el Presupuesto es:
                    Pendiente de definir</td>
                    <td class = "letras_tabla4">SUB-TOTAL SIN
                    IVA</td>
                    <td id="stsi33">1350000</td>
                </tr>
                <tr>
                <td colspan="3" class="centrar_t">I.V.A</td>
                <td><input style="width:50px;text-align: center;" class="form-control mas_menos inputpdf2" id="table33iva" value="19"> %</td>
            </tr>
            <tr>
                <td colspan="3" class="centrar_t">TOTAL</td>
                <td id="table33total">1606500</td>
            </tr>
                </table>

                <div>
                    <p class="letra1pdf margnees_elem"><b>
                        *El presupuesto presentado es un estimado del costo de las actividades, este puede variar si los
            laboratorios contratados actualizan tarifas
                    </b></p>
                    <p class="letra1pdf"><b>
                        GRUPO VTEK S.A.S
                    </b>
                informará y alertará al cliente con 3 meses de anticipación para la ejecución de las
            actividades de seguimiento. El cliente es responsable de la ejecución de estas actividades de manera anticipada
            con el objetivo de mantener su certificado de conformidad vigente.
                    </p>
                    <h1 class="letra_titulos_pdf1">
                        4. CONDICIONES COMERCIALES DEL SERVICIO DE CERTIFICACIÓN
                    </h1>
                    <p class="letra1pdf"><b>
                        60 días para el pago de los servicios de certificación.
                    </b></p>
                    <p class="letra1pdf">
                    Favor consignar al GRUPO VTEK S.A.S., NIT 901.293.797-6   
                    </p>
                    <p class="letra1pdf"><b >
                    Cuenta de Ahorros del Banco de Bogotá  
                    </b>N°012668570. No somos objeto de retención de la Fuente Ley
            1429 de 29de Dic. 2010, Art. 4 - Parágrafo 2. ACTIVIDAD ECONOMICA CIIU: 7120 / IVA REGIMEN COMUN.
                    </p>
                </div>
            </main>
            <footer>
                <div >${footer}
                    
                </div>
                <p class ="letra1pdf">5</p>
                <div></div>
            </footer>
            </div>`,
            pdf6 = `<div id="pg6" style="display:none " class= "tamanopg">
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
                <p class ="letra1pdf">6</p>
                <div></div>
            </footer>
            </div>`,
            pdf7 = `<div id="pg7" style=" display:none" class= "tamanopg">
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
                        <td class="letras_tabla2 centrar_t">${ct.Nombre_Responsable}</td>
                        <td class="letras_tabla2 centrar_t">Nombre</td>
                        <td class="letras_tabla2 centrar_t">Nombre responsable pendiente</td>
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
                <p class = "letra1pdf">7</p>
                <div></div>
            </footer>
            </div>`;

            const cargaInicial = () => {
                for (let i = 1; i < 8; i++){
                    const loc = `pdf${i}`;
                    const pga = eval(loc);
                    const contenedor = d.getElementById("pgpdf");
                    contenedor.innerHTML += pga;
                }
                const textsarea = d.querySelectorAll("textarea");
                textsarea.forEach(e => {
                    e.setAttribute('style','border:0');
                    
                });
            }
            cargaInicial();    
        }

        const setLogica = () => {            

            const listeners = () => {
                const d=document;
                (() =>{//table31                    
                        const vinculosmas = d.querySelectorAll('.mas'),
                        vinculosmenos = d.querySelectorAll('.menos'),
                        inputsc = d.querySelectorAll('.contadorc'),
                        inputsu = d.querySelectorAll('.contadoru'),
                        total = d.querySelectorAll('.p_total'),
                        table31 = d.getElementById('table31'),
                        btnAddFiles = d.getElementById('addfilest31'),
                        btnRemoveFiles = d.getElementById('removefilest31'),
                        table31iva = d.getElementById('table31iva'),
                        table31total = d.getElementById('table31total'),
                        subtotalsi31 = d.getElementById('stsi31'),
                        filas31 = d.querySelectorAll('.tr31');

                        const totalparcial = i => {
                            total[i].textContent =`$ ${inputsc[i].value * inputsu[i].value}`;
                        }

                        const subtotal = () => {
                            let st = 0, num;
                            total.forEach(e=>{
                                let hasAtrSDN = e.parentElement.hasAttribute("style","display:none");
                                if (!hasAtrSDN){
                                    num = e.textContent;
                                    num = parseInt(num.substring(2,num.length), 10);
                                    st = st+num;
                                }
                            })
                            subtotalsi31.textContent = `$ ${st}`;
                        }
                        
                        const totalizar = () => {
                            let sumatoria = subtotalsi31.textContent;
                            sumatoria = parseInt(sumatoria.substring(2, sumatoria.length), 10);
                            let iva = parseInt(table31iva.value, 10);
                            sumatoria = (iva/100+1)*sumatoria;
                            table31total.textContent = `$ ${sumatoria}`;
                        }

                        vinculosmas.forEach((e,i)=> {
                            inputsc[i].id=`contadorc${i}`;
                            // inputsu[i].id=`contadoru${i}`;
                            e.addEventListener('click',() => {
                                mas(`contadorc${i}`);
                                totalparcial(i);
                            })
                        })
                        
                        vinculosmenos.forEach((e,i) => {
                            e.addEventListener('click',() => {
                                menos(`contadorc${i}`);
                                totalparcial(i);
                            });
                        })
                        
                        total.forEach((e,i) => {
                            e.addEventListener('click', () => totalparcial(i));
                        })

                        inputsu.forEach((e,i) => {
                            e.addEventListener('keyup', () => totalparcial(i));
                        })

                        btnAddFiles.addEventListener('click',()=>{
                            const BreakError = {};
                            try {
                            filas31.forEach(e => {
                                const hasAtrSDN = e.hasAttribute("style","display:none");
                                if (hasAtrSDN){
                                    e.removeAttribute("style","display:none");
                                    throw BreakError;
                                };
                            });
                            } catch (er){
                                if (er !== BreakError) throw er;
                            }
                        })

                        btnRemoveFiles.addEventListener('click',()=>{
                            const BreakError = {};
                            try {
                            filas31.forEach((e,i) => {
                                const hasAtrSDN = e.hasAttribute("style","display:none");
                                if (!hasAtrSDN){
                                    filas31[i].setAttribute("style","display:none");
                                    throw BreakError;
                                };
                            });
                            } catch (er){
                                if (er !== BreakError) throw er;
                            }
                        })

                        table31iva.addEventListener('keyup',() => totalizar());
                        table31total.addEventListener('click',() => totalizar());
                        subtotalsi31.addEventListener('click',() => subtotal());
                })();
                (() =>{//table33
                        const vinculosmas5 = d.querySelectorAll('.mas5'),
                        vinculosmenos5 = d.querySelectorAll('.menos5'),
                        inputsc5 = d.querySelectorAll('.contadorc5'),
                        inputsu5 = d.querySelectorAll('.contadoru5'),
                        total5 = d.querySelectorAll('.p_total5'),
                        table33 = d.getElementById('table33'),
                        btnAddFiles5 = d.getElementById('addfilest33'),
                        btnRemoveFiles5 = d.getElementById('removefilest33'),
                        table33iva = d.getElementById('table33iva'),
                        table33total = d.getElementById('table33total'),
                        subtotalsi33 = d.getElementById('stsi33'),
                        filas33 = d.querySelectorAll('.tr33');

                        const totalparcial5 = i => {
                            total5[i].textContent =`$ ${inputsc5[i].value * inputsu5[i].value}`;
                        }

                        const subtotal5 = () => {
                            let st = 0, num;
                            total5.forEach((e,i)=>{
                                let hasAtrSDN = e.parentElement.hasAttribute("style","display:none");
                                if (!hasAtrSDN){
                                    num = e.textContent;
                                    num = parseInt(num.substring(2,num.length), 10);
                                    st = st+num;
                                }
                            })                   

                            subtotalsi33.textContent = `$ ${st}`;
                        }
                        
                        const totalizar5 = () => {
                            let sumatoria = subtotalsi33.textContent;
                            sumatoria = parseInt(sumatoria.substring(2, sumatoria.length), 10);
                            let iva = parseInt(table33iva.value, 10);
                            sumatoria = (iva/100+1)*sumatoria;
                            table33total.textContent = `$ ${sumatoria}`;
                        }

                        vinculosmas5.forEach((e,i)=> {
                            inputsc5[i].id=`contadorc5${i}`;
                            e.addEventListener('click',() => {
                                mas(`contadorc5${i}`);
                                totalparcial5(i);
                            })
                        })
                        
                        vinculosmenos5.forEach((e,i) => {
                            e.addEventListener('click',() => {
                                menos(`contadorc5${i}`);
                                totalparcial5(i);
                            });
                        })
                        
                        total5.forEach((e,i) => {
                            e.addEventListener('click', () => totalparcial5(i));
                        })

                        inputsu5.forEach((e,i) => {
                            e.addEventListener('keyup', () => totalparcial5(i));
                        })

                        btnAddFiles5.addEventListener('click',()=>{
                            const BreakError = {};
                            try {
                            filas33.forEach(e => {
                                const hasAtrSDN = e.hasAttribute("style","display:none");
                                if (hasAtrSDN){
                                    e.removeAttribute("style","display:none");
                                    throw BreakError;
                                };
                            });
                            } catch (er){
                                if (er !== BreakError) throw er;
                            }
                        })

                        btnRemoveFiles5.addEventListener('click',()=>{
                            const BreakError = {};
                            try {
                            filas33.forEach((e,i) => {
                                const hasAtrSDN = e.hasAttribute("style","display:none");
                                if (!hasAtrSDN){
                                    filas33[i].setAttribute("style","display:none");
                                    throw BreakError;
                                }
                            });
                            } catch (er){
                                if (er !== BreakError) throw er;
                            };
                        })

                        table33iva.addEventListener('keyup',() => totalizar5());
                        table33total.addEventListener('click',() => totalizar5());
                        subtotalsi33.addEventListener('click',() => subtotal5());
                })();
                        
            }

            const convtoPDF = () => {
                let loc, oculto;
                document.getElementById('pg1').removeAttribute('style','display:none');
                for (let i = 2; i < 8; i++){
                    loc = `pg${i}`;
                    oculto = document.getElementById(loc);
                    oculto.setAttribute('style','display:none');
                }
                for (let i = 1; i < 8; i++){
                    loc = `pg${i}`;
                    oculto = document.getElementById(loc);
                    oculto.removeAttribute('style','display:none');
                }
                const botones = document.querySelectorAll("table button"); 
                const selects = document.querySelectorAll("table select");               
                const inputs = document.querySelectorAll("table input");
                botones.forEach(e => {
                    e.setAttribute('style','display:none');
                });                
                inputs.forEach(e => {
                    e.setAttribute('style','border:0');                    
                });
                selects.forEach(e => {
                    e.setAttribute('style','border:0');
                });
                const container = document.getElementById("pgpdf");
                html2pdf()
                    .set({
                        margin: 0,
                        filename: 'documento.pdf',
                        image: {
                            type: 'jpeg',
                            quality: 0.98
                        },
                        html2canvas: {
                            scale: 2, // A mayor escala, mejores gráficos, pero más peso
                            letterRendering: true,
                        },
                        jsPDF: {
                            unit: "mm",
                            format: "letter",
                            orientation: 'portrait' // landscape o portrait
                        }
                    })
                    .from(container)
                    .save()
                    .then(() => {
                        for (let i = 2; i < 8; i++){
                            loc = `pg${i}`;
                            oculto = document.getElementById(loc);
                            oculto.setAttribute('style','display:none')
                        }
                        botones.forEach(e => {
                            e.removeAttribute('style','display:none');
                        });                
                        inputs.forEach(e => {
                            e.removeAttribute('style','border:0');                    
                        });
                        selects.forEach(e => {
                            e.removeAttribute('style','border:0');
                        });
                    })
                    .catch(err => console.log(err));                
            }
            const setPgActual = (pg) => {
                try {
                    if (pg < 8) {
                        let loc;
                        for (let i = 1; i < 8; i++){
                            loc = `pg${i}`;
                            let oculto = document.getElementById(loc);
                            oculto.setAttribute('style','display:none')       
                        }
                        loc = `pg${pg}`;
                        document.getElementById(loc).removeAttribute('style','display:none')
                    } else {
                        location.hash = "#/comercial/createoffer";
                    }
                } catch (e){console.log(e)}
            }
            const navegacion = () => {
                            const navButtons = document.querySelectorAll("nav > .vinc");
                            navButtons.forEach((e,i) => {
                                e.addEventListener("click",() => {
                                        setPgActual(i+1);
                                })
                            })
                            document.getElementById("btnDPDF").addEventListener("click",() => {
                                convtoPDF();
                            })
            }
            listeners();
            setPgActual(1);             
            navegacion();
        }
        console.log('#/comercial/plantillapdf')     
        }
        location.hash == '#/comercial/createpdf1' && charge();
    })
    const parent = document.getElementById('root');
    observerdatos.observe(parent,{childList:true})