import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import Chart from "../../components/ui/Chart/Chart";

import Header from "../../components/base/Header/Header";
import ChartInfo from "../../components/ui/ChartInfo/ChartInfo";
import { currentMonth, currentYear } from "../../utils/dateHelper";

import { detailsFitness } from "../../constants/fitnessDetails";
import { chartData } from "../../utils/chartDots";

import routes from "../../constants/Routes";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

interface HomeScreenProp {
  navigation: NavigationProp<ParamListBase>;
}

const text = {
  header: "My Fitness Score",
};

const HomeScreen = ({ navigation }: HomeScreenProp) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Header title={text.header} /> */}
      <Chart styleContainer={styles.chartStyles} data={chartData} />
      <View style={styles.chartInfoBlock}>
        {detailsFitness.map((item, index) => {
          return (
            <ChartInfo
              onPress={() =>
                navigation.navigate(routes.DETAILS_SCREEN, {
                  detailsData: chartData.details[index],
                })
              }
              isLast={index === chartData.labels.length - 1}
              key={index}
              month={item.Measurement_Month}
              formatDate={item.Measurement_Date}
              date={`${currentYear}-${currentMonth}-${index + 1}`}
              chartValue={chartData.datasets[0].data[index]}
            />
          );
        })}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;
