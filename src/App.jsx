import "./student.css"
function App() {
  return (
    <>
      <div className="container">
        <Student name='Sarmin Sultana' position='10th' birth='03-02-2005' roll='222' address='Rajshahi Bangladesh'></Student>
        <Student name='Abdullah' position='10th' birth='03-02-2005' roll='222' address='Rajshahi Bangladesh'></Student>
        <Student name='Solaiman' position='10th' birth='03-02-2005' roll='222' address='Rajshahi Bangladesh'></Student>
        <Student name='Karim' position='10th' birth='03-02-2005' roll='222' address='Rajshahi Bangladesh'></Student>
      </div> 
    </>
  )
}

const {name, position, birth, roll, address } = {
  name : 'Mehedi Hasan',
  position: '9th',
  birth:'03-01-2004',
  roll : '2344',
  address: 'Rajshahi Bangladesh'
}

// create function component abd it is student
function Student({name, position, birth, roll, address}){

  
  return(
    <>
      <div className="bground">
        <h1>Name: {name}</h1>
        <h2>Class: {position}</h2>
        <h2>D.O.Birth: {birth}</h2>
        <h2>Roll: {roll}</h2>
        <h2>Address: {address}</h2>
      </div>
    </>
  )
}

export default App
 