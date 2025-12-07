"use client"
import {useState} from "react"
import { LoggedIn } from "./loggedIn/page"
import { LoggedOut } from "./loggedOut/page"
import { Header } from "@/components/header/header"

const Page = ()=>{

  const [loggedIn, setLoggedIn] = useState<boolean>(false)

  return (
    <div>
      <Header/>
      {loggedIn && <LoggedIn/>}
      {!loggedIn && <LoggedOut/>}
    </div>
  )
}

export default Page