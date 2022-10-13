import './styles/global.css'

//vantagem de usar o react é a componentização
//podendo criar vários componentes para se interligarem

export function App() {
  return(
    <>
      <h1 className='font-bold text-5xl text-violet-500'>Hello World</h1>

      <button className='bg-cyan-500 font-medium px-4 py-2 rounded text-white hover:bg-cyan-300'>
        Enviar
      </button>
    </>
  )
}