import React from "react";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { LineChartData } from "react-native-chart-kit/dist/line-chart/LineChart";

interface ChartType {
  data: LineChartData;
  styleContainer: object;
}

const Chart = ({ data, styleContainer }: ChartType) => {
  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#ffff",
    backgroundGradientTo: "#ffff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    fillShadowGradientFromOpacity: 0,
    fillShadowGradientToOpacity: 0,
  };

  return (
    <View style={styleContainer}>
      <LineChart
        data={data}
        width={screenWidth * 0.9}
        height={200}
        chartConfig={chartConfig}
        bezier={false}
        withInnerLines
        withVerticalLines={false}
      />
    </View>
  );
};

export default Chart;
