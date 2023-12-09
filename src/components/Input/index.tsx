import { FieldError } from 'react-hook-form'
import { BigInput, InputDefault } from './style'
import { InputHTMLAttributes, forwardRef, ForwardedRef } from 'react'

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: "text" | "email" | "password" | "textarea";
  placeholder: string;
  error?: FieldError;
  borderColor?: 'transparent';
}

export const Input = forwardRef(({
  label,
  type,
  placeholder,
  error,
  borderColor,
  ...rest
}: iInputProps, ref: ForwardedRef<HTMLInputElement> ) => {
    return (
        <>
            {label ? (
                <BigInput borderColor={borderColor}>
                    <label>{label}</label>
                    <input type={type} placeholder={placeholder} id={rest.name} name={rest.name} ref={ref} {...rest} />
                    {error ? <p>{error.message}</p> : null}
                </BigInput>
            ) : (
                <InputDefault>
                    <input type={type} placeholder={placeholder} id={rest.name} name={rest.name} ref={ref} {...rest} />
                    {error ? <p>{error.message}</p> : null}
                </InputDefault>
            )}
        </>
    )
})