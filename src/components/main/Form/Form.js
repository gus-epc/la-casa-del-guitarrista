import {addDoc, collection, serverTimestamp,} from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from "../../../firebaseConfig";


const Form = ({ cart, total, clear, enviarId }) => {
    const [nombre, setNombre] = useState('');
    const [number, setNumber] = useState();
    const [email, setEmail] = useState('');

    const EnviarOrden = (e) => {
        e.preventDefault();
        const orden = {
            buyer: { nombre: nombre, telefono: number, email: email },
            items: cart,
            total: total(),
            date: serverTimestamp(),
        };

      const ordersCollection = collection(db, 'ordenes');

        addDoc(ordersCollection, orden).then((result) => {
            enviarId(result.id);
            clear();
        });
    };


    const handleChangeNombre = (e) => {

        setNombre(e.target.value);
    };
    const handleChangeNumber= (e) => {

        setNumber(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    return (
        <form action='' onSubmit={EnviarOrden}>
        <fieldset>
        <legend>Formulario de contacto</legend>            
            <label for="nombre">Nombre</label> 
            <input
                    type="text"
                    placeholder="Nombre Apellido"
                    name="nombre"
                    value={nombre}
                    onChange={handleChangeNombre}
                    required
                />
            <label for="number">Teléfono</label> 
            <input
                    type="text"
                    placeholder="Teléfono"
                    name="number"
                    value={number}
                    onChange={handleChangeNumber}
                    required
                />                
            <label for="email">Correo Electrónico </label>
                <input
                    type="email"
                    placeholder="example@email.com"
                    name="email"
                    value={email}
                    onChange={handleChangeEmail}
                    required
                /> 
                <div></div>
                
            <input  type="submit"  value="Terminar mi compra"/>
    </fieldset>
</form>

    );
};

export default Form;