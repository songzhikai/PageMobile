import React from 'react';
import {connect} from 'dva';
import './views_pages.css'
import $$ from 'cmn-utils'
import { NavBar, Icon, Badge, Tabs, WhiteSpace  } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

const tabs2 = [
  { title: 'First Tab', sub: '1' },
  { title: 'Second Tab', sub: '2' },
  { title: 'Third Tab', sub: '3' },
];

function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
const tabs = [
  { title: 'First Tab' },
  { title: 'Second Tab' },
  { title: 'Third Tab' },
];
class FlexPage extends React.Component {

  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>

        <WhiteSpace />
        <StickyContainer>
          <Tabs tabs={tabs}
                initalPage={'t2'}
                renderTabBar={renderTabBar}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of first tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of second tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of third tab
            </div>
          </Tabs>
        </StickyContainer>
        <WhiteSpace />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    redirectToNewsDetail: (tabName) => {
      dispatch({type: 'pageModel/changeTab', payload: { tabName: tabName }})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlexPage);
