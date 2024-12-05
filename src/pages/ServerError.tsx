import { Link } from 'react-router-dom'

const ServerError = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-9xl font-bold text-gray-200">500</h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-300">Server Error</h2>
          <p className="text-gray-400">There was a problem with the server. Please try again later.</p>
        </div>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}

export default ServerError