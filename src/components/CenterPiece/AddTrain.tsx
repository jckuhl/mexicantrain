import React from "react";
import MouseOverTooltip from "../Shared/MouseOverTooltip";
import Plus from "../Shared/Plus";

export default function AddTrain({ size }: {size: string}) {
    return <MouseOverTooltip msg={'Add new train'}>
        <Plus size={size} />
    </MouseOverTooltip>
}