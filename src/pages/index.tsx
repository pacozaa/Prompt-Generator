import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import PromptConstructorPage from "./PromptConstructorPage"
import Navbar from "../components/NavBarOne";


const IndexPage: React.FC<PageProps> = () => {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];
  return (
    <main className="h-screen h-text-gray-900 font-sans">
      {/* <Navbar brandName="Neon Navbar" links={links} /> */}
      <PromptConstructorPage/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
