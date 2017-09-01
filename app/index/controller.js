import Controller from '@ember/controller';
import { action } from 'ember-decorators/object';
import { keepLatestTask } from 'ember-concurrency-decorators';
import { timeout } from 'ember-concurrency';

export default  Controller.extend({
  @keepLatestTask
  setQuery: function* (value) {
    this.set('query', value);

    yield timeout(200);
  },

  @action
  search(value) {
    this.get('setQuery').perform(value);
  }
});
