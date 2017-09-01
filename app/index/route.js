import Route from '@ember/routing/route';

export default class extends Route{
  get queryParams() {
    return {
      query: {
        refreshModel: true
      }
    }
  }

  model({ query }) {
    return this.store.query('igdb-game', { query });
  }
}
