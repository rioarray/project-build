import React, { useEffect, useReducer } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import { Button, Grid, Form, Popup, Icon } from "semantic-ui-react";
import { HeadComponent, MessageComponent } from "../components/atom";
import { RadioGroupComponent } from "../components/molecules";
import { infoMessage, MessageType } from "../helpers/config";
import reducer from "../reducer/store";

const initialState = {
  source: [],
  result: 0,
  type: "addition",
  title: "",
  message: "",
  disabledButton: true,
};

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    actionDisabledButtonResult(state.type);
  }, [state.source]);

  const onChangeInput = (value: string[]) =>
    dispatch({ type: "source", payload: value });

  const onChangeType = (e, { value }) => {
    dispatch({ type: "type", payload: value });
    actionDisabledButtonResult(value);
  };

  const onClickClearButton = () =>
    dispatch({ type: "clear", payload: initialState });

  const onClickButtonResult = () => {
    dispatch({ type: "result" });
  };

  const onValidatorTags = (value: string) => {
    if (!/^[0-9]+$/.test(value)) {
      dispatch({
        type: "error",
        payload: {
          title: "Warning",
          message: "Please input text with numeric only",
        },
      });
      return false;
    }
    dispatch({ type: "error", payload: { title: "", message: "" } });
    return true;
  };

  const actionDisabledButtonResult = (type: string) => {
    const sourceLength: number = state.source.length;
    if (
      (sourceLength === 0 || sourceLength === 1) &&
      ["addition", "multiplication"].includes(type)
    ) {
      dispatch({ type: "disabled", payload: true });
    } else if (sourceLength > 1 && ["fibonacci", "prime"].includes(type)) {
      dispatch({ type: "disabled", payload: true });
    } else {
      dispatch({ type: "disabled", payload: false });
    }
  };

  return (
    <>
      <HeadComponent title="Project Build" />
      <div className="ui container">
        {state.message && (
          <MessageComponent
            props={{ warning: state.title === MessageType[state.title] }}
            title={state.title}
            message={state.message}
          />
        )}
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <div className="input-tag-container">
                <ReactTagInput
                  tags={state.source}
                  removeOnBackspace={true}
                  onChange={onChangeInput}
                  validator={onValidatorTags}
                />
              </div>
            </Grid.Column>
            <Grid.Column>
              <Form>
                <Form.TextArea
                  value={state.result}
                  rows={6}
                  style={{ minHeight: 126 }}
                />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <RadioGroupComponent value={state.type} onChangeType={onChangeType} />
        <div className="btn-action-container">
          <Button onClick={onClickClearButton} color="red">
            Clear
          </Button>
          <Button
            primary={true}
            disabled={state.disabledButton}
            onClick={onClickButtonResult}
          >
            Result
          </Button>
          <Popup
            content={infoMessage}
            trigger={<Icon name="info circle" size="large" />}
          />
        </div>
      </div>
    </>
  );
}
