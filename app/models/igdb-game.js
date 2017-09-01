import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  name: attr(),
  summary: attr(),
  popularity: attr(),
  releaseDates: attr(),
  screenshots: attr(),
  timeToBeat: attr(),
  cover: attr(),
});
