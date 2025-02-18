import React from "react";

function FormInputField({inputName, inputLabel, inputType, inputId, register}) {
    return (
        <label htmlFor={inputId}>
            {inputLabel}
            <input
                type={inputType}
                id={inputId}
                {...register(inputName)}
            />
        </label>
    )
}

export default FormInputField;