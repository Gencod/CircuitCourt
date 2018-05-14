import React, { Component } from 'react';
import { Modal } from 'antd';
import '../css/Header.css';
import { Divider } from 'antd';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;


class Header extends Component {
	state={visible: false, type: 'signin', title: 'Connexion à mon compte'}

	componentWillMount(){
		this.switchModal = this.switchModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
		this.showModal = this.showModal.bind(this);
		this.submit = this.submit.bind(this);
	}
	switchModal(){
		if(this.state.type === 'signin'){
			this.setState({type: 'signup', title:'Inscription'})
		}else{
			this.setState({type: 'signin', title:'Connexion à mon compte'})
		}
	}
	hideModal(){
		this.setState({visible: false});
		console.log('hide')
	}
	showModal(){
		this.setState({visible: true});
	}
	submit(e){
		e.preventDefault();
    this.props.form.validateFields((err, values) => {
			
      if (this.state.type === 'signin' && !err.inUuserName && !err.inPassword) {
				console.log('Connexion received values of form: ', values);
				this.setState({visible: false});
			}
			else if(this.state.type === 'signup' && !err.upUserName && !err.upPassword && !err.upPasswordC) {
				console.log('inscription received values of form: ', values);
				this.setState({visible: false});
			}
			else{
				console.log(err);
			}
    });
	}
  render() {
		const { getFieldDecorator } = this.props.form;
    return (
        <div className="header">
          <div className="wrapper">
            <div className="sitename">
							<Icon type="environment" className="logo" />
							CircuitCourt
            </div>
            <div className="sign" onClick={this.showModal}>
              Connexion / Inscription
            </div>
          </div>
          <Modal
            title={this.state.title}
            wrapClassName="vertical-center-modal"
						visible={this.state.visible}
            onOk={this.submit}
						onCancel={this.hideModal}
						okText="Soumettre"
						cancelText="Annuler"
						className="modal"
            >
							{this.state.type === 'signin' ? (
								<div>
									<Form className="signin-form">
										<FormItem
											label="Pseudo"
										>
											{getFieldDecorator('inUserName', {
												rules: [{ required: true, message: 'Renseignez votre pseudo' }],
											})(
												<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Pseudo" />
											)}
										</FormItem>
										<FormItem
											label="Mot de passe"
										>
											{getFieldDecorator('inPassword', {
												rules: [{ required: true, message: 'Renseignez votre mot de passe' }],
											})(
												<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Mot de passe" />
											)}
										</FormItem>
										<FormItem>
											{/* {getFieldDecorator('remember', {
												valuePropName: 'checked',
												initialValue: true,
											})(
												<Checkbox>Remember me</Checkbox>
											)} */}
											{/* <a className="login-form-forgot" href="">Forgot password</a> */}
											
										</FormItem>
									</Form>
									<Divider>Ou</Divider>
									<div className="switchModal" onClick={this.switchModal}>Je souhaite m'inscrire</div>
								</div>
							) : (
								<div>
									<Form className="signup-form">
										<FormItem
											label="Pseudo"
										>
											{getFieldDecorator('upUserName', {
												rules: [{ required: true, message: 'Renseignez votre pseudo' }],
											})(
												<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Pseudo" />
											)}
										</FormItem>
										<FormItem
											label="Mot de passe"
										>
											{getFieldDecorator('upPassword', {
												rules: [{ required: true, message: 'Renseignez votre mot de passe' }],
											})(
												<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Mot de passe" />
											)}
										</FormItem>
										<FormItem
											label="Confirmation mot de passe"
										>
											{getFieldDecorator('upPasswordC', {
												rules: [{ required: true, message: 'Confirmez votre mot de passe' }],
											})(
												<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirmation mot de passe" />
											)}
										</FormItem>
										<FormItem>
											{/* {getFieldDecorator('remember', {
												valuePropName: 'checked',
												initialValue: true,
											})(
												<Checkbox>Remember me</Checkbox>
											)} */}
											{/* <a className="login-form-forgot" href="">Forgot password</a> */}
											
										</FormItem>
									</Form>
									<Divider>Ou</Divider>
									<div className="switchModal" onClick={this.switchModal}>J'ai deja un compte</div>
								</div>
							)}
							
        	</Modal>

        </div>
        )
    }
}

export default Form.create()(Header);
