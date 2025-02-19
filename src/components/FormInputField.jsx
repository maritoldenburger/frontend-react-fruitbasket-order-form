import React from "react";

function FormInputField({inputName, inputLabel, inputType, inputId, register}) {
    return (
        <>
            <label htmlFor={inputId}>
                {inputLabel}
            </label>
            <input
                type={inputType}
                id={inputId}
                {...register(inputName)}
            /></>
    )
}

export default FormInputField;