import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import styled from 'styled-components/native';

// const data = [{
//   Q: "The creator of Vue.",
//   A: "Who is Evan You?"
// },{
//   Q: "True or False: Vue has a cli.",
//   A: "What is true?"
// },{
//   Q: "This country has the largest adoption of Vue.",
//   A: "What is China?"
// },{
//   Q: "Vue has over _____ stars on Github.",
//   A: "What is 56,635?"
// },{
//   Q: "Vue was written while the author was at this company.",
//   A: "What is Google?"
// },{
//   Q: "True or False: React is an MVC based framework.",
//   A: "What is false?"
// },{
//   Q: "Vue was released on this year.",
//   A: "What is February 2014?"
// }];

const Container = styled.View`
  margin: 20px;
`;

export default class Vue extends Component {
  render() {
    return (
      <Container>
        <Image source={require('./img/jeopardy-vue.png')}/>
      </Container>
    );
  }
}

// Vue.navigationOptions = {
//   tabBarIcon: () => (
//     <Image source={require('./img/vue.png')}/>
//   )
// }

/*<ScrollView>
  {data.map(jeopardy => 
    <View>
      <Question q={jeopardy.Q}/>
      <Answer a={jeopardy.A}/>
    </View>
  )}
</ScrollView>*/