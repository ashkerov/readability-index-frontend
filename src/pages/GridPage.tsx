import { useState } from 'react'
import type { FC } from 'react'
import { publications } from '../data/mockData'
import SearchBar from '../components/SearchBar'
import PublicationCard from '../components/PublicationCard'

const GridPage: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [query, setQuery] = useState<string>('')

  const normalizedQuery = query.trim().toLowerCase()
  const filtered = publications.filter((item) =>
    item.genre.toLowerCase().includes(normalizedQuery),
  )

  return (
    <>
      <header className="page-header">
        <h1>Тексты для оценки</h1>
      </header>

      <div className="page">
        <SearchBar
          value={inputValue}
          onChange={setInputValue}
          onSubmit={() => setQuery(inputValue)}
          placeholder="Жанр (например, Научный)"
        />

        {filtered.length > 0 ? (
          <div className="two-columns">
            {filtered.map((item) => (
              <PublicationCard key={item.id} publication={item} />
            ))}
          </div>
        ) : (
          <p className="empty-text">Публикаций не найдено.</p>
        )}
      </div>
    </>
  )
}

export default GridPage