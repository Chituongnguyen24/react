import React from "react";
class Childcomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInput: ''
        };
    }
    
    handleInput = (event) => {
        this.setState({
            valueInput: event.target.value
        });
    }
    handleOnchangeInput = (event) => {
        this.setState({
            Name: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();//ngăn việc tải lại trang
        console.log(this.state)
    }

    render(){
        let { valueInput } = this.state;
        return (
            <>
               <form action="" 
                        onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text" 
                      value={this.state.Name}//gán giá trị mặc định
                        onChange={(event) =>this.handleOnchangeInput(event)} />
                <button>Submit</button>
            </form>

            </>
        );
    }
}
export default Childcomponent;