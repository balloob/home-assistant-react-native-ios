'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  SwitchIOS,
} = React;

var StateList = require('./components/state_list');

var ha = require('./transpiled/homeassistant');
ha.authActions.validate('no_pass_set', {host: 'http://localhost:8123'});

var HomeAssistant = React.createClass({
  getInitialState: function() {
    return {
      statesDataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  componentDidMount: function() {
    ha.syncStore.addChangeListener(this.syncStoreChanged);
  },

  syncStoreChanged: function() {
    if (ha.syncStore.initialLoadDone) {
      ha.syncStore.removeChangeListener(this.syncStoreChanged);

      this.setState({
        loaded: true,
      });

      ha.stateStore.addChangeListener(this.stateStoreChanged);
      this.stateStoreChanged();
    }
  },

  stateStoreChanged: function() {
    var filter = ['group', 'script', 'scene', 'a', 'configurator'];
    var states = ha.stateStore.all.filter(function(state) {
      return filter.indexOf(state.domain) === -1;
    }).toArray();

    this.setState({
      statesDataSource: this.state.statesDataSource.cloneWithRows(states),
    });
  },

  toggle: function(state) {
    if (state.state == 'on') {
      ha.serviceActions.callTurnOff(state.entityId);
    } else {
      ha.serviceActions.callTurnOn(state.entityId);
    }
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Home Assistant</Text>
        <StateList
          handleToggle={this.toggle}
          loaded={this.state.loaded}
          statesDataSource={this.state.statesDataSource} />
      </View>);
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    containerBackgroundColor: '#03a9f4',
    padding: 10,
    paddingTop: 20,
  },
})

AppRegistry.registerComponent('home_assistant_react_native', () => HomeAssistant);
