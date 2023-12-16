import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ul>
          <li>
            <Link to="/test">Go to test panel</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
