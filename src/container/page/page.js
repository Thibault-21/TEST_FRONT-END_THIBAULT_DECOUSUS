import { connect } from 'react-redux';

import Page from '../../components/Page/Page';

const mapStateToProps = (state) => ({
    selectedLanguage: state.selectedLanguage, 
    homeMessage: state.homeMessage,
    contactMessage: state.contactMessage,
  });

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
