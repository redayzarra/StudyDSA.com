import Link from 'next/link'
import React from 'react'
import { Checkbox } from './ui/checkbox'

const AlgorithmCell = () => {
  return (
    <div className="relative">
      <Link href="/">
        <div className="rounded-sm shadow-md transition-all p-2 bg-primary/25 hover:bg-muted-foreground/10 dark:hover:bg-black/25 border-t-2 border-white dark:border-white/10 hover:cursor-pointer space-y-2">
          <h1 className="font-semibold">Sorting</h1>
          <h2 className="line-clamp-2 text-muted-foreground">Sorting is how you reorder a list</h2>
        </div>
      </Link>
      <Checkbox className="absolute top-2 right-2 rounded-full" />
    </div>
  )
}

export default AlgorithmCell