import { render, screen } from '@testing-library/react'
import Character from '@/pages/character/[characterId]'

describe('Character', () => {
  it('Text in buttons Character', () => {
    render(<Character  results={'test'} item={'test'} character={'test'}/>)
    const gender = screen.getByText("Gender")
    const status = screen.getByText("Status")
    const species = screen.getByText("Species")
    expect(gender).toBeInTheDocument()
    expect(status).toBeInTheDocument()
    expect(species).toBeInTheDocument()
  })
})



