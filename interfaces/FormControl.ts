export default interface IFormControl {
  name: string
  register?: any
  registerSharedRef?: Function
  watch?: Function
  control?: any
  errors?: {}
  defaultValues?: {}
  placeholder?: string
  className?: string
}
