import React from "react";
import { Text, View } from "react-native";
import Button from "@/components/button/button.component";
import styles from "./styles";

export const StylingOption = {
   BACKGROUND_BLUE: "backgroundBlue",
   BACKGROUND_RED: "backgroundRed",
   BACKGROUND_YELLOW: "backgroundYellow",
   COLOR_BLACK: "colorBlack",
};

const DashboardItem = ({ data, title, icon, stylingOption }) => {
   return (
      <View
         style={[
            styles.dashboardItem,
            stylingOption.background ? styles[stylingOption.background] : "",
         ]}
      >
         <View style={styles.dashboardItemHeader}>
            <Text
               style={[
                  styles.dashboardItemText,
                  stylingOption.color ? styles[stylingOption.color] : "",
               ]}
            >
               {icon}
            </Text>
            <Text
               style={[
                  styles.dashboardItemText,
                  styles.dashboardItemHeaderCenter,
                  stylingOption.color ? styles[stylingOption.color] : "",
               ]}
            >
               {title}
            </Text>
         </View>
         <View style={styles.wrapCenter}>
            {data.button ? (
               <Button
                  text={data.button.title}
                  pressHandler={data.button.onPressHandler}
                  color="black"
                  dashboardButton={true}
               />
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
