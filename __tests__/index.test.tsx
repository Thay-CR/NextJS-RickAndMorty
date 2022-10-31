import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('Renders a Home Text', () => {
    render(<Home  results={'test'} item={'test'} character={'test'}/>)
    const heading = screen.getByRole('heading', {
      name: /Rick & Morty/i,
    })
    expect(heading).toBeInTheDocument()
  })
})



