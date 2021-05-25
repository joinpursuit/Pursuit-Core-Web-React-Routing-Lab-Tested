import { Switch, Route } from 'react-router-dom'
import Dogs from './Dogs'
import Cats from './Cats'
import './App.css'

function App() {
	return (
		<div className='app'>
			<Switch>
				<Route path={'/cat'} component={Cats} />
				<Route path={'/dog'} component={Dogs}/>
			</Switch>
		</div>
	)
}

export default App
