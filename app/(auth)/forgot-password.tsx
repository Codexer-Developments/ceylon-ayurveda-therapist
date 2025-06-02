import { FontAwesome } from "@expo/vector-icons";
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
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 24,
          paddingTop: 40,
          backgroundColor: "#FEF7ED",
        }}
      >
        {/* Background decorative patches - matching the exact image */}

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

        <SafeAreaProvider>
          <SafeAreaView
            style={{
              flex: 1,
              justifyContent: "center",
              paddingHorizontal: 24,
              paddingTop: 40,
            }}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1 }}
              keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
            >
              <View style={{ flex: 1, justifyContent: "center" }}>
                {/* Lock Icon */}
                <View style={{ alignItems: "center", marginBottom: 32 }}>
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      backgroundColor: "#9A563A",
                      borderRadius: 20,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome name="lock" size={32} color="white" />
                  </View>
                </View>

                {/* Header text */}
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "black",
                    textAlign: "center",
                    marginBottom: 16,
                  }}
                >
                  Forgot Your Password?
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#6B7280",
                    marginBottom: 40,
                    textAlign: "center",
                    lineHeight: 20,
                    paddingHorizontal: 20,
                  }}
                >
                  Please enter your email address account to send the{"\n"}OTP
                  verification to reset your password
                </Text>

                {/* Email Input */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#FFFFFF",
                    marginBottom: 24,
                    borderRadius: 14,
                    padding: 16,
                    paddingVertical: 20,
                    borderWidth: 1,
                    borderColor: emailFocus ? "#9A563A" : "#E5E7EB",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.05,
                    shadowRadius: 2,
                    elevation: 1,
                  }}
                >
                  <FontAwesome
                    name="envelope"
                    size={18}
                    color={emailFocus ? "#9A563A" : "#9CA3AF"}
                    style={{ marginRight: 12 }}
                  />
                  <TextInput
                    placeholder="Email"
                    keyboardType="email-address"
                    style={{
                      flex: 1,
                      color: "black",
                      fontSize: 14,
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

                {/* Need Help Link */}
                <TouchableOpacity
                  style={{ alignItems: "center", marginBottom: 40 }}
                >
                  <Text
                    style={{
                      color: "#9A563A",
                      fontSize: 13,
                      fontWeight: "500",
                    }}
                  >
                    Need Help?
                  </Text>
                </TouchableOpacity>

                {/* Continue Button */}
                <TouchableOpacity
                  style={{
                    backgroundColor: "#9A563A",
                    paddingVertical: 18,
                    alignItems: "center",
                    borderRadius: 14,
                    marginBottom: 16,
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
                    Continue
                  </Text>
                </TouchableOpacity>

                {/* Back Link */}
                <TouchableOpacity
                  style={{ alignItems: "center" }}
                  onPress={() => router.back()}
                >
                  <Text
                    style={{
                      color: "#6B7280",
                      fontSize: 13,
                      fontWeight: "500",
                    }}
                  >
                    Back
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </SafeAreaView>
        </SafeAreaProvider>
      </View>
    </TouchableWithoutFeedback>
  );
}
