import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapercave.com%2Fharry-styles-concert-wallpapers&psig=AOvVaw3EHi463DcwAtneDFXqnbxP&ust=1721906190179000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjE9MjGv4cDFQAAAAAdAAAAABAE'}}
                style={styles.backgroundImage}
            >
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={styles.overlay}
                />
                <View style={styles.content}>
                    <Text style={styles.title}>RoundMusic</Text>
                    <Text style={styles.subtitle}>Find your favorite music</Text>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => navigation.navigate('NextScreen')}
                    >
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
    content: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#8a2be2',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default WelcomeScreen;
