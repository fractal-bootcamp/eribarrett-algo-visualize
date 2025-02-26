import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select"


export default function Page() {
    return (
        <Select>
            <SelectTrigger>
                <SelectValue placeholder="Select a Sort Algorithm" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Merge Sort">Merge Sort</SelectItem>

                <SelectItem value="Selection Sort">Selection Sort</SelectItem>
            </SelectContent>
        </Select>
    )
}