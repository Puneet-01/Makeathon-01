import { Form,FormGroup,Input,Label,Button } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
const BusNumber = () =>{
    const buttonStyle = {
        paddingLeft: '15em',
        paddingBottom: '5em'
      }
      const inputStyle = {
        paddingTop : '2em',
        marginLeft: '1em',
        marginRight: '2em'
        
      }
    return(
        <div>
            
        <Form>
        <div style={inputStyle}>

      <FormGroup floating>
      <Input
        id="Bus"
        name="bus"
        placeholder="Bus Number"
        type="bus"
      />
      <Label for="bus">
        Bus Number
      </Label>
    </FormGroup>
        </div>
    <div style={buttonStyle}>
        
    <Button color="danger" id="Tyb" >
         Track your Bus
  </Button>
    </div>
    </Form >
        </div>
    )
}

export default BusNumber