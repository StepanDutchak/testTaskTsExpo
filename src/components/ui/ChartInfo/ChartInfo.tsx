import React from "react";

import { Text, View } from "react-native";
import { styles } from "./styles";
import AnimatedPress from "../../base/AnimatedPress/AnimatedPress";

interface ChartInfoType {
  month: string;
  date: string;
  chartValue: string | number;
  isLast: boolean;
  onPress: () => void;
  formatDate: string;
}

const ChartInfo = ({
  month,
  date,
  chartValue,
  isLast,
  onPress,
  formatDate,
}: ChartInfoType) => {
  return (
    <AnimatedPress
      onPress={onPress}
      style={[styles.block, isLast && styles.separator]}
    >
      <View style={styles.leftContent}>
        <Text style={styles.monthName}>{month}</Text>
        <Text style={styles.date}>{formatDate}</Text>
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.chartValue}>{chartValue}</Text>
      </View>
    </AnimatedPress>
  );
};

export default React.memo(ChartInfo);
