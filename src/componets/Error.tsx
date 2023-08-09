interface ErrorProps{
  message?: string
}

const Error = (props:ErrorProps) => {
  const {message} =  props
  return (
    <div className='flex justify-center items-center'>
      <h1 className='font-bold text-2xl text-white mt-2'>{message || 'Something went wrong. Please try again'}</h1>
    </div>
  )
}

export default Error