import "@styles/globals.css"


export const metadata ={
    title: "Propmptopia",
    description: "Promptopia is a place to find writing prompts and share your own."
}

export default function RootLayout({ children}) {
  return (
    <html>
        <body>
            <div className="main">
                <div className="gradient"></div>
            </div>
            <main className="app">{children}</main>
        
        </body>
    </html>
    )
}
