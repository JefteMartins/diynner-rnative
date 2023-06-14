import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#edf0eb',
      paddingTop: 44,
    },
    homeGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    imageStyle: {
      width: 156,
      height: 104,
      borderRadius: 8,
      margin: 8,
    },
    toolbar: {
      height: "10%",
      padding: "5%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    svgCss: {
      flexDirection: "row",
      padding: 5
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});
  