import Link from 'next/link'

export default function page() {
  return (
    <div>
      <ul>
        <li>
          <Link href={'/dashboard/1'}>User I</Link>
        </li>
        <li>
          <Link href={'/dashboard/2'}>User II</Link>
        </li>
        <li>
          <Link href={'/dashboard/3'}>User III</Link>
        </li>
        <li>
          <Link href={'/dashboard/4'}>User IV</Link>
        </li>
      </ul>
    </div>
  )
}
