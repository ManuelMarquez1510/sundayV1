import React from 'react';
import { Col,Form, FormGroup,Input,Button } from 'reactstrap';

const SelectMultiple = () => {
return (
            <Form>
                <Col sm={12} >
                    <FormGroup>
                            <Input disabled size="lg" type="select" name="select" id="exampleSelect">
                                <option>Broad diversification</option>
                            </Input>
                            <Input disabled size="lg" type="select" name="select" id="exampleSelect">
                                <option>Extensive due diligence</option>
                            </Input>
                            <Input disabled size="lg" type="select" name="select" id="exampleSelect">
                                <option>Inspector Protection</option>
                            </Input>
                    </FormGroup>
                </Col>
            </Form>
        )
}
export default SelectMultiple;