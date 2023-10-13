
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Mobile = () =>{
    
    
    const buttonStyle = {
        paddingLeft: '15em',
        paddingBottom: '5em',
        paddingTop: '5em'
      }
      const inputStyle = {
        paddingTop : '2em',
        marginLeft: '1em',
        marginRight: '2em'
        
      }
    return(
        <div> 

    <form>
        <div style={inputStyle}>

    
      <input
        id="Mobile"
        name="mobile"
        placeholder="Mobile Number"
        type="mobile"
      />
      <label for="mobile">
        Mobile Number
      </label>
    
        </div>
    <div style={buttonStyle}>
        
    <button color="danger"  >
         Track your Bus
  </button>
    </div>
    </form >


</div>
    )
}

export default Mobile