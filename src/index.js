import React, { Component } from 'react';
import { 
	View,
	Text,
	StyleSheet,
	Animated,
	TouchableOpacity
} from 'react-native';
import { RuuiProvider, Tooltip } from 'react-universal-ui';
import Slider from '@react-native-community/slider';

class App extends Component {
	constructor(props) {
        super(props)
		this.state = {
			value: 400
		}
        this.square = new Animated.ValueXY({ x: 10, y: 40 })
    }

    moveSquare = (locationX, locationY) => {
        Animated.timing(this.square, {
            toValue: {
				x: locationX,
				y: locationY
			},
            duration: this.state.value
        }).start()
	}
	
	handlePress = (evt) => {
		this.moveSquare(evt.nativeEvent.locationX, evt.nativeEvent.locationY)
	}

    render() {
        return (
			<View style={styles.container}>
				<TouchableOpacity
					style={{ flex: 9 }}
					onPress={(evt) => this.handlePress(evt)}
				>
					<Animated.View style={[styles.square, this.square.getLayout()]}/>
				</TouchableOpacity>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
					<Text style={{ marginBottom: 5 }}>
						{'Speed: '}{this.state.value}
					</Text>
					<Slider
						style={{ width: 300, height: 10 }}
						maximumValue={0}
						maximumValue={3000}
						onValueChange={value => this.setState({ value: Math.round(value) })}
						value={this.state.value}
					/>
				</View>
			</View>
        );
    }
}

function AppContainer(props) {
	return <RuuiProvider>
		<App/>

		<Tooltip/>
	</RuuiProvider>;
}

export default AppContainer;

const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    square: {
        width: 50,
        height: 50,
		backgroundColor: 'skyblue'
    },
});
