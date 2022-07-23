import Link from 'next/link'
import { MainLayout } from '../components/Layouts/MainLayout'

// Página de entrada
export default function Home() {
  return (
      <MainLayout>
        <main className={"main"}>
          <h2>Home</h2>
          <h1 className={"title"}>
            Welcome, ir a <Link href="/about">About</Link>
          </h1>
        </main>
      </MainLayout>
  )
}
