"use client"
import {useState} from "react"
import { LoggedIn } from "./loggedIn/page"
import { LoggedOut } from "./loggedOut/page"
import { Header } from "@/components/header/header"

const Page = ()=>{

  const [loggedIn, setLoggedIn] = useState<boolean>(false)

  return (
    <div className="bg-neutral-100 min-h-screen">
      <Header/>
      {loggedIn && <LoggedIn/>}
      {!loggedIn && <LoggedOut/>}
    </div>
  )
}

export default Page