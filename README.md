Home Assistant prototype in React Native
===

This is a prototype of Home Assistant built in React Native. As backend it uses [Home Assistant JS](https://github.com/balloob/home-assistant-js) to talk to a local instance of [Home Assistant](https://github.com/balloob/home-assistant). It is currently able to:

 * Connect to a local running passwordless Home Assistant instance
 * Show the state of the different entities in your house
 * Control entities that can be toggled (lights, switches)

Running this prototype requires a local instance of Home Assistant to be up and running:

```bash
git clone --recursive https://github.com/balloob/home-assistant.git
cd home-assistant
pip3 install -r requirements.txt
python3 -m homeassistant --demo-mode
```

After that, open the XCode project file with XCode and press run.

![screenshot](https://raw.github.com/balloob/home-assistant-react-native-ios/master/screenshot.png)
