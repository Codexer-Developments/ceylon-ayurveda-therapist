import { SafeAreaView, Text, View } from "react-native";

export default function SearchScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FEF7ED" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 24,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#9A563A",
            marginBottom: 16,
          }}
        >
          Search
        </Text>
        <Text style={{ fontSize: 16, color: "#6B7280", textAlign: "center" }}>
          Search for patients, treatments, and resources
        </Text>
      </View>
    </SafeAreaView>
  );
}
