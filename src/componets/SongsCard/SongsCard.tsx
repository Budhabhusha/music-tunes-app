import React from 'react'
interface SongsCardProps {
    title?:string,
    description?:string,
    imageUrl?:string
}
const SongsCard: React.FC<SongsCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
      <h3 className="card-title">New Test</h3>
      <p className="card-description">Hello Hii</p>
      </div>
    </div>
  )
}

export default SongsCard