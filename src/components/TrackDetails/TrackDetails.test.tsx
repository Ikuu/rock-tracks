import { render, screen } from '@testing-library/react'
import TrackDetails, { Props } from './'

const track: Props = {
  id: 579373079,
  artist: 'Metallica',
  trackName: 'Enter Sandman',
  image:
    'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/f7/16/bd/f716bd26-b774-e12b-4e7a-7fdf855a809f/source/100x100bb.jpg',
  price: 1.29,
  duration: 331560,
  releaseDate: '1991-07-29T07:00:00Z',
  url: 'https://music.apple.com/us/album/enter-sandman/579372950?i=579373079&uo=4',
}

test('Renders', () => {
  render(
    <TrackDetails
      id={track.id}
      artist={track.artist}
      trackName={track.trackName}
      image={track.image}
      price={track.price}
      duration={track.duration}
      releaseDate={track.releaseDate}
      url={track.url}
    />,
  )
  const heading = screen.getByRole('heading', {
    name: `${track.artist} - ${track.trackName}`,
  })
  const price = screen.getByText(`$${track.price}`, { exact: false })
  const button = screen.getByRole('link', { name: 'View More' })

  expect(heading).toBeInTheDocument()
  expect(price).toBeInTheDocument()
  expect(button).toHaveAttribute('href', track.url)
})
