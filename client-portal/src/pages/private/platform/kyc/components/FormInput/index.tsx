/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { forwardRef } from 'react';

import './formInput.scss';

/**
 *
 * @param {*} param0
 */
const FormInput = forwardRef(
    (
        {
    
            label = '',
            labelClass = 'label-class',
            icon = '',
            inputName,
            inputType,
            inputClass = '',
            showErrorMessage = true,
            placeholderIcon = '',
            required = false,
            onChange,
            ...rest
        }: any,
        ref
    ) => (
        <>
            <label htmlFor={inputName} className="text-base text-white font-medium">{label}</label>
         
            <div className="relative mt-1 ">
                <input
                    className={`block w-full py-4 pl-3 pr-14 form-input  text-sm  border rounded-lg focus:ring-0`}
                    name={inputName}
                    type={inputType}
                    onChange={onChange}
                    {...rest}
                />
                {icon && (
                    <div className="absolute right-2.5 bottom-4">{icon}</div>
                )}
                
            </div>
        </>
    )
);

export default FormInput;
