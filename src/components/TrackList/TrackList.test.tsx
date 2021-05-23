import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import TrackList, { Props } from './'

const track: Props = {
  id: 579373079,
  artist: 'Metallica',
  trackName: 'Enter Sandman',
  image:
    'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/f7/16/bd/f716bd26-b774-e12b-4e7a-7fdf855a809f/source/100x100bb.jpg',
  price: 1.29,
}

test('Renders', () => {
  render(
    <MemoryRouter>
      <TrackList
        id={track.id}
        artist={track.artist}
        trackName={track.trackName}
        image={track.image}
        price={track.price}
      />
    </MemoryRouter>,
  )
  const heading = screen.getByRole('heading', {
    name: `${track.artist} - ${track.trackName}`,
  })
  const price = screen.getByText(`$${track.price}`, { exact: false })
  const button = screen.getByRole('link', { name: 'View Details' })

  expect(heading).toBeInTheDocument()
  expect(price).toBeInTheDocument()
  expect(button).toHaveAttribute('href', `/track/${track.id}`)
})
