import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function EditProfileScreen() {
  const router = useRouter();

  // Profile form state
  const [name, setName] = useState("Dr. Sarah Johnson");
  const [email, setEmail] = useState("sarah.johnson@ceylonayurveda.com");
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const handleSaveChanges = () => {
    // Handle save changes logic here
    Alert.alert("Success", "Profile updated successfully!", [
      {
        text: "OK",
        onPress: () => router.back(),
      },
    ]);
  };

  const handleChangePhoto = () => {
    // Handle photo change logic here
    Alert.alert(
      "Change Photo",
      "Photo change functionality will be implemented here."
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FEF7ED" }}>
        {/* Background decorative patches */}

        {/* Top right large patch */}
        <View
          style={{
            position: "absolute",
            top: 50,
            right: -80,
            width: 280,
            height: 350,
            backgroundColor: "#F5E6D3",
            borderRadius: 200,
            opacity: 0.4,
            transform: [{ rotate: "15deg" }],
          }}
        />

        {/* Bottom left large patch */}
        <View
          style={{
            position: "absolute",
            bottom: -100,
            left: -120,
            width: 320,
            height: 400,
            backgroundColor: "#E8D5C4",
            borderRadius: 200,
            opacity: 0.3,
            transform: [{ rotate: "-20deg" }],
          }}
        />

        {/* Small patch on the right side */}
        <View
          style={{
            position: "absolute",
            top: 250,
            right: -30,
            width: 120,
            height: 180,
            backgroundColor: "#F0E6D2",
            borderRadius: 80,
            opacity: 0.25,
            transform: [{ rotate: "25deg" }],
          }}
        />

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
        >
          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 24,
              paddingVertical: 16,
              paddingTop: Platform.OS === "ios" ? 8 : 16,
            }}
          >
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                marginRight: 16,
                padding: 8,
              }}
            >
              <FontAwesome name="arrow-left" size={20} color="#374151" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#374151",
                flex: 1,
              }}
            >
              Edit Profile
            </Text>
          </View>

          {/* Content */}
          <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 32 }}>
            {/* Profile Photo Section */}
            <View style={{ alignItems: "center", marginBottom: 40 }}>
              <View style={{ position: "relative" }}>
                {/* Profile Avatar */}
                <View
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 60,
                    backgroundColor: "#E5E7EB",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FontAwesome name="user" size={48} color="#9CA3AF" />
                </View>

                {/* Camera Icon */}
                <TouchableOpacity
                  onPress={handleChangePhoto}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    backgroundColor: "#9A563A",
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 3,
                    borderColor: "white",
                  }}
                >
                  <FontAwesome name="camera" size={16} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Name Field */}
            <Text
              style={{
                fontSize: 16,
                color: "#374151",
                marginBottom: 8,
                fontWeight: "500",
              }}
            >
              Name
            </Text>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                marginBottom: 24,
                borderRadius: 12,
                padding: 16,
                paddingVertical: 18,
                borderWidth: 1,
                borderColor: nameFocus ? "#9A563A" : "#E5E7EB",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.05,
                shadowRadius: 2,
                elevation: 1,
              }}
            >
              <TextInput
                placeholder="Enter your name"
                style={{
                  color: "#374151",
                  fontSize: 16,
                  height: Platform.OS === "ios" ? 24 : "auto",
                  paddingVertical: Platform.OS === "ios" ? 0 : 2,
                }}
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                placeholderTextColor="#9CA3AF"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
                autoCorrect={false}
              />
            </View>

            {/* Email Field */}
            <Text
              style={{
                fontSize: 16,
                color: "#374151",
                marginBottom: 8,
                fontWeight: "500",
              }}
            >
              Email
            </Text>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                marginBottom: 40,
                borderRadius: 12,
                padding: 16,
                paddingVertical: 18,
                borderWidth: 1,
                borderColor: emailFocus ? "#9A563A" : "#E5E7EB",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.05,
                shadowRadius: 2,
                elevation: 1,
              }}
            >
              <TextInput
                placeholder="Enter your email"
                keyboardType="email-address"
                style={{
                  color: "#374151",
                  fontSize: 16,
                  height: Platform.OS === "ios" ? 24 : "auto",
                  paddingVertical: Platform.OS === "ios" ? 0 : 2,
                }}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                placeholderTextColor="#9CA3AF"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Save Changes Button */}
            <TouchableOpacity
              onPress={handleSaveChanges}
              style={{
                backgroundColor: "#9A563A",
                paddingVertical: 18,
                alignItems: "center",
                borderRadius: 12,
                shadowColor: "#9A563A",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 8,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 17,
                  fontWeight: "600",
                }}
              >
                Save Changes
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
