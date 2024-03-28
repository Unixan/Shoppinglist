import Screen from "./app/components/Screen";
import SegmentSelector from "./app/components/SegmentSelector";

export default function App() {
  return (
    <Screen>
      <SegmentSelector selection={(item) => console.log(item)} buttons={[
        {label: "Walking", icon: "weight-kilogram", value: "walk"},
        {label: "Transit", icon: "weight-pound", value: "transit"},
        {label: "Driving", icon: "car", value: "drive"},
        {label: "Boat", icon: "ferry", value: "boat"},
        ]}/>
    </Screen>
  );
}
