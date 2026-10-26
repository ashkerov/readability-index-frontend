import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { HeartFill } from 'react-bootstrap-icons'
import type { Publication } from '../types/publication'
import { ROUTES } from '../routes'
import { handleImageError, resolveImage } from '../utils/media'

interface Props {
  publication: Publication
}

const PublicationCard: FC<Props> = ({ publication }) => (
  <Link to={`${ROUTES.FEED_ITEM}/${publication.id}`} className="pub-card">
    <img
      className="pub-card-image"
      src={resolveImage(publication.image_url)}
      alt={publication.title}
      onError={handleImageError}
    />
    <div className="pub-card-info">
      <p className="pub-card-title">{publication.title}</p>
      <div className="pub-card-down">
        <span className="pub-card-genre">{publication.genre}</span>
        <span className="pub-card-likes">
          <HeartFill size={12} /> {publication.likes_count}
        </span>
      </div>
    </div>
  </Link>
)

export default PublicationCard