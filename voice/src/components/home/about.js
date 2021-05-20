import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'Public Polls',
    content: 'On paper, it sounds so simple; in reality it is much more difficult to determine. The most common method for ascertaining and consolidating public opinion has been through the widespread use of polls. Their popularity has steadily increased over the years. ',
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Online Debates',
    content: 'Created by speakers and debaters long before today, the art of Speech and Debate has taken hold upon the young generation. Before the very first debate, the nervous and shivered fear pops out the outcome.',
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'Library of Ideas',
    content: 'The collection contains on-line and print materials on all subjects, but focuses on those subjects that support the research needs of our users. Some of these sources are encyclopedias, dictionaries, handbooks, glossaries, directories, and atlases.',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Explore</h2>
          <p>Learn more on what intrests you</p>
        </div>
        <div className="contentHolder">
          <p>Knowledge about the present world is never limited. However, we are glad that you have a chance to explore a vast area of careers in Voice.</p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;