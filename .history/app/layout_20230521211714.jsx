import "@styles/globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "Propmptopia",
  description:
    "Promptopia is a place to find writing prompts and share your own.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
