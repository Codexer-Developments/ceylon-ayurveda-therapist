import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Expanded mock data for booked services
  const bookedServices = [
    {
      id: 1,
      title: "Abhyanga Full Body...",
      description: "Traditional herbal oil massage",
      price: "£60.00",
      duration: "30 min",
      image: require("../../assets/images/services/abhyanga.png"),
      date: "2025-06-03",
      time: "10:00 AM",
    },
    {
      id: 2,
      title: "Shiro Abhyanga (Head...)",
      description: "Soothe tension and clear...",
      price: "£50.00",
      duration: "45 min",
      image: require("../../assets/images/services/shiro.png"),
      date: "2025-06-03",
      time: "2:00 PM",
    },
    {
      id: 3,
      title: "Deep Tissue Massage",
      description: "Relieve chronic tension a...",
      price: "£55.00",
      duration: "60 min",
      image: require("../../assets/images/services/deeptissue.png"),
      date: "2025-06-04",
      time: "11:00 AM",
    },
    {
      id: 4,
      title: "Relaxing Full Body M...",
      description: "Unwind your body and mi...",
      price: "£50.00",
      duration: "45 min",
      image: require("../../assets/images/services/relax-fullbody.png"),
      date: "2025-06-04",
      time: "3:00 PM",
    },
    {
      id: 5,
      title: "Reflexology Foot Mas...",
      description: "Balance your body by tre...",
      price: "£45.00",
      duration: "45 min",
      image: require("../../assets/images/services/reflexology.png"),
      date: "2025-06-05",
      time: "9:00 AM",
    },
    {
      id: 6,
      title: "Nabhi Abhyanga",
      description: "Ceylon Ayurvedic Abdomi...",
      price: "£40.00",
      duration: "30 min",
      image: require("../../assets/images/services/nabhi.png"),
      date: "2025-06-05",
      time: "1:00 PM",
    },
    {
      id: 7,
      title: "Ayurvedic Herbal Facial",
      description: "Natural glow with herbal i...",
      price: "£45.00",
      duration: "45 min",
      image: require("../../assets/images/services/herbal-facial.png"),
      date: "2025-06-06",
      time: "10:30 AM",
    },
    {
      id: 8,
      title: "Hair & Scalp Treatment",
      description: "Nourish your scalp and pr...",
      price: "£35.00",
      duration: "40 min",
      image: require("../../assets/images/services/hair-scalp.png"),
      date: "2025-06-06",
      time: "4:00 PM",
    },
    {
      id: 9,
      title: "Herbal Face Pack Tre...",
      description: "Natural herbal blend to cl...",
      price: "£25.00",
      duration: "30 min",
      image: require("../../assets/images/services/herbal-facepack.png"),
      date: "2025-06-07",
      time: "11:00 AM",
    },
    {
      id: 10,
      title: "Full Body Ubtan (Her...)",
      description: "Traditional Ayurvedic bod...",
      price: "£55.00",
      duration: "60 min",
      image: require("../../assets/images/services/fullbody-ubtan.png"),
      date: "2025-06-07",
      time: "2:30 PM",
    },
    {
      id: 11,
      title: "Panchakarma Detox",
      description: "Complete body detoxification",
      price: "£120.00",
      duration: "90 min",
      image: require("../../assets/images/services/panchakarma.png"),
      date: "2025-06-08",
      time: "10:00 AM",
    },
  ];

  // Generate calendar days for current month
  const generateCalendarDays = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const navigateMonth = (direction: number) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(selectedDate.getMonth() + direction);
    setSelectedDate(newDate);
  };

  // Fixed isToday function - this will always get the actual current date
  const isToday = (day: number) => {
    const today = new Date(); // This gets the real current date
    return (
      day === today.getDate() &&
      selectedDate.getMonth() === today.getMonth() &&
      selectedDate.getFullYear() === today.getFullYear()
    );
  };

  const hasBooking = (day: number) => {
    const dateString = `${selectedDate.getFullYear()}-${String(
      selectedDate.getMonth() + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return bookedServices.some((service) => service.date === dateString);
  };

  const getBookingsCount = (day: number) => {
    const dateString = `${selectedDate.getFullYear()}-${String(
      selectedDate.getMonth() + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return bookedServices.filter((service) => service.date === dateString)
      .length;
  };

  // Function to check if a date is in the past
  const isPastDate = (day: number) => {
    const today = new Date();
    const checkDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      day
    );
    const todayStart = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    return checkDate < todayStart;
  };

  return (
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
            Therapy Schedule
          </Text>
        </View>

        {/* Calendar */}
        <View
          style={{
            marginHorizontal: 24,
            backgroundColor: "white",
            borderRadius: 16,
            padding: 20,
            marginBottom: 24,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 4,
          }}
        >
          {/* Calendar Header */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => navigateMonth(-1)}
              style={{ padding: 8 }}
            >
              <FontAwesome name="chevron-left" size={16} color="#9A563A" />
            </TouchableOpacity>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#374151" }}
            >
              {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
            </Text>
            <TouchableOpacity
              onPress={() => navigateMonth(1)}
              style={{ padding: 8 }}
            >
              <FontAwesome name="chevron-right" size={16} color="#9A563A" />
            </TouchableOpacity>
          </View>

          {/* Day Names */}
          <View style={{ flexDirection: "row", marginBottom: 12 }}>
            {dayNames.map((day) => (
              <View key={day} style={{ flex: 1, alignItems: "center" }}>
                <Text
                  style={{ fontSize: 12, fontWeight: "600", color: "#6B7280" }}
                >
                  {day}
                </Text>
              </View>
            ))}
          </View>

          {/* Calendar Grid */}
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {generateCalendarDays().map((day, index) => (
              <View
                key={index}
                style={{ width: "14.28%", aspectRatio: 1, padding: 2 }}
              >
                {day && (
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 8,
                      backgroundColor: isToday(day)
                        ? "#9A563A"
                        : hasBooking(day)
                        ? "#FEF7ED"
                        : "transparent",
                      borderWidth: hasBooking(day) && !isToday(day) ? 1 : 0,
                      borderColor: "#9A563A",
                      opacity: isPastDate(day) && !isToday(day) ? 0.4 : 1,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight:
                          isToday(day) || hasBooking(day) ? "600" : "400",
                        color: isToday(day)
                          ? "white"
                          : hasBooking(day)
                          ? "#9A563A"
                          : isPastDate(day)
                          ? "#9CA3AF"
                          : "#374151",
                      }}
                    >
                      {day}
                    </Text>
                    {hasBooking(day) && !isToday(day) && (
                      <View
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: 2,
                          backgroundColor: "#9A563A",
                          marginTop: 2,
                        }}
                      />
                    )}
                    {hasBooking(day) && getBookingsCount(day) > 1 && (
                      <Text
                        style={{
                          fontSize: 8,
                          color: isToday(day) ? "white" : "#9A563A",
                          fontWeight: "bold",
                          position: "absolute",
                          top: 2,
                          right: 2,
                        }}
                      >
                        {getBookingsCount(day)}
                      </Text>
                    )}
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Booked Services Section */}
        <View style={{ paddingHorizontal: 24 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#374151",
              marginBottom: 16,
            }}
          >
            Upcoming Sessions ({bookedServices.length})
          </Text>

          {/* Service Cards */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {bookedServices.map((service) => (
              <View
                key={service.id}
                style={{
                  width: "48%",
                  backgroundColor: "white",
                  borderRadius: 12,
                  marginBottom: 16,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation: 3,
                }}
              >
                {/* Service Image */}
                <Image
                  source={
                    typeof service.image === "string"
                      ? { uri: service.image }
                      : service.image
                  }
                  style={{
                    width: "100%",
                    height: 100,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    backgroundColor: "#F3F4F6",
                  }}
                  resizeMode="cover"
                />

                {/* Service Details */}
                <View style={{ padding: 12 }}>
                  <Text
                    style={{
                      fontSize: 14,
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

                  {/* Date and Time */}
                  <View style={{ marginBottom: 8 }}>
                    <Text
                      style={{
                        fontSize: 11,
                        color: "#9A563A",
                        fontWeight: "500",
                      }}
                    >
                      {service.date} • {service.time}
                    </Text>
                  </View>

                  {/* Price and Duration */}
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
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <FontAwesome name="clock-o" size={12} color="#6B7280" />
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
              </View>
            ))}
          </View>

          {/* Add More Sessions Button */}
          <TouchableOpacity
            style={{
              backgroundColor: "#9A563A",
              paddingVertical: 16,
              alignItems: "center",
              borderRadius: 12,
              marginTop: 8,
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
