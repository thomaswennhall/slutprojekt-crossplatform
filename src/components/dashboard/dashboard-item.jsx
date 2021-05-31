import React, { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";

import styles from "./styles";

export const StylingOption = {
  BACKGROUND_BLUE: "backgroundBlue",
  BACKGROUND_RED: "backgroundRed",
  BACKGROUND_YELLOW: "backgroundYellow",
};

const DashboardItem = ({ data, title, icon, stylingOption }) => {
  console.log(data, title, icon, stylingOption.background);
  return (
    <View style={[styles.dashboardItem, styles[stylingOption.background]]}>
      <View style={styles.dashboardItemHeader}>
        <Text style={styles.dashboardItemText}>{icon}</Text>
        <Text
          style={[styles.dashboardItemText, styles.dashboardItemHeaderCenter]}
        >
          {title}
        </Text>
      </View>
      <View style={styles.wrapCenter}>
        {data.button ? (
          <Button title={data.button.title}></Button>
        ) : (
          <Text style={[styles.dashboardItemText, styles.dashboardItemCount]}>
            {data}
          </Text>
        )}
      </View>
    </View>
  );
};

export default DashboardItem;
