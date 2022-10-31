import { render, screen } from '@testing-library/react'
import TitleHome from '@/pages/index'

describe('TitleHome', () => {
  it('Renders a Title Home', () => {
    render(<TitleHome  results={'test'} item={'test'} character={'test'}/>)
    const heading = screen.getByRole('heading', {
      name: /Morty/i,
    })
    expect(heading).toBeInTheDocument()
  })
})



