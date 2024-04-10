import React from 'react'
import {it, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import DataTable from '../../src/components/DataTable'

describe('should render DataTable component', () => {
    it('should render DataTable component', () => {
        render(<DataTable data={[]} updateReloadState={function (): void {
            throw new Error('Function not implemented.')
        } } />)      
        screen.debug()
    })
})