import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

console.disableYellowBox = true

Reactotron.configure({
  name: "React Native Demo"
})

Reactotron.useReactNative({
  asyncStorage: false, // there are more options to the async storage.
  networking: { // optionally, you can turn it off with false.
    ignoreUrls: /symbolicate/
  },
  editor: false, // there are more options to editor
  errors: { veto: (stackFrame) => false }, // or turn it off with false
  overlay: false, // just turning off overlay
})
Reactotron.use(reactotronRedux())
Reactotron.use(sagaPlugin())
if (__DEV__) {
  
  Reactotron.connect();
  Reactotron.clear()
}

Reactotron.onCustomCommand('test', () => console.tron.log('This is an example'))

console.tron = Reactotron
