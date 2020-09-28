import { connect } from 'react-redux';

import Page from '../../components/Page/Page';

const mapStateToProps = (state) => {
  // console.log('pageContainer', state.homeMessage, state.contactMessage) 
  return ({
    selectedLanguage: state.selectedLanguage, 
    homeMessage: state.homeMessage,
    contactMessage: state.contactMessage,
  });
}
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
