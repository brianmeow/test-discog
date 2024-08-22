import { Input, Button } from "./Form";
import {Container} from './Container';


const InputForm = ({ inputVal, onChange, onSubmit, buttonText }:any) => {
  return (
    <Container>
      <Input value={inputVal} onChange={onChange} />
      <Button onClick={onSubmit}>{buttonText || "Search"}</Button>
    </Container>
  );
};

export default InputForm;
