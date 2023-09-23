import "./student.css"
function App() {
  return (
    <>
      <div>
        <Student></Student>
        <Student></Student>
      </div>
    </>
  )
}

function Student(){
  const studentOne = {
    name : 'Mehedi Hasan',
    class: '8th',
    birth:'03-01-2003',
    roll : '2344',
    address: 'Rajshahi Bangladesh'

  }

  return(
    <>
      <div className="bground">
        <h1>Name: {studentOne.name}</h1>
        <h2>Class: {studentOne.class}</h2>
        <h2>D.O.Birth: {studentOne.birth}</h2>
        <h2>Roll: {studentOne.roll}</h2>
        <h2>Address: {studentOne.address}</h2>
      </div>
    </>
  )
}

export default App
 