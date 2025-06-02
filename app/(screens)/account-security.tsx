import { Feather, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
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

export default function AccountSecurityScreen() {
  const router = useRouter();

  // Password form state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPasswordFocus, setCurrentPasswordFocus] = useState(false);
  const [newPasswordFocus, setNewPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleUpdatePassword = () => {
    // Handle password update logic here
    console.log("Password update requested");
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
              Account & Security
            </Text>
          </View>

          {/* Content */}
          <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 32 }}>
            {/* Change Password Section */}
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#374151",
                marginBottom: 24,
              }}
            >
              Change Password
            </Text>

            {/* Current Password */}
            <Text
              style={{
                fontSize: 16,
                color: "#374151",
                marginBottom: 8,
                fontWeight: "500",
              }}
            >
              Current Password
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                marginBottom: 20,
                borderRadius: 12,
                padding: 16,
                paddingVertical: 18,
                borderWidth: 1,
                borderColor: currentPasswordFocus ? "#9A563A" : "#E5E7EB",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.05,
                shadowRadius: 2,
                elevation: 1,
              }}
            >
              <TextInput
                placeholder="Enter your current password"
                secureTextEntry={!showCurrentPassword}
                style={{
                  flex: 1,
                  color: "#374151",
                  fontSize: 16,
                  height: Platform.OS === "ios" ? 24 : "auto",
                  paddingVertical: Platform.OS === "ios" ? 0 : 2,
                }}
                onFocus={() => setCurrentPasswordFocus(true)}
                onBlur={() => setCurrentPasswordFocus(false)}
                placeholderTextColor="#9CA3AF"
                value={currentPassword}
                onChangeText={setCurrentPassword}
              />
              <TouchableOpacity
                onPress={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                <Feather
                  name={showCurrentPassword ? "eye" : "eye-off"}
                  size={20}
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>

            {/* New Password */}
            <Text
              style={{
                fontSize: 16,
                color: "#374151",
                marginBottom: 8,
                fontWeight: "500",
              }}
            >
              New Password
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                marginBottom: 20,
                borderRadius: 12,
                padding: 16,
                paddingVertical: 18,
                borderWidth: 1,
                borderColor: newPasswordFocus ? "#9A563A" : "#E5E7EB",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.05,
                shadowRadius: 2,
                elevation: 1,
              }}
            >
              <TextInput
                placeholder="Enter your new password"
                secureTextEntry={!showNewPassword}
                style={{
                  flex: 1,
                  color: "#374151",
                  fontSize: 16,
                  height: Platform.OS === "ios" ? 24 : "auto",
                  paddingVertical: Platform.OS === "ios" ? 0 : 2,
                }}
                onFocus={() => setNewPasswordFocus(true)}
                onBlur={() => setNewPasswordFocus(false)}
                placeholderTextColor="#9CA3AF"
                value={newPassword}
                onChangeText={setNewPassword}
              />
              <TouchableOpacity
                onPress={() => setShowNewPassword(!showNewPassword)}
              >
                <Feather
                  name={showNewPassword ? "eye" : "eye-off"}
                  size={20}
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>

            {/* Confirm New Password */}
            <Text
              style={{
                fontSize: 16,
                color: "#374151",
                marginBottom: 8,
                fontWeight: "500",
              }}
            >
              Confirm New Password
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                marginBottom: 40,
                borderRadius: 12,
                padding: 16,
                paddingVertical: 18,
                borderWidth: 1,
                borderColor: confirmPasswordFocus ? "#9A563A" : "#E5E7EB",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.05,
                shadowRadius: 2,
                elevation: 1,
              }}
            >
              <TextInput
                placeholder="Confirm your new password"
                secureTextEntry={!showConfirmPassword}
                style={{
                  flex: 1,
                  color: "#374151",
                  fontSize: 16,
                  height: Platform.OS === "ios" ? 24 : "auto",
                  paddingVertical: Platform.OS === "ios" ? 0 : 2,
                }}
                onFocus={() => setConfirmPasswordFocus(true)}
                onBlur={() => setConfirmPasswordFocus(false)}
                placeholderTextColor="#9CA3AF"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Feather
                  name={showConfirmPassword ? "eye" : "eye-off"}
                  size={20}
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>

            {/* Update Password Button */}
            <TouchableOpacity
              onPress={handleUpdatePassword}
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
                Update Password
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
