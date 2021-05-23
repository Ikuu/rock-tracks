import { Link } from 'react-router-dom'
import { Container, Image, Wrapper } from './styles'

type Props = {
  id: number
  trackName: string
  artist: string
  price: number
  image: string
}

function TrackList({ id, trackName, artist, price, image }: Props) {
  return (
    <Wrapper>
      <Image src={image} alt={trackName} />

      <Container>
        <h3>
          {artist} - {trackName}
        </h3>
        <span>${price}</span>
        <Link to={`/track/${id}`}>View Details</Link>
      </Container>
    </Wrapper>
  )
}

export default TrackList
