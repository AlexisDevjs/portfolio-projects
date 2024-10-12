type Props = {
  children: React.ReactNode
}

export default function Container ({ children }: Props) {
  return (
    <div className='min-h-[100svh] h-full flex flex-col justify-between items-center pt-6 pb-5 relative'>
      {children}
    </div>
  )
}
