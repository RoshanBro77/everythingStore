import './style/Button.css'
interface Props {
  name: string
  image: string
}
function Button({ name, image }: Props) {
  return (
    <div className='button'>
      <img src={image} alt='' height={20} />
      {name}{' '}
    </div>
  )
}

export default Button
