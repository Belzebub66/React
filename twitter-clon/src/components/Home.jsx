const Home = ({ user, logout }) => {
  return (
    <>
      <h1>Bienvenido a Twitter</h1>
      {user && (
        <div>
          <p>Hola, {user.username}!</p>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      )}
      {!user && (
        <div>
          <p>Por favor, inicia sesión para continuar.</p>
        </div>
      )}
    </>
  )
}

export default Home
