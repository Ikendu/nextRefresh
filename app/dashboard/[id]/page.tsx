import React from 'react'

export default function page({ params }: { params: { id: string } }) {
  const { id } = params
  return <div>USER DETAILS PAGE {id}</div>
}
