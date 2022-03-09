import React,{Component} from 'react';
import {Text,View,StyleSheet,ImageBackground,Button} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.beberAgua = this.beberAgua.bind(this);
    this.state = {status:'Ruim',consumido:0,percentual:0};
  }

  beberAgua(){
    const State = this.state;
    //if(State.consumido==2000) return;

    State.consumido += 200;
    State.percentual += 10;

    if(State.status=='Ruim') State.status = 'TaBom';
    else if(State.status=='TaBom') State.status = 'Melhorou';
    else if(State.status=='Melhorou') State.status = 'BomTodo';
    else if(State.status=='BomTodo') State.status = 'Aquaman';
    else if(State.status=='Aquaman') State.status = 'Arlong';
    else if(State.status=='Arlong') State.status = 'Jinbei';
    else if(State.status=='Jinbei') State.status = 'Kokoro';
    else if(State.status=='Kokoro') State.status = 'Poseidon';

    this.setState(State);
  }

  render(){
    return(
      <View style={styles.body}>
      <ImageBackground source={require("./imagens/waterbg.png")} style={styles.imagebg}>

        <View style={styles.infoMenu}>
          <View style={styles.infoConsumo}>
            <Text style={styles.tituloConsumo}>Meta</Text>
            <Text style={styles.quantConsumo}>2000ML</Text>
          </View>

          <View style={styles.infoConsumo}>
            <Text style={styles.tituloConsumo}>Consumo</Text>
            <Text style={styles.quantConsumo}>{this.state.consumido+'ML'}</Text>
          </View>

          <View style={styles.infoConsumo}>
            <Text style={styles.tituloConsumo}>Status</Text>
            <Text style={styles.statusConsumo}>{this.state.status}</Text>
          </View>
          
        </View>
        
        <View style={styles.porcentagemConsumo}>
          <Text style={styles.porcentagemValor}>{this.state.percentual+'%'}</Text>
        </View>

        <View style={styles.areaBotaoConsumo}>
          <Button color="#1ad1ff" title="   Beber 200ML   " onPress={this.beberAgua}/>
        </View>

      </ImageBackground>  
      </View>
    );
  }
}

const colorList = {//backgroundColor:
  orange:'#ff794d',
  lilgreen:'#e6ffe6',
  blue:'#7094db',
  red:'#b30000',
  purple:'#c266ff',
  gold:'#e6e600',
  green:'#00b386',
  black:'#333333',
  lilgray:'#d3d3d3',
  darkblue:'#336699',
  green2:'#00cc99'
};


const styles = StyleSheet.create({
  body:{
    paddingTop:35,
    flex:1,
  },
  imagebg:{
    flex:1,
    width:null
  },
  infoMenu:{
    flex:1,
    marginTop:65,
    flexDirection:'row'

  },
  infoConsumo:{
    flex:1,
    alignItems:'center', 
  },
  tituloConsumo:{
    fontSize:18,
    color:colorList.darkblue
  },
  quantConsumo:{
    color:'black',
    fontWeight:'bold',
    fontSize:16.5
  },
  statusConsumo:{
    color:'red',
    fontWeight:'bold',
    fontSize:17.5
  },
  porcentagemConsumo:{
    //flex:1,
    //flex:0.5,
    height:180,
    marginBottom:40,
    flexDirection:'row',
    justifyContent:'center'
  },
  porcentagemValor:{
    fontSize:80,
    //textAlign:'center',
    color:'white'
  },
  areaBotaoConsumo:{
    flex:1,
    alignItems:'center',
    height:100,
    backgroundColor:'transparent',
    bottom:100,
  },
});