import React, {Component} from 'react';
export default class ShareFunction extends React.Component {
    render() {
        return(
           <div>
             {this.props.render(true)}
           </div>
        )
    }
}