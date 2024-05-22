import '../components/style/Card.css'
interface Props {
  name: string
  category: string
  image: string
  price: string
  description: string
  onClick: () => void
}
function Card({ name, image, price, description, category, onClick }: Props) {
  return (
    <>
      <div className='card' onClick={onClick}>
        <div className='cardImage'>
          <img src={image} alt='image' />
        </div>
        <p className='cardName'>{name}</p>
        <span className='price'>{price} </span>
        <p className='description'>{description}</p>
      </div>
    </>
  )
}

export default Card
