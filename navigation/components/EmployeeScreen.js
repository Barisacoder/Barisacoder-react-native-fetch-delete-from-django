import React, {useState, useEffect} from "react";
import axios from 'axios'
import { Button, View, Text } from "react-native";

export default function ContactScreen({ navigation }) {
  const [data, setData] = useState([]);

  const fetch = () => {
    console.log('sami')
    axios.get('http://127.0.0.1:8000/employee/list-create')
    .then((res) => setData(res.data))
    .catch(err => console.log(err))
  }
  useEffect(() => {
    fetch()
  },[])

  const des = (id) => {
    axios.delete(`http://127.0.0.1:8000/employee/update-delete/${id}`)
    fetch()
  }

  return (
    <View style={{ flex: 1, alignItems: "center", fontsize: 30, justifyContent: "center", backgroundColor: '#ECDDD0' }}>
      <Text>Employee Screen</Text>
      {data.map((item) => { 
        return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
        title="Go to Student"
        onPress={() => navigation.navigate("Student")}
      />
      <Button
        title="Go to Teacher"
        onPress={() => navigation.navigate("Teacher")}
      />
    </View>
  );
}