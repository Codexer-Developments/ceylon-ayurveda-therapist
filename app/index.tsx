import { Redirect } from "expo-router";

export default function Index() {
  // For now, always redirect to login
  // Later you can add authentication logic here
  return <Redirect href="/(auth)/login" />;
}
