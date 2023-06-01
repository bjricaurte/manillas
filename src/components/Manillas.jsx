import React, {useState, useEffect} from 'react'
import { db } from '../firebase'
import { collection, doc, addDoc, onSnapshot, deleteDoc, updateDoc } from 'firebase/firestore'

const Manillas = () => {
    const [listaMateriales, setListaMateriales] = useState([])
    const [listaDijenes, setListaDijen] = useState([])
    const [listaTipos, setListaTipos] = useState([])
    //const [lvalor, setValor] = useState('')
    const [listaManillas, setListaManillas] = useState([])
    const [valor, setValor] = useState("0");

    var listaManillasA= []

    useEffect(()=>{
        const obtenerDatos = async() =>{
            try{
                await onSnapshot(collection(db, 'manillas'), (query) =>{
                    setListaManillas(query.docs.map((doc)=>({...doc.data(), id:doc.id})))
                    console.log(listaManillas)
                    listaManillasA = listaManillas
                })
            }catch(error){
                console.log(error)
            }
        }
        obtenerDatos();
    }, [])
    
    
    const actualizarValor = () =>{
        console.log(document.getElementById("inputGroupSelect01").value)
        console.log(document.getElementById("inputGroupSelect02").value)
        console.log(document.getElementById("inputGroupSelect03").value)

        console.log(listaManillasA)

        listaManillasA.forEach(element => console.log(element.valor))
        setValor("10000")
    }


    

  return (
    <div className='container mt-5'>
        <h1 className='text-center'>XYZ - Manillas</h1>
        <hr />
        <div className='row'>
            <div className="col-10">
                <h4 className="text-center">Listado de opciones</h4>
                <table className='table'>
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Material</th>
                        <th scope="col">Dije</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {  
                            listaManillas.map(item =>(
                                <tr key={item.id}>                                    
                                    <td>{item.material}</td>
                                    <td>{item.dije}</td>
                                    <td>{item.tipo}</td>
                                    <td>{item.valor}</td>                                    
                                </tr>
                            ))   
                        }

                    </tbody>
                </table>
            </div>
        </div>
        <h2 className='text-center'>Calcular el valor de mi manilla</h2>
        <div className='row'>
            <div className='col-3'>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">Material</label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01" onChange={()=>actualizarValor()}>
                        <option selected>Selecione...</option>
                        <option value="Cuero">Cuero</option>
                        <option value="Cuerda">Cuerda</option>
                    </select>
                </div>
            </div>
            <div className='col-3'>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect02">Dije</label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect02" onChange={()=>actualizarValor()}>
                        <option selected>Selecione...</option>
                        <option value="Martillo">Martillo</option>
                        <option value="Ancla">Ancla</option>
                    </select>
                </div>
            </div>
            <div className='col-3'>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect03">Tipo</label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect03" onChange={()=>actualizarValor()}>
                    <option selected>Seleccione...</option>
                        <option value="Oro">Oro</option>
                        <option value="Oro Rosado">Oro Rosado</option>
                        <option value="Plata">Plata</option>
                        <option value="Niquel">Niquel</option>
                    </select>
                </div>
            </div>
            <div className='col-3'>
                <span>Valor: {valor} dólares ({valor*5000}) COP</span>
            </div>
        </div>
    </div>
  )
}

export default Manillas