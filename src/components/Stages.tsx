import { Fragment, FunctionComponent } from "react";
import { IStage } from "../game/reducer";

export const Stages: FunctionComponent<{
  stages: IStage[];
  currentStage: IStage;
}> = ({ stages, currentStage }) => {
  return (
    <Fragment>
      {stages.map((stage: any, index) => (
        <div key={index}>
          {stage.type} {stage === currentStage ? " - Active" : ""}
        </div>
      ))}
    </Fragment>
  );
};
