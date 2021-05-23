import { Container, Image, Wrapper } from './styles'

type Props = {
  id: number
  trackName: string
  artist: string
  price: number
  image: string
}

function TrackList({ trackName, artist, price, image }: Props) {
  return (
    <Wrapper>
      <Image src={image} alt={trackName} />

      <Container>
        <h3>
          {artist} - {trackName}
        </h3>
        <span>${price}</span>
      </Container>
    </Wrapper>
  )
}

export default TrackList
