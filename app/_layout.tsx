import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'

export default function RootLayout() {
  const data = [
    {
      id: 1,
      image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      name: 'Frank Odalthh',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
    {
      id: 2,
      image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
      name: 'John DoeLink',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
    {
      id: 3,
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
      name: 'March SoulLaComa',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
    {
      id: 4,
      image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      name: 'Finn DoRemiFaso',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
    {
      id: 5,
      image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      name: 'Maria More More',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
    {
      id: 6,
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
      name: 'Clark June Boom!',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
    {
      id: 7,
      image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
      name: 'The googler',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
  ]

  const [comments, setComments] = useState(data)

  return (
    <FlatList
      style={styles.root}
      data={comments}
      extraData={comments} // Sửa lỗi tại đây
      ItemSeparatorComponent={() => {
        return <View style={styles.separator} />
      }}
      keyExtractor={item => {
        return item.id.toString() // Đảm bảo key là chuỗi
      }}
      renderItem={({ item }) => { // Destructuring item
        return (
          <View style={styles.container}>
            <TouchableOpacity onPress={() => {}}>
              <Image style={styles.image} source={{ uri: item.image }} />
            </TouchableOpacity>
            <View style={styles.content}>
              <View style={styles.contentHeader}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.time}>9:58 am</Text>
              </View>
              <Text style={styles.comment}>{item.comment}</Text>

            </View>
          </View>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
 
    comment: {
      fontSize: 14,
      lineHeight: 20, // Điều chỉnh line height cho phù hợp
      color: '#333333',
      marginTop: 5, // Điều chỉnh margin top nếu cần thiết
    },
  
  
  root: {
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 22,
    marginLeft: 20,
  },
  time: {
    fontSize: 11,
    color: '#808080',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
