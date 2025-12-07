"use client"
import {useState} from "react"
import { LoggedIn } from "./loggedIn/page"
import { LoggedOut } from "./loggedOut/page"

const Page = ()=>{

  const [loggedIn, setLoggedIn] = useState<boolean>(false)

  return (
    <div>
      {loggedIn && <LoggedIn/>}
      {!loggedIn && <LoggedOut/>}
    </div>
  )
}

export default Page