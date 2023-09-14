import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF0EB",
  },

  textContainer: {
    padding: 20,
  },
  homeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  imageStyle: {
    width: 156,
    height: 104,
    margin: 8,
  },
  imageDetailStyle: {
    width: "100%",
    height: 200,
  },
  imageBorderRadius: {
    borderRadius: 8,
  },
  toolbar: {
    height: "10%",
    padding: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  svgCss: {
    flexDirection: "row",
    padding: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 8,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },
  textStyle: {
    fontSize: 13,
    color: "#F4EDE3",
  },
  diynnerTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  horizontalRule: {
    margin: 10,
    width: "100%",
    borderWidth: 0.5,
    borderBottomWidth: 1,
  },
});
