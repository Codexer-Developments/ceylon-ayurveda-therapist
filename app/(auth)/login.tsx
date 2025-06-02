"use client"

import { Feather, FontAwesome } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { useState } from "react"
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 40, backgroundColor: "#FAFAFA" }}>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, justifyContent: "center", paddingHorizontal: 24, paddingTop: 40 }}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1 }}
              keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
            >
              <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
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
                      fontSize: 22,
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
                        fontSize: 13,
                      color: "#6B7280",
                      marginBottom: 24,
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
                      borderColor: emailFocus ? "#9A563A" : "#DFDFDF",
                    }}
                  >
                    <FontAwesome
                      name="envelope"
                      size={20}
                      color={emailFocus ? "#9A563A" : "#DFDFDF"}
                      style={{ marginRight: 12 }}
                    />
                    <TextInput
                      placeholder="Therapist Email"
                      keyboardType="email-address"
                      style={{
                        flex: 1,
                        color: "black",
                        height: Platform.OS === "ios" ? 24 : "auto",
                        paddingVertical: Platform.OS === "ios" ? 0 : 2,
                        paddingBottom: Platform.OS === "ios" ? 2 : 2,
                      }}
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                      placeholderTextColor="gray"
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
                      borderColor: passwordFocus ? "#9A563A" : "#DFDFDF",
                    }}
                  >
                    <FontAwesome
                      name="key"
                      size={20}
                      color={passwordFocus ? "#9A563A" : "#DFDFDF"}
                      style={{ marginRight: 12 }}
                    />
                    <TextInput
                      placeholder="Password"
                      secureTextEntry={!showPassword}
                      style={{
                        flex: 1,
                        color: "black",
                        marginBottom: 2,
                        height: Platform.OS === "ios" ? 24 : "auto",
                        paddingVertical: Platform.OS === "ios" ? 0 : 2,
                        paddingBottom: Platform.OS === "ios" ? 2 : 2,
                      }}
                      onFocus={() => setPasswordFocus(true)}
                      onBlur={() => setPasswordFocus(false)}
                      placeholderTextColor="gray"
                      value={password}
                      onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                      <Feather
                        name={showPassword ? "eye" : "eye-off"}
                        size={20}
                        color={showPassword ? "#9A563A" : "gray"}
                      />
                    </TouchableOpacity>
                  </View>

                  {/* Forgot Password */}
                  <TouchableOpacity>
                    <Text
                      style={{
                        textAlign: "right",
                        marginBottom: 24,
                        paddingVertical: 4,
                        color: "#9A563A",
                      }}
                    >
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>

                  {/* Login Button */}
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#9A563A",
                      paddingVertical: 20,
                      alignItems: "center",
                      borderRadius: 14,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 18,
                        fontWeight: "600",
                      }}
                    >
                      Login as Therapist
                    </Text>
                  </TouchableOpacity>

                  {/* Browse as visitor */}
                  <TouchableOpacity
                    style={{
                      backgroundColor: "white",
                      borderWidth: 1,
                      borderColor: "#9A563A",
                      marginTop: 16,
                      paddingVertical: 20,
                      alignItems: "center",
                      borderRadius: 14,
                    }}
                  >
                    <Text
                      style={{
                        color: "#9A563A",
                        fontSize: 18,
                        fontWeight: "600",
                      }}
                    >
                      Browse as Visitor
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
                    <Text style={{ color: "#9CA3AF" }}>New therapist?</Text>
                    <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
                      <Text
                        style={{
                          color: "#9A563A",
                          fontWeight: "600",
                          marginLeft: 4,
                        }}
                      >
                        Join Our Practice
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </SafeAreaView>
        </SafeAreaProvider>
      </View>
    </TouchableWithoutFeedback>
  )
}
