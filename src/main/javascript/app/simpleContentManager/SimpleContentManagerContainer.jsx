import React from 'react';
import SimpleContentManager from './SimpleContentManager';

const SimpleContentManagerContainer = () => (
  <SimpleContentManager/>
);

const mapStatesToProps = (state) => {
  return {
    content: state.content,
  };
};

const mapDispatcherToProps = (dipatch) => {
  updateContent: contentReducer;
};

export default SimpleContentManagerContainer;
