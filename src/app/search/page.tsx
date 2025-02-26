"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select"


import { useState } from "react"
import Rotate from "~/algorithms/visualize/linearViz"

export default function Page() {
    const [selectedAlgo, setSelectedAlgo] = useState<string>("")

    return (
        <div>
            <Select onValueChange={setSelectedAlgo}>
                <SelectTrigger>
                    <SelectValue placeholder="choose Seach Algorithm" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Linear Search">Linear Search</SelectItem>
                    <SelectItem value="Binary Search">Binary Search</SelectItem>
                    <SelectItem value="Breadth First Search">Breadth First Search</SelectItem>
                    <SelectItem value="Depth First Search">Depth First Search</SelectItem>
                </SelectContent>
            </Select>

            {selectedAlgo === "Linear Search" && <Rotate />}
        </div>
    )
}