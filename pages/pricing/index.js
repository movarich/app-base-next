import Link from 'next/link'
import { MainLayout } from '../../components/Layouts/MainLayout'

// Página ...
export default function Pricing() {
  return (
      <MainLayout>
        <main className={"main"}>
          <h2>Pricing</h2>
          <h1 className={"title"}>
            ir a <Link href="/">Home</Link>
          </h1>
          
        </main>
      </MainLayout>
  )
}