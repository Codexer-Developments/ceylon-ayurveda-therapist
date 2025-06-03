import { FontAwesome } from "@expo/vector-icons";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function AppointmentsScreen() {
  // Mock data for patient appointments
  const appointments = [
    {
      id: 1,
      patientName: "John Doe",
      age: 35,
      session: "Abhyanga Full Body",
      date: "2025-06-03",
      time: "10:00 AM",
      duration: "30 min",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      age: 28,
      session: "Shiro Abhyanga",
      date: "2025-06-03",
      time: "2:00 PM",
      duration: "45 min",
    },
    {
      id: 3,
      patientName: "Michael Brown",
      age: 42,
      session: "Deep Tissue Massage",
      date: "2025-06-04",
      time: "11:00 AM",
      duration: "60 min",
    },
    {
      id: 4,
      patientName: "Emma Wilson",
      age: 30,
      session: "Relaxing Full Body",
      date: "2025-06-04",
      time: "3:00 PM",
      duration: "45 min",
    },
    {
      id: 5,
      patientName: "David Lee",
      age: 50,
      session: "Reflexology Foot",
      date: "2025-06-05",
      time: "9:00 AM",
      duration: "45 min",
    },
  ];

  const today = new Date();
  const todayString = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  // Filter today's sessions
  const todaySessions = appointments.filter(
    (appt) => appt.date === todayString
  );

  // Filter upcoming sessions (including today)
  const upcomingSessions = appointments.filter((appt) => {
    const apptDate = new Date(appt.date);
    const todayStart = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    return apptDate >= todayStart;
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FEF7ED" }}>
      {/* Background decorative patches */}
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

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header */}
        <View
          style={{ paddingHorizontal: 24, paddingTop: 20, paddingBottom: 16 }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#9A563A",
              textAlign: "center",
            }}
          >
            Appointments
          </Text>
        </View>

        {/* Today's Sessions */}
        <View style={{ paddingHorizontal: 24, marginBottom: 24 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#374151",
              marginBottom: 16,
            }}
          >
            Today's Sessions ({todaySessions.length})
          </Text>

          {todaySessions.length > 0 ? (
            <View>
              {todaySessions.map((appt) => (
                <View
                  key={appt.id}
                  style={{
                    backgroundColor: "white",
                    borderRadius: 12,
                    marginBottom: 12,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 3,
                    borderWidth: 2,
                    borderColor: "#9A563A",
                  }}
                >
                  <View style={{ padding: 12 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#374151",
                        marginBottom: 4,
                      }}
                      numberOfLines={1}
                    >
                      {appt.patientName}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#6B7280",
                        marginBottom: 8,
                      }}
                    >
                      Age: {appt.age}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#6B7280",
                        marginBottom: 8,
                      }}
                      numberOfLines={1}
                    >
                      Session: {appt.session}
                    </Text>
                    <View style={{ marginBottom: 8 }}>
                      <Text
                        style={{
                          fontSize: 11,
                          color: "#9A563A",
                          fontWeight: "500",
                        }}
                      >
                        {appt.date} • {appt.time}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <FontAwesome name="clock-o" size={12} color="#6B7280" />
                      <Text
                        style={{
                          fontSize: 12,
                          color: "#6B7280",
                          marginLeft: 4,
                        }}
                      >
                        {appt.duration}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 12,
                padding: 24,
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 3,
              }}
            >
              <FontAwesome name="calendar-o" size={48} color="#D1D5DB" />
              <Text
                style={{
                  fontSize: 16,
                  color: "#6B7280",
                  marginTop: 12,
                  textAlign: "center",
                }}
              >
                No sessions scheduled for today
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#9A563A",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 8,
                  marginTop: 16,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 14,
                    fontWeight: "600",
                  }}
                >
                  Book Session
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* All Upcoming Sessions */}
        <View style={{ paddingHorizontal: 24 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#374151",
              marginBottom: 16,
            }}
          >
            All Upcoming Sessions ({upcomingSessions.length})
          </Text>

          <View>
            {upcomingSessions.map((appt) => (
              <View
                key={appt.id}
                style={{
                  backgroundColor: "white",
                  borderRadius: 12,
                  marginBottom: 12,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation: 3,
                  borderWidth: 2,
                  borderColor: "#9A563A",
                }}
              >
                <View style={{ padding: 12 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#374151",
                      marginBottom: 4,
                    }}
                    numberOfLines={1}
                  >
                    {appt.patientName}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#6B7280",
                      marginBottom: 8,
                    }}
                  >
                    Age: {appt.age}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#6B7280",
                      marginBottom: 8,
                    }}
                    numberOfLines={1}
                  >
                    Session: {appt.session}
                  </Text>
                  <View style={{ marginBottom: 8 }}>
                    <Text
                      style={{
                        fontSize: 11,
                        color: "#9A563A",
                        fontWeight: "500",
                      }}
                    >
                      {appt.date} • {appt.time}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome name="clock-o" size={12} color="#6B7280" />
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#6B7280",
                        marginLeft: 4,
                      }}
                    >
                      {appt.duration}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>

          {/* Book New Session Button */}
          <TouchableOpacity
            style={{
              backgroundColor: "#9A563A",
              paddingVertical: 16,
              alignItems: "center",
              borderRadius: 12,
              marginTop: 16,
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
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              Book New Session
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
