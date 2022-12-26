import react, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, SIZES } from './constants/theme';

const slides = [
  {
    id: 1,
    image: require('./assets/front.png')
  },
  {
    id: 2,
    title: 'Ekspres to Express',
    description: 'Ekspres is an Android Application for Filipino Sign Language to Speech Conversion using Real-Time Action Recognition. It is developed to improve communication and bridge the communication gap between people. ',
    image: require('./assets/try.gif')
  },
  {
    id: 3,
    title: 'Features of the App',
    description: 'Ekspres is designed to translate Filipino Sign Language into Filipino Speech Language and Filipino Speech Language into Filipino Sign Language using facial expressions, hand gestures, and speech recognition to do the translation process.',
    image: require('./assets/try2.gif')
  },
  {
    id: 4,
    title: 'Ekspres Developers',
    description: 'The developers of this application are the \nFourth year student taking Bachelor of Science in Computer Science in Technological University of the Philippines - Manila. \n\nJoanna Marie Estrella\nLorence Joy De Guzman\nLhester Castuciano\nElaine Andus',
    image: require('./assets/try3.gif')
  }
]

export default function App() {
  const [showHomepage, setShowHomePage] = useState(false);

  const buttonLabel = (label) => {
    return(
      <View style= {{
        padding: 12
        
      }}>
        <Text style= {{
          color: COLORS.title,
          fontWeight: '600',
          fontSize: SIZES.h4,
        }}>
          {label}
        </Text>
      </View>
    )
  }

  if(!showHomepage) {
    return(
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return(
            <View style={{
              flex: 1,
              alignItems: 'center',
              padding: 15,
              paddingTop: 60,
              // backgroundColor: COLORS.bg,
            }}>
              <Image
                source={item.image}
                style={{
                  widtth: SIZES.width - 80,
                  height: 350,
                  marginTop: 55,
                
                }}
                resizeMode="contain"
              />
              <Text style={{
                fontWeight: 'bold',
                color: COLORS.title,
                fontSize: SIZES.h1,
                paddingTop: 10,
              }}>
                {item.title}
              </Text>
              <Text style={{
                textAlign: 'center',
                paddingTop: 30,
                padding: 10,
                color: COLORS.title,
              }}>
                {item.description}
              </Text>
            </View>
          )
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 30,
        }}
        showSkipButton
        renderNextButton = {() => buttonLabel("Next")}
        renderSkipButton = {() => buttonLabel("Skip")}
        renderDoneButton = {() => buttonLabel("Done")}
        onDone = {() => {
          setShowHomePage(true);
        }}
      />
    )
  }

  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.bg,
    }}
    >
      <Text style={{
                fontWeight: 'bold',
                color: COLORS.title,
                fontSize: SIZES.h1,
                padding: 20,
                textAlign: 'center',
              }}>Ready to Ekspres?</Text>

      <Text style={{
                textAlign: 'center',
                paddingTop: 10,
                padding: 10,
                color: COLORS.title,
              }}>Please choose an option:</Text>
    </View>
  )
}