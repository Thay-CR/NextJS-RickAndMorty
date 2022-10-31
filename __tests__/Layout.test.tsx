import { render, screen } from '@testing-library/react'
import Layout from '@/components/Layout'

describe('Layout', () => {
  it('Renders a Layout text', () => {
    render(<Layout />)
    const text = screen.getByText("Rick&Morty")
    expect(text).toBeInTheDocument()
  })
})