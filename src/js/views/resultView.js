import View from './View.js';
import icons from 'url:../../img/icons.svg';
import PreviewView from './previewView.js';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again! :)';
  _message = '';

  _generateMarkup() {
    // console.log(this._data);
    return this._data.map(result => PreviewView.render(result, false)).join('');
  }
}

export default new ResultView();
