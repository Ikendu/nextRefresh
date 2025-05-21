// import Image from 'next/image'

import Link from 'next/link'
import Hello from './about/hello'

export const revalidate = 3600 // revalidate the page every 1 hour

export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums')
  // next: {revalidate: 3600}
  if (!response.ok) throw new Error('The items to fetch are not available')
  const albums = await response.json()
  console.log(albums)
  return (
    <div>
      <h1 className='text-3xl'>Welcome</h1>
      <Link href={'/dashboard'}>Dashbord</Link>
      <Hello />
      <p>This is the home page</p>
      {albums.map((album: any) => (
        <div key={album.id} className='border-2 border-blue-500 p-2 rounded-md m-4'>
          <h3>{album.id}</h3>
          <h1 className='text-2xl'>{album.title}</h1>
          <p>{album.body}</p>
        </div>
      ))}
    </div>
  )
}
