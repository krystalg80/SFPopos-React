import { useNavigate } from 'react-router-dom'
import data from './sfpopos-data.json'

function RandomSpace() {
	const navigate = useNavigate()
  return (
		<button 
    className="RandomSpace"
    onClick={(e) => {
			const id = Math.floor(Math.random() * data.length)
			navigate(`/details/${id}`)
		}}>Show me a random space</button>
  )
}

export default RandomSpace