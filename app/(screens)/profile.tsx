import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace("/(auth)/login");
  };

  const handleAccountSecurity = () => {
    router.push("/(screens)/account-security");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FEF7ED" }}>
      {/* Background decorative patches - matching the login screen */}

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

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Profile Header */}
        <View
          style={{
            alignItems: "center",
            paddingVertical: 40,
            paddingHorizontal: 24,
          }}
        >
          {/* Profile Avatar */}
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: "#E5E7EB",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <FontAwesome name="user" size={32} color="#9CA3AF" />
          </View>

          {/* Professional Badge */}
          <View
            style={{
              backgroundColor: "#7A4530",
              paddingHorizontal: 16,
              paddingVertical: 6,
              borderRadius: 20,
              marginBottom: 16,
            }}
          >
            <Text style={{ color: "white", fontSize: 12, fontWeight: "700" }}>
              Licensed Therapist
            </Text>
          </View>

          {/* Name and Email */}
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "black",
              marginBottom: 8,
            }}
          >
            Dr. Sarah Johnson
          </Text>
          <Text style={{ fontSize: 16, color: "#6B7280", marginBottom: 24 }}>
            sarah.johnson@ceylonayurveda.com
          </Text>

          {/* Edit Profile Button */}
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#E5E7EB",
              paddingHorizontal: 24,
              paddingVertical: 12,
              borderRadius: 25,
              backgroundColor: "white",
            }}
          >
            <Text style={{ color: "#374151", fontSize: 14, fontWeight: "500" }}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

        {/* Activity Section */}
        <View style={{ paddingHorizontal: 24, marginBottom: 32 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "black",
              marginBottom: 20,
            }}
          >
            Professional
          </Text>

          {/* Menu Items */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 16,
              borderBottomWidth: 1,
              borderBottomColor: "#F3F4F6",
            }}
          >
            <FontAwesome
              name="calendar-check-o"
              size={20}
              color="#9CA3AF"
              style={{ marginRight: 16, width: 20 }}
            />
            <Text style={{ flex: 1, fontSize: 16, color: "#374151" }}>
              Patient Records
            </Text>
            <FontAwesome name="chevron-right" size={16} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 16,
              borderBottomWidth: 1,
              borderBottomColor: "#F3F4F6",
            }}
          >
            <FontAwesome
              name="stethoscope"
              size={20}
              color="#9CA3AF"
              style={{ marginRight: 16, width: 20 }}
            />
            <Text style={{ flex: 1, fontSize: 16, color: "#374151" }}>
              Treatment Plans
            </Text>
            <FontAwesome name="chevron-right" size={16} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 16,
              borderBottomWidth: 1,
              borderBottomColor: "#F3F4F6",
            }}
          >
            <FontAwesome
              name="money"
              size={20}
              color="#9CA3AF"
              style={{ marginRight: 16, width: 20 }}
            />
            <Text style={{ flex: 1, fontSize: 16, color: "#374151" }}>
              Billing & Payments
            </Text>
            <FontAwesome name="chevron-right" size={16} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 16,
              borderBottomWidth: 1,
              borderBottomColor: "#F3F4F6",
            }}
          >
            <FontAwesome
              name="credit-card"
              size={20}
              color="#9CA3AF"
              style={{ marginRight: 16, width: 20 }}
            />
            <Text style={{ flex: 1, fontSize: 16, color: "#374151" }}>
              Payment Methods
            </Text>
            <FontAwesome name="chevron-right" size={16} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleAccountSecurity}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 16,
              borderBottomWidth: 1,
              borderBottomColor: "#F3F4F6",
            }}
          >
            <FontAwesome
              name="shield"
              size={20}
              color="#9CA3AF"
              style={{ marginRight: 16, width: 20 }}
            />
            <Text style={{ flex: 1, fontSize: 16, color: "#374151" }}>
              Account & Security
            </Text>
            <FontAwesome name="chevron-right" size={16} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* General Section */}
        <View style={{ paddingHorizontal: 24, marginBottom: 32 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "black",
              marginBottom: 20,
            }}
          >
            General
          </Text>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 16,
              borderBottomWidth: 1,
              borderBottomColor: "#F3F4F6",
            }}
          >
            <FontAwesome
              name="cog"
              size={20}
              color="#9CA3AF"
              style={{ marginRight: 16, width: 20 }}
            />
            <Text style={{ flex: 1, fontSize: 16, color: "#374151" }}>
              Preferences
            </Text>
            <FontAwesome name="chevron-right" size={16} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 16,
              borderBottomWidth: 1,
              borderBottomColor: "#F3F4F6",
            }}
          >
            <FontAwesome
              name="eye"
              size={20}
              color="#9CA3AF"
              style={{ marginRight: 16, width: 20 }}
            />
            <Text style={{ flex: 1, fontSize: 16, color: "#374151" }}>
              App Appearance
            </Text>
            <FontAwesome name="chevron-right" size={16} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 16,
              borderBottomWidth: 1,
              borderBottomColor: "#F3F4F6",
            }}
          >
            <FontAwesome
              name="question-circle"
              size={20}
              color="#9CA3AF"
              style={{ marginRight: 16, width: 20 }}
            />
            <Text style={{ flex: 1, fontSize: 16, color: "#374151" }}>
              Help & Support
            </Text>
            <FontAwesome name="chevron-right" size={16} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 16,
              borderBottomWidth: 1,
              borderBottomColor: "#F3F4F6",
            }}
          >
            <FontAwesome
              name="thumbs-up"
              size={20}
              color="#9CA3AF"
              style={{ marginRight: 16, width: 20 }}
            />
            <Text style={{ flex: 1, fontSize: 16, color: "#374151" }}>
              Rate Us
            </Text>
            <FontAwesome name="chevron-right" size={16} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <View style={{ paddingHorizontal: 24, paddingBottom: 120 }}>
          <TouchableOpacity
            onPress={handleLogout}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 16,
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 16, color: "#9A563A", fontWeight: "500" }}>
              Logout
            </Text>
            <FontAwesome
              name="sign-out"
              size={16}
              color="#9A563A"
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 16,
            }}
          >
            <Text style={{ fontSize: 16, color: "#EF4444", fontWeight: "500" }}>
              Delete Account
            </Text>
            <FontAwesome
              name="trash"
              size={16}
              color="#EF4444"
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
