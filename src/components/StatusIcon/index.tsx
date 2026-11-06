import { FilterStatus } from "@/types/FilterStatus";
import { CircleDashed, CircleCheck } from "lucide-react-native";
import { View, Text } from "react-native";

export function StatusIcon({ status }: { status: FilterStatus }) {
  return status === FilterStatus.DONE ? (
    <CircleCheck size={18} color="#2C46B1" />
  ) : (
    <CircleDashed size={18} color="#000000" />
  );
}
