import { StyleSheet, SafeAreaView } from "react-native";

import { WebView } from "react-native-webview";

const WEB_URI = "https://www.nalab.me/";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: WEB_URI }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D1E3F8",
  },
});
