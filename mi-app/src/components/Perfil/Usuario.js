import React from 'react'

const Usuario = ({usuario, setUsuario, setEditar}) => {
    //aplicamos destructuring para crear variables y extraer el valor que se va a mostrar en cada span dentro del return
    const {foto, nombre, apellido, pais, ciudad, email, nac, carrera, especialidad, hobbies, idiomas, linkedin, conocimientos, cuentanos, feedback} = usuario;


    return (
        <div >
            <div className='card mb-0 mt-5 bg-info' >
            <h3 className='mb-2 text-center'>Hola {nombre}</h3>
            <p>
                <span> {foto}</span>
            </p>

            <p className='mb-0'>
                Nombre: 
                <span > {nombre}</span>
            </p>

            <p className='mb-0'>
                Apellido:
                <span> {apellido}</span>
            </p>

            <p className='mb-0'>
                Pais:
                <span> {pais}</span>
            </p>

            <p className='mb-0'>
                Ciudad:
                <span> {ciudad}</span>
            </p>

            <p className='mb-0'>
                Email:
                <span> {email}</span>
            </p>

            <p className='mb-0'>
                Fecha de nacimiento:
                <span> {nac}</span>
            </p>

            <p className='mb-0'>
                Carrera:
                <span> {carrera}</span>
            </p>

            <p className='mb-0'>
                Especialidad:
                <span> {especialidad}</span>
            </p>

            <p className='mb-0'>
                Hobbies:
                <span> {hobbies}</span>
            </p>

            <p className='mb-0'>
                Idiomas:
                <span> {idiomas}</span>
            </p>

            <p className='mb-0'>
                Linkedin:
                <span> {linkedin}</span>
            </p>

            <p className='mb-0'>
                Conocimientos:
                <span> {conocimientos}</span>
            </p>

            <p className='mb-0'>
                Sobre ti:
                <span> {cuentanos}</span>
            </p>

            <p className='mb-1'>
                Tu feedback:
                <span> {feedback}</span>
            </p>

            </div>

            <div>
            <button type="submit" className="btn btn-primary mt-1" onClick={()=> setUsuario(usuario)}>Editar</button>
            </div>
        </div>
    )
}

export default Usuario
