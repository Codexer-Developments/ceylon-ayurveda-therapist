import { FontAwesome } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BottomMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  // State to track which tab was just clicked for animation
  const [clickedTab, setClickedTab] = useState<string | null>(null);

  // Animation value for the clicked tab
  const [scaleAnim] = useState(new Animated.Value(1));

  // Navigation items with FontAwesome icons
  const navItems = [
    { name: "appointments", label: "Sessions", icon: "plus" },
    { name: "calendar", label: "Bookings", icon: "calendar" },
    { name: "search", label: "Search", icon: "search" },
    { name: "profile", label: "Profile Info", icon: "user" },
  ];

  // Check if current path matches the nav item
  const isActive = (path: string) => {
    // Extract the last part of the pathname to match against our tab names
    const currentPath = pathname.split("/").pop();
    return currentPath === path;
  };

  // Handle tab click with animation
  const handleTabClick = (tabName: string) => {
    setClickedTab(tabName);

    // Animate the tab press
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Navigate after animation completes
      router.push(`/(screens)/${tabName}`);

      // Reset clicked tab after a short delay
      setTimeout(() => {
        setClickedTab(null);
      }, 300);
    });
  };

  // Reset clicked tab when route changes
  useEffect(() => {
    setClickedTab(null);
  }, [pathname]);

  return (
    <View
      style={{
        position: "absolute",
        bottom: insets.bottom + -5, // Adjusted position
        left: 15,
        right: 15,
        backgroundColor: "white",
        borderRadius: 30,
        flexDirection: "row",
        paddingVertical: 22,
        paddingHorizontal: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
      }}
    >
      {navItems.map((item) => {
        const isTabActive = isActive(item.name);
        const isTabClicked = clickedTab === item.name;

        // Determine icon color based on active state and click state
        const iconColor = isTabClicked
          ? "#7A4530" // Darker brown when clicked
          : isTabActive
          ? "#9A563A" // Brown when active
          : "#9CA3AF"; // Gray when inactive

        return (
          <TouchableOpacity
            key={item.name}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => handleTabClick(item.name)}
            activeOpacity={0.7} // Reduce default opacity change
          >
            <Animated.View
              style={{
                transform: [{ scale: isTabClicked ? scaleAnim : 1 }],
              }}
            >
              <FontAwesome name={item.icon} size={22} color={iconColor} />
            </Animated.View>
            <Text
              style={{
                marginTop: 4,
                fontSize: 12,
                fontWeight: "500",
                color: iconColor,
              }}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
