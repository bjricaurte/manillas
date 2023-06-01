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
                    setListaLibros(query.docs.map((doc)=>({...doc.data(), id:doc.id})))
                })
            }catch(error){
                console.log(error)
            }
        }
        obtenerDatos();
    }, [])
  return (
    <div>
        <h1>XYZ - Manillas</h1>
    </div>
  )
}

export default Manillas