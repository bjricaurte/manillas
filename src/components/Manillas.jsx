import React, {useState, useEffect} from 'react'
import { db } from '../firebase'
import { collection, doc, addDoc, onSnapshot, deleteDoc, updateDoc } from 'firebase/firestore'

const Manillas = () => {
    const [material, setMaterial] = useState('')
    const [dije, setDije] = useState('')
    const [tipo, setTipo] = useState('')
    const [valor, setValor] = useState('')
    const [listaManillas, setListaManillas] = useState([])

    useEffect(()=>{
        const obtenerDatos = async() =>{
            try{
                await onSnapshot(collection(db, 'manillas'), (query) =>{
                    setListaManillas(query.docs.map((doc)=>({...doc.data(), id:doc.id})))
                })
            }catch(error){
                console.log(error)
            }
        }
        obtenerDatos();
    }, [])
  return (
    <div className='container mt-5'>
        <h1 className='text-center'>XYZ - Manillas</h1>
        <hr />
        <div className='row'>
        <div className="col-10">
                <h4 className="text-center">Listado de opciones</h4>
                <ul className="list-group">
                    {  
                        listaManillas.map(item =>(
                            <li className="list-group-item" key={item.id}>
                                <span className="lead">{item.material} - {item.dije} - {item.tipo} - {item.valor}</span>
                            </li>
                        ))   
                    }        
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Manillas