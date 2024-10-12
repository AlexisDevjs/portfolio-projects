type Props = {
  children: React.ReactNode
}

export function GameWrapper ({ children }: Props) {
  return (
    <main className='flex-grow flex flex-col justify-center gap-10 my-5 max-w-[448px] mx-auto items-center py-2 px-4'>
      {children}
    </main>
  )
}
