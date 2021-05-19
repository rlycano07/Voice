import React from 'react';

import { Button, Modal } from 'antd';

class AppWorks extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Who is to blame? </h2>
            <p1>Israel and Palestine Conlfict</p1>
          </div>
          <div className="contentHolder">
            <Button size="large" onClick={this.showModal}><i className="fas fa-play"></i></Button>
          </div>
          <Modal
            title="Israel and Palestine Conlfict"
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
            destroyOnClose = {true}
          >
            <iframe title="Israel and Palestine Conlfict" width="100%" height="350" src="https://www.youtube.com/watch?v=CUBQ6WNBRS4"></iframe>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AppWorks;