import React from 'react'
import {it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '../../src/components/Footer'


describe('App', () => {
  it('should renders the Footer component', () => {
    render(<Footer />)  
    expect(screen.findAllByLabelText('Copyright &#169; URLShortner | Shivam Sharma'))
    screen.debug()
  })
})