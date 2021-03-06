import React from 'react';
import { connect } from 'react-redux';
import {
  Image,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import ConnectButton from './ConnectButton';
import RequestSentButton from './RequestSentButton';
import ConfirmConnectButton from './ConfirmConnectButton';

class ContactItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePress = () => {
    this.props.navigation.navigate('ContactsProfile', this.props)
  }

  connectButton(id) {
    if (!this.props.not_friends[id]) {
      if (!this.props.friends[id]) {
        if (this.props.requested_you[id]) {
          return <ConfirmConnectButton id={this.props.id} />
        }
        if (this.props.you_requested[id]) {
          return <RequestSentButton id={this.props.id} />
        }
        return <ConnectButton gender={this.props.gender} id={this.props.id} />
      }
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={this.handlePress}>
          <Image source={{ uri: this.props.imageUrl }} style={styles.profileImage} />
          <Text style={styles.name}>{this.props.firstName} {this.props.lastName}</Text>
        </TouchableOpacity>
        {this.connectButton(this.props.id)}
      </View>
    )

  }
}

ContactItem.propTypes = {
  id: PropTypes.number,
  gender: PropTypes.number,
  imageUrl: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

const mapStateToProps = ({ connection }) => ({
  connections: connection.entities,
  friends: connection.entities.friends,
  not_friends: connection.entities.not_friends,
  requested_you: connection.entities.requested_you,
  you_requested: connection.entities.you_requested,
});

const mapDispatchToProps = dispatch => ({
  createConnection: (connection) => dispatch(createConnection(connection)),
  deleteConnection: (id) => dispatch(deleteConnection(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactItem)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'grey',
    borderBottomWidth: .5,
    marginTop: 10,
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 5,
  }
});
