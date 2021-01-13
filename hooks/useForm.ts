import { yupResolver } from '@hookform/resolvers'
import { useForm as useReactHookForm } from 'react-hook-form'
import { string, mixed, object } from 'yup'

type SchemaFields = Array<{
  name?: string
  type: 'text' | 'email' | 'password' | 'tnc' | 'prefix' | 'phone' | 'date'
  message?: string
}>

const getSchema = (message?: string) => ({
  text: string().required(message || 'This field is required'),
  date: string()
    .nullable()
    .required(message || 'This field is required'),
  prefix: string().required(message || 'Prefix is required'),
  phone: string().required(message || 'Phone is required'),
  email: string().email('Email not valid').required('This field is required'),
  password: string().matches(
    /^.{8,}$/, // matches any character, min 8
    'The password is not valid. Must have at least 8 characters'
  ),
  tnc: mixed().oneOf(
    [true],
    'Please accept the terms of use and privacy policy'
  ),
})

export default function useForm(...fields: SchemaFields) {
  const useForm = useReactHookForm({
    mode: 'onChange',
    resolver: yupResolver(
      object().shape(
        fields.reduce(
          (acc, { name, type, message }) => ({
            ...acc,
            [name || type]: getSchema(message)[type as keyof {}],
          }),
          {}
        )
      )
    ),
  })
  return {
    ...useForm,
    registerSharedRef: (ref: any) => (e: any) => {
      ref.current = e
      return useForm.register(e)
    },
  }
}
