import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const QuranChapters = () => {
  const navigation = useNavigation();
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    fetch("https://api.quran.com/api/v4/chapters?language=bn")
      .then((res) => res.json())
      .then((data) => {
        setChapters(data.chapters);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChapterPress = (chapterId) => {
    navigation.navigate("ChapterId", { chapterId });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleChapterPress(item.id)}
    >
      <Text style={styles.title}>{item.name_simple}  {item.name_arabic}</Text>
      <Text style={styles.details}>{`Verses: ${item.verses_count} - Revelation Place: ${item.revelation_place}`}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={chapters}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};



const styles = StyleSheet.create({
  item: {
    backgroundColor: "#F2E3DB",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  details: {
    fontSize: 16,
    fontStyle: "italic",
  },
});

export default QuranChapters;