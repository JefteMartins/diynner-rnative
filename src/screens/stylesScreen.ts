import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#EDF0EB",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  ingredients: {
    marginBottom: 20,
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    marginBottom: 20,
  },
  containerLogin: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: "center",
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: "#ccc",
    backgroundColor: "#F4EDE3",
  },
});
