import { Fragment } from "react";

import stages from "./data/stages.json";
import { useDispatch, useSelector } from "react-redux";
import {
  IGameState,
  IStage,
  screenTypes,
  setScreen,
  setStage,
} from "./game/reducer";
import { PickACard } from "./components/PickACard";
import { Stages } from "./components/Stages";

export const Game = () => {
  const dispatch = useDispatch();

  const [stage, screen]: [
    number,
    screenTypes
  ] = useSelector((state: IGameState) => [state.stage, state.screen]);

  const currentStage = (stages as IStage[])[stage];

  function setMainScreen() {
    dispatch(setScreen("stage"));
  }

  function setNextStage() {
    dispatch(setScreen("overview"));
    dispatch(setStage(stage + 1));
  }

  return (
    <Fragment>
      {screen === "overview" && (
        <Fragment>
          <Stages stages={stages as IStage[]} currentStage={currentStage} />
          <button onClick={setMainScreen}>Continue</button>
        </Fragment>
      )}
      {screen === "stage" && currentStage.type === "intro" && (
        <Fragment>
          <PickACard />
          <button onClick={setNextStage}>Continue</button>
        </Fragment>
      )}
      {screen === "stage" && currentStage.type === "town" && (
        <Fragment>Town</Fragment>
      )}
    </Fragment>
  );
};
