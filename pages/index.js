import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Navigate to blog</h1>
      <Link href="/blog">Blog</Link>  
    </>
  )
}
