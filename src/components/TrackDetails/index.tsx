import { convertTime } from '../../utils/convertTime'
import { formatDate } from '../../utils/formatDate'

export interface Props {
  id: number
  trackName: string
  artist: string
  price: number
  image: string
  releaseDate: string
  url: string
  duration: number
}

const TrackDetails = ({
  id,
  trackName,
  artist,
  price,
  image,
  releaseDate,
  duration,
  url,
}: Props) => (
  <div>
    <h2>
      {artist} - {trackName}
    </h2>
    <img src={image} alt={`${artist} - ${trackName}`} />
    <p>Release Date: {formatDate(releaseDate)}</p>
    <p>Price: ${price}</p>
    <p>Duration: {convertTime(duration)}</p>
    <a href={url} target="_blank" rel="noreferrer noopener">
      View More
    </a>
  </div>
)

export default TrackDetails
