import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: "#ccc",
    borderRadius: 50,
  },
  userInfo: {
    marginLeft: 20,
  },
  displayName: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
  email: {
    fontWeight: "300",
  },
});
