import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  // Mock data for patients (from AppointmentsScreen)
  const patients = [
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

  // Mock data for treatments (from CalendarScreen)
  const treatments = [
    {
      id: 1,
      title: "Abhyanga Full Body",
      description: "Traditional herbal oil massage",
      price: "£60.00",
      duration: "30 min",
    },
    {
      id: 2,
      title: "Shiro Abhyanga",
      description: "Soothe tension and clear",
      price: "£50.00",
      duration: "45 min",
    },
    {
      id: 3,
      title: "Deep Tissue Massage",
      description: "Relieve chronic tension",
      price: "£55.00",
      duration: "60 min",
    },
    {
      id: 4,
      title: "Relaxing Full Body",
      description: "Unwind your body and mind",
      price: "£50.00",
      duration: "45 min",
    },
    {
      id: 5,
      title: "Reflexology Foot",
      description: "Balance your body by treating feet",
      price: "£45.00",
      duration: "45 min",
    },
  ];

  // Filter patients and treatments based on search query
  const filteredPatients = patients.filter(
    (patient) =>
      patient.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.session.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTreatments = treatments.filter(
    (treatment) =>
      treatment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      treatment.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            Search
          </Text>
        </View>

        {/* Search Bar */}
        <View style={{ paddingHorizontal: 24, marginBottom: 24 }}>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              padding: 12,
              borderWidth: 1,
              borderColor: searchFocus ? "#9A563A" : "#E5E7EB",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.05,
              shadowRadius: 2,
              elevation: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesome name="search" size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Search patients or treatments..."
              style={{
                flex: 1,
                color: "#374151",
                fontSize: 16,
                marginLeft: 8,
              }}
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
              placeholderTextColor="#9CA3AF"
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
        </View>

        {/* Patients Section */}
        <View style={{ paddingHorizontal: 24, marginBottom: 24 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#374151",
              marginBottom: 16,
            }}
          >
            Patients ({filteredPatients.length})
          </Text>

          {filteredPatients.length > 0 ? (
            <View>
              {filteredPatients.map((patient) => (
                <View
                  key={patient.id}
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
                      {patient.patientName}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#6B7280",
                        marginBottom: 8,
                      }}
                    >
                      Age: {patient.age}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#6B7280",
                        marginBottom: 8,
                      }}
                      numberOfLines={1}
                    >
                      Session: {patient.session}
                    </Text>
                    <View style={{ marginBottom: 8 }}>
                      <Text
                        style={{
                          fontSize: 11,
                          color: "#9A563A",
                          fontWeight: "500",
                        }}
                      >
                        {patient.date} • {patient.time}
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
                        {patient.duration}
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
              <FontAwesome name="user-o" size={48} color="#D1D5DB" />
              <Text
                style={{
                  fontSize: 16,
                  color: "#6B7280",
                  marginTop: 12,
                  textAlign: "center",
                }}
              >
                No patients found
              </Text>
            </View>
          )}
        </View>

        {/* Treatments Section */}
        <View style={{ paddingHorizontal: 24, marginBottom: 24 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#374151",
              marginBottom: 16,
            }}
          >
            Treatments ({filteredTreatments.length})
          </Text>

          {filteredTreatments.length > 0 ? (
            <View>
              {filteredTreatments.map((treatment) => (
                <View
                  key={treatment.id}
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
                      {treatment.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#6B7280",
                        marginBottom: 8,
                      }}
                      numberOfLines={1}
                    >
                      {treatment.description}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "bold",
                          color: "#9A563A",
                        }}
                      >
                        {treatment.price}
                      </Text>
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
                          {treatment.duration}
                        </Text>
                      </View>
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
              <FontAwesome name="medkit" size={48} color="#D1D5DB" />
              <Text
                style={{
                  fontSize: 16,
                  color: "#6B7280",
                  marginTop: 12,
                  textAlign: "center",
                }}
              >
                No treatments found
              </Text>
            </View>
          )}
        </View>

        {/* Book New Session Button */}
        <View style={{ paddingHorizontal: 24 }}>
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
