import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import {
  Animated,
  Image,
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
  const [showAllServices, setShowAllServices] = useState(false);
  const [activeTab, setActiveTab] = useState("Patients");
  const [searchBarScale] = useState(new Animated.Value(1));

  // Animate search bar on focus
  const animateSearchBar = (focused: boolean) => {
    Animated.spring(searchBarScale, {
      toValue: focused ? 1.02 : 1,
      friction: 8,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

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

  // Mock data for services (from CalendarScreen's bookedServices)
  const services = [
    {
      id: 1,
      title: "Abhyanga Full Body",
      description: "Traditional herbal oil massage",
      price: "£60.00",
      duration: "30 min",
      image: require("../../assets/images/services/abhyanga.png"),
    },
    {
      id: 2,
      title: "Shiro Abhyanga",
      description: "Soothe tension and clear",
      price: "£50.00",
      duration: "45 min",
      image: require("../../assets/images/services/shiro.png"),
    },
    {
      id: 3,
      title: "Deep Tissue Massage",
      description: "Relieve chronic tension",
      price: "£55.00",
      duration: "60 min",
      image: require("../../assets/images/services/deeptissue.png"),
    },
    {
      id: 4,
      title: "Relaxing Full Body",
      description: "Unwind your body and mind",
      price: "£50.00",
      duration: "45 min",
      image: require("../../assets/images/services/relax-fullbody.png"),
    },
    {
      id: 5,
      title: "Reflexology Foot",
      description: "Balance your body by treating feet",
      price: "£45.00",
      duration: "45 min",
      image: require("../../assets/images/services/reflexology.png"),
    },
    {
      id: 6,
      title: "Nabhi Abhyanga",
      description: "Ceylon Ayurvedic Abdominal",
      price: "£40.00",
      duration: "30 min",
      image: require("../../assets/images/services/nabhi.png"),
    },
    {
      id: 7,
      title: "Ayurvedic Herbal Facial",
      description: "Natural glow with herbal ingredients",
      price: "£45.00",
      duration: "45 min",
      image: require("../../assets/images/services/herbal-facial.png"),
    },
    {
      id: 8,
      title: "Hair & Scalp Treatment",
      description: "Nourish your scalp and promote hair health",
      price: "£35.00",
      duration: "40 min",
      image: require("../../assets/images/services/hair-scalp.png"),
    },
    {
      id: 9,
      title: "Herbal Face Pack",
      description: "Natural herbal blend to cleanse",
      price: "£25.00",
      duration: "30 min",
      image: require("../../assets/images/services/herbal-facepack.png"),
    },
    {
      id: 10,
      title: "Full Body Ubtan",
      description: "Traditional Ayurvedic body treatment",
      price: "£55.00",
      duration: "60 min",
      image: require("../../assets/images/services/fullbody-ubtan.png"),
    },
    {
      id: 11,
      title: "Panchakarma Detox",
      description: "Complete body detoxification",
      price: "£120.00",
      duration: "90 min",
      image: require("../../assets/images/services/panchakarma.png"),
    },
  ];

  // Filter patients, treatments, and services based on search query
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

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show only first 4 services unless showAllServices is true
  const displayedServices = showAllServices
    ? filteredServices
    : filteredServices.slice(0, 4);

  const tabs = ["Patients", "Treatments", "Services"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Patients":
        return (
          <View style={{ marginBottom: 24 }}>
            {filteredPatients.length > 0 ? (
              <View>
                {filteredPatients.map((patient) => (
                  <TouchableOpacity
                    key={patient.id}
                    activeOpacity={0.8}
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
                      transform: [{ scale: 1 }],
                    }}
                    onPressIn={() => ({ transform: [{ scale: 0.98 }] })}
                    onPressOut={() => ({ transform: [{ scale: 1 }] })}
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
                  </TouchableOpacity>
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
        );
      case "Treatments":
        return (
          <View style={{ marginBottom: 24 }}>
            {filteredTreatments.length > 0 ? (
              <View>
                {filteredTreatments.map((treatment) => (
                  <TouchableOpacity
                    key={treatment.id}
                    activeOpacity={0.8}
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
                    onPressIn={() => ({ transform: [{ scale: 0.98 }] })}
                    onPressOut={() => ({ transform: [{ scale: 1 }] })}
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
                          <FontAwesome
                            name="clock-o"
                            size={12}
                            color="#6B7280"
                          />
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
                  </TouchableOpacity>
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
        );
      case "Services":
        return (
          <View style={{ marginBottom: 24 }}>
            {filteredServices.length > 0 ? (
              <View>
                {displayedServices.map((service) => (
                  <TouchableOpacity
                    key={service.id}
                    activeOpacity={0.8}
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
                    onPressIn={() => ({ transform: [{ scale: 0.98 }] })}
                    onPressOut={() => ({ transform: [{ scale: 1 }] })}
                  >
                    <Image
                      source={
                        typeof service.image === "string"
                          ? { uri: service.image }
                          : service.image
                      }
                      style={{
                        width: "100%",
                        height: 100,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        backgroundColor: "#F3F4F6",
                      }}
                      resizeMode="cover"
                    />
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
                        {service.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: "#6B7280",
                          marginBottom: 8,
                        }}
                        numberOfLines={1}
                      >
                        {service.description}
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
                          {service.price}
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <FontAwesome
                            name="clock-o"
                            size={12}
                            color="#6B7280"
                          />
                          <Text
                            style={{
                              fontSize: 12,
                              color: "#6B7280",
                              marginLeft: 4,
                            }}
                          >
                            {service.duration}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
                {filteredServices.length > 4 && !showAllServices && (
                  <TouchableOpacity
                    onPress={() => setShowAllServices(true)}
                    style={{
                      backgroundColor: "#9A563A",
                      borderRadius: 10,
                      marginLeft: 105,
                      justifyContent: "center",
                      width: 130,
                      height: 30,
                      alignItems: "center",
                      marginTop: 8,
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.1,
                      shadowRadius: 4,
                      elevation: 3,
                    }}
                  >
                    <Animated.View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        transform: [{ scale: searchBarScale }],
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 14,
                          fontWeight: "600",
                          marginRight: 6,
                        }}
                      >
                        See More
                      </Text>
                      <FontAwesome
                        name="chevron-down"
                        size={12}
                        color="white"
                      />
                    </Animated.View>
                  </TouchableOpacity>
                )}
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
                  No services found
                </Text>
              </View>
            )}
          </View>
        );
      default:
        return null;
    }
  };

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
              fontSize: 28,
              fontWeight: "bold",
              color: "#9A563A",
              textAlign: "center",
              textShadowColor: "rgba(0, 0, 0, 0.1)",
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 2,
            }}
          >
            Discover Wellness
          </Text>
        </View>

        {/* Search Bar */}
        <View style={{ paddingHorizontal: 24, marginBottom: 24 }}>
          <Animated.View
            style={{
              transform: [{ scale: searchBarScale }],
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              padding: 12,
              borderWidth: 2,
              borderColor: searchFocus ? "#9A563A" : "#E5E7EB",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 8,
              elevation: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesome
              name="search"
              size={22}
              color={searchFocus ? "#9A563A" : "#9CA3AF"}
            />
            <TextInput
              placeholder="Search patients, treatments, or services..."
              style={{
                flex: 1,
                color: "#374151",
                fontSize: 16,
                marginLeft: 12,
                fontWeight: "500",
              }}
              onFocus={() => {
                setSearchFocus(true);
                animateSearchBar(true);
              }}
              onBlur={() => {
                setSearchFocus(false);
                animateSearchBar(false);
              }}
              placeholderTextColor="#9CA3AF"
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </Animated.View>
        </View>

        {/* Tabs */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingHorizontal: 24,
            marginBottom: 16,
          }}
        >
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
                backgroundColor: activeTab === tab ? "#9A563A" : "transparent",
                borderWidth: activeTab === tab ? 0 : 1,
                borderColor: "#9A563A",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: activeTab === tab ? "white" : "#374151",
                }}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Tab Content */}
        <View style={{ paddingHorizontal: 24 }}>{renderTabContent()}</View>

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
            activeOpacity={0.8}
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
