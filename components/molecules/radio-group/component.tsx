import React from "react";
import { Form } from "semantic-ui-react";
import { ResultType } from "../../../helpers/config";

interface IProps {
  value: string;
  onChangeType: (e, { value }) => void;
}

export const RadioGroupComponent: React.FC<IProps> = ({
  value,
  onChangeType,
}) => (
  <Form className="form-type">
    <Form.Group inline>
      <label>Type (choose the one)</label>
      <Form.Radio
        label="Addition"
        value="addition"
        checked={value === ResultType["Addition"]}
        onChange={onChangeType}
      />
      <Form.Radio
        label="Multiplication"
        value="multiplication"
        checked={value === ResultType["Multiplication"]}
        onChange={onChangeType}
      />
      <Form.Radio
        label="Find First (N) Prime Number"
        value="prime"
        checked={value === ResultType["Prime"]}
        onChange={onChangeType}
      />
      <Form.Radio
        label="Find Fibonnaci Sequence"
        value="fibonacci"
        checked={value === ResultType["Fibonacci"]}
        onChange={onChangeType}
      />
    </Form.Group>
  </Form>
);

export default RadioGroupComponent;
