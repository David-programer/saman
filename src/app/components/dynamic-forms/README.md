## FORMULARIOS DINAMICOS
### Instancia del componente

#### HTML
    <div class="card">
        <div class="card-body">
            <app-dynamic-forms 
                #FormName
                (delete_form)="handler_delete_event(0)" 
                (blur_event)="valid_state_progress(0, $event.name)" 
                (submit_form)="handler_submit()" 
                [sections]="form_prueba"
            ></app-dynamic-forms>
        </div>
    </div>

- #### delete_form : ___event()___
    - Este evento se produce cuando el formulario se "limpia", es decir se le da click en el button "CANCELAR". No devuelve información, solamente escucha la acción del usuario. 

- ### blur_event : ___event()___
    - Este evento se ejecuta en el momento en que el usuario haga (blur) en cualquier input del formulario, siempre y cuando la opción este habilitada en el objeto de configuración del javascript

- ### submit_form : ___event()___
    - Este evento se ejecuta, cuando el usuario envíe el formulario **siempre y cuando el formulario sea válido**.

- ### sections : ___obejct___
    - Este es el objeto de configuración del javascript


### JS

    public form_prueba:any[] = [
        {
            title: "Información personal",
            inputs: [
            {blur_event: true, class_input:"", label: {text: "Email", icon: "cil-trash", class:""}, type:"email", name: "email", required:true, placeholder:"example@dominio.com", error_message:"¡Debes digitar un correo válido!", pattern:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"},
            {blur_event: true, class_input:"", label: {text: "Nombre", icon: "cil-user", class:""}, type:"text", name: "nombre", required:true},
            ]
        },
        {
            checks: [
            {blur_event: true, value: "crispetas", class_check:"", label: {text: "Crispetas", icon: "cil-user", class:""}, type:"checkbox", name: "crispetas", required:true},
            {blur_event: true, value: "chocolatina", class_check:"", label: {text: "chocolatina", icon: "cil-user", class:""}, type:"checkbox", name: "chocolatina"},
            ]
        }
    ];

- #### Sections
    - Cada objeto ___padre___ dentro del array es un "section" o una separación entre campos del mismo formato

    - Un "section" puede llevar o no, un ___title___

- #### Inputs por Sections
    - Cada section tiene sus inputs, por lo que se crea un objeto de tipo "array" para pasarle las configuraciones. En este array, solo hay inputs que puedan contener un class "form-control" ('text', 'number', 'email') ...etc.

- #### Configuración de los inputs
    - **blur_event** : boolean que activa el evento blur en cada uno de los campos
    - **class_input** : string, para las clases del input
    - **label** : object, para pasarle las configuraciones del label del input
    - **type** : string, que especifica el tipo de input
    - **required** : boolean, detalla si es obligatorio o no
    - **placeholder** : string, placeholder del input
    - **name** : string, nombre del campo del FORM CONTROL
    - **pattern** : regex, es una expresión regular, para la validación independiente de cada input
    - **error_message** : string, mensaje de error para el pattern validation
