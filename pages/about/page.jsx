import Link from 'next/link'

function About() {
  return (
    <div className='flex flex-col m-4'>
      About Page
      <Link href='/'>Return to Home</Link>
    </div>
  )
}

export default About