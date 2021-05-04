import "./App.css";
import Dogs from "./Dogs"

function App() {
  return (
    <div className="app">
      <main>
        <h1>Hello, world!</h1>
        <Dogs/>
      </main>
    </div>
  );
}

// renderRandomNum = (props) => {
//   const num = props.match.params.num
//   console.log(num)
//   return <h1> You have requested {num} pet images</h1>

// }

// render() {
//   return (
//     <div>
//       <h1>Pets Component</h1>
//       {/* <Switch>
//         <Route path="/pets/random/:num"/>
//         <Route exact path="/pets" render={this.renderPetList} />
//         <Route path="/pets/:id" render={this.renderPet} />
        
//         //(props.match.params.num === ivan)
//       </Switch> */}
//     </div>
//   );
// }


export default App;
