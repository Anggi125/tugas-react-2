

export default function CardList ({ userProps }) {
 

  return (
  <div className="kotak1">
    <img src={userProps.image} alt="" />
    <h3>{userProps.name}</h3>
  </div>
  )
}
