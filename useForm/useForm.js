import { useState } from 'react';

// CUSTOM HOOK
// Este custom hook nos ayuda a manejar el formulario
export const useForm = ( initialValue = {} ) => {
    
    const [ formValues, setFormValues ] = useState( initialValue );

    //Limpiar campo formulario
    const reset = () => {
        setFormValues( initialValue );
    }

    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    return [ formValues, handleInputChange, reset ];
}
