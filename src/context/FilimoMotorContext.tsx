import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { FILIMO_SHORTS } from "../data/filimotor";

// Define the FilimoMotor state
export interface FilimoMotorState {
  isMotorOpen: boolean;
  currentShortId: string | null;
  shorts: any[];
}

// Define FilimoMotor actions
type FilimoMotorAction =
  | { type: "TOGGLE_MOTOR" }
  | { type: "OPEN_MOTOR" }
  | { type: "CLOSE_MOTOR" }
  | { type: "SET_CURRENT_SHORT"; payload: string };

// Create the initial state
const initialFilimoMotorState: FilimoMotorState = {
  isMotorOpen: false,
  currentShortId: null,
  shorts: FILIMO_SHORTS,
};

// Create FilimoMotor reducer
const filimoMotorReducer = (
  state: FilimoMotorState,
  action: FilimoMotorAction
): FilimoMotorState => {
  switch (action.type) {
    case "TOGGLE_MOTOR":
      return {
        ...state,
        isMotorOpen: !state.isMotorOpen,
        currentShortId: !state.isMotorOpen ? state.shorts[0]?.id || null : null,
      };
    case "OPEN_MOTOR":
      return {
        ...state,
        isMotorOpen: true,
        currentShortId: state.shorts[0]?.id || null,
      };
    case "CLOSE_MOTOR":
      return {
        ...state,
        isMotorOpen: false,
        currentShortId: null,
      };
    case "SET_CURRENT_SHORT":
      return {
        ...state,
        currentShortId: action.payload,
      };
    default:
      return state;
  }
};

// Create the context
export interface FilimoMotorContextType {
  state: FilimoMotorState;
  dispatch: React.Dispatch<FilimoMotorAction>;
}

const FilimoMotorContext = createContext<FilimoMotorContextType | undefined>(
  undefined
);

// Create provider component
export const FilimoMotorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(
    filimoMotorReducer,
    initialFilimoMotorState
  );

  return (
    <FilimoMotorContext.Provider value={{ state, dispatch }}>
      {children}
    </FilimoMotorContext.Provider>
  );
};

// Custom hook for using this context
export const useFilimoMotor = () => {
  const context = useContext(FilimoMotorContext);
  if (context === undefined) {
    throw new Error("useFilimoMotor must be used within a FilimoMotorProvider");
  }
  return context;
}; 