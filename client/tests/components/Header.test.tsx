import React from 'react'
import {it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../../src/components/Header'

describe('App', () => {
  it('should renders the Header component', () => {
    render(<Header />)  
    expect(screen.getByText('URLShortner'))

    screen.debug()
  })
})

 