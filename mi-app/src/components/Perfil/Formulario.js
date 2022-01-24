import React from "react";
import {useState, useEffect} from "react";

function Formulario({usuarios, setUsuarios, usuario, setUsuario}){
    //Aquí se crean lo useStates que se van a utilizar y que con los set van a setear los campos dentro del formulario
    const [foto, setFoto] = useState('');
    const [nombre, setNombre] = useState(usuario.nombre??'');
    const [apellido, setApellido] = useState('');
    const [pais, setPais] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [email, setEmail] = useState('');
    const [nac, setNac] = useState('');
    const [carrera, setCarrera] = useState('');
    const [especialidad, setEspecialidad] = useState('');
    const [hobbies, setHobbies] = useState('');
    const [idiomas, setIdiomas] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [conocimientos, setConocimientos] = useState('');
    const [cuentanos, setCuentanos] = useState('');
    const [feedback, setFeedback] = useState('');

    const[error, setError] = useState(false);


    //Use efect que escucha los cambios que suceden en usuario y que va a setear los valores del usuario
    useEffect(()=> {
      

    },[usuario])

    async function imagenes(file){
        file = foto
        console.log("se clickeo");
        const cloudURL = 'https://api.cloudinary.com/v1_1/dpvabv6yz/upload';
        const formData = new FormData();
        formData.append('upload_preset','react-journal');
        formData.append('file', file);
        try{
            const resp = await fetch(cloudURL,{
                method:'POST',
                body:formData
            });
    
            if(resp.ok){
                const cloudResp = await resp.json();
                return cloudResp.secure_url;
            }else{
                throw await resp.json();
            }
        }catch(e){
            console.log(e);
            throw e;
        }
    }
    //Generamos un ID único para el objetoUsuario que se creará
    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random +fecha
    }

    const [mostrar, setMostrar] = useState(true);


    const handleSubmit =(e) => {
        setMostrar(false);
        e.preventDefault();

        //Validar formulario:
        if([foto,nombre,apellido, pais, ciudad, email, nac, carrera, especialidad, hobbies, idiomas, linkedin, conocimientos, cuentanos, feedback].includes('')){
            console.log('Hay un campo vacio')

            setError(true)
            return;

        } 

        setError(false)

        //Se construye a continuación el objeto de usuario en memoria de lo que se lee en el formulario:
        const  objetoUsuario ={
            foto,
            nombre,
            apellido,
            pais,
            ciudad,
            email,
            nac,
            carrera,
            especialidad,
            hobbies,
            idiomas,
            linkedin,
            conocimientos, 
            cuentanos, 
            feedback,
            id: generarId()

        }

        //Vamos a crear un condicional if con el cual si existe un usuario.id entonces editaremos
        if(usuario.id) {
            // Editando el registro
            objetoUsuario.id = usuario.id

            //Se crea una nueva variable para iterar el usuario a editar
            const usuariosActualizados = usuarios.map( usuarioState => (usuarioState.id === usuario.id ? objetoUsuario : usuarioState))

            //Retornamos setUsuarios con el nuevo arreglo de usuariosActualizados con .map que retorna arreglos nuevos
            setUsuarios(usuariosActualizados)

            //Una vez actualizado, regresamos a objeto para que se haga el cambio en el botón de Editar Usuario a Agregar
            setUsuario({})


        } else {
            //Realizar un nuevo registro el cual no tienen un id
            objetoUsuario.id = generarId();
        //A continuacion a setUsuarios se agrega un arreglo con usuarios y el objetoUsuario creado anteriormente el cual se asigna a setUsuario
        //setUsuario lo usamos en App.js en Formulario
        // al colocar ...usuarios como método inmutable cada vez que se hace submit, se genera un nuevo arreglo generando un nuevo objetoUsuario y se almacena con setPacientes sin modificar el arreglo original
        setUsuarios([...usuarios, objetoUsuario]);
        }

        //Una vez creado el objetoUsuario, procedemos a reiniciar el form con setVariable(''), de lo contrario, al hacer submit seguirian apareciendo los valores anteriores
        //con esto se resetea el state al valor inicial, como estan asociados los value en el html se reinicia el formulario
        setFoto('');
        setNombre('');
        setApellido('');
        setPais('');
        setCiudad('');
        setEmail('');
        setNac('');
        setCarrera('');
        setEspecialidad('');
        setHobbies('');
        setIdiomas('');
        setLinkedin('');
        setConocimientos('');
        setCuentanos('');
        setFeedback('');

    }

/*     async function handleSubmit(event) {
        event.preventDefault()
        let foto =
        let nombre =
        apellido,
        pais,
        ciudad,
        email,
        nac,
        carrera,
        especialidad,
        hobbies,
        idiomas,
        linkedin,
        conocimientos, 
        cuentanos, 
        feedback,
        id: generarId()  */






    //A continuacion en los forms, los value provienen de los valores foto, nombre, etc declarados en el useState declarados dentro de la funcion Formulario

    
    return(
        <div className="bg-purple-50 flex w-6">
            
            <h2>¡Bienvenido a tu perfil Tecler!</h2>

            <div>


            <form name="foto" type="POST" encType="multipart/formdata" onSubmit={imagenes}>
                <label htmlFor="foto" className="form-label">Tu foto de perfil </label>
                <input type="file" name="foto" className ="form-control" id="foto" aria-describedby="foto" placeholder="Foto"
                value={foto}
                onChange={(e)=> setFoto(e.target.value)}
                
                />
            </form>
 
            </div>

            <h4 className="mb-0 mt-3 text-center">Ingresa tus datos</h4>


            <form 
                onSubmit={handleSubmit} 
                className="">

                    {error && (<div>
                        <p className="alert alert-danger" role="alert">Todos los campos son obligatorios</p>

                    </div>
                    )}


                <div className="mb-0">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" aria-describedby="nombre" placeholder="Nombre"
                    value={nombre} 
                    onChange={(e)=> setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-0">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="apellido" aria-describedby="apellido" placeholder="Apellido"
                    value={apellido} 
                    onChange={(e)=> setApellido(e.target.value)}
                    />
                </div>

                <div className="mb-0">
                    <label htmlFor="pais" className="form-label">País</label>
                    <input type="text" className="form-control" list="datalistOptions" id="pais" aria-describedby="pais" placeholder="Pais"
                    value={pais} 
                    onChange={(e)=> setPais(e.target.value)}
                    />
                    <datalist id="datalistOptions">
                        <option value="México"/>
                        <option value="Argentina"/>
                        <option value="Colombia"/>
                        <option value="Chile"/>
                        <option value="Venezuela"/>
                        <option value="Ecuador"/>
                        <option value="Perú"/>
                    </datalist>
                </div>

                <div className="mb-0">
                    <label htmlFor="ciudad" className="form-label">Ciudad</label>
                    <input type="text" className="form-control" id="ciudad" aria-describedby="ciudad" placeholder="Ciudad"
                    value={ciudad} 
                    onChange={(e)=> setCiudad(e.target.value)}
                    />
                </div>

                <div className="mb-0">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Email"
                    value={email} 
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-0">
                    <label htmlFor="nac" className="form-label">Fecha de nacimiento</label>
                    <input type="date" className="form-control" id="nac" aria-describedby="nac" placeholder="Nac"
                    value={nac} 
                    onChange={(e)=> setNac(e.target.value)}
                    />
                </div>

                <div className="mb-0">
                    <label htmlFor="carrera" className="form-label">Carrera</label>
                    <input type="text" className="form-control" id="carrera" aria-describedby="carrera" placeholder="Carrera"
                    value={carrera} 
                    onChange={(e)=> setCarrera(e.target.value)}
                    />
                </div>

                <div className="mb-0">
                    <label htmlFor="especialidad" className="form-label">Especialidad</label>
                    <input type="text" className="form-control" id="especialidad" aria-describedby="especialidad" placeholder="Especialidad"
                    value={especialidad} 
                    onChange={(e)=> setEspecialidad(e.target.value)}
                    />
                </div>

                <div className="mb-0">
                    <label htmlFor="hobbies" className="form-label">Hobbies</label>
                    <input type="text" className="form-control" id="hobbies" aria-describedby="hobbies" placeholder="Hobbies"
                    value={hobbies} 
                    onChange={(e)=> setHobbies(e.target.value)}
                    />
                </div>

                <div className="mb-0">
                    <label htmlFor="idiomas" className="form-label">Idiomas</label>
                    <input type="text" className="form-control" id="idiomas" aria-describedby="idiomas" placeholder="Idiomas"
                    value={idiomas} 
                    onChange={(e)=> setIdiomas(e.target.value)}
                    />
                </div>

                <div className="mb-0">
                    <label htmlFor="linkedin" className="form-label">Linkedin</label>
                    <input type="text" className="form-control" id="linkedin" aria-describedby="linkedin" placeholder="Linkedin"
                    value={linkedin} 
                    onChange={(e)=> setLinkedin(e.target.value)}
                    />
                </div>

                <div className="mb-0">
                    <label htmlFor="conocimientos" className="form-label">Conocimientos</label>
                    <input type="text" className="form-control" id="conocimientos" aria-describedby="conocimientos" placeholder="Conocimientos"
                    value={conocimientos} 
                    onChange={(e)=> setConocimientos(e.target.value)}
                    />
                </div>

                <div className="mb-0">
                    <label htmlFor="cuentanos" className="form-label">Cuéntanos sobre ti</label>
                    <textarea type="text" className="form-control" id="cuentanos" aria-describedby="conocimientos" placeholder="Cuentanos un poco sobre ti y tus objetivos"
                    value={cuentanos} 
                    onChange={(e)=> setCuentanos(e.target.value)}
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="feedback" className="form-label">Feedback</label>
                    <textarea type="text" className="form-control" id="feedback" aria-describedby="feedback" placeholder="Danos tu feedback sobre el curso"
                    value={feedback} 
                    onChange={(e)=> setFeedback(e.target.value)}
                    />
                </div>
            

            
                <button type="submit" className="btn btn-primary mb-2">
                    {usuario.id ? 'Editar usuario' : 'Agregar usuario'}</button>

            


            </form>

        </div>

    )

                       
            



}

export default Formulario;