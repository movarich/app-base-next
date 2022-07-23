import Link from 'next/link'
import { DarkLayout } from '../components/Layouts/DarkLayout'
import { MainLayout } from '../components/Layouts/MainLayout'

// Página ...
export default function About() {
  return (
    <>
      <main className={"main"}>

        <h2>About</h2>
        <h1 className={"title"}>
          ir a <Link href="/">Home</Link>
        </h1>
        
      </main>
    </>
  )
}

About.getLayout = function (page) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}