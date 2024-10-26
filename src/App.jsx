import './App.css'
import Header from '../src/Components/Header'
import Slider from './Components/Slider'
import { Provider } from 'react-redux'
import mainStore from './store/mainStore'

function App() {

  return (
    <Provider store={mainStore}>
      <div className='bg-black'>
        <Header/>
        <Slider/>
      </div>
    </Provider>
  )
}

export default App
