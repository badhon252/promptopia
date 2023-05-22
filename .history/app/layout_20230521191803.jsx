import "@styles/globals.css"
import { Children } from "react"

export const metadata ={
    title: "Propmptopia",
    description: "Promptopia is a place to find writing prompts and share your own."
}

export default function layout() {
  return (
    <main>{Children}</main>
  )
}
