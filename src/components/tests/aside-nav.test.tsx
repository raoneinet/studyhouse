/**
 * @jest-environment jsdom
 */

import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import { AppSidebar } from "../sidebar/app-sidebar"
import { Logobrand } from "../header/logobrand"

describe("Menu navigation ui", ()=>{
    test("should appear Learnizze as title", ()=>{
        render(<Logobrand />)

        expect(screen.getByText("Learnizze")).toBeInTheDocument()
    })
})