import type { ChangeEvent, FC, FormEvent } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons'

interface Props {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  placeholder?: string
}

const SearchBar: FC<Props> = ({ value, onChange, onSubmit, placeholder }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit()
  }

  return (
    <Form className="filter-form" onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        className="filter-input"
        placeholder={placeholder}
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
      />
      <Button type="submit" variant="primary" className="btn-search" aria-label="Поиск">
        <Search />
      </Button>
    </Form>
  )
}

export default SearchBar