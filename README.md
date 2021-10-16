# Test App (React Native (Expo) App - October 2021)

Please use the following steps to generate a "Maximum Stack Call Size Exceeded" error.

- First, run the app in Expo Go app as is. It should work fine and display "Hello World" on your screen.
- Then edit the /src/actions/action-types.js file and comment out the first line i.e. "export const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';" then uncomment the rest of the file and save it. You should already be seeing the "Maximum Stack Call Size Exceeded" on your Expo Go screen.

## License
Private