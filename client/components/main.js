import react from 'react';

export default class main extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        {this.props.children}
      </div>
      )
  }

}