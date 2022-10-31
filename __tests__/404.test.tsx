import { render, screen } from '@testing-library/react'
import PageNotFound from '@/pages/404'

describe('404', () => {

    it('Renders  404 text', () => {
      render(<PageNotFound />)
      const heading = screen.getByRole('heading', {
        name: /404/i,
      })
      expect(heading).toBeInTheDocument()
    })

    it('Renders option click to return', () => {
        render(<PageNotFound />)
        const text = screen.getByText("Click Here")
        expect(text).toBeInTheDocument()
      })

  })