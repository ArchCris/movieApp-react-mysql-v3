import '../styles/MovieCard.css'

const MovieCard = (props) => {
  
    return (
      <a href={`/find/${props.id}`} className='movieCard__conteiner'>
          <img className='movieCard__poster' alt='Movie poster' src={`https://image.tmdb.org/t/p/w400${props.img}`}></img>
          <p className='movieCard__vote'>{props.vote}</p>
      </a>
    )
  }
  
  export default MovieCard