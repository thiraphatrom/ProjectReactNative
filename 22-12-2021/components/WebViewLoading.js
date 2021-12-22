import React,{ useState } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    ActivityIndicator, 
    ActivityIndicatorBase
} from 'react-native'
import WebView from 'react-native-webview';

const ActivityIndicatorElement = ()=> {
    return(
        <View style = {styles.activityIndicatorStyle}>
            <ActivityIndicator
                color = '#009688'
                size = 'large'
            />
        </View>
    );
}

const WebViewLoading = () => {

    const [visible, setVisible] = useState(false);

    return (
        <SafeAreaView style = {{flex: 1}}> 
            <View style = {styles.container}>
                <WebView
                    style = {{flex: 1}}
                    //Loading URL
                    source = {{uri:'https://it.tni.ac.th'}}
                    //Enable JavaScript Support
                    javaScriptEnabled = {true}
                    onLoadStart = {()=>setVisible(true)}
                    onLoadEnd = {()=>setVisible(false)}
                />
                {//เรียกใช้ Function ของ JSX ถ้า visible เป็นจริงทำ ActivityIndicatorElement 
                    visible?<ActivityIndicatorElement/>:null
                }
            </View>
        </SafeAreaView>
    )
}

export default WebViewLoading

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#F5FCFF',
        flex: 1
    },
    activityIndicatorStyle: {
        flex: 1,
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center'
    }
})
