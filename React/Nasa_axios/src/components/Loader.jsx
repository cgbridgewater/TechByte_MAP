import Spinner from '../assets/Spinner.gif'

const Loader = () => {
  return (
    <div className='Loader'>
        <img src={Spinner} alt="Loading" />
        <h1>Getting Data</h1>

    </div>
  )
}

export default Loader