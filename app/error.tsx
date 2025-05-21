'use client'
import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('Error caught:', error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong! FROM THE GLOBAL ERROR HANDLER</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
