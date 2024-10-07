import React, { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, Button } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import HeartIcon from "./SVG/HeartIcon";
import Swiper from "react-native-swiper";
const App = () => {
  const [isFav, setIsFav] = useState(false);
  const jhumkaTypes = ['Antique', 'Zircon', 'Temple', 'Oxidised', 'Kundan'];
  const product = ['Neclace', 'Rings', 'Earring', 'Kada', 'Bracelet']


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView>
        <View >
          <Image source={require("../jewell/Images/one.png")} style={styles.image} />
          <Text style={styles.vib}>VIBE IN</Text>
          <Text style={styles.per}>Pearls</Text>
          <Text style={styles.ten}>Tendy  picks for your Vacay Style</Text>
          <Text style={styles.description}>
            Picture yourself basking in the sun's golden rays, sand between your toes, and
            laughter filling the air. Introducing our "Vibe in Pearls" Collection - Trendy
            Picks for Your Vacay Style!
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => { }}>
            <Text style={styles.buttonText}>Shop The Collection</Text>
          </TouchableOpacity>
          <View style={styles.container}>
            <Text style={styles.header}>Shop By Style</Text>
            <View style={styles.styleRow}>
              <View><Image source={require('../jewell/Images/two.png')} style={styles.styleImage} />
                <Text style={styles.styleText}>Gold</Text></View>
              <View><Image source={require('../jewell/Images/three.png')} style={styles.styleImage} />
                <Text style={styles.styleText}>Silver</Text></View>

              <View><Image source={require('../jewell/Images/four.png')} style={styles.styleImage} />
                <Text style={styles.styleText}>Rose Gold</Text></View>

              <View><Image source={require('../jewell/Images/five.png')} style={styles.styleImage} />
                <Text style={styles.styleText}>Modern</Text></View>


            </View>
            <View style={styles.styleRow}>

              <View><Image source={require('../jewell/Images/six.png')} style={styles.styleImage} />
                <Text style={styles.styleText}>Kundan</Text></View>
              <View><Image source={require('../jewell/Images/seven.png')} style={styles.styleImage} />
                <Text style={styles.styleText}>Zircon</Text></View>
              <View><Image source={require('../jewell/Images/eight.png')} style={styles.styleImage} />
                <Text style={styles.styleText}>Traditional</Text></View>
              <View><Image source={require('../jewell/Images/nine.png')} style={styles.styleImage} />
                <Text style={styles.styleText}>With Matils</Text></View>
            </View>
            <Text style={styles.header}>Gifts By Price</Text>
            <View style={styles.priceRow}>
              <Text style={styles.priceText}>Under ₹999</Text>
              <Text style={{ color: 'purple', fontSize: 20 }}>|</Text>
              <Text style={styles.priceText}>₹1000 - ₹1499</Text>
              <Text style={{ color: 'purple', fontSize: 20 }}>|</Text>
              <Text style={styles.priceText}>Above ₹1500</Text>
            </View>
          </View>
          <View>
            <Image source={require('../jewell/Images/ten.png')} style={styles.secimage} />
            <TouchableOpacity style={styles.sec}>
              <Text style={styles.sectex}>Shop The Look</Text>
              <Text style={styles.sectext}>Collection Name</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.thirdcontainer}>
            <Text style={styles.thirdheader}>Shop By Occasion</Text>
            <ScrollView horizontal contentContainerStyle={{}}>

              <View style={styles.thirdsection}>
                <Image source={require('../jewell/Images/eleven.png')} style={styles.thirdimage} />
                <Image source={require('../jewell/Images/twelve.png')} style={styles.thirdimage} />
                <Image source={require('../jewell/Images/eleven.png')} style={styles.thirdimage} />
                <Image source={require('../jewell/Images/twelve.png')} style={styles.thirdimage} />

              </View></ScrollView>
          </View>



          <View>
            <Text style={styles.fourheader}>   Pearl Earrings For You</Text>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
              <View style={styles.productCard}>
                <Image source={require('../jewell/Images/thirteen.png')} style={styles.fourimage} />
                {/* <TouchableOpacity
                onPress={() => setIsFav(!isFav)}
                style={styles.iconBox}
              >
                <HeartIcon isFav={isFav} />
              </TouchableOpacity> */}


                <Text style={styles.fourlabel}>Short Necklace 1</Text>
                <Text style={styles.fourprice}>₹1499</Text>
              </View>
              <View style={styles.productCard}>
                <Image source={require('../jewell/Images/fourteen.png')} style={styles.fourimage} />
                {/* <TouchableOpacity
                onPress={() => setIsFav(!isFav)}
                style={styles.iconBox}
              >
                <HeartIcon isFav={isFav} />
              </TouchableOpacity> */}
                <Text style={styles.fourlabel}>Short Necklace 1</Text>
                <Text style={styles.fourprice}>₹2999</Text>
              </View>
            </View>
          </View>

          <View style={styles.toproductCard}>
            <Image source={require('../jewell/Images/fifteen.png')} style={styles.toimage} />
            {/* <TouchableOpacity
                onPress={() => setIsFav(!isFav)}
                style={styles.iconBox}
              >
                <HeartIcon isFav={isFav} />
              </TouchableOpacity> */}
            <Text style={styles.tolabel}>Short Necklace 1</Text>
            <Text style={styles.toprice}>₹1249 <Text style={styles.over}>₹2999</Text> </Text>
          </View>

          <View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
              <View style={styles.productCard}>
                <Image source={require('../jewell/Images/sixteen.png')} style={styles.fourimage} />
                {/* <TouchableOpacity
                onPress={() => setIsFav(!isFav)}
                style={styles.iconBox}
              >
                <HeartIcon isFav={isFav} />
              </TouchableOpacity> */}


                <Text style={styles.fourlabel}>Short Necklace 1</Text>
                <Text style={styles.fourprice}>₹1499</Text>
              </View>
              <View style={styles.productCard}>
                <Image source={require('../jewell/Images/seventeen.png')} style={styles.fourimage} />
                {/* <TouchableOpacity
                onPress={() => setIsFav(!isFav)}
                style={styles.iconBox}
              >
                <HeartIcon isFav={isFav} />
              </TouchableOpacity> */}
                <Text style={styles.fourlabel}>Short Necklace 1</Text>
                <Text style={styles.fourprice}>₹2999</Text>
              </View>
            </View>
          </View>

          <View style={{ alignItems: 'center', margin: 10 }}>
            <TouchableOpacity style={styles.bu} onPress={() => { }}>
              <Text style={styles.bu1}>View All Pearl Earring</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontSize: 20, margin: 20, color: 'black', fontWeight: 'bold' }}>Classic Brides</Text>
            <Image source={require('../jewell/Images/eighteen.png')} style={styles.eight} />
          </View>

          <Image source={require('../jewell/Images/nineteen.png')} style={styles.nin} />
          <View style={styles.it}><TouchableOpacity style={styles.how} onPress={() => { }}>
            <Text style={styles.how1}>How it works</Text>
          </TouchableOpacity></View>

          <View>
            <Text style={styles.jhtitle}>Most Loved Jhumkas</Text>
            <View style={styles.jhContainer}>
              {
                jhumkaTypes.map((type, index) => (
                  <TouchableOpacity key={index} style={styles.jhButton}>
                    <Text style={styles.jhText}>{type}</Text>
                  </TouchableOpacity>
                ))}
            </View>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Image source={require('../jewell/Images/twenty.png')} style={styles.trad} />
            <Image source={require('../jewell/Images/twentyone.png')} style={styles.wed} />
          </View>

          <View>
            <Text style={styles.jhtitle}>Shop By Product</Text>
            <View style={styles.jhContainer}>
              {
                product.map((type, index) => (
                  <TouchableOpacity key={index} style={styles.jhButton}>
                    <Text style={styles.jhText}>{type}</Text>
                  </TouchableOpacity>
                ))}
            </View>
          </View>

          <ScrollView horizontal contentContainerStyle={{}}>
            <View>
              <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: 'center' }}>
                <View style={styles.productCard}>
                  <Image source={require('../jewell/Images/twentytwo.png')} style={styles.fourimage} />
                  <Text style={styles.fourlabel}>Short Necklace 1
                  </Text>
                  <Text style={styles.fourprice}>₹12399 <Text style={{ textDecorationLine: 'line-through', color: 'gray', fontSize: 14, }}> ₹143499</Text>
                    <Text style={{ backgroundColor: 'green', color: "white" }}> 40% off</Text>
                  </Text>
                  <Text>
                    <Text style={{ backgroundColor: 'black', color: 'silver' }}>92.5 Silver </Text><Text style={{ color: 'green' }}>Big Saves ₹32400</Text></Text>
                </View>
                <View style={styles.productCard}>
                  <Image source={require('../jewell/Images/twentytwo.png')} style={styles.fourimage} />
                  <Text style={styles.fourlabel}>Short Necklace 1</Text>
                  <Text style={styles.fourprice}>₹12399 <Text style={{ textDecorationLine: 'line-through', color: 'gray', fontSize: 14, }}> ₹143499</Text>
                    <Text style={{ backgroundColor: 'green', color: "white" }}> 40% off</Text></Text>
                  <Text>
                    <Text style={{ backgroundColor: 'black', color: 'silver' }}>92.5 Silver </Text><Text style={{ color: 'green' }}>Big Saves ₹32400</Text></Text>
                </View>
                <View style={styles.productCard}>
                  <Image source={require('../jewell/Images/twentytwo.png')} style={styles.fourimage} />
                  <Text style={styles.fourlabel}>Short Necklace 1</Text>
                  <Text style={styles.fourprice}>₹12399 <Text style={{ textDecorationLine: 'line-through', color: 'gray', fontSize: 14, }}> ₹143499</Text>
                    <Text style={{ backgroundColor: 'green', color: "white" }}> 40% off</Text></Text>
                  <Text>
                    <Text style={{ backgroundColor: 'black', color: 'silver' }}>92.5 Silver </Text><Text style={{ color: 'green' }}>Big Saves ₹32400</Text></Text>
                </View>
                <View style={styles.productCard}>
                  <Image source={require('../jewell/Images/twentytwo.png')} style={styles.fourimage} />
                  <Text style={styles.fourlabel}>Short Necklace 1</Text>
                  <Text style={styles.fourprice}>₹12399 <Text style={{ textDecorationLine: 'line-through', color: 'gray', fontSize: 14, }}> ₹143499</Text>
                    <Text style={{ backgroundColor: 'green', color: "white" }}> 40% off</Text></Text>
                  <Text>
                    <Text style={{ backgroundColor: 'black', color: 'silver' }}>92.5 Silver </Text><Text style={{ color: 'green' }}>Big Saves ₹32400</Text></Text>
                </View>
              </View>
            </View>

          </ScrollView>

          <View>
            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', margin: 8 }}>Customer Review</Text>
            <View style={{ flex: 1, flexDirection: "columb", justifyContent: "space-around", alignItems: 'center', }}>
              <Image source={require('../jewell/Images/twentythree.png')} style={styles.fimage} />
              <Text style={styles.frating}>★★★★★</Text>
              <Text style={{ textAlign: 'center', margin: 5, padding: 20 }}>"Awesome this ear rings, too big,
                wear to ears too big, thank you for kushal's fashion"</Text>
            </View>
          </View>

          <Swiper style={{ height: 200 }} autoplay={true} >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../jewell/Images/two.png')} style={{ width: 200, height: 200 }} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../jewell/Images/three.png')} style={{ width: 200, height: 200 }} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../jewell/Images/four.png')} style={{ width: 200, height: 200 }} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../jewell/Images/five.png')} style={{ width: 200, height: 200 }} />
            </View>


          </Swiper>

        </View>
      </ScrollView>
    </GestureHandlerRootView>
  )
};


const styles = StyleSheet.create({

  image: {
    width: 430,
    height: 500,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500'
  },
  button: {
    position: 'relative',
    top: -329,
    borderWidth: 2,
    borderColor: 'white',
    padding: 15,
    borderRadius: 5,
    height: 46,
    width: 190,
    left: 120,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  vib: {
    marginTop: 20,
    textAlign: 'center'
  },
  per: {
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'sans-serif',
    fontSize: 50,
    left: 140,
  },
  ten: {
    fontSize: 10,
    left: 140,
    marginBottom: 10
  },
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  styleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 20,
  },
  styleImage: {
    borderWidth: 4,
    borderColor: 'red',
    borderRadius: 50,
    width: 90,
    height: 90,
  },
  styleText: {
    alignItems:'center',
    textAlign:'center',
    fontSize: 14,
  },
  priceRow: {
    height: 40,
    borderColor: 'purple',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
  },
  priceText: {
    fontSize: 18,
    textAlign: 'center',
    padding: 6
  },
  secimage: {
    width: '100%',
    height: 450,
    resizeMode: 'cover'
  },
  sectex: {
    fontSize: 18,
    color: 'white',

  },
  sectext: {
    color: 'white',
  },
  sec: {
    position: 'relative',
    bottom: 58,
  },
  thirdcontainer: {
    flex: 1,
    padding: 20,
  },
  thirdheader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,

  },
  thirdsection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  thirdimage: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  fourheader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,

  },
  productCard: {
    alignItems: 'center',
    marginBottom: 20,
  },
  fourimage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  heartButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'transparent',
    padding: 5,
  },
  heartButtonText: {
    fontSize: 20,
    color: 'red',
  },
  fourlabel: {
    fontSize: 16,
    marginTop: 10,
  },
  fourprice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  iconBox: {
    backgroundColor: "#fff",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,

    }
  },
  toproductCard: {
    // alignItems: 'center',
    margin: 5,
  },
  toimage: {
    width: 400,
    height: 450,
    borderRadius: 10,
  },
  tolabel: {
    fontSize: 16,
    marginTop: 10,
  },
  toprice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  over: {
    textDecorationLine: "line-through",
    fontWeight: '300'
  },
  bu: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: 'center',
    width: 200,
  },
  bu1: {
    fontSize: 16,
    color: 'black',
  },
  eight: {
    height: 450,
    width: 420,
    resizeMode: 'cover',
    alignItems: 'center',
    marginBottom: 20,
  },
  nin: {
    height: 300,
    resizeMode: 'cover',
    width: 400,
  },
  how: {
    borderWidth: 2,
    height: 38,
    backgroundColor: 'red',
    width: 180,
    borderRadius: 15,
    alignItems: 'center',
    padding: 5
  },
  how1: {
    color: 'white'
  },
  it: {
    alignItems: 'center',
    position: 'relative',
    bottom: 50
  },
  jhtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    margin: 8,
  },
  jhContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  jhButton: {
    borderColor: 'black',
    borderRadius: 4,
    padding: 8,
    borderWidth: 1,
    margin: 5
  },
  jhText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
  trad: {
    height: 500,
    width: 410,
    resizeMode: 'cover',
    margin: 10
  },
  wed: {
    height: 200,
    width: 400,
    margin: 10,
  },
  fimage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  frating: {
    fontSize: 20,
    marginBottom: 5,
  },



});

export default App;
