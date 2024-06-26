import react from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CategoryProps } from "../../pages/Order/order";

interface ModalPickerProps {
  options: CategoryProps[];
  handleCloseModal: () => void;
  selectedItem: (item: CategoryProps) => void;
}

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
export default function ModalPicker({
  options,
  handleCloseModal,
  selectedItem,
}: ModalPickerProps) {
  function onPressItem(item: CategoryProps) {
    selectedItem(item);
    handleCloseModal();
  }

  const option = options.map((item, index) => (
    <TouchableOpacity
      key={index}
      style={styles.option}
      onPress={() => onPressItem(item)}
    >
      <Text style={styles.item}>{item?.name}</Text>
    </TouchableOpacity>
  ));

  return (
    <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: WIDTH - 20,
    height: HEIGHT / 2,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#8a8a8a",
  },
  option: {
    alignItems: 'flex-start',
    borderBottomWidth: 0.8,
    borderTopColor: "#8a8a8a",
  },
  item: {
    margin: 18,
    fontSize: 14,
    fontWeight: 'bold',
    color: "#101026" 
  }
});
