/**
 * @jest-environment jsdom
 */

import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import { AppSidebar } from "../sidebar/app-sidebar"
import { Logobrand } from "../header/logobrand"

describe("Menu navigation ui", ()=>{
    test("should appear Estudaki as title", ()=>{
        render(<Logobrand title="Estudaki"/>)

        expect(screen.getByText("Estudaki")).toBeInTheDocument()
    })
})