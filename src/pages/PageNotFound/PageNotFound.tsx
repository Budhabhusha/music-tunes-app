import React from 'react'
const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
      <p className="text-gray-600">The page you are looking for does not exist.</p>
      <a href="/" className="inline-block mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg">Go Back to Login</a>
    </div>
  </div>
  )
}
export default PageNotFound