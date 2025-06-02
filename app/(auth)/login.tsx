import { Feather, FontAwesome } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { useState } from "react"
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function LoginScreen() {
  const router = useRouter()

  // Basic UI state only
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailFocus, setEmailFocus] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = () => {
    // For now, just navigate to the main app
    router.replace("/(screens)/appointments")
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 40, backgroundColor: "#FEF7ED" }}>
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
          <SafeAreaView style={{ flex: 1, justifyContent: "center", paddingHorizontal: 24, paddingTop: 40 }}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1 }}
              keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
            >
              <View style={{ flex: 1, justifyContent: "center" }}>
                {/* Logo */}
                <View style={{ alignItems: "center", marginBottom: 1 }}>
                  <Image
                    source={require("../../assets/images/logo.png")}
                    style={{
                      width: 250,
                      height: 100,
                      marginBottom: 16,
                    }}
                    resizeMode="contain"
                  />
                </View>

                {/* Header text */}
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "black",
                    marginTop: -10,
                    textAlign: "center",
                  }}
                >
                  Therapist Login
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#6B7280",
                    marginBottom: 32,
                    marginTop: 5,
                    textAlign: "center",
                  }}
                >
                  Welcome back! Please login to your therapist account
                </Text>

                {/* Email Input */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#FFFFFF",
                    marginBottom: 16,
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
                    placeholder="Therapist Email"
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

                {/* Password Input */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#FFFFFF",
                    marginBottom: 16,
                    borderRadius: 14,
                    padding: 16,
                    paddingVertical: 20,
                    borderWidth: 1,
                    borderColor: passwordFocus ? "#9A563A" : "#E5E7EB",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.05,
                    shadowRadius: 2,
                    elevation: 1,
                  }}
                >
                  <FontAwesome
                    name="key"
                    size={18}
                    color={passwordFocus ? "#9A563A" : "#9CA3AF"}
                    style={{ marginRight: 12 }}
                  />
                  <TextInput
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    style={{
                      flex: 1,
                      color: "black",
                      fontSize: 14,
                      height: Platform.OS === "ios" ? 24 : "auto",
                      paddingVertical: Platform.OS === "ios" ? 0 : 2,
                    }}
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                    placeholderTextColor="#9CA3AF"
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Feather
                      name={showPassword ? "eye" : "eye-off"}
                      size={20}
                      color={showPassword ? "#9A563A" : "#9CA3AF"}
                    />
                  </TouchableOpacity>
                </View>

                {/* Forgot Password */}
                <TouchableOpacity onPress={() => router.push("/(auth)/forgot-password")}>
                  <Text
                    style={{
                      textAlign: "right",
                      marginBottom: 32,
                      paddingVertical: 4,
                      color: "#9A563A",
                      fontWeight: "500",
                      fontSize: 13,
                    }}
                  >
                    Forgot Password?
                  </Text>
                </TouchableOpacity>

                {/* Login Button */}
                <TouchableOpacity
                  onPress={handleLogin}
                  style={{
                    backgroundColor: "#9A563A",
                    paddingVertical: 18,
                    alignItems: "center",
                    borderRadius: 14,
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
                    Login to Practice
                  </Text>
                </TouchableOpacity>

                {/* Register Link */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 24,
                  }}
                >
                  <Text style={{ color: "#9CA3AF", fontSize: 13 }}>Don't have an account? </Text>
                  <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
                    <Text
                      style={{
                        color: "#9A563A",
                        fontWeight: "600",
                        fontSize: 13,
                      }}
                    >
                      Join Our Practice
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </SafeAreaView>
        </SafeAreaProvider>
      </View>
    </TouchableWithoutFeedback>
  )
}
