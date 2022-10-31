import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('About', () => {
  it('Renders a Footer text', () => {
    render(<Footer />)
    const text = screen.getByText("Rick&Morty")
    expect(text).toBeInTheDocument()
  })
})