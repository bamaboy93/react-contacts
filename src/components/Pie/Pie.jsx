import { Box } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { useChartData } from "../../hooks/useChartData";

export default function Pie() {
  const data = useChartData();

  return (
    <Box height="75vh" width="75vw" marginRight="auto" marginLeft="auto">
      <ResponsivePie
        data={data}
        margin={{ top: 30, right: 90, bottom: 80, left: 90 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "set2" }}
        borderWidth={1}
        borderColor={{ theme: "background" }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#676767"
        arcLinkLabelsThickness={4}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabel="value"
        arcLabelsSkipAngle={12}
        arcLabelsTextColor="#676767"
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 20,
            translateY: 60,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#676767",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 24,
            symbolShape: "circle",
          },
        ]}
      />
    </Box>
  );
}
