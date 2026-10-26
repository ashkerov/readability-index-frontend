import { useState } from 'react'
import type { FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Heart, HeartFill, SkipEndFill } from 'react-bootstrap-icons'
import { publications } from '../data/mockData'
import { ROUTES } from '../routes'
import FeedMedia from '../components/FeedMedia'

const getStartIndex = (id?: string): number => {
  if (!id) return 0
  const index = publications.findIndex((item) => item.id === Number(id))
  return index >= 0 ? index : 0
}

interface FeedViewProps {
  startIndex: number
}

const FeedView: FC<FeedViewProps> = ({ startIndex }) => {
  const [index, setIndex] = useState<number>(startIndex)
  const [expanded, setExpanded] = useState<boolean>(false)
  const [liked, setLiked] = useState<Record<number, boolean>>({})

  const publication = publications[index]

  if (!publication) {
    return (
      <div className="page">
        <p className="empty-text">Публикаций нет.</p>
      </div>
    )
  }

  const isLiked = Boolean(liked[publication.id])
  const likesCount = publication.likes_count + (isLiked ? 1 : 0)

  const handleNext = () => {
    setIndex((current) => (current + 1) % publications.length)
    setExpanded(false)
  }

  const handleLike = () => {
    setLiked((prev) => ({ ...prev, [publication.id]: !prev[publication.id] }))
  }

  return (
    <div className="feed">
      <FeedMedia
        key={publication.id}
        videoUrl={publication.video_url}
        imageUrl={publication.image_url}
        title={publication.title}
      />

      <Link to={ROUTES.GRID} className="feed-back" aria-label="Назад">
        <ArrowLeft />
      </Link>

      <div className="feed-overlay">
        <div className="feed-info">
          <div className="feed-title">{publication.title}</div>

          <div className={expanded ? 'feed-desc expanded' : 'feed-desc'}>
            {publication.description}
          </div>
          <button
            type="button"
            className="feed-toggle"
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? 'Свернуть' : 'Развернуть'}
          </button>

          <div className="feed-params">
            <div>
              Средняя длина: <span className="param-value">{publication.avg_length}</span>
            </div>
            <div>
              Доля уник. слов:{' '}
              <span className="param-value">{publication.unique_words_share}</span>
            </div>
          </div>
        </div>

        <div className="feed-sidebar">
          <button
            type="button"
            className={isLiked ? 'side-btn liked' : 'side-btn'}
            onClick={handleLike}
            aria-label="Лайк"
          >
            <span className="icon">{isLiked ? <HeartFill /> : <Heart />}</span>
            <span>{likesCount}</span>
          </button>

          <button type="button" className="side-btn" onClick={handleNext} aria-label="Далее">
            <span className="icon">
              <SkipEndFill />
            </span>
            <span>Далее</span>
          </button>
        </div>
      </div>
    </div>
  )
}

/** key пересоздаёт FeedView при смене :id, поэтому начальный индекс всегда актуален. */
const FeedPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  return <FeedView key={id ?? 'start'} startIndex={getStartIndex(id)} />
}

export default FeedPage