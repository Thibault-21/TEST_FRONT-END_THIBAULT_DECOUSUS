import { connect } from 'react-redux';
import { changeLang } from '../../actions/index'
import NavBar from '../../components/NavBar/NavBar';

const mapStateToProps = (state) => ({
    languages: state.languages,
    titles: state.title
  });

const mapDispatchToProps = (dispatch) => ({
  selectedOnLanguage: (lang) => {
    dispatch(changeLang(lang))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
