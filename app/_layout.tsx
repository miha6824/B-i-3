import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';

const Comments = () => {
  const data = [
    {
      id: 1,
      image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      name: 'Thông báo 1',
      comment: 'ĐT Pháp khó nhọc đánh bại Áo 1-0 trong trận ra quân. HLV Deschamps nói về kết quả của trận đấu:.',
      time: '18/06/2024, 9:58 am',
    },
    {
      id: 2,
      image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
      name: 'Thông báo 2',
      comment: 'ĐT Pháp khó nhọc đánh bại Áo 1-0 trong trận ra quân. HLV Deschamps nói về kết quả của trận đấu:.',
      time: '18/06/2024, 9:58 am',
    },
    {
      id: 3,
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
      name: 'Thông báo 3',
      comment: 'ĐT Pháp khó nhọc đánh bại Áo 1-0 trong trận ra quân. HLV Deschamps nói về kết quả của trận đấu:.',
      time: '18/06/2024, 9:58 am',
    },
    {
      id: 4,
      image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      name: 'Thông báo 4',
      comment: 'ĐT Pháp khó nhọc đánh bại Áo 1-0 trong trận ra quân. HLV Deschamps nói về kết quả của trận đấu:.',
      time: '18/06/2024, 9:58 am',
    },
    {
      id: 5,
      image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      name: 'Thông báo 5',
      comment: 'ĐT Pháp khó nhọc đánh bại Áo 1-0 trong trận ra quân. HLV Deschamps nói về kết quả của trận đấu:.',
      time: '18/06/2024, 9:58 am',
    },
    {
      id: 6,
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
      name: 'Thông báo 6',
      comment: 'ĐT Pháp khó nhọc đánh bại Áo 1-0 trong trận ra quân. HLV Deschamps nói về kết quả của trận đấu:.',
      time: '18/06/2024, 9:58 am',
    },
    {
      id: 7,
      image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
      name: 'Thông báo 7',
      comment: 'ĐT Pháp khó nhọc đánh bại Áo 1-0 trong trận ra quân. HLV Deschamps nói về kết quả của trận đấu:.',
      time: '18/06/2024, 9:58 am',
    },
  ];

  const [comments, setComments] = useState(data);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.notificationText}>Thông báo</Text>
      </View>
      <FlatList
        style={styles.root}
        data={comments}
        extraData={comments}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <TouchableOpacity onPress={() => {}}>
              <Image style={styles.image} source={{ uri: item.image }} />
            </TouchableOpacity>
            <View style={styles.content}>
              <View style={styles.contentHeader}>
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <Text style={styles.commentText}>{item.comment}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50, // Adjust height as needed
    backgroundColor: '#ffffff',
  },
  notificationText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  root: {
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 10,
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
    borderRadius: 22.5,
  },
  time: {
    fontSize: 11,
    color: '#808080',
    marginTop: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentText: {
    fontSize: 14,
  },
});

export default Comments;
