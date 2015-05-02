'use strict';

var React = require('react-native');

var {
  AppRegistry,
  Image,
  ScrollView,
  ListView,
  StyleSheet,
  Text,
  View,
  SwitchIOS,
} = React;

var moment = require('moment');

String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

var StateList = React.createClass({

  render: function() {
    if (!this.props.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.props.statesDataSource}
        renderRow={this.renderState}
        style={styles.listView}
      />
    );
  },

  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Loading Home Assistant...
        </Text>
      </View>
    );
  },

  renderState: function(state) {
    var stateDisplay;

    if (state.canToggle) {
      stateDisplay = (
        <SwitchIOS
          value={state.state == 'on'}
          onValueChange={this.props.handleToggle.bind(null, state)} />);
    } else {
      stateDisplay = <Text style={styles.stateText}>{state.stateDisplay}</Text>;
    }

    return (
      <View>
        <View style={styles.stateRow}>
          <View style={styles.stateInfo}>
            <Text style={styles.title}>{state.entityDisplay.capitalize()}</Text>
            <Text style={styles.domain}>{state.domain} - {moment(state.lastChangedAsDate).fromNow()}</Text>
          </View>
          {stateDisplay}
        </View>
        <View style={styles.separator} />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  listView: {
    backgroundColor: '#FFF',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  stateRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  stateInfo: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
  },
  domain: {
    fontSize: 12,
  },
  stateText: {
    fontSize: 24,
  }
});

module.exports = StateList;