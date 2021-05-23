import React from 'react'

type Props = {
  trackName: string,
  artist: string,
  price: number,
  image: string,
}

function TrackList({
  trackName,
  artist,
  price,
  image
}: Props) {
  return (
    <li>
      <img src={image} alt={trackName} />

      <div>
        <h3>{artist} - {trackName}</h3>
        <span>${price}</span>
      </div>
    </li>
  )
}

export default TrackList
