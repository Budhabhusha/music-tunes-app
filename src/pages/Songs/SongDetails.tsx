import { useParams } from "react-router"

const SongDetails = () => {
    const { songId } = useParams()
  return (
    <div>SongDetails</div>
  )
}

export default SongDetails