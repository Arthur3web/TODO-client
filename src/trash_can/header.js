import React, {Component, PropTypes} from 'react';

class Header extends Component {
    static propTypes={
        items: PropTypes.array.isRequired,
        isLoading: PropTypes.bool,
        submit: PropTypes.func,
        title: PropTypes.string.isRequired,
        type: this.PropTypes.oneOf(['news','photos']),
        user: PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number
        }),
        users: PropTypes.arrayOf(
            PropTypes.shape({
                name:PropTypes.string,
                age: PropTypes.number
            })
        )
    };
    
    render() {
        console.log('items', this.props.items);

        return (
            <div>
                {this.props.items.map((item,index)=>
                <a href={item.link} key={index}>{item.label}</a>
                )}
            </div>
        );
    }
}

export default Header;