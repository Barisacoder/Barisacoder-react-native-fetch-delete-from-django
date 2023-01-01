
import React, {useState, useEffect} from "react";
import axios from 'axios'
import { Button, View, Text,StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);

  const fetch = () => {
    console.log('sami')
    axios.get('http://127.0.0.1:8000/teach/lsit-create')
    .then((res) => setData(res.data))
    .catch(err => console.log(err))
  }
  useEffect(() => {
    fetch()
  },[])
  const des = (id) => {
    axios.delete(`http://127.0.0.1:8000/teach/update-delete/${id}`)
    fetch()
  }
  
  return (
    <View style={{ flex: 1, alignItems: "center", fontsize: 30, justifyContent: "center" , backgroundColor: '#CBE4F9'}}>
      <Text>Teacher Screen</Text>
      {data.map((item) => { 
        return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" , backgroundColor: '#CBE4F9'}}>
            <Text>{item.id}</Text>
            <Text>{item.fName}</Text>
            
            <Button 
            title="Delete"
             onPress={() => des(item.id)}
            />
          </View>
        )
      })}
      <Button
        title="Go to Employee"
        onPress={() => navigation.navigate("Employee")}
      />
      
      <Button
        title="Go to Student"
        onPress={() => navigation.navigate("Student")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#CBE4F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
})