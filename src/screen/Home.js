import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Userpost from '../component/Userpost';
import Story from '../component/Story';

// Mock data for posts
const posts = [
  { id: '1', user: 'User1', image: require('../assets/girl.png'), },
  { id: '2', user: 'User2', image: require('../assets/girl.png'), },
  { id: '3', user: 'User3', image: require('../assets/girl.png'), },
  // Add more posts as needed
];

const story = [
    { id: '1',  image: require('../assets/girl.png'), },
    { id: '2', image: require('../assets/girl.png'), },
    { id: '3', image: require('../assets/girl.png'), },
    { id: '4',  image: require('../assets/girl.png'), },
    { id: '5', image: require('../assets/girl.png'), },
    { id: '6', image: require('../assets/girl.png'), },
    { id: '7',  image: require('../assets/girl.png'), },
    { id: '8', image: require('../assets/girl.png'), },
    { id: '9', image: require('../assets/girl.png'), },
    // Add more posts as needed
  ];

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.header}>
        <Image source={require('../assets/plus.png')} />
        <Image source={require('../assets/skenu.png')} />
        <Image source={require('../assets/msg.png')} />
      </View>

      {/* for story */}
     
     <View style={{width:"100%",height:70, paddingHorizontal:10, flexDirection:'row'}}>
     <TouchableOpacity style={{marginRight:10 ,}}>
      <Image source={require('../assets/girl.png')} style={{width:60, height:60, borderRadius:68}} resizeMode='contain'/>
      <TouchableOpacity style={{width:20, height:20, backgroundColor:'yellow', position:'relative', right:-38, bottom:18,borderRadius:20, alignItems:'center', justifyContent:'center'}}>
       <Image source={require('../assets/plusIcon.png')} style={{width:12, height:12,tintColor:'black'}}/>
      </TouchableOpacity>
    </TouchableOpacity>

     <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={story}
        renderItem={({ item }) => <Story story={item} />}
        keyExtractor={item => item.id}
      />
     </View>
      
      <FlatList
        data={posts}
        renderItem={({ item }) => <Userpost post={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  userText: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  descriptionText: {
    color: '#333',
  },
});
