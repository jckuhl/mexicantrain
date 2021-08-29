import React from "react";
import Domino from "../../models/dominos/domino";
import Rotation from "../Domino/Angle.enum";
import Bone from "../Domino/Bone";
import Plus from "../Shared/Plus";
import AddTrain from "./AddTrain";

export default function CenterPiece({ domino }: { domino: Domino }) {
    return <div>
        <Bone domino={domino} angle={Rotation.LEFT} selected={false} clickEvent={null} />
        <AddTrain size={"20px"}/>
    </div>
}