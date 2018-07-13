import React, { Component } from 'react';

import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';

import { Actions } from 'react-native-router-flux'

import LinearGradient from 'react-native-linear-gradient';


import NavBar1 from '../../components/NavBars/NavBar1'
// import FlatList1 from '../components/Body/FlatList1';

const width = Dimensions.get('window').width



class FlatView extends Component {

    render() {
        const { e } = this.props
        return (
            <TouchableOpacity activeOpacity={0.9} onPress={() => {
                Actions.city({
                    dataPerRow: e
                })
            }}>
                <View style={styles.flatView}>
                    <Image
                        source={e.src}
                        style={{ marginLeft: 16, marginRight: 16, marginTop: 16, height: 160, width: width - 32, borderRadius: 10 }}
                        resizeMode='cover'
                    />
                    <LinearGradient
                        colors={['#212121', 'transparent', 'transparent', '#212121']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        locations={[0, 0.3, 0.7, 1]}
                        style={{ position: 'absolute', top: 16, left: 16, right: 16, bottom: 0, borderRadius: 10 }}
                    >
                    </LinearGradient>
                    <View style={{ height: 80, position: 'absolute', top: 0, right: 0, left: 0, marginLeft: 30, marginTop: 16 }}>
                        <Text style={{ flex: 1, paddingTop: 15, fontSize: 16, color: '#CCCCCC' }}>{e.country}</Text>
                        <Text style={{ flex: 1, fontSize: 25, color: 'white', fontWeight: 'bold' }}>{e.city}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default class Cities extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavBar1 name='Cities' />
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) =>
                            <FlatView e={item} {...this.props} />

                        }
                        keyExtractor={(item) => String(item.id)}
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    flatView: {
        height: 176,
        width: width,
        borderRadius: 10
    }
})


const data = [
    {
        id: 1,
        country: "FRANCE",
        city: "Paris",
        src: require('../../assets/image/FRANCE.png'),
        des: 'Paris, France’s capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.',
        travelImage: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-132986402_medium.jpg?fit=crop&w=1920&h=832',
        destinationTravel: "MUSEUM",
        nameDestination: "Galleria Borghese",
        restaurant: [
            {
                name: "Gusteau’s",
                country: "France",
                numberReview: "129 reviews",
                image: "https://thehungryguest.com/wp-content/uploads/2018/03/food_and_drink_masthead2.jpg",
            },
            {
                name: "Flo’s V8 Cafe",
                country: "France",
                numberReview: "167 reviews",
                image: "http://wabstalk.com/wp-content/uploads/2018/06/Food-Drink.jpg",
            },
            {
                name: "Pizza Planet",
                country: "France",
                numberReview: "89 reviews",
                image: "http://restaurantambasada.com/wp-content/uploads/2015/03/bg-food-drink.jpg",
            },
            {
                name: "Harryhausen’s",
                country: "France",
                numberReview: "156 reviews",
                image: "http://www.bobbyrica.com/wp-content/uploads/2012/04/cigar-pairings.jpg",
            },
            {
                name: "The Continental, Naples, Fla",
                country: "France",
                numberReview: "109 reviews",
                image: "https://www.the-italian-villa.co.uk/wp-content/uploads/2015/08/post-image13.jpg",
            }

        ],

        hotels: [
            {
                name: "Our Pick",
                type: "Hôtel Grandiose",
                numberReview: "129 reviews",
                image: require('../../assets/image/bedroom.jpg'),
            },
            {
                name: "Grand Paris Hotel",
                type: "Luxury",
                numberReview: "129 reviews",
                image: "https://mommypoints.boardingarea.com/wp-content/uploads/2018/01/Intercontinental-Paris.jpg",
            },
            {
                name: "Maison Bernadette",
                type: "Kitch",
                numberReview: "167 reviews",
                image: "https://t-ec.bstatic.com/images/hotel/max1024x768/130/130126047.jpg",
            },
            
        ]
    },
    {
        id: 2,
        country: "ITALY",
        city: "Venice",
        src: require('../../assets/image/ITALY1.jpg'),
        des: 'Paris, France’s capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.',
        travelImage: "https://lonelyplanetstatic.imgix.net/marketing/2018/BIT/article-images/cities/7_matera_italy_GettyImages-479947774.jpg?q=40&auto=enhance&fit=crop&w=964&h=564",
        destinationTravel: "TRAVEL",
        nameDestination: "Matera",
        restaurant: [
            {
                name: "Gusteau’s",
                country: "France",
                numberReview: "129 reviews",
                image: "https://thehungryguest.com/wp-content/uploads/2018/03/food_and_drink_masthead2.jpg",
            },
            {
                name: "Flo’s V8 Cafe",
                country: "France",
                numberReview: "167 reviews",
                image: "http://wabstalk.com/wp-content/uploads/2018/06/Food-Drink.jpg",
            },
            {
                name: "Pizza Planet",
                country: "France",
                numberReview: "89 reviews",
                image: "http://restaurantambasada.com/wp-content/uploads/2015/03/bg-food-drink.jpg",
            },
            {
                name: "Harryhausen’s",
                country: "France",
                numberReview: "156 reviews",
                image: "http://www.bobbyrica.com/wp-content/uploads/2012/04/cigar-pairings.jpg",
            },
            {
                name: "The Continental, Naples, Fla",
                country: "France",
                numberReview: "109 reviews",
                image: "https://www.the-italian-villa.co.uk/wp-content/uploads/2015/08/post-image13.jpg",
            }
        ],
        hotels: [
            {
                name: "Our Pick",
                type: "Hôtel Grandiose",
                numberReview: "129 reviews",
                image: require('../../assets/image/bedroom.jpg'),
            },
            {
                name: "Grand Paris Hotel",
                type: "Luxury",
                numberReview: "129 reviews",
                image: "https://mommypoints.boardingarea.com/wp-content/uploads/2018/01/Intercontinental-Paris.jpg",
            },
            {
                name: "Maison Bernadette",
                type: "Kitch",
                numberReview: "167 reviews",
                image: "https://media.remax-quebec.com/img/fiche/0070/m26899355-cui09-01.jpg",
            },
            
        ]
        
    },
    {
        id: 3,
        country: "AUSTRALIA",
        city: "Sydney",
        src: require('../../assets/image/sydney.png'),
        des: 'Paris, France’s capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.',
        travelImage: "https://media.timeout.com/images/105172846/1372/772/image.jpg",
        destinationTravel: "SPA HOTEL",
        nameDestination: "The Star",
        restaurant: [
            {
                name: "Gusteau’s",
                country: "France",
                numberReview: "129 reviews",
                image: "https://thehungryguest.com/wp-content/uploads/2018/03/food_and_drink_masthead2.jpg",
            },
            {
                name: "Flo’s V8 Cafe",
                country: "France",
                numberReview: "167 reviews",
                image: "http://wabstalk.com/wp-content/uploads/2018/06/Food-Drink.jpg",
            },
            {
                name: "Pizza Planet",
                country: "France",
                numberReview: "89 reviews",
                image: "http://restaurantambasada.com/wp-content/uploads/2015/03/bg-food-drink.jpg",
            },
            {
                name: "Harryhausen’s",
                country: "France",
                numberReview: "156 reviews",
                image: "http://www.bobbyrica.com/wp-content/uploads/2012/04/cigar-pairings.jpg",
            },
            {
                name: "The Continental, Naples, Fla",
                country: "France",
                numberReview: "109 reviews",
                image: "https://www.the-italian-villa.co.uk/wp-content/uploads/2015/08/post-image13.jpg",
            }
        ],
        hotels: [
            {
                name: "Our Pick",
                type: "Hôtel Grandiose",
                numberReview: "129 reviews",
                image: require('../../assets/image/bedroom.jpg'),
            },
            {
                name: "Grand Paris Hotel",
                type: "Luxury",
                numberReview: "129 reviews",
                image: "https://mommypoints.boardingarea.com/wp-content/uploads/2018/01/Intercontinental-Paris.jpg",
            },
            {
                name: "Maison Bernadette",
                type: "Kitch",
                numberReview: "167 reviews",
                image: "https://media.remax-quebec.com/img/fiche/0070/m26899355-cui09-01.jpg",
            },
            
        ]
    },
    {
        id: 4,
        country: "USA",
        city: "Los Angeles",
        src: require('../../assets/image/paris.jpg'),
        des: 'Paris, France’s capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.',
        travelImage: "https://lonelyplanetimages.imgix.net/a/g/hi/t/e169d0c6394f2e1f46eea3f653f2b7b4-central-park.jpg?fit=crop&w=1920&h=832",
        destinationTravel: "CENTRAL PARK",
        nameDestination: "Great Lawn",
        restaurant: [
            {
                name: "Gusteau’s",
                country: "France",
                numberReview: "129 reviews",
                image: "https://thehungryguest.com/wp-content/uploads/2018/03/food_and_drink_masthead2.jpg",
            },
            {
                name: "Flo’s V8 Cafe",
                country: "France",
                numberReview: "167 reviews",
                image: "http://wabstalk.com/wp-content/uploads/2018/06/Food-Drink.jpg",
            },
            {
                name: "Pizza Planet",
                country: "France",
                numberReview: "89 reviews",
                image: "http://restaurantambasada.com/wp-content/uploads/2015/03/bg-food-drink.jpg",
            },
            {
                name: "Harryhausen’s",
                country: "France",
                numberReview: "156 reviews",
                image: "http://www.bobbyrica.com/wp-content/uploads/2012/04/cigar-pairings.jpg",
            },
            {
                name: "The Continental, Naples, Fla",
                country: "France",
                numberReview: "109 reviews",
                image: "https://www.the-italian-villa.co.uk/wp-content/uploads/2015/08/post-image13.jpg",
            }
        ],
        hotels: [
            {
                name: "Our Pick",
                type: "Hôtel Grandiose",
                numberReview: "129 reviews",
                image: require('../../assets/image/bedroom.jpg'),
            },
            {
                name: "Grand Paris Hotel",
                type: "Luxury",
                numberReview: "129 reviews",
                image: "https://mommypoints.boardingarea.com/wp-content/uploads/2018/01/Intercontinental-Paris.jpg",
            },
            {
                name: "Maison Bernadette",
                type: "Kitch",
                numberReview: "167 reviews",
                image: "https://media.remax-quebec.com/img/fiche/0070/m26899355-cui09-01.jpg",
            },
            
        ]
    },
    {
        id: 5,
        country: "VIETNAM",
        city: "Ho Chi Minh",
        src: require('../../assets/image/HCM_city.jpg'),
        des: 'Paris, France’s capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.',
        travelImage: "https://www.vietnamuniquetours.com/wp-content/uploads/2013/12/ho-chi-minh-city-1.jpg",
        destinationTravel: "NATIONAL PARK",
        nameDestination: "Saguaro",
        restaurant: [
            {
                name: "Gusteau’s",
                country: "France",
                numberReview: "129 reviews",
                image: "https://thehungryguest.com/wp-content/uploads/2018/03/food_and_drink_masthead2.jpg",
            },
            {
                name: "Flo’s V8 Cafe",
                country: "France",
                numberReview: "167 reviews",
                image: "http://wabstalk.com/wp-content/uploads/2018/06/Food-Drink.jpg",
            },
            {
                name: "Pizza Planet",
                country: "France",
                numberReview: "89 reviews",
                image: "http://restaurantambasada.com/wp-content/uploads/2015/03/bg-food-drink.jpg",
            },
            {
                name: "Harryhausen’s",
                country: "France",
                numberReview: "156 reviews",
                image: "http://www.bobbyrica.com/wp-content/uploads/2012/04/cigar-pairings.jpg",
            },
            {
                name: "The Continental, Naples, Fla",
                country: "France",
                numberReview: "109 reviews",
                image: "https://www.the-italian-villa.co.uk/wp-content/uploads/2015/08/post-image13.jpg",
            }
        ],
        hotels: [
            {
                name: "Our Pick",
                type: "Hôtel Grandiose",
                numberReview: "129 reviews",
                image: require('../../assets/image/bedroom.jpg'),
            },
            {
                name: "Grand Paris Hotel",
                type: "Luxury",
                numberReview: "129 reviews",
                image: "https://mommypoints.boardingarea.com/wp-content/uploads/2018/01/Intercontinental-Paris.jpg",
            },
            {
                name: "Maison Bernadette",
                type: "Kitch",
                numberReview: "167 reviews",
                image: "https://media.remax-quebec.com/img/fiche/0070/m26899355-cui09-01.jpg",
            },
            
        ]
    },
]