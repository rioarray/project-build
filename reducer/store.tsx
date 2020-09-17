import ActionDomain from "./action";

interface IState {
  source: string[];
  result: number | number[];
  type: string;
  title: string;
  message: string;
  disabledButton: boolean;
}

interface ActionType {
  type: "source" | "result" | "type" | "error" | "clear" | "disabled";
  payload?: any;
}

const { addition, multiplication, primeNumber, fibonacci } = ActionDomain();

const reducer = (state: IState, action: ActionType) => {
  switch (action.type) {
    case "source":
      return { ...state, source: action.payload };
    case "result":
      let value: number | number[] = 0;
      switch (state.type) {
        case "addition":
          value = addition(state.source);
          break;
        case "multiplication":
          value = multiplication(state.source);
          break;
        case "fibonacci":
          value = fibonacci(Number(state.source));
          break;
        case "prime":
          value = primeNumber(Number(state.source));
          break;
      }
      return { ...state, result: value };
    case "type":
      return { ...state, type: action.payload };
    case "error":
      return {
        ...state,
        title: action.payload.title,
        message: action.payload.message,
      };
    case "disabled":
      return { ...state, disabledButton: action.payload };
    case "clear":
      return { ...action.payload };
  }
};

export default reducer;
