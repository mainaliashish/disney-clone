import './App.css'
import Header from '../src/Components/Header'
import Slider from './Components/Slider'
import { Provider } from 'react-redux'
import mainStore from './store/mainStore'
import ProductionHouse from './Components/ProductionHouse'
import GenereMovieList from './Components/GenereMovieList'

function App() {

  return (
    <Provider store={mainStore}>
      <div className='bg-black'>
        <Header/>
        <Slider/>
        <ProductionHouse/>
        <GenereMovieList/>
      </div>
    </Provider>
  )
}

export default App
