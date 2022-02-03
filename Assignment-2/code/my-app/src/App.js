// import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
  {/* Start your React code here */}
  <div>
    <img className='picture' src={employee.profileImg} alt='display_picture'></img>
    <h1>{employee.name}</h1>
    <p>location</p>
    <h3>{employee.location}</h3>
    <p>bloodGroup</p>
    <h3>{employee.bloodGroup}</h3>
    <p>age</p>
    <h3>{employee.age}</h3>
  </div>
</div>
)
}

export default App;
