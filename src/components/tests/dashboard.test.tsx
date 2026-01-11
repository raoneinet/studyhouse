/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import { PageTitle } from '../titles/pageTitle'
import { SummaryCards } from '../dashboard/summaryCards'
import "@testing-library/jest-dom"


describe("dashboard title", ()=>{
    it("should render Dashboard as title", ()=>{
        render(<PageTitle title="Dashboard" subtitle='Raone' style=''/>)

        expect(screen.getByText("Raone")).toBeTruthy()
    })

    it("should appear 10 in summarycard", ()=>{
        render(<SummaryCards title="" total="10" />)

        expect(screen.getByText("10")).toBeInTheDocument()
    })
})
