import { useState } from 'react'
import type { ChangeEvent, FC } from 'react'
import { Button, Form } from 'react-bootstrap'
import { DEFAULT_IMAGE } from '../utils/media'

interface DraftForm {
  title: string
  genre: string
  avg_length: string
  unique_words_share: string
  description: string
}

const initialForm: DraftForm = {
  title: '',
  genre: '',
  avg_length: '',
  unique_words_share: '',
  description: '',
}

const AddPage: FC = () => {
  const [form, setForm] = useState<DraftForm>(initialForm)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleCreate = () => {
    alert('В разработке')
  }

  return (
    <>
      <header className="page-header">
        <h1 className="accent">Добавление (Черновик)</h1>
      </header>

      <div className="page">
        <section className="white-card">
          <h2 className="card-heading">Медиафайлы</h2>
          <img className="draft-image" src={DEFAULT_IMAGE} alt="Заглушка изображения" />
        </section>

        <section className="white-card">
          <h2 className="card-heading">Информация о тексте</h2>

          <Form.Group className="mb-3" controlId="draft-title">
            <Form.Label>Название</Form.Label>
            <Form.Control name="title" type="text" value={form.title} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="draft-genre">
            <Form.Label>Жанр</Form.Label>
            <Form.Control name="genre" type="text" value={form.genre} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="draft-avg-length">
            <Form.Label>Средняя длина</Form.Label>
            <Form.Control
              name="avg_length"
              type="number"
              value={form.avg_length}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="draft-unique-share">
            <Form.Label>Доля уникальных слов</Form.Label>
            <Form.Control
              name="unique_words_share"
              type="text"
              placeholder="например, 18%"
              value={form.unique_words_share}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="draft-description">
            <Form.Label>Описание</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </Form.Group>
        </section>

        <Button variant="dark" className="btn-black-rounded w-100" onClick={handleCreate}>
          Создать (Демо)
        </Button>
      </div>
    </>
  )
}

export default AddPage