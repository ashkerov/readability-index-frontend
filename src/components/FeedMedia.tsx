import { useState } from 'react'
import type { FC } from 'react'
import { handleImageError, resolveImage } from '../utils/media'

interface Props {
  videoUrl: string
  imageUrl: string
  title: string
}

/** Фон ленты: видео, а если его нет или оно не загрузилось, картинка (или заглушка). */
const FeedMedia: FC<Props> = ({ videoUrl, imageUrl, title }) => {
  const [videoFailed, setVideoFailed] = useState<boolean>(false)
  const image = resolveImage(imageUrl)

  if (videoUrl && !videoFailed) {
    return (
      <video
        className="feed-media"
        src={videoUrl}
        poster={image}
        autoPlay
        loop
        muted
        playsInline
        onError={() => setVideoFailed(true)}
      />
    )
  }

  return <img className="feed-media" src={image} alt={title} onError={handleImageError} />
}

export default FeedMedia