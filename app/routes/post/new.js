import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.createRecord('post');
    },
    actions: {
        save:   function(model){
                    var route = this;
                    model.save().then(function(){
                        route.transitionTo('post');
                        //route.transitionTo('bugs.details',model);
                        //console.log('bug record saved');
                });
        }
    }
});
