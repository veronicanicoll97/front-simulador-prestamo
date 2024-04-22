"use client";

import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import PrestamoInterface from "../interfaces/PrestamoInterface";
import obtenerTiposSistemas from "@/services/obtenerTiposSistemas";
import obtenerTiposPrestamos from "@/services/obtenerTiposPrestamos";
import obtenerPlazos from "@/services/obtenerPlazos";
import simularCuotaPrestamo from "@/services/simularCuotaPrestamo";

const PrestamoForm = () => {
    // Valores iniciales del formulario.
    const initialValues: PrestamoInterface = {
        tipoSistema: '',
        tipoPrestamo: '',
        plazoPrestamo: 0,
        montoPrestamo: 0
    };

    const [ simularPrestamo, setSimularPrestamo] = useState(initialValues);

    // Validar entradas del formulario
    const validationSchema = Yup.object({
        tipoSistema: Yup.string().required('Required'),
        tipoPrestamo: Yup.string().required('Required'),
        plazoPrestamo: Yup.number().required('Required'),
        montoPrestamo: Yup.number().required('Required'),
    })

    const onSubmit = (values: PrestamoInterface) => {
        // Simulación de prestamos
        setSimularPrestamo(values);
    };

    // Use state para obtener los tipos de prestamos.
    const [tipoDePrestamo, setTipoPrestamo] = useState({'Seleccionar tipo de prestamo': 0});
    console.log(tipoDePrestamo);
    
    // Use state para obtener los tipos de sistemas.
    const [tipoDeSistema, setTipoSistema] = useState<Array<string>>(['Seleccionar tipo de sistema']);
    console.log(tipoDeSistema)
    // Use state para obtener los plazos.
    const [plazos, setPlazoPrestamo] = useState<Array<number>>([0]);
    console.log(plazos);
    // Declaración de estado para el monto del préstamo
    const [montoPrestamo, setMontoPrestamo] = useState(0);
    console.log("Monto Prestamo: ", montoPrestamo);
    
    
    // Use effect para setear el tipo de sistema
    useEffect(() => {
        obtenerTiposSistemas(setTipoSistema)
        obtenerTiposPrestamos(setTipoPrestamo)
        obtenerPlazos(setPlazoPrestamo)
    }, [])

    // Se retorna el formulario.
    return(
        <Formik
            initialValues={initialValues}
            validate={(values) => {
                console.log('values: ', values);
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div>
                        <p>Simulador de prestamos</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="tipoSistema" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo Sistema</label>
                        </div>
                        <div className="flex items-center justify-between">
                            <Field 
                                as='select' 
                                id='selectTipoSistema'
                                name='tipoSistema' 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                {tipoDeSistema.map((item, index) => {
                                    console.log(item);
                                    
                                    return <option key={index} value={item}>{item}</option>
                                })}
                            </Field>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="tipoPrestamo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo Prestamo</label>
                        </div>
                        <Field 
                            as='select' 
                            id='selectTipoPrestamo'
                            name='tipoPrestamo' 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            {Object.entries(tipoDePrestamo).map((item) => {
                                const descripcion = item[0];
                                return <option key={descripcion} value={descripcion}>{descripcion}</option>
                            })}
                        </Field>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="plazoPrestamo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plazo</label>
                        </div>
                        <Field
                            as='select' 
                            id='selectPlazoPrestamo'
                            name='plazoPrestamo' 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            {plazos.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })}
                        </Field>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="montoPrestamo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monto prestamo</label>
                        </div>
                        <div className="flex items-center justify-between">
                            <Field 
                                type='text' 
                                id='montoPrestamo' 
                                name='montoPrestamo' 
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <button type="submit" onClick={() => { console.log("NOOOOOOOOOOOOOOOOOOOOOOOOOOOO")}} className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">Simular</button>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}

export default PrestamoForm