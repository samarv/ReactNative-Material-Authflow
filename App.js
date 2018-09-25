import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Card, Colors,Title, TextInput, Text,Button,Paragraph, Caption, Headline, Subheading} from 'react-native-paper';


export default class App extends React.Component {
  state = {
    text: '',
    email: '',
    name:'',
    password: '',
    emailIn: false,
    onSignup: true
  };

  confirmEmail = () => {
    console.log(this.state.email)
    this.setState({emailIn: true})
  }

  unConfirmEmail = () => {
    this.setState({emailIn: false})
  }

  gotoSignup = () => {
    this.setState({onSignup: true})
  }

  gotoSignin = () => {
    this.setState({onSignup: false})
  }

  render() {
    if(this.state.onSignup){
      return(
        <View style={styles.root}>
          <Card style={styles.container}>
            <View style={styles.title}>
              <Headline style={{alignSelf:'center',color: '#175ae2', }}> 
                App Name 
              </Headline>
              <Text style={styles.midHeading}>
                Sign up
              </Text>
              <Caption style={{alignSelf:'center'}} onPress={this.unConfirmEmail}>
                    Some description of the app
              </Caption>
            </View>

            <View style={styles.title}>
              <TextInput
                label='Full name'
                autoFocus= {true}
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
              />
            </View>

             <View style={styles.title}>
              <TextInput
                label='Email'
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
            </View>

            <View style={styles.title}>
                    <TextInput
                      label='Password'
                      type='password'
                      value={this.state.password}
                      onChangeText={password => this.setState({ password })}
                    />
            </View>

            <View style={styles.qbutton}>
              <View style={[{justifyContent:'center'}]}>
                <Button flat compact={true} color='#175ae2' onPress={this.gotoSignin}>
                  Sign In instead
                </Button>
              </View>
              <View style={[{justifyContent:'center'}]}>
                <Button raised color='#175ae2' onPress={() => console.log('Pressed')}>
                  Next
                </Button>
              </View>
            </View>
          </Card>
        </View>
      )
    }
    else{
      return (
        <View style={styles.root}>
          <Card style={styles.container}>
            <View style={styles.title}>
              <Headline style={{alignSelf:'center',color: '#175ae2', }}> 
                Name 
              </Headline>
              <Text style={styles.midHeading}>
                {
                  this.state.emailIn 
                  ?
                    "Hi," 
                  : 
                    "Sign In"
                }
              </Text>
                {
                  this.state.emailIn 
                  ?
                    <Caption style={{alignSelf:'center',color: '#175ae2', }} onPress={this.unConfirmEmail}>
                      {"<--  " + this.state.email}
                    </Caption>
                  : 
                  <Caption style={{alignSelf:'center'}} onPress={this.unConfirmEmail}>
                    some description of your app
                  </Caption>
                }
              {/* idk, what will work this caption or that heading, both seem useful. rather than me guessing one of these
              it's better to AB TEST. and maximise the number of test we
              <Caption style={{alignSelf:'center'}}>
                Sign In some description of your app!
              </Caption> */}
            </View>
            {
              this.state.emailIn 
              ? 
                <View style={styles.title}>
                    <TextInput
                      label='Enter your Password'
                      type='password'
                      autoFocus= {true}
                      value={this.state.password}
                      onChangeText={password => this.setState({ password })}
                    />
                </View>
              :
                <View style={styles.title}>
                    <TextInput
                      label='Email'
                      autoFocus= {true}
                      value={this.state.email}
                      onChangeText={email => this.setState({ email })}
                    />
                </View>
            }
            <View style={styles.qbutton}>
              <View style={[{justifyContent:'center'}]}>
                {
                  this.state.emailIn 
                  ?
                    <Button flat color='#175ae2' onPress={() => console.log('forgot password Pressed')}>
                      Forgot password?
                    </Button>
                    
                  :
                    <Button flat color='#175ae2' onPress={this.gotoSignup}>
                      Create account
                    </Button>
                }
                
              </View>
              <View style={[{justifyContent:'center'}]}>
              {
                  this.state.emailIn 
                  ?
                    <Button raised color='#175ae2' onPress={() => console.log('Pressed')}>
                      Next
                    </Button>
                    
                  :
                    <Button raised color='#175ae2' onPress={this.confirmEmail}>
                      Next
                    </Button>
                }
                
              </View>
            </View>
          </Card>
          
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent:'center',
    
  },
  container:{
    flex:1/2,
    margin:30,
    padding:10,
  },
  title:{
    flex: 1,
    padding:10,
    justifyContent:'center',
   
  },
  midHeading:{
    alignSelf:'center',
    fontSize: 19,
    fontWeight: '300',
    marginTop:5
  },
  qbutton:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingTop:10,
  },

  vtest:{
    borderRadius:10,
    borderWidth: 0.5,
    borderColor: "red"
  }
});
