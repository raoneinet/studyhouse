/**
 * @jest-environment jsdom
 */

import {fireEvent, render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import MyCards from "@/app/[locale]/(protected)/myLessons/page"

describe("Mycards buttons", ()=>{
    test("should trigger event", ()=>{
        const handleClick = jest.fn()
        render(<MyCards/>)

        const next = screen.getByText("Próxima")

        fireEvent.click(next)

        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})